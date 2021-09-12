<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">
      <step-header :active-step="3" />
    </v-card-title>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark font-weight-bold">
          <v-icon class="text-color-primary-blue-dark"
            >mdi-account-outline</v-icon
          >
          Referenzen
        </label>
        <v-text-field
          dense
          type="text"
          placeholder="Name des Unternehmens"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.referenc_company_name"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          placeholder="Kontaktperson"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.referenc_contact_person"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          placeholder="Telefonnummer"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.referenc_phone"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="email"
          placeholder="E-mail adresse"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.referenc_email"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark font-weight-bold">
          <v-icon class="text-color-primary-blue-dark"
            >mdi-account-check-outline</v-icon
          >
          Kompetenzen
        </label>
        <v-text-field
          dense
          type="text"
          placeholder="Kompetenz"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.competence"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          placeholder="Niveau"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.competence_level"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark font-weight-bold">
          <v-icon class="text-color-primary-blue-dark">mdi-earth</v-icon>
          Sprachen
        </label>
        <v-text-field
          dense
          type="text"
          placeholder="Sprache"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.language"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          placeholder="Niveau"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.language_level"
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
          @click="$emit('back')"
          class="font-weight-bold"
        >
          {{ $t("back") }}
        </v-btn>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-btn
          depressed
          block
          color="dark-blue"
          large
          :disabled="!isValid"
          @click="nextStep"
          class="font-weight-bold"
        >
          Nachester Schritt
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import StepHeader from "@/components/cv-maker/StepHeader";
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isValid() {
      return (
        this.value.referenc_company_name.length > 0 &&
        this.value.referenc_contact_person.length > 0 &&
        this.value.referenc_phone.length > 0 &&
        this.value.referenc_email.length > 0 &&
        this.value.competence.length > 0 &&
        this.value.competence_level.length > 0 &&
        this.value.language.length > 0 &&
        this.value.language_level.length > 0
      );
    },
  },
  methods: {
    nextStep() {
      if (this.isValid) this.$emit("confirm");
    },
  },
  components: { StepHeader },
};
</script>
