<template>
  <div class="mo-step-3">
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">Zeig uns was du willst</p>

      <div class="mt-6">
        <p class="text-left font-weight-bold">Was ist deine Wunschbranche?</p>
        <v-text-field
          dense
          placeholder="Lorem Ipsum"
          type="text"
          outlined
          background-color="white"
        ></v-text-field>
        <p class="text-left font-weight-bold">Was ist dein Wunschberuf?</p>
        <v-text-field
          dense
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.dream_job"
        ></v-text-field>

        <p class="text-left font-weight-bold">
          Monatliche Brutto Gehaltsvorstellung?
        </p>

        <v-row>
          <v-col cols="2">
            <div
              class="mo-step-3__salary pa-4 font-weight-bold caption text-center"
            >
              {{ value.monthly_salary }}k
            </div>
          </v-col>
          <v-col cols="10" class="pt-5">
            <v-slider
              v-model="value.monthly_salary"
              track-color="grey"
              color="primary"
              always-dirty
              min="0"
              max="100"
              :rules="rules"
            ></v-slider>
          </v-col>
        </v-row>

        <p class="text-left font-weight-bold">Wann bist du startklar?</p>
        <v-row>
          <v-text-field
            block
            placeholder="JJJJ-MM-TT (2021-09-01)"
            type="text"
            outlined
            background-color="white"
            :rules="rules"
            v-model="value.ready_for_work"
          ></v-text-field>
        </v-row>
        <v-btn
          @click="nextScreen"
          color="primary"
          class="full-w mt-4 font-weight-medium "
        >
          Abschließen
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Step4",
  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data: () => ({
    rules: [value => !!value || "Required."]
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
