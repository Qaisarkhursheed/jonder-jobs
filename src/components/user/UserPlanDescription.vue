<template>
  <div class="plan-description" :class="{ 'border-plan': borderPlan }">
    <h3>{{ plan.name }}</h3>
    <div>
      {{ plan.price }}&euro; / {{ plan.days_valid }}
      {{ $t("daysValid") }}
    </div>
    <div>
      {{ $t("renewsOn") }}
      {{ plan.start_timestamp | moment("DD MMM, YYYY") }}
    </div>
    <div>
      {{ $t("validUntil") }}
      {{ plan.end_timestamp | moment("DD MMM, YYYY") }}
    </div>
    <div class="payment-info mt-6 pt-4" v-if="paymentInfo || paymentAction">
      <span
        class="carten-abenden"
        v-if="paymentInfo && $route.name !== 'EmployerPackagesPricing'"
        @click="$router.push({ name: 'EmployerPackagesPricing' })"
      >
        {{ $t("changePackage") }}
      </span>
      <v-dialog
        v-if="plan.renewal"
        v-model="dialog"
        class="payment-action"
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
          <h1 class="mb-4 text-center" style="font-size: 28px;">
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
  </div>
</template>

<script>
export default {
  name: "UserPlanDescription",
  props: {
    paymentInfo: {
      type: Boolean
    },
    paymentAction: {
      type: Boolean,
      default: false
    },
    borderPlan: {
      type: Boolean,
      default: false
    },
    plan: {
      type: Object,
      required: true
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
      this.$store.dispatch("user/cancelSubscription", this.plan.id);
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss">
.plan-description {
  order: 1;
  white-space: normal;
  &.border-plan {
    border: 1px solid #e9e9e9;
    border-radius: 10px;
    padding: 20px;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
  }
  > div {
    color: #252525;
    font-size: 11px;
    b {
      color: #27aae1;
    }
    &.payment-info {
      border-top: 1px solid #e9e9e9;
      color: #27aae1 !important;
      display: flex;
      font-weight: 600;
      justify-content: space-between;
      > span {
        cursor: pointer;
      }
      .main-text {
        align-items: center;
        color: #27aae1 !important;
        cursor: default;
        display: flex;
        font-size: 11px;
        font-weight: 600;
        height: auto;
        justify-content: flex-end;
        padding-left: 0 !important;
        padding-right: 0 !important;
        width: auto !important;
        > .v-btn__content {
          display: inline !important;
          cursor: pointer !important;
          opacity: 1 !important;
          flex: none !important;
          font-weight: 600 !important;
        }
      }
    }
  }
}
</style>
