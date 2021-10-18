<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close('abort')"
    persistent
    max-width="750px"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <v-card flat class="wrap upgrade-dialog">
      <div class="mb-4" style="font-size: 28px; font-weight: 600;">
        {{ $t("choosePlan") }}
      </div>

      <div
        class="options mb-5"
        :class="{
          deactive: userPlan.length && isPlanActive(plan.id),
          active: form.active_plan === plan.id
        }"
        v-for="plan in data"
        :key="plan.id"
      >
        <v-btn
          v-if="plan.plan_type === 'jobseeker_plan'"
          @click="selectPlan(plan)"
          min-height="104"
          class="upgrade-option text-left pa-5"
          block
        >
          <v-row>
            <v-col cols="auto">
              <v-img
                class="upgrade-icon mr-0"
                :src="require(`@/assets/plan-icons/${plan.plan_slug}.svg`)"
              ></v-img>
            </v-col>

            <v-col cols="cols">
              <template v-if="!userPlan.length || !isPlanActive(plan.id)">
                <span class="upgrade-title"> {{ plan.name }} </span>
                <p class="upgrade-text mt-2 mb-0">
                  {{ plan.plan_description }}
                </p>
              </template>

              <UserPlanDescription
                :plan="getUserPlan(plan.id)[0]"
                class="user-plan-desc"
                v-else
              />
            </v-col>

            <v-col
              cols="auto"
              v-if="!userPlan.length || !isPlanActive(plan.id)"
            >
              <span class="upgrade-price primary--text"
                >{{ plan.price }}&euro;</span
              >
            </v-col>
          </v-row>
        </v-btn>
      </div>

      <div class="text-right">
        <v-btn @click="close" height="56" text class="mr-4">
          {{ $t("cancel") }}
        </v-btn>
        <v-btn
          :disabled="!planId"
          @click="next()"
          :loading="isLoading"
          color="primary"
          height="56"
          class="px-10"
        >
          {{ $t("continue") }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "@/store";
import { loadStripe } from "@stripe/stripe-js";
import { mapGetters } from "vuex";
import UserPlanDescription from "../../components/user/UserPlanDescription";

export default {
  components: { UserPlanDescription },

  props: {
    active: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "ok"
    },
    edit: {
      type: [Object, Boolean]
    }
  },

  data() {
    return {
      data: "",
      isLoading: false,
      planId: null,
      stripeId: null,
      form: {
        active_plan: ""
      }
    };
  },

  created() {
    if (this.edit) {
      this.populate();
    }
    this.data = this.$store.getters["user/plans"]("jobseeker_plan");
  },

  methods: {
    close(type) {
      this.$emit("close", type);
    },
    selectPlan(plan) {
      if (!this.userPlan.length || !this.isPlanActive(plan.id)) {
        this.form.active_plan = plan.id;
        this.planId = plan.id;
      }
    },
    async processStripe() {
      if (this.stripeId && this.stripeId.length > 5) {
        const stripe = await loadStripe(process.env.VUE_APP_STRIPE_KEY);
        stripe.redirectToCheckout({
          sessionId: this.stripeId
        });
      } else {
        this.isLoading = false;
      }
    },
    next() {
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API_BASE}/plan`, {
          plan_id: this.planId,
          payment_method: "credit card"
        })
        .then(res => {
          this.stripeId = res.data.data.id;
          this.processStripe();
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
          alert("Error");
        });
    },

    save() {
      if (this.edit) {
        store.dispatch("user/updateUser", {
          id: this.edit.id,
          payload: this.form
        });
      } else {
        console.log();
      }
      this.$emit("close", 1);
    },
    populate() {
      this.form.active_plan = this.edit.active_plan;
      this.planId = this.edit.active_plan;
    }
  },
  computed: {
    ...mapGetters({
      userPlan: "user/userPlan",
      getUserPlan: "user/getUserPlan",
      isPlanActive: "user/isPlanActive"
    })
  }
};
</script>

<style lang="scss" scoped>
.options {
  .v-btn {
    height: auto;
    letter-spacing: unset;
  }

  .row {
    align-items: center;
  }

  &.active {
    .v-btn {
      background-color: rgba(39, 170, 225, 0.15);
      border-color: $primary-blue-dark;
    }
  }

  &.deactive {
    cursor: default;
  }

  .upgrade-option {
    background: white;
    border: 1px solid #e9e9e9;
  }

  .upgrade-title {
    font-size: 16px;
    font-weight: 700;
    white-space: normal;
  }

  .upgrade-text {
    font-size: 11px;
    white-space: normal;
    word-break: break-word;
  }

  .upgrade-price {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
