<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close('abort')"
    persistent
    :width="$store.getters.screenSize ? '95%' : '750px'"
    max-width="750px"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <v-card flat class="rounded-lg wrap upgrade-dialog modal-plan">
      <div class="modal-title">
        {{ $t("choosePlan") }}
      </div>

      <div
        class="options"
        :class="{
          deactive: userPlan.length && isPlanActive(plan.id),
          active: form.active_plan === plan.id
        }"
        v-for="plan in data"
        :key="plan.id"
      >
        <v-btn
          v-if="plan.plan_type === 'jobseeker_paln'"
          @click="
            !userPlan.length || !isPlanActive(plan.id)
              ? ((form.active_plan = plan.id), savePlanId(plan.id))
              : null
          "
          v-bind:color="form.active_plan === plan.id ? 'primary' : ''"
          min-height="104"
          :height="$store.getters.screenSize < 500 ? 'auto' : '104'"
          class="upgrade-option justify-start pa-2"
        >
          <v-img
            class="upgrade-icon"
            :src="require('@/assets/icons/top-rated.svg')"
          ></v-img>

          <div
            class="upgrade-default"
            v-if="!userPlan.length || !isPlanActive(plan.id)"
          >
            <span class="upgrade-title"> {{ plan.name }} </span>
            <p class="upgrade-text">
              {{ plan.plan_description }}
            </p>
            <span class="updgrade-price">{{ plan.price }}&euro;</span>
          </div>
          <UserPlanDescription :plan="getUserPlan(plan.id)[0]" class="user-plan-desc" v-else />
        </v-btn>
      </div>

      <div class="buttons">
        <v-btn
          @click="close"
          height="56"
          class="mt-16 font-weight-medium upgrade-btn"
          style="margin-right: 20px;"
        >
          {{ $t("cancel") }}
        </v-btn>
        <v-btn
          @click="next()"
          :loading="isLoading"
          color="primary"
          height="56"
          width="178"
          class="mt-16 font-weight-medium upgrade-btn dark-blue"
        >
          {{ $t("confirmOption") }}
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
// import Vue from "vue";
// Vue.prototype.$http = axios;

export default {
  name: "UpgradePlanModal",
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
    this.data = this.$store.getters["user/plans"]("jobseeker_paln");
  },
  methods: {
    close(type) {
      this.$emit("close", type);
    },
    savePlanId(id) {
      this.planId = id;
    },
    async processStripe() {
      if (this.stripeId && this.stripeId.length > 5) {
        this.isLoading = true;
        const stripe = await loadStripe(process.env.VUE_APP_STRIPE_KEY);
        stripe.redirectToCheckout({
          sessionId: this.stripeId
        });
      } else {
        this.isLoading = false;
      }
    },
    next() {
      if (this.planId && this.planId > 0) {
        this.isLoading = true;
        this.$http
          .post(`${process.env.VUE_APP_API_BASE}/plan`, {
            plan_id: this.planId,
            payment_method: "credit card"
          })
          .then(res => {
            this.stripeId = res.data.data.id;
          })
          .finally(() => {
            this.isLoading = false;
            this.processStripe();
          });
      } else {
        alert("Please select the plan!");
        this.isLoading = false;
      }
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
.dialog {
  font-family: $inter !important;
}
.modal-plan {
  padding: 36px !important;
}
.upgrade-default,
.user-plan-desc {
  padding-left: 18px;
  width: calc(100% - 30px);
}
.upgrade-default {
  white-space: normal;
}
.modal-title {
  padding-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
}
.options {
  &.deactive {
    cursor: default;
  }
  &.active {
    .updgrade-price {
      color: #fff !important;
    }
  }

  .upgrade-option {
    background: white;
    border: 1px solid #e9e9e9;
    margin-bottom: 24px;
    outline: none;
    flex: 0 0 100%;
    box-shadow: none;
    text-align: left;
    .v-btn__content {
      width: 100% !important;
    }
    .upgrade-icon {
      margin-right: 0 !important;
    }
  }

  .upgrade-text {
    font-size: 11px;
    line-height: 12px;
    padding-top: 9px;
    max-width: 590px;
    white-space: normal;
    word-break: break-word;
  }
  .updgrade-price {
    bottom: 0;
    font-size: 18px;
    font-weight: 700;
    color: $primary-blue-dark;
    position: absolute;
    right: 0;
  }
  button {
    width: 100%;
    .v-btn__content {
      justify-content: flex-start;
    }
  }
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
</style>
