<template>
  <div class="mo-step-2">
    <h1 class="text-center mb-3" style="font-size: 28px">
      Industry of your company and number of employees
    </h1>

    <v-form v-model="formValid">
      <label class="profile-label">Industry</label>
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
      ></v-autocomplete>

      <label class="profile-label">Number of employees</label>
      <v-select
        class="mt-1"
        v-model="value.company_employees"
        :items="types.EMPLOYEE_NUMBER"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-select>

      <v-row class="mt-1">
        <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            height="55"
            class="full-w font-weight-medium "
          >
            Back
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
import types from '@/types';

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
  },
};
</script>

<style scoped lang="scss"></style>
