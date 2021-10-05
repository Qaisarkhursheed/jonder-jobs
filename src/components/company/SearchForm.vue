<template>
  <div>
    <div class="heading-title mb-6">
      {{ $t("headingTitle") }}
    </div>

    <v-card class="search-form" flat>
      <v-row>
        <v-col cols="12" md="7">
          <label class="section-label">
            {{ $t("position") }}
          </label>
          <v-autocomplete
            v-model="formFields.job_position"
            :attach="true"
            :items="types.JOB_POSITION"
            item-value="id"
            :item-text="$i18n.locale"
            outlined
            clearable
            flat
            :hide-details="true"
            :placeholder="$t('enterJobtitle')"
            append-icon="mdi-chevron-down"
          />
        </v-col>

        <v-col cols="12" md="5">
          <label class="section-label">
            {{ $t("employementType") }}
          </label>
          <v-select
            v-model="formFields.employment_type"
            :attach="true"
            :items="types.EMPLOYEMENT_TYPE"
            item-value="id"
            :item-text="$i18n.locale"
            hide-details
            clearable
            :placeholder="$t('employementType')"
            outlined
            append-icon="mdi-chevron-down"
          />
        </v-col>
      </v-row>

      <template v-if="advancedSearch">
        <v-row>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("industryOfProfession") }}
            </label>
            <v-autocomplete
              v-model="formFields.branche"
              :attach="true"
              :items="types.JOB_BRANCHE"
              :item-text="$i18n.locale"
              item-value="id"
              cache-items
              clearable
              outlined
              flat
              hide-no-data
              :hide-details="true"
              :placeholder="$t('enterIndustry')"
              append-icon="mdi-chevron-down"
            />
          </v-col>

          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("schoolGraduation") }}
            </label>
            <v-text-field
              v-model="formFields.university_name"
              outlined
              :hide-details="true"
              :placeholder="$t('schoolGraduation')"
              flat
              solo
            />
          </v-col>

          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("educationStudy") }}
            </label>
            <v-text-field
              v-model="formFields.study"
              outlined
              :hide-details="true"
              :placeholder="$t('educationStudy')"
              flat
              solo
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("salaryRange") }}
            </label>
            <v-row class="no-gutters justify-space-between">
              <v-col cols="6" class="pr-2">
                <v-text-field
                  v-model="formFields.min_salary"
                  placeholder="Min"
                  outlined
                  :hide-details="true"
                  flat
                  dense
                  solo
                />
              </v-col>

              <v-col cols="6" class="pl-2">
                <v-text-field
                  v-model="formFields.max_salary"
                  placeholder="Max"
                  outlined
                  :hide-details="true"
                  flat
                  dense
                  solo
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("workExperience") }}
            </label>
            <v-select
              :attach="true"
              v-model="formFields.working_experience"
              :items="types.WORK_EXPERIENCE"
              :item-text="i => `${i[$i18n.locale]} ${$t('years')}`"
              :item-value="$i18n.locale"
              :hide-details="true"
              clearable
              :placeholder="$t('workExperience')"
              outlined
              append-icon="mdi-chevron-down"
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("city") }}
            </label>
            <GooglePlacesAutocomplete
              :value="formFields.city"
              @select="e => (formFields.city = e)"
            />
          </v-col>
        </v-row>
      </template>

      <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
        <v-row>
          <v-col cols="12" md="6" lg="5" xl="6">
            <v-row>
              <v-col cols="12" md="6">
                <v-btn
                  color="#fff"
                  height="58"
                  elevation="0"
                  class="full-w mt-md-16 font-weight-medium white"
                  @click="searchSave"
                >
                  {{ $t("saveSearch") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6" lg="7" xl="6">
            <v-row>
              <v-col cols="12" md="6">
                <v-btn
                  height="58"
                  elevation="0"
                  :class="[
                    'advanced-search-btn full-w mt-md-16 white font-weight-medium',
                    { active: advancedSearch }
                  ]"
                  color="#fff"
                  @click="advancedSearch = !advancedSearch"
                >
                  {{ $t("advancedSearch") }}
                </v-btn>
              </v-col>

              <v-col cols="12" md="6">
                <v-btn
                  :loading="searchLoading"
                  color="primary"
                  height="58"
                  class="full-w mt-md-16 search-btn"
                  @click="search"
                >
                  <v-icon left>
                    mdi-magnify
                  </v-icon>
                  <template v-if="presearchCount != null">
                    {{ $t("searchNJobseekers", { n: presearchCount }) }}
                  </template>
                  <template v-else>
                    {{ $t("searchJobseekers") }}
                  </template>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-actions>

      <ResponseAlert
        class="mt-3"
        style="max-width: 500px"
        :response="formResponse"
      />
    </v-card>
  </div>
</template>

<script>
import { forEach } from "lodash";
import types from "@/types";
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete.vue";

export default {
  components: { GooglePlacesAutocomplete },

  data() {
    return {
      formFields: {
        employment_type: "",
        job_position: "",
        working_experience: "",
        branche: "",
        university_name: "",
        study: "",
        min_salary: "",
        max_salary: "",
        city: ""
      },
      formResponse: {},
      presearchCount: null,
      advancedSearch: false
    };
  },

  computed: {
    searchLoading() {
      this.filterData();
      return this.$store.getters["company/searchInProgress"];
    },
    types() {
      return types;
    }
  },

  watch: {
    formFields: {
      handler: function() {
        this.updatePresearchCount();
      },
      deep: true
    }
  },

  created() {
    this.$store.dispatch("professions/fetch");
    this.updatePresearchCount();
  },

  methods: {
    search() {
      this.$store.dispatch("company/searchJobseekers", this.prepareData());
      this.$emit("search");
    },

    searchSave() {
      let i = 0;
      let isValid = true;
      const saveData = this.prepareData();
      const searchFilters = this.$store.getters["company/searchFilters"];

      while (i < searchFilters.length) {
        let count = 0;

        forEach(saveData, (prop, key) => {
          if (searchFilters[i][key] === prop) {
            count += 1;
          }
        });

        if (count === Object.keys(saveData).length) {
          isValid = false;
          this.formResponse = {
            message: "Already saved!"
          };
          setTimeout(() => {
            this.formResponse = {};
          }, 5000);
          break;
        } else {
          i++;
        }
      }

      if (isValid) {
        this.formResponse = {};
        this.$store
          .dispatch("company/searchFilterSave", saveData)
          .catch(error => {
            this.formResponse = error.response.data;
            setTimeout(() => {
              this.formResponse = {};
            }, 5000);
          });
      }
    },

    filterData() {
      let searchMeta = this.$store.getters["company/searchMeta"]
        ? this.$store.getters["company/searchMeta"].searchInput
        : null;
      if (searchMeta) {
        this.formFields.employment_type =
          "employment_type" in searchMeta ? searchMeta.employment_type : "";
        this.formFields.job_position =
          "job_position" in searchMeta ? searchMeta.job_position : "";
        this.formFields.working_experience =
          "working_experience" in searchMeta
            ? searchMeta.working_experience
            : "";
        this.formFields.branche =
          "branche" in searchMeta ? searchMeta.branche : "";
        this.formFields.university_name =
          "university_name " in searchMeta ? searchMeta.university_name : "";
        this.formFields.study = "study" in searchMeta ? searchMeta.study : "";
        this.formFields.min_salary =
          "min_salary" in searchMeta ? searchMeta.min_salary : "";
        this.formFields.max_salary =
          "max_salary" in searchMeta ? searchMeta.max_salary : "";
        this.formFields.city = "city" in searchMeta ? searchMeta.city : "";
      }
    },

    prepareData() {
      let activatedFields = {};

      forEach(this.formFields, (item, key) => {
        if (item) {
          activatedFields[key] = item;
        }
      });

      // Split working experience into two fields
      if (activatedFields["working_experience"]) {
        const arr = activatedFields["working_experience"].split("-");
        activatedFields["working_experience_min"] = parseInt(arr[0]);

        if (arr[1]) {
          activatedFields["working_experience_max"] = parseInt(arr[1]);
        }

        delete activatedFields["working_experience"];
      }

      return activatedFields;
    },

    updatePresearchCount() {
      this.$store
        .dispatch("company/presearchJobseekers", this.prepareData())
        .then(resp => {
          this.presearchCount = resp.data.filtered_users_count;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-weight: 600;
  font-size: 24px;
  color: #222222;
}
.search-form {
  .search-btn {
    background-color: $primary-blue-dark !important;
    color: #fff;
  }
  .advanced-search-btn {
    background-color: $primary-blue-light !important;
    &.v-btn.white {
      border: 0 !important;
    }
  }
  @media screen and (max-width: 959px) {
    .v-card__actions {
      margin-top: 24px !important;
    }
  }
  @media (min-width: 960px) and (max-width: 1270px) {
    .v-card__actions {
      > .row {
        > .col-md-6 {
          &:first-child,
          &:last-child {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            .v-btn {
              margin-top: 20px !important;
            }
          }
        }
      }
    }
  }
}
.search-selection {
  height: 86px;

  > div {
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid #d4d4d4;

    &.active {
      border: 1px solid #737373;
      transition: border 0.5s;
    }
  }
  > div:nth-child(1) {
    background: #fcf7cd;
    color: #9f900b;
  }
  > div:nth-child(2) {
    background: #cffcd9;
    color: #018d28;
  }
  > div:nth-child(3) {
    background: #e3e6fb;
    color: #031594;
  }
}
.search-title {
  font-weight: 600;
  font-size: 24px;
  color: #3e3e47;
}
label {
  font-size: 16px;
  font-weight: 400;
  color: #82858c;
}
.advanced-label {
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.error-message {
  color: #c15143;
  padding: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
