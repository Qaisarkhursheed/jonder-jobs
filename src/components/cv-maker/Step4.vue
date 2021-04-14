<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">
      <step-header :active-step="3" />
    </v-card-title>

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
          <v-icon class="text-color-primary-blue-dark">mdi-account-check-outline</v-icon>
          Kompetenzen
        </label>
        <v-text-field
          dense
          type="text"
          label="Kompetenz"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          label="Niveau"
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
          <v-icon class="text-color-primary-blue-dark">mdi-earth</v-icon>
          Sprachen
        </label>
        <v-text-field
          dense
          type="text"
          label="Sprache"
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
          label="Niveau"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
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
          Cancel
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
          Confirm
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
