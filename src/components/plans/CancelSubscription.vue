<template>
  <div class="plan-actions mt-6 pt-4">
    <v-dialog
      v-model="dialog"
      width="500"
      overlay-color="#0253B3"
      overlay-opacity="0.3"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          plain
          color="inherit"
          class="font-weight-medium main-text"
          v-bind="attrs"
          v-ripple="false"
          v-on="on"
        >
          {{ $t("cancelSubscription") }}
        </v-btn>
      </template>

      <v-card>
        <h1 class="mb-4 text-center">
          {{ $t("areYouSure") }}
        </h1>

        <v-form
          ref="form"
          action="#"
          @submit.prevent="submit"
          v-model="isValid"
        >
          <p class="text-center">
            {{ $t("areYouSureCancelSubscription") }}
          </p>

          <ResponseAlert :response="formResponse"></ResponseAlert>

          <div class="text-center mt-3">
            <v-btn
              height="48"
              class="font-weight-medium "
              @click="
                dialog = false;
                $refs.form.reset();
              "
            >
              {{ $t("cancelOption") }}
            </v-btn>
            <v-btn
              type="submit"
              color="primary"
              height="48"
              class="ml-3 font-weight-medium "
              :disabled="!isValid"
            >
              {{ $t("confirmOption") }}
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CancelSubscription",
  props: {
    id: {
      type: Number
    }
  },
  data() {
    return {
      dialog: false,
      isValid: false,
      formResponse: {}
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("user/cancelSubscription", this.id);
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss">
.plan-actions {
  border-top: 1px solid #e9e9e9;
  .main-text {
    align-items: center;
    color: #27aae1 !important;
    cursor: default;
    display: flex;
    font-size: 11px;
    font-weight: 600;
    height: auto;
    justify-content: flex-end;
    padding-right: 0 !important;
    > .v-btn__content {
      display: inline !important;
      cursor: pointer !important;
      opacity: 1 !important;
      flex: none !important;
      font-weight: 600 !important;
    }
  }
}
</style>
