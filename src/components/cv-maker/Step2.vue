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
          placeholder="Abschluss"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.graduation_degree"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          placeholder="Stadt"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.education_city"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          placeholder="Institut"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.education_institute"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label class="font-weight-bold">Begindatum</label>
        <v-text-field
          dense
          type="text"
          placeholder="September 2020"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          :rules="[dateValidator(value.education_start_date)]"
          v-model="value.education_start_date"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="font-weight-bold">Enddatum</label>
        <v-text-field
          dense
          type="text"
          placeholder="September 2020"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          :rules="[dateValidator(value.education_end_date)]"
          v-model="value.education_end_date"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          dense
          type="text"
          placeholder="Beschreibung"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.education_description"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark font-weight-bold"
          >Profile</label
        >
        <v-textarea
          dense
          type="text"
          placeholder="Beschreibung"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.profile_description"
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
          Confirm
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
        this.value.graduation_degree.length > 0 &&
        this.value.education_city.length > 0 &&
        this.value.education_institute.length > 0 &&
        this.value.education_start_date.length > 0 &&
        this.value.education_end_date.length > 0 &&
        this.value.education_description.length > 0 &&
        this.value.profile_description.length > 0
      );
    },
  },
  methods: {
    nextStep() {
      if (this.isValid) this.$emit("confirm");
    },
    dateValidator(date) {
      return /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(date);
    },
  },
  components: { StepHeader },
};
</script>
