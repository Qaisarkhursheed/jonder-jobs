<template>
  <auth-wrap :img="e1 + 1">
    <v-icon v-if="e1 > 1 && e1 < 5" class="mo-back-button" @click="prevStep">
      mdi-arrow-left
    </v-icon>

    <div
      class="stepper-wrap d-flex flex-column justify-space-between align-center full-h mt-10"
    >
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
        </v-stepper-header>

        <v-stepper-items class="mo-stepper-items">
          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="1"
          >
            <step-1 :nextScreen="nextStep" v-model="formData" />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="2"
          >
            <step-2 :nextScreen="nextStep" v-model="formData" />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="3"
          >
            <step-3 :nextScreen="nextStep" v-model="formData" />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="4"
          >
            <step-4 :nextScreen="nextStep" v-model="formData" />
          </v-stepper-content>
          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="5"
          >
            <step-5
              :prevScreen="prevStep"
              :nextScreen="nextStep"
              v-model="formData"
            />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ManualOnboarding",
  components: {
    AuthWrap,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  props: {
    isBtnVisible: Boolean
  },
  data: () => ({
    saveInProgress: false,
    e1: 2,
    formData: {
      working_in: "",
      current_position: "",
      branche: "",
      address: "",
      address_to_work: "",
      describe_yourself: "",
      your_qualification: "",
      training_studies: "",
      additional_training: "",
      dream_job: "",
      monthly_salary: 10,
      ready_for_work: "",
      resume: null,
      qualifications: null,
      document: null
      //profile_img: null
    }
  }),
  created() {
    this.populateData(this.user);
  },
  computed: {
    ...mapGetters("user", ["user"]),
    isDisabled() {
      if (this.saveInProgress) return true;
      if (this.e1 === 2) {
        return !(
          this.formData.working_in &&
          this.formData.working_in.length > 0 &&
          this.formData.current_position &&
          this.formData.current_position.length > 0 &&
          this.formData.branche &&
          this.formData.branche.length > 0 &&
          this.formData.address &&
          this.formData.address.length > 0 &&
          this.formData.address_to_work &&
          this.formData.address_to_work.length > 0 &&
          this.formData.describe_yourself &&
          this.formData.describe_yourself.length > 0
        );
      } else if (this.e1 === 3) {
        return !(
          this.formData.your_qualification &&
          this.formData.your_qualification.length > 0 &&
          this.formData.training_studies &&
          this.formData.training_studies.length > 0 &&
          this.formData.additional_training &&
          this.formData.additional_training.length > 0
        );
      } else if (this.e1 === 4) {
        return !(
          this.formData.dream_job &&
          this.formData.dream_job.length > 0 &&
          this.formData.monthly_salary &&
          this.formData.monthly_salary > 0 &&
          this.formData.ready_for_work &&
          this.formData.ready_for_work.length > 0
        );
      } else if (this.e1 === 5) {
        return !(
          this.formData.document &&
          this.formData.qualifications &&
          //this.formData.profile_img &&
          this.formData.resume
        );
      }

      return false;
    }
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
      if (this.isDisabled) return;
      if (this.e1 < 5) this.e1++;
      else this.saveOnboarding();
    },
    complete(step) {
      return step < this.e1;
    },
    async saveOnboarding() {
      this.saveInProgress = true;
      await this.postOnboardingUser(this.formData).then(() => {
        localStorage.setItem("onboarding-status", "false");
        this.$router.replace("/dashboard/profile");
      });
      this.saveInProgress = false;
    }
  }
};
</script>

<style scoped lang="scss">
.mo-back-button {
  position: absolute;
  top: 40px;
  left: 215px;
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
.stepper-wrap {
  width: 70%;
}
@media (max-width: 600px) {
  .stepper-wrap {
    width: 100%;
  }
}
</style>
