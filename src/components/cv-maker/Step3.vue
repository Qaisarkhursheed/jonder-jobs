<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">
      <step-header :active-step="2" />
    </v-card-title>
    <v-card-subtitle>
      <div class="step-header-detail pb-2">
        <v-icon>mdi-briefcase-outline</v-icon>
        <span>{{ $t("workExperience") }}</span>
      </div>
    </v-card-subtitle>
    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          :placeholder="$t('designation')"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.job_title"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          :placeholder="$t('city')"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.job_city"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          type="text"
          :placeholder="$t('employer')"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.job_employer"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label class="font-weight-bold">{{ $t("startDate") }}</label>
        <v-text-field
          dense
          type="text"
          placeholder="September 2018"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          :rules="[dateValidator(value.job_start_date)]"
          v-model="value.job_start_date"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="font-weight-bold">{{ $t("endDate") }}</label>
        <v-text-field
          dense
          type="text"
          placeholder="September 2020"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          :rules="[dateValidator(value.job_end_date)]"
          v-model="value.job_end_date"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          dense
          type="text"
          :placeholder="$t('description')"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.experience_description"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-color-primary-blue-dark font-weight-bold">
          <v-icon class="text-color-primary-blue-dark"
            >mdi-cards-playing-outline</v-icon
          >
          {{ $t("interests") }}
        </label>
        <v-text-field
          dense
          type="text"
          :placeholder="$t('hobby')"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.hobby"
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
          {{ $t("nextStep") }}
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
        this.value.job_title.length > 0 &&
        this.value.job_city.length > 0 &&
        this.value.job_employer.length > 0 &&
        this.value.job_start_date.length > 0 &&
        this.value.job_end_date.length > 0 &&
        this.value.experience_description.length > 0 &&
        this.value.hobby.length > 0
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
