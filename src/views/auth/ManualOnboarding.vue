<template>
  <auth-wrap :img="e1 + 1">
    <!-- <v-icon v-if="e1 > 1 && e1 < 6" class="mo-back-button" @click="prevStep">
      mdi-arrow-left
    </v-icon> -->

    <div class="stepper-wrap mt-10" style="width: 450px">
      <v-stepper
        alt-labels
        class="elevation-0 full-w d-flex flex-column"
        v-model="e1"
      >
        <v-stepper-header class="elevation-0">
          <v-stepper-step step="1" :complete="complete(1)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" :complete="complete(2)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" :complete="complete(3)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4" :complete="complete(4)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="5" :complete="complete(5)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="6" :complete="complete(6)"></v-stepper-step>
        </v-stepper-header>

        <v-stepper-items class="mo-stepper-items">
          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="1"
          >
            <step-1
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="2"
          >
            <step-2
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="3"
          >
            <step-3
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="4"
          >
            <step-4
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="5"
          >
            <step-5
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="6"
          >
            <step-6
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
              :formLoading="saveInProgress"
            />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

      <ResponseAlert :response="formResponse" />
    </div>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
// Steps
import Step1 from "@/components/auth/manualOnboardingSteps/step1.vue";
import Step2 from "@/components/auth/manualOnboardingSteps/step2.vue";
import Step3 from "@/components/auth/manualOnboardingSteps/step3.vue";
import Step4 from "@/components/auth/manualOnboardingSteps/step4.vue";
import Step5 from "@/components/auth/manualOnboardingSteps/step5.vue";
import Step6 from "@/components/auth/manualOnboardingSteps/step6.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ManualOnboarding",
  components: {
    AuthWrap,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6
  },
  props: {
    isBtnVisible: Boolean
  },
  data: () => ({
    saveInProgress: false,
    e1: 1,
    formResponse: {},
    formData: {
      city: "",
      why_jonder: "",
      looking_for: [],
      branche: "",
      current_position: "",
      looking_for_branche: "",
      looking_for_employment_type: "",
      address_to_work: "",
      ready_for_work: "",
      monthly_salary: "",
      working_experience: "",
      cv: "",
      resume: null,
      qualifications: null
      // address: "",
      // working_in: "",
      // describe_yourself: "",
      // training_studies: "",
      // your_qualification: "",
      // additional_training: "",
      // dream_job: "",
    }
  }),
  created() {
    if (this.$store.getters["user/user"].onboarding_finished) {
      this.$router.replace({ name: "Home" });
    }

    this.populateData(this.user);
  },
  computed: {
    ...mapGetters("user", ["user", "jobseekerExperience", "jobseekerEducation"])
  },
  methods: {
    ...mapActions("user", ["postOnboardingUser"]),
    populateData(user) {
      console.log("populateData", user);
      if (user) {
        Object.keys(user).forEach(key => {
          // eslint-disable-next-line no-prototype-builtins
          if (this.formData.hasOwnProperty(key)) this.formData[key] = user[key];
        });
      }
    },
    prevStep() {
      this.e1 !== 1 ? this.e1-- : this.e1;
    },
    nextStep() {
      if (this.saveInProgress) return;
      if (this.e1 < 6) this.e1++;
      else this.saveOnboarding();
    },
    complete(step) {
      return step < this.e1;
    },
    saveOnboarding() {
      this.formResponse = {};
      this.saveInProgress = true;

      this.postOnboardingUser(this.formData)
        .then(() => {
          this.$router.replace("/dashboard");
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.saveInProgress = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.mo-back-button {
  position: absolute;
  top: 40px;
  left: 25%;
  z-index: 100;
}
.step-five-back-button {
  position: absolute;
  bottom: 245px;
  left: 215px;
  z-index: 100;
}
.mo-stepper-items {
  overflow: auto;
}
@media (max-width: 600px) {
  .stepper-wrap {
    width: 100%;
  }
}
</style>
