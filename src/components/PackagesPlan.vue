<template>
  <v-card flat class="packages-plan pl-8 pr-8 pt-14 pb-14">
    <div class="price d-flex align-end">
      <div>{{ plan.price }}</div>
      <div>/month</div>
    </div>
    <div class="type mt-3">
      <div class="name" :style="`color: ${plan.color}`">
        {{ plan.name }}
      </div>
      <div class="description">
        {{ plan.plan_description }}
      </div>
    </div>

    <v-divider class="mb-10 mt-10"></v-divider>

    <div class="features">
      <div class="feature pb-5" v-for="(feature, i) in plan.features" :key="i">
        <v-icon size="25" :color="plan.color">
          mdi-check
        </v-icon>
        <span class="text">
          {{ feature }}
        </span>
      </div>
    </div>

    <div class="action mt-6">
      <v-btn
        color="primary"
        height="48"
        width="70%"
        :elevation="false"
        class="font-weight-medium full-w"
        @click="getTokenId()"
      >
        Upgrade
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
  name: "PackagesPlan",

  props: {
    plan: {
      type: Object,
    },
  },
  data() {
    return {
      planToken: "",
    };
  },
  methods: {
    async processStripe() {
      try {
        const stripe = await loadStripe(`${process.env.VUE_APP_STRIPE_KEY}`);
        stripe.redirectToCheckout({
          sessionId: this.planToken,
        });
      } catch (err) {
        console.log(err);
      }
    },
    getTokenId() {
      this.$http
        .post(`${process.env.VUE_APP_API_BASE}/plan`, {
          plan_id: this.plan.id,
          payment_method: "credit card",
        })
        .then((res) => {
          this.planToken = res.data.data.id;
        })
        .finally(() => {
          this.processStripe();
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.packages-plan {
  border-radius: 16px !important;
}
.price {
  line-height: 1;
  > div:first-child {
    font-weight: 600;
    font-size: 50px;
    color: #081f32;
  }

  > div:last-child {
    font-weight: normal;
    font-size: 16px;
    color: #a5adbb;
  }
}

.type {
  .name {
    font-weight: 600;
    font-size: 28px;
  }
  .description {
    font-weight: normal;
    font-size: 16px;
    color: #92969d;
  }
}

.features {
  .feature {
    .text {
      font-weight: normal;
      font-size: 16px;
      color: #6e798c;
    }
  }
}
</style>
