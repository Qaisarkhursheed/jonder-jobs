<template>
  <div class="plan-description" :class="{ 'border-plan': borderPlan }">
    <h3>{{ plan.name }}</h3>
    <div>
      {{ plan.price }}&euro; / {{ plan.days_valid }}
      {{ $t("daysValid") }}
    </div>
    <div>
      {{ $t("renewsOn") }}
      {{ plan.start_timestamp | moment("MMM DD, YYYY") }}
    </div>
    <div>
      {{ $t("validUntil") }}
      {{ plan.end_timestamp | moment("MMM DD, YYYY") }}
    </div>
    <div class="payment-info mt-6 pt-4">
      <span
        class="carten-abenden"
        v-if="paymentInfo && $route.name !== 'CompanyPackagesPricing'"
        @click="$router.push({ name: 'CompanyPackagesPricing' })"
      >
        {{ $t("changePackage") }}
      </span>
      <span
        class="payment-action"
        @click="$store.dispatch('user/cancelSubscription', plan.id)"
      >
        {{ $t("cancelSubscription") }}
      </span>
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
    borderPlan: {
      type: Boolean,
      default: false
    },
    plan: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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
    }
  }
}
</style>
