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
        @click="value.job_search_status = 'active'"
        v-bind="{
          outlined: value.job_search_status !== 'active'
        }"
      >
        {{ $t("jobSearchStatusActive") }}
      </v-btn>

      <v-btn
        block
        color="#0253b3"
        class="mb-4"
        @click="value.job_search_status = 'passive'"
        v-bind="{
          outlined: value.job_search_status !== 'passive'
        }"
        height="55"
      >
        {{ $t("jobSearchStatusPassive") }}
      </v-btn>

      <v-btn
        block
        color="#0253b3"
        class="mb-4"
        height="55"
        @click="value.job_search_status = 'curious'"
        v-bind="{
          outlined: value.job_search_status !== 'curious'
        }"
      >
        {{ $t("jobSearchStatusCurious") }}
      </v-btn>

      <v-row class="mt-5">
        <v-col>
          <v-btn
            :disabled="!formValid || !value.job_search_status"
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

<style lang="scss">
.step-1 {
  .v-btn--is-elevated {
    color: $primary-light;
  }
}
</style>
