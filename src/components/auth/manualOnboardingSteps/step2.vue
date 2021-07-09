<template>
  <div class="mo-step-2">
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">
       {{ $t('user.onboarding.whatBringsYou') }}
      </p>
      <v-btn 
        block 
        color="primary" 
        class="mb-4" 
        height="55"
        @click="value.why_jonder = $t('user.onboarding.whatBringsYouJob')"
        v-bind="{ outlined: value.why_jonder !== $t('user.onboarding.whatBringsYouJob') }"
      >
        {{ $t('user.onboarding.whatBringsYouJob') }}
      </v-btn>
      <v-btn
        block
        color="primary"
        class="mb-4"
        @click="value.why_jonder = $t('user.onboarding.whatBringsYouOffer')"
        v-bind="{ outlined: value.why_jonder !== $t('user.onboarding.whatBringsYouOffer') }"
        height="55"
      >
        {{ $t('user.onboarding.whatBringsYouOffer') }}
      </v-btn>
      <v-btn
        block
        color="primary"
        class="mb-4"
        height="55"
        @click="value.why_jonder = $t('user.onboarding.whatBringsYouCurious')"
        v-bind="{ outlined: value.why_jonder !== $t('user.onboarding.whatBringsYouCurious') }"
      >
       {{ $t('user.onboarding.whatBringsYouCurious') }}
      </v-btn>
       <v-btn
        @click="nextScreen"
        color="primary"
        height="55"
        class="full-w mt-16 font-weight-medium "
      >
        {{ $t('user.onboarding.next') }}
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
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
    rules: [value => !!value || "Required."]
  })
};
</script>

<style scoped lang="scss"></style>
