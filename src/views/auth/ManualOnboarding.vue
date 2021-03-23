<template>
  <auth-wrap :img="e1 + 1">
    <v-icon v-if="e1 > 1" class="mo-back-button" @click="prevStep">
      mdi-arrow-left
    </v-icon>

    <div
      class="d-flex flex-column justify-space-between align-center full-h"
      style="width: 70%"
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
        </v-stepper-header>

        <v-stepper-items class="mo-stepper-items">
          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="1"
          >
            <step-1 />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="2"
          >
            <step-2 />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="3"
          >
            <step-3 />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="4"
          >
            <step-4 />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

      <v-btn color="primary" class="full-w" @click="nextStep">Weiter</v-btn>
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

export default {
  name: "ManualOnboarding",
  components: {
    AuthWrap,
    Step1,
    Step2,
    Step3,
    Step4
  },
  data() {
    return {
      e1: 2
    };
  },
  methods: {
    prevStep() {
      this.e1 !== 1 ? this.e1-- : this.e1;
    },
    nextStep() {
      this.e1 !== 4 ? this.e1++ : this.e1;
    },
    complete(step) {
      return step < this.e1 ? true : false;
    }
  }
};
</script>

<style scoped lang="scss">
.mo-back-button {
  position: absolute;
  top: 57px;
  left: 20%;
  z-index: 100;
}

.mo-stepper-items {
  overflow: auto;
}
</style>
