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
        type="email"
        :placeholder="$t('companyEmailPlaceholder')"
        outlined
        flat
        background-color="white"
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
        flat
        background-color="white"
      >
      </v-text-field>

      <label class="profile-label">
        {{ $t("companyCityandAdress") }}
        <span style="color: red;">*</span>
      </label>
      <GooglePlacesAutocomplete
        @select="(e) => (value.address = e)"
        type="geocode"
        :full-address="true"
        :placeholder="$t('companyCityandAdressPlaceholder')"
        :required="true"
      />

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
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete.vue";

export default {
  name: "Step3",

  components: {
    GooglePlacesAutocomplete,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    nextScreen: Function,
  },
  data() {
    return {
      formValid: false,
    };
  },
  methods: {
    phonePrefix() {
      if (this.value.company_phone === "") {
        return (this.value.company_phone = "+49");
      }
    },
  },
  beforeMount() {
    this.phonePrefix();
  },
};
</script>

<style scoped lang="scss"></style>
