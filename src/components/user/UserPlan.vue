<template>
  <div class="user-plan">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>{{ $t("general.subscriptionPlan") }}</h2>
        </v-col>
      </v-row>
      <v-row class="mb-8">
        <v-col cols="12">
          <p>{{ $t("general.yourCurrentPlanDescription") }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="plan-description">
            <h3>{{ userPlan.name }}</h3>
            <div>{{ userPlan.price }}&euro; / {{ userPlan.days_valid }} {{ $t("general.daysValid") }}</div>
            <div>
              {{ $t("general.renewsOn") }}
              {{ userPlan.start_timestamp | moment("MMM DD, YYYY") }}
            </div>
            <div>
              {{ "valid till" }}
              {{ userPlan.end_timestamp | moment("MMM DD, YYYY") }}
            </div>
            <div class="more-days pb-4"></div>
            <div class="payment-info mt-6">
              <span
                class="carten-abenden"
                v-if="$route.name !== 'CompanyPackagesPricing'"
                @click="$router.push({ name: 'CompanyPackagesPricing' })"
              >
                {{ $t("general.changePackage") }}
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserPlan",
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

  .plan-description {
    border: 1px solid #e9e9e9;
    border-radius: 10px;
    padding: 20px;
    h3 {
      font-weight: 700;
    }
    > div {
      color: #252525;
      font-size: 11px;
      b {
        color: #27aae1;
      }
      &.more-days {
        border-bottom: 1px solid #e9e9e9;
      }
      &.payment-info {
        color: #27aae1 !important;
        font-weight: 600;
        > span {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
