<template>
  <v-card flat class="user-plan">
    <h2>{{ $t("subscriptionPlan") }}</h2>
    <p>{{ $t("yourCurrentPlanDescription") }}</p>

    <UserPlanDescription
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
