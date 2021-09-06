<template>
  <div class="mo-step-2">
    <h1 class="text-center mb-3" style="font-size: 28px">
      {{ $t("company.register.companyinfo") }}
    </h1>

    <v-form v-model="formValid">
      <label class="profile-label">
        {{ $t("company.register.industry") }}
      </label>
      <!-- <v-select
        v-model="value.branche"
        :items="branches"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-select> -->
      <v-autocomplete
        class="mt-1"
        v-model="value.branche"
        :items="types.JOB_BRANCHE"
        :rules="[validations.required]"
        outlined
        flat
        hide-no-data
        :placeholder="$t('user.onboarding.choose')"
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-autocomplete>

      <label class="profile-label">
        {{ $t("company.register.numberOfEmployees") }}
      </label>
      <v-select
        class="mt-1"
        v-model="value.company_employees"
        :items="types.EMPLOYEE_NUMBER"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-select>

      <label class="profile-label">
        {{ $t("company.register.dateOfEstablishment") }}
      </label>
      <v-text-field
        v-model="value.establishment_date"
        :rules="[validations.required]"
        type="number"
        outlined
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-text-field>
      <!-- Implement date picker component -->

      <v-row class="mt-1">
        <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            height="55"
            class="full-w font-weight-medium "
          >
            {{ $t("user.onboarding.back") }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            @click="nextScreen"
            :disabled="!formValid"
            color="primary"
            height="55"
            class="full-w font-weight-medium dark-blue"
          >
            {{ $t("user.onboarding.next") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import types from "@/types";

export default {
  name: "Step2",
  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },

  data: () => ({
    formValid: false,
    numberOfEmployees: [
      "It's just me",
      "2 - 9",
      "10 - 99",
      "100 - 500",
      "500 - 1000",
      "1000+"
    ],
    branches: ["IT", "Medicine"]
  }),
  computed: {
    types() {
      return types;
    }
  }
};
</script>

<style scoped lang="scss"></style>
