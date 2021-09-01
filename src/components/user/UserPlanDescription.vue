<template>
  <div class="plan-description" :class="{ 'border-plan': borderPlan }">
    <h3>{{ userPlan.name }}</h3>
    <div>
      {{ userPlan.price }}&euro; / {{ userPlan.days_valid }}
      {{ $t("general.daysValid") }}
    </div>
    <div>
      {{ $t("general.renewsOn") }}
      {{ userPlan.start_timestamp | moment("MMM DD, YYYY") }}
    </div>
    <div>
      {{ $t("general.validUntil") }}
      {{ userPlan.end_timestamp | moment("MMM DD, YYYY") }}
    </div>
    <div class="payment-info mt-6 pt-4" v-if="paymentInfo">
      <span
        class="carten-abenden"
        v-if="$route.name !== 'CompanyPackagesPricing'"
        @click="$router.push({ name: 'CompanyPackagesPricing' })"
      >
        {{ $t("general.changePackage") }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "UserPlanDescription",
  props: {
    paymentInfo: {
      type: Boolean
    },
    borderPlan: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      userPlan: "user/userPlan"
    })
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
      font-weight: 600;
      > span {
        cursor: pointer;
      }
    }
  }
}
</style>
