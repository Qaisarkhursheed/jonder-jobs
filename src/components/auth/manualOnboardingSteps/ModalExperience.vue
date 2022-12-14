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
    <v-card flat class="wrap onboarding-dialog">
      <p class="text-left font-weight-bold mb-5 font-size-16 header">
        {{ $t("addExperience") }}
      </p>

      <v-form v-model="formValid" @submit.prevent="save">
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col>
                <label class="font-weight-medium">
                  {{ $t("company") }}
                </label>
                <v-combobox
                  v-model="form.company_name"
                  @update:search-input="fetchCompanySuggestions($event)"
                  :items="suggestedCompanies"
                  :loading="$store.getters['northdata/loadingSearch']"
                  :rules="[validations.required]"
                  :placeholder="$t('choose')"
                  no-filter
                  class="hide-menu-icon"
                  type="text"
                  outlined
                  dense
                  background-color="#fff"
                >
                </v-combobox>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <label>{{ $t("startDate") }}</label>
                <DatePicker
                  v-model="form.start_time"
                  :attach="false"
                  :rules="[validations.required]"
                  :hide-details="false"
                  type="month"
                />
              </v-col>

              <v-col cols="12" sm="6" class="mt-1" v-if="!form.working_here">
                <label>{{ $t("endDate") }}</label>
                <DatePicker
                  v-model="form.end_time"
                  :attach="false"
                  :rules="form.working_here ? [] : [validations.required]"
                  :disabled="!!form.working_here"
                  :hide-details="false"
                  type="month"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-row>
              <v-col>
                <label>{{ $t("position") }}</label>
                <v-combobox
                  v-model="form.position"
                  :rules="[validations.required]"
                  :placeholder="$t('enter')"
                  :items="types.JOB_POSITION.map(i => i[$i18n.locale])"
                  :item-value="$i18n.locale"
                  :item-text="$i18n.locale"
                  append-icon=""
                  outlined
                  solo
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <label>{{ $t("type") }}</label>
                <v-select
                  :attach="true"
                  v-model="form.employment_type"
                  :placeholder="$t('choose')"
                  :items="types.EMPLOYEMENT_TYPE"
                  item-value="id"
                  :item-text="$i18n.locale"
                  :rules="[validations.required]"
                  outlined
                  append-icon="mdi-chevron-down"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-checkbox
              class="mt-0 pt-0"
              v-model="form.working_here"
              label="Currently working here"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <label>{{ $t("description") }}</label>
            <v-textarea
              v-model="form.description"
              :rules="[validations.required]"
              outlined
              name="input-7-4"
              height="140px"
              :placeholder="$t('enter')"
            ></v-textarea>
          </v-col>
        </v-row>

        <ResponseAlert :response="formResponse"></ResponseAlert>

        <div class="text-right">
          <v-btn @click="close" height="58" class="mt-5 px-5" text>
            {{ $t("cancel") }}
          </v-btn>
          <v-btn
            :disabled="!formValid"
            :loading="formLoading"
            type="submit"
            color="primary"
            height="58"
            class="px-10 ml-4 mt-5"
          >
            {{ $t("save") }}
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import types from "@/types";
import DatePicker from "@/components/controls/DatePicker";
import { debounce } from "lodash";

export default {
  name: "ModalExperience",

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
    edit: {
      type: [Object, Boolean]
    }
  },

  data() {
    return {
      suggestedCompanies: [],
      formValid: false,
      formLoading: false,
      formResponse: {},
      form: {
        company_name: "",
        position: "",
        employment_type: "",
        start_time: "",
        end_time: "",
        description: "",
        working_here: 0
      }
    };
  },

  created() {
    if (this.edit) {
      this.populate();
    }
    this.$store.dispatch("professions/fetch");
  },

  methods: {
    close(type) {
      this.$emit("close", type);
    },
    save() {
      this.formLoading = true;
      // Keep setTimeout here and don't ask why
      setTimeout(() => {
        this.formResponse = {};

        if (this.form.working_here) {
          this.form.end_time = null;
        }

        this.form.employment_type = this.form.employment_type.toString();

        if (this.edit) {
          this.$store
            .dispatch("user/updateJobseekerExperience", {
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
            .dispatch("user/addJobseekerExperience", this.form)
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
      }, 100);
    },
    populate() {
      this.form.company_name = this.edit.company_name;
      this.form.position = this.edit.position;
      this.form.employment_type = parseInt(this.edit.employment_type);
      this.form.start_time = this.edit.start_time;
      this.form.end_time = this.edit.end_time;
      this.form.description = this.edit.description;
      this.form.working_here = this.edit.working_here;
    },
    fetchCompanySuggestions: debounce(function(val) {
      if (!val) {
        this.suggestedCompanies = [];
      }

      if (val == this.form.company_name) {
        return;
      }

      this.suggestedCompanies = [];

      if (val && val.length > 2) {
        this.$store.dispatch("northdata/suggestSearch", val).then(resp => {
          this.suggestedCompanies = resp.data.results?.map(
            r => r.company.name.name
          );
        });
      }
    }, 0)
  },

  computed: {
    types() {
      return types;
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
