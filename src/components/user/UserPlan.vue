<template>
  <v-card flat class="user-plan">
    <h2>{{ $t("subscriptionPlan") }}</h2>
    <p>{{ $t("yourCurrentPlanDescription") }}</p>

    <template v-if="!userPlan || !userPlan[0]">
      <div>
        {{ $t("noActivePlan") }}
      </div>

      <router-link
        v-if="$route.name != 'EmployerPackagesPricing'"
        :to="{ name: 'EmployerPackagesPricing' }"
        style="text-decoration: none"
      >
        {{ $t("upgradeAccount") }}
      </router-link>
    </template>

    <UserPlanDescription
      v-else
      :plan="userPlan[0]"
      :border-plan="borderPlan"
      :payment-info="paymentInfo"
      :payment-action="paymentAction"
    />
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import UserPlanDescription from "./UserPlanDescription";

export default {
  name: "UserPlan",
  components: { UserPlanDescription },
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
    }
  },
  computed: {
    ...mapGetters({
      userPlan: "user/userPlan"
    })
  }
};
</script>

<style lang="scss" scoped></style>
