<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close('abort')"
    persistent
    width="750px"
    max-width="750px"
  >
    <v-card flat class="rounded-lg wrap upgrade-dialog">
      <div class="modal-title">
        Wähle einen Premiumplan
      </div>

      <div class="options" v-for="plan in data" :key="plan.id">
        <v-btn
          v-if="plan.plan_type === 'jobseeker_paln'"
          @click="(form.active_plan = plan.id), savePlanId(plan.id)"
          v-bind:color="form.active_plan == plan.id ? 'primary' : ''"
          height="104"
          class="upgrade-option"
        >
          <v-img
            class="upgrade-icon"
            :src="require('@/assets/icons/top-rated.svg')"
          ></v-img>

          <div>
            <span class="upgrade-title"> {{ plan.name }} </span>
            <p class="upgrade-text">
              {{ plan.plan_description }}
            </p>
            <span class="updgrade-price">{{ plan.price }}€</span>
          </div>
        </v-btn>
      </div>

      <div class="buttons">
        <v-btn
          @click="close"
          height="56"
          class="mt-16 font-weight-medium upgrade-btn"
          style="margin-right: 20px;"
        >
          {{ $t("general.cancel") }}
        </v-btn>
        <v-btn
          @click="next()"
          :loading="isLoading"
          color="primary"
          height="56"
          width="178"
          class="mt-16 font-weight-medium upgrade-btn"
        >
          Next
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "@/store";
import { loadStripe } from "@stripe/stripe-js";
// import Vue from "vue";
// Vue.prototype.$http = axios;

export default {
  name: "UpgradePlanModal",

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "ok",
    },
    edit: {
      type: [Object, Boolean],
    },
  },
  data() {
    return {
      data: "",
      isLoading: false,
      planId: null,
      stripeId: null,
      form: {
        active_plan: "",
      },
    };
  },
  created() {
    if (this.edit) {
      this.populate();
    }
    this.fetchPlans();
  },
  methods: {
    close(type) {
      this.$emit("close", type);
    },
    savePlanId(id) {
      this.planId = id;
      console.log(this.planId);
    },
    async processStripe() {
      if (this.stripeId && this.stripeId.length > 5) {
        this.isLoading = true;
        const stripe = await loadStripe(process.env.VUE_APP_STRIPE_KEY);
        stripe.redirectToCheckout({
          sessionId: this.stripeId,
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
            payment_method: "credit card",
          })
          .then((res) => {
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
          payload: this.form,
        });
      } else {
        console.log();
      }
      this.$emit("close", 1);
    },
    populate() {
      this.form.active_plan = this.edit.active_plan;
    },
    fetchPlans() {
      const baseURI = `${process.env.VUE_APP_API_BASE}/plans/0/100`;
      this.$http.get(baseURI).then((res) => {
        this.data = res.data.plans;
        console.log(this.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  font-family: $inter !important;
}

.modal-title {
  padding: 40px;
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
}
.options {
  margin: 0 40px;

  .upgrade-option {
    background: white;
    border: 1px solid #e9e9e9;
    margin-bottom: 24px;
    outline: none;
    flex: 0 0 100%;
    box-shadow: none;
    text-align: left;
  }

  .upgrade-text {
    font-size: 11px;
    line-height: 12px;
    padding-top: 9px;
    max-width: 590px;
    white-space: normal;
    word-break: break-word;
  }
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 40px;
}
</style>
