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
      <v-autocomplete
        class="mt-1"
        v-model="value.branche"
        :items="types.JOB_BRANCHE"
        :rules="[validations.required]"
        item-value="id"
        :item-text="$i18n.locale"
        outlined
        flat
        append-icon="mdi-chevron-down"
        :placeholder="$t('choose')"
      />

      <label class="profile-label">
        {{ $t("numberOfEmployees") }}
        <span style="color: red;">*</span>
      </label>
      <v-select
        class="mt-1"
        v-model="value.company_employees"
        :items="types.EMPLOYEE_NUMBER"
        item-value="id"
        :item-text="$i18n.locale"
        :rules="[validations.required]"
        :placeholder="$t('choose')"
        append-icon="mdi-chevron-down"
        outlined
      />

      <label class="profile-label">
        {{ $t("dateOfEstablishment") }}
        <span style="color: red;">*</span>
      </label>
      <v-text-field
        v-model="value.establishment_date"
        :rules="[validations.required]"
        type="number"
        outlined
        solo
      >
      </v-text-field>

      <v-row class="mt-1">
        <v-col cols="3">
          <v-btn @click="$emit('prevScreen')" height="55" text block>
            {{ $t("back") }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            @click="nextScreen"
            :disabled="!formValid"
            color="primary"
            height="55"
            block
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
