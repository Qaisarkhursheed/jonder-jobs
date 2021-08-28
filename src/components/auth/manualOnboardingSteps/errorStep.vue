<template>
  <v-sheet class="px-12">
    <v-card class="d-flex align-center justify-center" flat tile>
      <v-sheet width="400">
        <p
          class="text-center text-body-2 red--text text--darken-4 pink lighten-5 pa-3 border-special"
        >
          Leichter geht Karriere wirklich nicht. Dein Profil wird nun
          Unternehmen angezeigt!
        </p>
        <v-sheet class="d-flex align-center justify-center my-16">
          <v-icon color="red" size="100" class="border-special"
            >mdi-alert-outline</v-icon
          ></v-sheet
        >

        <p class="text-center font-weight-bold mb-7 text-h6">
          Etwas ist falsch, bitte versuchen Sie es erneut!
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
  name: "errorStep"
};
</script>

<style scoped>
.border-special {
  border-radius: 12px;
}
</style>
