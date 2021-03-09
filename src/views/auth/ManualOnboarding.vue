<template>
  <auth-wrap img="2">
    <div
      class="d-flex flex-column justify-space-between align-center full-h"
      style="width: 70%"
    >
      <v-stepper alt-labels class="elevation-0 full-w" v-model="e1">
        <v-stepper-header class="elevation-0">
          <v-stepper-step step="1"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4"></v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content class="px-0" step="1">
            <step-1 />
          </v-stepper-content>

          <v-stepper-content step="2">
            Step 2
          </v-stepper-content>

          <v-stepper-content step="3">
            Step 3
          </v-stepper-content>

          <v-stepper-content step="4">
            Step 4
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

      <v-btn color="primary" class="full-w" @click="e1++">Weiter</v-btn>
    </div>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
// Steps
import Step1 from "@/components/auth/manualOnboardingSteps/step1.vue";

export default {
  name: "ManualOnboarding",
  components: {
    AuthWrap,
    Step1
  },
  data() {
    return {
      e1: 1
    };
  }
};
</script>

<style></style>
