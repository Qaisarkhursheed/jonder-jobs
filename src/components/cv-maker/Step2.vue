<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">
      <step-header />
    </v-card-title>
    <v-row>
      <v-col cols="6">
        <label>E-mail Adresse</label>
        <v-text-field
          dense
          type="email"
          label="E-mail Adresse"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>Telefonnummer</label>
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
  </div>
</template>
<script>
import StepHeader from "@/components/cv-maker/StepHeader";
export default {
  components: { StepHeader }
}
</script>