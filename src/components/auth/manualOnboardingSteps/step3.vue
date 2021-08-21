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
      <!-- <v-select
        v-model="value.current_position"
        :items="positions"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-select> -->
      <v-autocomplete
        v-model="value.current_position"
        :items="types.JOB_POSITION"
        :rules="[validations.required]"
        outlined
        flat
        hide-no-data
        :placeholder="$t('user.onboarding.choose')"
        class="mt-1"
      ></v-autocomplete>

      <!-- Branche -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouBranches") }}
      </label>
      <!-- <v-select
        v-model="value.branche"
        :items="branches"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-select> -->
      <v-autocomplete
        v-model="value.branche"
        :items="types.JOB_BRANCHE"
        :rules="[validations.required]"
        outlined
        flat
        hide-no-data
        :placeholder="$t('user.onboarding.choose')"
        class="mt-1"
      ></v-autocomplete>

      <!-- Looking for role -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouRole") }}
      </label>
      <!-- <v-select
        v-model="value.looking_for"
        :items="positions"
        :placeholder="$t('user.onboarding.choose')"
        :rules="[validations.required]"
        multiple
        outlined
      ></v-select> -->
       <v-autocomplete
          v-model="value.looking_for"
          :items="types.JOB_POSITION"
          :placeholder="$t('user.onboarding.choose')"
          :rules="[validations.required]"
          multiple
          outlined
          flat
          hide-no-data
          class="mt-1"
        ></v-autocomplete>

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

import types from '@/types';

export default {
  name: "Step3",
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
    }
  }
};
</script>

<style scoped lang="scss">
.info-text {
  font-size: 12px;
  position: absolute;
  bottom: 3.5rem;
}
</style>
