<template>
  <v-sheet class="px-12">
    <v-card class="d-flex align-center justify-center" flat height="45vh" tile>
      <v-sheet width="400">
        <v-sheet class="d-flex align-center justify-center my-16"
          ><v-icon color="primary" size="100"
            >mdi-check-circle-outline</v-icon
          ></v-sheet
        >

        <p class="text-center font-weight-bold mb-7 primary--text text-h6">
          Du hast dich soeben Erfolgreich registriert!
        </p>
        <p class="text-center text-body-2">
          Leichter geht Karriere wirklich nicht. Dein Profil wird nun
          Unternehmen angezeigt!
        </p>
        <v-btn
          type="submit"
          color="primary"
          height="58"
          class="full-w font-weight-medium dark-blue mb"
          :to="{ name: 'Dashboard' }"
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
    nextScreen: Function,
    formLoading: Boolean
  },
  name: "StepSucces"
};
</script>

<style scoped>
.mb {
  margin-bottom: 4.4rem;
}
</style>
