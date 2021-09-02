<template>
  <v-sheet class="px-12">
    <v-card class="d-flex align-center justify-center" flat tile>
      <v-sheet>
        <v-sheet class="d-flex align-center justify-center mb-16"
          ><v-icon color="primary" size="100"
            >mdi-check-circle-outline</v-icon
          ></v-sheet
        >

        <p class="text-center font-weight-bold mb-7 primary--text text-h6">
          {{ $t("company.register.successMessageEmployer") }}
        </p>
        <p class="text-center text-body-2">
          {{ $t("company.register.successMessageEmployerSub") }}
        </p>
        <v-btn
          type="submit"
          color="primary"
          height="58"
          class="full-w font-weight-medium dark-blue"
          :to="{ name: 'CompanySearch' }"
        >
          Abschließen
        </v-btn>
      </v-sheet>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    nextScreen: Function,
  },
  name: "StepSucces",
};
</script>

<style scoped>
.mb {
  margin-bottom: 4.4rem;
}
</style>
