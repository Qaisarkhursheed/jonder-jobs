<template>
  <div>
    <div class="heading-title mb-6">
      {{ $t("company.search.headingTitle") }}
    </div>

    <v-card class="search-form rounded-lg pa-8" flat>
      <v-row>
        <v-col cols="12" md="7">
          <label class="section-label">
            {{ $t("company.search.jobPosition") }}
          </label>
          <v-autocomplete
            v-model="formFields.job_position"
            :items="types.JOB_POSITION"
            cache-items
            outlined
            flat
            hide-no-data
            :hide-details="true"
            placeholder="Enter job position"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="5">
          <label class="section-label">
            {{ $t("company.search.employementType") }}
          </label>
          <v-select
            v-model="formFields.employment_type"
            :items="types.EMPLOYEMENT_TYPE"
            hide-details
            :placeholder="$t('company.search.employementType')"
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <template v-if="advancedSearch">
        <v-row>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("company.search.industryOfProfession") }}
            </label>
            <v-autocomplete
              v-model="formFields.branche"
              :items="types.JOB_BRANCHE"
              cache-items
              outlined
              flat
              hide-no-data
              :hide-details="true"
              placeholder="Enter industry "
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("company.search.schoolGraduation") }}
            </label>
            <v-text-field
              v-model="formFields.school"
              class="rounded-lg"
              style="height: 50px;"
              height="100%"
              type="text"
              outlined
              :hide-details="true"
              :placeholder="$t('company.search.schoolGraduation')"
              flat
              dense
              solo
              background-color="#fff"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("company.search.educationStudy") }}
            </label>
            <v-select
              v-model="formFields.education"
              :items="types.EDUCATION"
              :hide-details="true"
              :placeholder="$t('company.search.educationStudy')"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("company.search.salaryRange") }}
            </label>
            <v-row class="no-gutters justify-space-between">
              <v-col cols="6" class="pr-2">
                <v-text-field
                  v-model="formFields.min_salary"
                  placeholder="Min"
                  class="rounded-lg"
                  style="height: 50px;"
                  height="100%"
                  type="text"
                  outlined
                  :hide-details="true"
                  flat
                  dense
                  solo
                  background-color="#fff"
                >
                </v-text-field>
              </v-col>
              <v-col cols="6" class="pl-2">
                <v-text-field
                  v-model="formFields.max_salary"
                  placeholder="Max"
                  class="rounded-lg"
                  style="height: 50px;"
                  height="100%"
                  type="text"
                  outlined
                  :hide-details="true"
                  flat
                  dense
                  solo
                  background-color="#fff"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("company.search.workExperience") }}
            </label>
            <v-select
              v-model="formFields.work_experience"
              :items="types.WORK_EXPERIENCE"
              :hide-details="true"
              :placeholder="$t('company.search.workExperience')"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <label class="section-label">
              {{ $t("company.search.city") }}
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
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" md="6">
                <v-btn
                  color="#fff"
                  height="58"
                  elevation="0"
                  class="full-w mt-md-16 font-weight-medium white"
                  @click="searchSave"
                >
                  Suche speichern
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
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
                  {{ $t("company.search.advancedSearch") }}
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn
                  :loading="searchLoading"
                  color="primary"
                  height="58"
                  class="full-w mt-md-16 font-weight-medium"
                  @click="search"
                >
                  {{ $t("company.search.findEmployee") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-actions>
      <transition name="fade">
        <section class="error-message" v-if="errorMessage">
          <div>{{ errorMessage }}</div>
        </section>
      </transition>
    </v-card>
  </div>
</template>

<script>
import { forEach } from "lodash";
import store from "@/store";
import types from "@/types";
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete.vue";

export default {
  name: "SearchForm",

  components: {
    GooglePlacesAutocomplete
  },

  data() {
    return {
      formFields: {
        employment_type: "",
        job_position: "",
        work_experience: "",
        branche: "",
        school: "",
        education: "",
        min_salary: "",
        max_salary: "",
        city: ""
      },
      advancedSearch: false,
      errorMessage: ""
    };
  },
  methods: {
    search() {
      store.dispatch("company/searchJobseekers", this.prepareData());
      this.$emit("search");
    },
    removeMessage(delay) {
      setTimeout(() => {
        this.errorMessage = false;
      }, delay);
    },
    searchSave() {
      let i = 0;
      let isValid = true;
      const saveData = this.prepareData();
      const searchFilters = store.getters["company/searchFilters"];
      while (i < searchFilters.length) {
        let count = 0;
        forEach(saveData, (prop, key) => {
          if (searchFilters[i][key] === prop) {
            count += 1;
          }
        });
        if (count === Object.keys(saveData).length) {
          isValid = false;
          this.errorMessage = "Already saved";
          this.removeMessage(5000);
          break;
        } else {
          i++;
        }
      }
      if (isValid) {
        store.dispatch("company/searchFilterSave", saveData).catch(error => {
          this.errorMessage = error.response.data.message;
          this.removeMessage(5000);
        });
      }
    },
    filterData() {
      let searchMeta = store.getters["company/searchMeta"]
        ? store.getters["company/searchMeta"].searchInput
        : null;
      console.log("meta", searchMeta);
      if (searchMeta) {
        this.formFields.employment_type =
          "employment_type" in searchMeta ? searchMeta.employment_type : "";
        this.formFields.job_position =
          "job_position" in searchMeta ? searchMeta.job_position : "";
        this.formFields.work_experience =
          "work_experience" in searchMeta ? searchMeta.work_experience : "";
        this.formFields.branche =
          "branche" in searchMeta ? searchMeta.branche : "";
        this.formFields.school =
          "school" in searchMeta ? searchMeta.school : "";
        this.formFields.education =
          "education" in searchMeta ? searchMeta.education : "";
        this.formFields.min_salary =
          "min_salary" in searchMeta ? searchMeta.min_salary : "";
        this.formFields.max_salary =
          "max_salary" in searchMeta ? searchMeta.max_salary : "";
        this.formFields.city = "city" in searchMeta ? searchMeta.city : "";
        // if (searchMeta.employment_type)
        //   this.formFields.employment_type = searchMeta.employment_type;
        // if (searchMeta.job_position)
        //   this.formFields.job_position = searchMeta.job_position;
        // if (searchMeta.work_experience)
        //   this.formFields.work_experience = searchMeta.work_experience;
        // if (searchMeta.branche) this.formFields.branche = searchMeta.branche;
        // if (searchMeta.school) this.formFields.school = searchMeta.school;
        // if (searchMeta.education)
        //   this.formFields.education = searchMeta.education;
        // if (searchMeta.min_salary)
        //   this.formFields.min_salary = searchMeta.min_salary;
        // if (searchMeta.max_salary)
        //   this.formFields.max_salary = searchMeta.max_salary;
        // if (searchMeta.city) this.formFields.city = searchMeta.city;
      }
    },
    prepareData() {
      let activatedFields = {};

      forEach(this.formFields, (item, key) => {
        if (item) {
          activatedFields[key] = item;
        }
      });
      return activatedFields;
    }
  },
  computed: {
    searchCountLabel() {
      return this.searchCount
        ? `Search (${this.searchCount} results)`
        : "Search";
    },
    searchLoading() {
      this.filterData();
      return store.getters["company/searchInProgress"];
    },
    types() {
      return types;
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
