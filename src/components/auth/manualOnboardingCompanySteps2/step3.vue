<template>
  <div class="mo-step-3">
    <h1 class="text-center mb-3" style="font-size: 28px">
      Company contact details.
    </h1>

    <v-form v-model="formValid" ref="form"
      class="auth-form">
      <label class="profile-label">Company Email Address</label>
      <v-text-field
        class="mt-1"
        v-model="value.company_email"
        :rules="[validations.required, validations.email]"
        dense
        type="email"
        placeholder="Enter"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <label class="profile-label">Company Phone Number</label>
      <v-text-field
        class="mt-1"
        v-model="value.company_phone"
        :rules="[validations.required, validations.phone]"
        dense
        placeholder="Enter"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <label class="profile-label">Address</label>
      <GooglePlacesAutocomplete @select="e => value.address = e" type="geocode" />

      <label class="profile-label">City</label>
      <GooglePlacesAutocomplete @select="e => value.city = e" />

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

import GooglePlacesAutocomplete from '../../GooglePlacesAutocomplete.vue';

export default {
  name: "Step3",

  components: {
    GooglePlacesAutocomplete
  },
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
