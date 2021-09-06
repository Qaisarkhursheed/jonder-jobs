<template>
  <div class="mo-step-2">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.whatBringsYou") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <v-btn
        block
        color="primary"
        class="mb-4"
        height="55"
        @click="value.why_jonder = $t('user.onboarding.whatBringsYouJob')"
        v-bind="{
          outlined: value.why_jonder !== $t('user.onboarding.whatBringsYouJob')
        }"
      >
        {{ $t("user.onboarding.whatBringsYouJob") }}
      </v-btn>

      <v-btn
        block
        color="primary"
        class="mb-4"
        @click="value.why_jonder = $t('user.onboarding.whatBringsYouOffer')"
        v-bind="{
          outlined:
            value.why_jonder !== $t('user.onboarding.whatBringsYouOffer')
        }"
        height="55"
      >
        {{ $t("user.onboarding.whatBringsYouOffer") }}
      </v-btn>

      <v-btn
        block
        color="primary"
        class="mb-4"
        height="55"
        @click="value.why_jonder = $t('user.onboarding.whatBringsYouCurious')"
        v-bind="{
          outlined:
            value.why_jonder !== $t('user.onboarding.whatBringsYouCurious')
        }"
      >
        {{ $t("user.onboarding.whatBringsYouCurious") }}
      </v-btn>

      <v-row class="mt-5">
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
            :disabled="!formValid || !value.why_jonder"
            type="submit"
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
export default {
  name: "Step1",
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
