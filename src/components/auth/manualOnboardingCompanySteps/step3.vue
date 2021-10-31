<template>
  <div class="mo-step-3">
    <h1 class="text-center mb-3" style="font-size: 28px">
      {{ $t("companyContact") }}
    </h1>

    <v-form v-model="formValid" ref="form" class="auth-form">
      <label class="profile-label">
        {{ $t("companyEmail") }}
        <span style="color: red;">*</span>
      </label>
      <v-text-field
        class="mt-1"
        v-model="value.company_email"
        :rules="[validations.required, validations.email]"
        dense
        solo
        type="email"
        :placeholder="$t('companyEmailPlaceholder')"
        outlined
      >
      </v-text-field>

      <label class="profile-label">
        {{ $t("companyPhone") }}
        <span style="color: red;">*</span>
      </label>
      <v-text-field
        class="mt-1"
        v-model="value.company_phone"
        :rules="[validations.required, validations.phone]"
        dense
        outlined
        solo
        :placeholder="$t('enter')"
      >
      </v-text-field>

      <label class="profile-label">
        {{ $t("companyCityandAdress") }}
        <span style="color: red;">*</span>
      </label>
      <GooglePlacesInput
        v-model="value.address"
        :attach="false"
        :types="['geocode']"
        :placeholder="$t('companyCityandAdressPlaceholder')"
        :rules="[validations.required]"
      />

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
import GooglePlacesInput from "@/components/controls/GooglePlacesInput";

export default {
  name: "Step3",

  components: { GooglePlacesInput },

  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },

  data() {
    return {
      formValid: false
    };
  }
};
</script>

<style scoped lang="scss"></style>
