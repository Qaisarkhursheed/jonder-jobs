<template>
  <div class="user-plan">
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
          <UserPlanDescription :border-plan="borderPlan" :payment-info="paymentInfo"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserPlanDescription from './UserPlanDescription';

export default {
  name: "UserPlan",
  components: {UserPlanDescription},
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
    }),
    updateDate() {
      const date = new Date(this.userPlan.updated_at); // Now
      date.setDate(date.getDate() + this.userPlan.days_valid);
      return date;
    }
  }
};
</script>

<style lang="scss" scoped>
.user-plan {
  background-color: #fff;
  border-radius: 18px;
  padding: 40px;
}
</style>
