<template>
  <div class="mo-step-3">
    <h1 class="text-center mb-3" style="font-size: 28px">
      {{ $t("company.register.companyContact") }}
    </h1>

    <v-form v-model="formValid" ref="form" class="auth-form">
      <label class="profile-label">{{
        $t("company.register.companyEmail")
      }}</label>
      <v-text-field
        class="mt-1"
        v-model="value.company_email"
        :rules="[validations.required, validations.email]"
        dense
        type="email"
        :placeholder="$t('company.register.companyEmailPlaceholder')"
        outlined
        flat
        background-color="white"
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-text-field>

      <label class="profile-label">{{
        $t("company.register.companyPhone")
      }}</label>
      <v-text-field
        class="mt-1"
        v-model="value.company_phone"
        :rules="[validations.required, validations.phone]"
        dense
        outlined
        flat
        background-color="white"
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-text-field>

      <label class="profile-label">{{
        $t("company.register.companyCityandAdress")
      }}</label>
      <GooglePlacesAutocomplete
        @select="(e) => (value.address = e)"
        type="geocode"
        :full-address="true"
        :placeholder="$t('company.register.companyCityandAdressPlaceholder')"
        :required="true"
      />

      <!-- <label class="profile-label">City</label>
      <GooglePlacesAutocomplete @select="e => value.city = e" /> -->

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
      if (this.value.company_phone === null) {
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
