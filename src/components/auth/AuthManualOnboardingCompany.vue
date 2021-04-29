<template>
  <div class="auth-moc-wrap d-flex flex-column justify-center full-h">
    <v-alert text color="info">
      <h2 class="text-h5 primary--text mt-2">Hallo {{ getUserFullName }}!</h2>
      <p class="body-1 mt-3">
        Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices
        tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
      </p>
    </v-alert>

    <div class="body-1">
      <div class="font-weight-medium">
        Get more matches by adding company details.
      </div>
      <div class="primary--text">Step {{ currentStep }} of {{ maxSteps }}</div>
    </div>

    <v-stepper
      alt-labels
      class="elevation-0 full-w d-flex flex-column no-transition"
      v-model="currentStep"
    >
      <v-stepper-items class="auth-moc-stepper-items">
        <v-stepper-content class="px-0" step="1">
          <step-1 @nextStep="nextStep" />
        </v-stepper-content>
        <v-stepper-content class="px-0" step="2">
          <step-2 @nextStep="nextStep" @prevStep="prevStep" />
        </v-stepper-content>
        <v-stepper-content class="px-0" step="3">
          <step-3 @nextStep="nextStep" @prevStep="prevStep" />
        </v-stepper-content>
        <v-stepper-content class="px-0" step="4">
          <step-4 @nextStep="nextStep" @prevStep="prevStep" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
// Steps
import Step1 from "@/components/auth/manualOnboardingCompanySteps/step1.vue";
import Step2 from "@/components/auth/manualOnboardingCompanySteps/step2.vue";
import Step3 from "@/components/auth/manualOnboardingCompanySteps/step3.vue";
import Step4 from "@/components/auth/manualOnboardingCompanySteps/step4.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AuthManualOnboardingCompany",
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  data: () => ({
    currentStep: 1,
    maxSteps: 4,
    formData: {
      // profile_img: null,
      company: "",
      jobs: "",
      about_company: "",
      role_in_company: "",
      company_employees: "",
      department: ""
    }
  }),
  methods: {
    ...mapActions("user", ["postOnboardingCompany"]),

    prevStep() {
      this.currentStep !== 1 ? this.currentStep-- : this.currentStep;
    },
    nextStep(submittedForm) {
      this.formData = { ...this.formData, ...submittedForm };

      if (this.currentStep === 4) {
        this.handleOnboarding();
      } else {
        this.currentStep !== this.maxSteps
          ? this.currentStep++
          : this.currentStep;
      }
    },
    async handleOnboarding() {
      await this.postOnboardingCompany(this.formData);
      this.$router.replace({ name: "Dashboard" });
    }
  },
  computed: {
    ...mapGetters("user", ["getUserFullName"])
  }
};
</script>

<style lang="scss">
.auth-moc-wrap {
  width: 60%;
}
.auth-moc-wrap {
  .col > label {
    display: block;
    padding-bottom: 8px;
    margin-right: 8px;
  }
}
.auth-moc-wrap {
  .v-btn:not(.v-btn--round).v-size--large {
    padding: 0 50px;
    max-width: 150px;
  }
}
</style>
