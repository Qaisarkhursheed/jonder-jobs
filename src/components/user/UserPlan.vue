<template>
  <v-card flat class="user-plan">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>{{ $t("subscriptionPlan") }}</h2>
        </v-col>
      </v-row>
      <v-row class="mb-8">
        <v-col cols="12">
          <p>{{ $t("yourCurrentPlanDescription") }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <UserPlanDescription
            :plan="userPlan[0]"
            :border-plan="borderPlan"
            :payment-info="paymentInfo"
            :payment-action="paymentAction"
          />
        </v-col>
      </v-row>
    </v-container>
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
