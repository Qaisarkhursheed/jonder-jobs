<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">
      <step-header :active-step="1" />
    </v-card-title>
    <v-card-subtitle>
      <div class="step-header-detail pb-2">
        <v-icon>mdi-office-building</v-icon>
        <span>Bildung & Qualifikationen</span>
      </div>
      <div class="step-header-description">
        <div>Bildung Lore ipsum</div>
        <div class="date">September 2019. - Oktobar 2020.</div>
      </div>
    </v-card-subtitle>
    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          label="Abschluss"
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
          label="Stadt"
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
          label="Institut"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>Begindatum</label>
        <v-text-field
          dense
          type="text"
          label="September 2018"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>Enddatum</label>
        <v-text-field
          dense
          type="text"
          label="September 2020"
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
        <label class="text-color-primary-blue-dark">Profile</label>
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
        <v-btn depressed block outlined color="primary" large>
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
};
</script>
