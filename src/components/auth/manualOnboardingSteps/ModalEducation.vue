<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close('abort')"
    persistent
    width="750px"
    max-width="750px"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <v-card flat class="rounded-lg wrap onboarding-dialog">
      <p class="text-left font-weight-bold mb-3 font-size-16 header mb-5">
        {{ $t("addEducation") }}
      </p>

      <v-form v-model="formValid" @submit.prevent="save">
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col>
                <label>{{ $t("university") }}</label>
                <v-combobox
                  v-model="form.university_name"
                  :placeholder="$t('enter')"
                  :rules="[validations.required]"
                  :items="universitySuggestions"
                  :loading="loadingUniversities"
                  :search-input.sync="universitySearch"
                  @update:search-input="fetchUniversitySuggestions"
                  append-icon=""
                  no-filter
                  solo
                  outlined
                >
                </v-combobox>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <label>{{ $t("startDate") }}</label>
                <DatePicker
                  v-model="form.start_time"
                  :rules="[validations.required]"
                  :hide-details="false"
                  :attach="false"
                  type="month"
                />
              </v-col>
              <v-col cols="12" sm="6" v-if="!form.study_here">
                <label>{{ $t("endDate") }}</label>
                <DatePicker
                  v-model="form.end_time"
                  :rules="form.study_here ? [] : [validations.required]"
                  :disabled="!!form.study_here"
                  :hide-details="false"
                  :attach="false"
                  type="month"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-row>
              <v-col>
                <label>{{ $t("degreeFieldStudy") }}</label>
                <v-text-field
                  v-model="form.study"
                  :rules="[validations.required]"
                  type="text"
                  outlined
                  solo
                  :placeholder="$t('enter')"
                  background-color="#fff"
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-checkbox
                  class="mt-md-12"
                  v-model="form.study_here"
                  label="Currently attending here"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <ResponseAlert :response="formResponse"></ResponseAlert>

        <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
          <v-col cols="6"></v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="6">
                <v-btn
                  @click="close"
                  height="58"
                  class="full-w mt-5 font-weight-medium "
                  color="#fff"
                  light
                >
                  {{ $t("cancel") }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  :loading="formLoading"
                  :disabled="!formValid"
                  type="submit"
                  color="primary"
                  height="58"
                  class="full-w mt-5 font-weight-medium dark-blue"
                >
                  {{ $t("save") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import DatePicker from "@/components/controls/DatePicker";
import axios from "axios";

export default {
  name: "ModalEducation",

  components: {
    DatePicker
  },

  props: {
    active: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "ok"
    },
    positions: {
      type: Array
    },
    edit: {
      type: [Object, Boolean]
    }
  },
  data() {
    return {
      formLoading: false,
      formValid: false,
      formResponse: {},
      form: {
        university_name: "",
        study: "",
        start_time: "",
        end_time: "",
        study_here: 0
      },
      universitySearch: "",
      universitySuggestions: [],
      loadingUniversities: false
    };
  },
  created() {
    if (this.edit) {
      this.populate();
    }
  },
  methods: {
    close(type) {
      this.$emit("close", type);
    },
    save() {
      this.formLoading = true;
      this.formResponse = {};

      if (this.form.study_here) {
        this.form.end_time = null;
      }

      if (this.edit) {
        this.$store
          .dispatch("user/updateJobseekerEducation", {
            id: this.edit.id,
            payload: this.form
          })
          .then(() => {
            this.$emit("close", 1);
          })
          .catch(err => {
            this.formResponse = err.data;
          })
          .finally(() => {
            this.formLoading = false;
          });
      } else {
        this.$store
          .dispatch("user/addJobseekerEducation", this.form)
          .then(() => {
            this.$emit("close", 1);
          })
          .catch(err => {
            this.formResponse = err.data;
          })
          .finally(() => {
            this.formLoading = false;
          });
      }
    },
    populate() {
      this.form.university_name = this.edit.university_name;
      this.form.study = this.edit.study;
      this.form.start_time = this.edit.start_time;
      this.form.end_time = this.edit.end_time;
      this.form.study_here = this.edit.study_here;
    },
    fetchUniversitySuggestions() {
      if (this.universitySearch.length < 3) {
        return;
      }

      this.loadingUniversities = true;
      axios
        .create()
        .get(
          "http://universities.hipolabs.com/search?name=" +
            this.universitySearch
        )
        .then(resp => {
          this.universitySuggestions = resp.data.map(i => i.name);
        })
        .finally(() => {
          this.loadingUniversities = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  padding-bottom: 0;
  padding-top: 0;
}
.dialog {
  font-family: $open-sans !important;
}
.wrap {
  padding: 30px;
  .header {
    font-size: 28px;
  }
  label {
    font-weight: 600 !important;
    color: #222 !important;
  }
}
</style>
