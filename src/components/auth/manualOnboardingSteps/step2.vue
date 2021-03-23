<template>
  <div class="mo-step-2">
    <p class="text-center">Erzahl uns etwas uber dich!</p>

    <div class="mt-6">
      <v-text-field
        dense
        label="Wo iarbeitest du aktuell?"
        type="text"
        outlined
        background-color="white"
      ></v-text-field>

      <v-text-field
        dense
        label="Was ist deine aktuelle Position?"
        type="text"
        outlined
        background-color="white"
      ></v-text-field>

      <v-text-field
        dense
        label="I welchen Branchen arbeitest du?"
        type="text"
        outlined
        background-color="white"
      ></v-text-field>

      <v-text-field
        dense
        label="Wo wohnst du?"
        type="text"
        outlined
        background-color="white"
      ></v-text-field>

      <v-text-field
        dense
        label="In welchem Radius warst du bereit Deinen neuen Job auszuuben?"
        type="text"
        outlined
        background-color="white"
      ></v-text-field>

      <p class="text-left">Was beschreibt dich am besten?</p>
      <v-row>
        <v-col>
          <v-btn outlined color="primary">
            <v-icon>
              mdi-star
            </v-icon>
          </v-btn>

          <p class="text-center caption mt-1">Easy</p>
        </v-col>

        <v-col>
          <v-btn outlined color="primary">
            <v-icon>
              mdi-star
            </v-icon>
          </v-btn>

          <p class="text-center caption mt-1">Medium</p>
        </v-col>

        <v-col>
          <v-btn outlined color="primary">
            <v-icon>
              mdi-star
            </v-icon>
          </v-btn>

          <p class="text-center caption mt-1">Hard</p>
        </v-col>

        <v-col>
          <v-btn outlined color="primary">
            <v-icon>
              mdi-star
            </v-icon>
          </v-btn>

          <p class="text-center caption mt-1">Advanced</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step2"
};
</script>

<style scoped lang="scss">

</style>
