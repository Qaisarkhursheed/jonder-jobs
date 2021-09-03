<template>
  <div class="mo-step-1">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.location") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <GooglePlacesAutocomplete @select="e => value.city = e" />

      <v-checkbox
        class="mb-3"
        label="Möchten Sie, dass wir Ihren Standort anzeigen?"
        hide-details="auto"
        v-model="value.location_show"
      ></v-checkbox>

      <v-btn
        type="submit"
        :disabled="!formValid"
        color="primary"
        height="55"
        class="full-w mt-5 font-weight-medium dark-blue"
      >
        {{ $t("user.onboarding.next") }}
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import GooglePlacesAutocomplete from '../../GooglePlacesAutocomplete.vue';
export default {
  components: { 
    GooglePlacesAutocomplete 
  },
  name: "Step1",
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
};
</script>

<style scoped lang="scss"></style>
