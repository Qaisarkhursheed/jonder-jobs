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
        <v-btn color="primary" block class="font-weight-medium mt-10">
          Abschließen
        </v-btn>
      </v-sheet>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "StepSucces"
};
</script>

<style scoped></style>
