<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">
      <step-header :active-step="4" />
    </v-card-title>
    <v-card-subtitle>
      <div class="step-header-description font-weight-bold">
        <h3>Meine Erfahrungen</h3>
      </div>
    </v-card-subtitle>
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
          v-model="value.my_company_name"
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
          v-model="value.my_contact_person"
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
          v-model="value.my_referenc_phone"
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
          v-model="value.my_referenc_email"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark font-weight-bold">
          <v-icon class="text-color-primary-blue-dark"
            >mdi-account-group-outline</v-icon
          >
          Erfolge
        </label>
        <v-textarea
          dense
          type="text"
          placeholder="Beschreibung"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.achievements_description"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark font-weight-bold">
          <v-icon class="text-color-primary-blue-dark"
            >mdi-share-variant-outline</v-icon
          >
          Publikationen
        </label>
        <v-textarea
          dense
          type="text"
          placeholder="Beschreibung"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.publications_description"
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
          @click="$emit('back')"
          class="font-weight-bold"
        >
          {{ $t("user.onboarding.back") }}
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
          Finish
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
        this.value.my_company_name.length > 0 &&
        this.value.my_contact_person.length > 0 &&
        this.value.my_referenc_phone.length > 0 &&
        this.value.my_referenc_email.length > 0 &&
        this.value.achievements_description.length > 0 &&
        this.value.publications_description.length > 0
      );
    },
  },
  methods: {
    nextStep() {
      if (this.isValid) this.$emit("save");
    },
  },
  components: { StepHeader },
};
</script>
