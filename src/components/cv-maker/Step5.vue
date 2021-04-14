<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">
      <step-header :active-step="4" />
    </v-card-title>
    <v-card-subtitle>
      <div class="step-header-description">
        <h3>Meine Erfahrungen</h3>
      </div>
    </v-card-subtitle>
    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark">
          <v-icon class="text-color-primary-blue-dark">mdi-account-outline</v-icon>
          Referenzen
        </label>
        <v-text-field
          dense
          type="text"
          label="Name des Unternehmens"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          label="Kontaktperson"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          label="Telefonnummer"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="email"
          label="E-mail adresse"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark">
          <v-icon class="text-color-primary-blue-dark">mdi-account-group-outline</v-icon>
          Erfolge
        </label>
        <v-textarea
          dense
          type="text"
          label="Beschreibung"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark">
          <v-icon class="text-color-primary-blue-dark">mdi-share-variant-outline</v-icon>
          Publikationen
        </label>
        <v-textarea
          dense
          type="text"
          label="Beschreibung"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-textarea>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="4">
        <v-btn
          depressed
          block
          outlined
          color="primary"
          large
        >
          Back
        </v-btn>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-btn
          depressed
          block
          color="dark-blue"
          large
          @click="$emit('confirm')"
        >
          Finish
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import StepHeader from "@/components/cv-maker/StepHeader";
export default {
  components: { StepHeader }
}
</script>
