<template>
  <v-stepper class="step-header" v-model="e1" style="width: 100%" flat>
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      />

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      />

      <v-divider></v-divider>

      <v-stepper-step step="3" />
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  data () {
    return {
      e1: 1,
    }
  },
}
</script>

<style scoped lang="scss">
.v-stepper.step-header {
  &, .v-stepper__header {
    box-shadow: none;
  }

  .v-stepper__step {
    padding: 0;
  }
}
</style>