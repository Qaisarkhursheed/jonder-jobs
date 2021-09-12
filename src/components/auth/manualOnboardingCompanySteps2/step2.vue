<template>
  <div class="mo-step-2">
    <h1 class="text-center mb-3" style="font-size: 28px">
      {{ $t("companyInfo") }}
    </h1>

    <v-form v-model="formValid">
      <label class="profile-label">
        {{ $t("industry") }}
        <span style="color: red;">*</span>
      </label>
      <!-- <v-select
        v-model="value.branche"
        :items="branches"
        :rules="[validations.required]"
        :placeholder="$t('choose')"
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
        :placeholder="$t('choose')"
      >
        <template v-slot:selection="{ item }"> {{ $t(item) }}</template>
        <template v-slot:item="{ item }">
          <v-list-item-content>
            <v-list-item-title>
              {{ $t(item) }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>

      <label class="profile-label">
        {{ $t("numberOfEmployees") }}
        <span style="color: red;">*</span>
      </label>
      <v-select
        class="mt-1"
        v-model="value.company_employees"
        :items="types.EMPLOYEE_NUMBER"
        :rules="[validations.required]"
        :placeholder="$t('choose')"
        outlined
      >
        <template v-slot:selection="{ item }"> {{ $t(item) }}</template>
        <template v-slot:item="{ item }">
          <v-list-item-content>
            <v-list-item-title>
              {{ $t(item) }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-select>

      <label class="profile-label">
        {{ $t("dateOfEstablishment") }}
        <span style="color: red;">*</span>
      </label>
      <v-text-field
        v-model="value.establishment_date"
        :rules="[validations.required]"
        type="number"
        outlined
      >
      </v-text-field>
      <!-- Implement date picker component -->

      <v-row class="mt-1">
        <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            height="55"
            class="full-w font-weight-medium "
          >
            {{ $t("back") }}
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
            {{ $t("next") }}
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
    formValid: false
  }),
  computed: {
    types() {
      return types;
    }
  }
};
</script>

<style scoped lang="scss"></style>
