<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close('abort')"
    persistent
    width="750px"
    max-width="750px"
  >
    <v-card flat class="rounded-lg wrap onboarding-dialog">
      <p class="text-left font-weight-bold mb-5 font-size-16 header">
        {{ $t("user.onboarding.addExperience") }}
      </p>

      <v-form v-model="formValid" @submit.prevent="save">
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col>
                <label class="font-weight-medium">
                  {{ $t("user.onboarding.company") }}
                </label>
                <v-text-field
                  v-model="form.company_name"
                  :rules="[validations.required]"
                  :placeholder="$t('user.onboarding.choose')"
                  type="text"
                  outlined
                  dense
                  background-color="#fff"
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" class="mt-1">
                <label>{{ $t("user.onboarding.startDate") }}</label>
                <Calendar
                  @setDate="form.start_time = $event"
                  :value="form.start_time"
                  :rules="[validations.required]"
                />
              </v-col>

              <v-col cols="6" class="mt-1" v-if="!form.working_here">
                <label>{{ $t("user.onboarding.endDate") }}</label>
                <Calendar
                  @setDate="form.end_time = $event"
                  :value="form.end_time"
                  :rules="form.working_here ? [] : [validations.required]"
                  :disabled="!!form.working_here"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-row>
              <v-col>
                <label>{{ $t("user.onboarding.position") }}</label>
                <!-- <v-select
                  v-model="form.position"
                  :placeholder="$t('user.onboarding.choose')"
                  :items="positions"
                  :rules="[validations.required]"
                  outlined
                ></v-select> -->
                <v-autocomplete
                  v-model="form.position"
                  :items="types.JOB_POSITION"
                  :rules="[validations.required]"
                  outlined
                  flat
                  hide-no-data
                  :placeholder="$t('user.onboarding.choose')"
                ></v-autocomplete>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <label>{{ $t("user.onboarding.type") }}</label>
                <v-select
                  v-model="form.employment_type"
                  :placeholder="$t('user.onboarding.choose')"
                  :items="emplType"
                  :rules="[validations.required]"
                  outlined
                ></v-select>
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
            <label>{{ $t("user.onboarding.description") }}</label>
            <v-textarea
              v-model="form.description"
              :rules="[validations.required]"
              outlined
              name="input-7-4"
              height="140px"
              :placeholder="$t('user.onboarding.enter')"
            ></v-textarea>
          </v-col>
        </v-row>

        <ResponseAlert :response="formResponse"></ResponseAlert>

        <v-card-actions class="no-gutters pa-0 ma-0">
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
                  {{ $t("general.cancel") }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  :disabled="!formValid"
                  :loading="formLoading"
                  type="submit"
                  color="primary"
                  height="58"
                  class="full-w mt-5 font-weight-medium dark-blue"
                >
                  {{ $t("general.save") }}
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
import types from '@/types';
// Move to generic global component if needed
import Calendar from "@/components/Calendar";

export default {
  name: "ModalExperience",

  components: {
    Calendar,
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "ok",
    },
    edit: {
      type: [Object, Boolean],
    },
  },
  data() {
    return {
      formValid: false,
      formLoading: false,
      formResponse: {},
      emplType: [
        this.$t("user.onboarding.trainee"),
        this.$t("user.onboarding.fulltime"),
        this.$t("user.onboarding.parttime"),
      ],
      positions: [
        this.$t("user.onboarding.positionDeveloper"),
        this.$t("user.onboarding.positionProjectManager"),
        this.$t("user.onboarding.positionConstructionManager"),
        this.$t("user.onboarding.positionIntern"),
        this.$t("user.onboarding.positionApprentice"),
        this.$t("user.onboarding.positionManager"),
      ],
      form: {
        company_name: "",
        position: "",
        employment_type: "",
        start_time: "",
        end_time: "",
        description: "",
        working_here: 0,
      },
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

      if (this.form.working_here) {
        this.form.end_time = null;
      }

      if (this.edit) {
        this.$store
          .dispatch("user/updateJobseekerExperience", {
            id: this.edit.id,
            payload: this.form,
          })
          .then(() => {
            this.$emit("close", 1);
          })
          .catch((err) => {
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
          .catch((err) => {
            this.formResponse = err.data;
          })
          .finally(() => {
            this.formLoading = false;
          });
      }
    },
    populate() {
      this.form.company_name = this.edit.company_name;
      this.form.position = this.edit.position;
      this.form.employment_type = this.edit.employment_type;
      this.form.start_time = this.edit.start_time;
      this.form.end_time = this.edit.end_time;
      this.form.description = this.edit.description;
      this.form.working_here = this.edit.working_here;
    },
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
