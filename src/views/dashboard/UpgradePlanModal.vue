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
        Choose upgrade plan
      </div>

      <div class="options">
        <v-btn
          @click="(form.active_plan = '35'), savePlanId(1)"
          v-bind:color="form.active_plan == '35' ? 'primary' : ''"
          height="104"
          class="upgrade-option"
        >
          <v-img
            class="upgrade-icon"
            :src="require('@/assets/icons/top-rated.svg')"
          ></v-img>

          <div>
            <span class="upgrade-title"> {{ data[0].name }} </span>
            <p class="upgrade-text">
              Some random description just for testing purposes.........
            </p>
            <span class="updgrade-price">{{ data[0].price }}$</span>
          </div>
        </v-btn>

        <v-btn
          @click="(form.active_plan = '10'), savePlanId(2)"
          v-bind:color="form.active_plan == '10' ? 'primary' : ''"
          height="104"
          class="upgrade-option"
        >
          <v-img
            class="upgrade-icon"
            :src="require('@/assets/icons/medal.svg')"
          ></v-img>

          <div>
            <span class="upgrade-title">
              {{ data[1].name }}
            </span>
            <p class="upgrade-text">
              {{ data[1].plan_description }}
            </p>
            <span class="updgrade-price">{{ data[1].price }}$</span>
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
import axios from "axios";
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
      planId: null,
      // tokenId: "",
      form: {
        active_plan: "",
      },
    };
  },
  created() {
    if (this.edit) {
      this.populate();
    }
    this.fetchUsers();
  },
  methods: {
    close(type) {
      this.$emit("close", type);
    },
    savePlanId(id) {
      this.planId = id;
      console.log(this.planId);
    },
    next() {
      axios
        .post(`${process.env.VUE_APP_API_BASE}/api/v1/plan`, {
          plan_id: this.planId,
          payment_method: "credit card",
        })
        .then(function(res) {
          // this.tokenId = res.data.data.id;
          console.log(res.data.data.id);
          console.log(res);
          async function processStripe() {
            const resolved = res.data.data.id;
            const stripe = await loadStripe(
              `${process.env.STRIPE_PUBLISHABLE_KEY}`
            );
            stripe.redirectToCheckout({
              sessionId: resolved,
            });
          }
          processStripe();
        });
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
    fetchUsers() {
      const baseURI = `${process.env.VUE_APP_API_BASE}/api/v1/plans/0/2`;
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
    word-break: break-all;
    padding-top: 9px;
  }
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 40px;
}
</style>
