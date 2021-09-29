<template>
  <div class="mo-step-2 step-1">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("whatBringsYou") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <v-btn
        block
        color="#0253b3"
        class="mb-4"
        height="55"
        @click="value.why_jonder = $t('whatBringsYouJob')"
        v-bind="{
          outlined: value.why_jonder !== $t('whatBringsYouJob'),
        }"
      >
        {{ $t("whatBringsYouJob") }}
      </v-btn>

      <v-btn
        block
        color="#0253b3"
        class="mb-4"
        @click="value.why_jonder = $t('whatBringsYouOffer')"
        v-bind="{
          outlined: value.why_jonder !== $t('whatBringsYouOffer'),
        }"
        height="55"
      >
        {{ $t("whatBringsYouOffer") }}
      </v-btn>

      <v-btn
        block
        color="#0253b3"
        class="mb-4"
        height="55"
        @click="value.why_jonder = $t('whatBringsYouCurious')"
        v-bind="{
          outlined: value.why_jonder !== $t('whatBringsYouCurious'),
        }"
      >
        {{ $t("whatBringsYouCurious") }}
      </v-btn>

      <v-row class="mt-5">
        <!-- <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            height="55"
            class="full-w font-weight-medium "
          >
            {{ $t("back") }}
          </v-btn>
        </v-col> -->
        <v-col>
          <v-btn
            :disabled="!formValid || !value.why_jonder"
            type="submit"
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
export default {
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

<style lang="scss">
.step-1 {
  .v-btn--is-elevated {
    color: $primary-light;
  }
}
</style>
