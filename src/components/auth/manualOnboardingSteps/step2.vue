<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.detailsAboutYou") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <!-- Current position -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouPosition") }}
      </label>
      <v-autocomplete
        v-model="value.current_position"
        :items="types.JOB_POSITION"
        :rules="[validations.required]"
        outlined
        flat
        hide-no-data
        :placeholder="$t('user.onboarding.detailsAboutYouPositionPlace')"
        class="mt-1"
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-autocomplete>

      <!-- Branche -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouBranches") }}
      </label>
      <v-autocomplete
        v-model="value.branche"
        :items="types.JOB_BRANCHE"
        :rules="[validations.required, validations.max.selection(3)]"
        v-clearable-autocomplete
        outlined
        flat
        hide-no-data
        multiple
        :placeholder="$t('user.onboarding.detailsAboutYouBranchesPlace')"
        class="mt-1"
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-autocomplete>

      <!-- Looking for role -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouRole") }}
      </label>
      <v-autocomplete
        v-model="value.looking_for"
        :items="types.JOB_POSITION"
        :placeholder="$t('user.onboarding.detailsAboutYouRolePlace')"
        :rules="[validations.required, validations.max.selection(5)]"
        v-clearable-autocomplete
        multiple
        outlined
        flat
        hide-no-data
        class="mt-1"
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-autocomplete>

      <label class="profile-label">
        {{ $t("user.onboarding.location") }}
      </label>
      <GooglePlacesAutocomplete
        @select="(e) => (value.city = e)"
        :required="true"
        class="mt-1"
      />

      <v-checkbox
        class="mb-5 mt-0"
        :label="$t('user.onboarding.locationChecbox')"
        hide-details="auto"
        v-model="value.location_show"
      ></v-checkbox>

      <v-row class="mt-0">
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
            :disabled="!formValid"
            type="submit"
            color="primary"
            height="58"
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
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete.vue";

export default {
  name: "Step2",

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
  computed: {
    types() {
      return types;
    },
  },
};
</script>

<style scoped lang="scss">
.info-text {
  font-size: 12px;
  position: absolute;
  bottom: 3.5rem;
}
</style>
