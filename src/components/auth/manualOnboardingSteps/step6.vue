<template>
  <div class="mo-step-3">
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">
        {{ $t('user.onboarding.uploadDocuments') }}
      </p>
      <div class="mt-10">
        <v-row>
          <v-col cols="12">
            <v-file-input
              v-model="cv"
              :placeholder="$t('user.onboarding.uploadCv')"
              multiple
              outlined
              :prepend-icon="false"
              prepend-inner-icon="mdi-cloud-upload-outline"
              class="text-center"
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-file-input
                v-model="qualifications"
                :placeholder="$t('user.onboarding.uploadQualifications')"
                multiple
                outlined
                :prepend-icon="false"
                prepend-inner-icon="mdi-cloud-upload-outline"
                class="text-center"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>

          <v-row>
          <v-col cols="12">
            <v-file-input
                v-model="resume"
                :placeholder="$t('user.onboarding.uploadResume')"
                multiple
                outlined
                :prepend-icon="false"
                :hide-details="true"
                prepend-inner-icon="mdi-cloud-upload-outline"
                
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
      </div>
      <v-btn
        @click="nextScreen"
        color="primary"
        height="58"
        class="full-w mt-16 font-weight-medium "
      >
        {{ $t('user.onboarding.next') }}
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: "Step6",

  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data() {
    return {
      rules: [value => !!value || "Required."],
      qualifications: null,
      resume: null,
      cv: null,
    };
  },
  computed: {
    jobseekerExperience() {
      return store.getters['user/jobseekerExperience'];
    },
    jobseekerEducation() {
      return store.getters['user/jobseekerEducation'];
    }
  },
   watch: {
    cv(val) {
      console.log(val);
      this.$emit("input", {
        ...this.value,
        cv: val[0]
      });
    },
    resume(val) {
      this.$emit("input", {
        ...this.value,
        resume: val[0]
      });
    },
    qualifications(val) {
      this.$emit("input", {
        ...this.value,
        qualifications: val[0]
      });
    }
  }
};
</script>

<style scoped lang="scss">
.mo-step-3 {
  &__salary {
    border: solid 1px $primary-blue;
    border-radius: 4px;
    color: $primary-blue;
  }
}
</style>
