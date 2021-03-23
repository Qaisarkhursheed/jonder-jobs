<template>
  <div class="mo-step-3">
    <p class="text-center">Zeig uns was du willst</p>

    <div class="mt-6">
      <v-text-field
        dense
        label="Was ist deine Wunschbranche? "
        type="text"
        outlined
        background-color="white"
      ></v-text-field>

      <v-text-field
        dense
        label="Was ist dein Wunschberuf?"
        type="text"
        outlined
        background-color="white"
      ></v-text-field>

      <p class="text-left">Monatliche Brutto Gehaltsvorstellung?</p>

      <v-row>
        <v-col cols="2">
          <div class="mo-step-3__salary pa-2 font-weight-bold caption">
            {{ salary }}k
          </div>
        </v-col>
        <v-col cols="10">
          <v-slider
            v-model="salary"
            track-color="grey"
            color="primary"
            always-dirty
            min="10"
            max="100"
          ></v-slider>
        </v-col>
      </v-row>

      <p class="text-left">Was beschreibt dich am besten?</p>
      <v-row>
        <v-col>
          <v-btn outlined color="primary">
            1-3
          </v-btn>

          <p class="text-center caption mt-1">Per month</p>
        </v-col>

        <v-col>
          <v-btn outlined color="primary">
            3-6
          </v-btn>

          <p class="text-center caption mt-1">Per month</p>
        </v-col>

        <v-col>
          <v-btn outlined color="primary">
            6-12
          </v-btn>

          <p class="text-center caption mt-1">Per month</p>
        </v-col>

        <v-col>
          <v-btn outlined color="primary">
            12+
          </v-btn>

          <p class="text-center caption mt-1">Per month</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step3",
  data: () => ({
    salary: 10
  })
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
