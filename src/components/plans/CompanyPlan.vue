<template>
  <v-card flat class="packages-plan d-flex flex-column full-h">
    <div class="price d-flex align-end">
      <div>{{ plan.price }}&euro;</div>
      <div>/{{ $t("month") }}</div>
    </div>
    <div class="type mt-3">
      <div class="name" :style="`color: ${color}`">
        {{ plan.name }}
      </div>
      <div class="description">
        {{ plan.plan_description }}
      </div>
    </div>

    <v-divider class="mb-10 mt-10"></v-divider>

    <div class="features flex-grow-1">
      <div class="feature pb-5" v-for="(feature, i) in features" :key="i">
        <v-icon size="25" :color="color">
          mdi-check
        </v-icon>
        <span class="text">
          {{ feature }}
        </span>
      </div>
    </div>

    <div class="action mt-6">
      <v-btn
        :color="
          !userPlan.length || userPlan[0].id !== plan.id
            ? 'primary'
            : 'grey lighten-3'
        "
        height="48"
        block
        :loading="isLoading"
        @click="
          !userPlan.length || userPlan[0].id !== plan.id ? getTokenId() : null
        "
      >
        {{
          !userPlan.length || userPlan[0].id !== plan.id
            ? $t("upgrade")
            : $t("yourCurrentPlan")
        }}
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import { mapGetters } from "vuex";

export default {
  props: {
    plan: {
      type: Object
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      planToken: "",
      isLoading: false
    };
  },
  methods: {
    async processStripe() {
      try {
        const stripe = await loadStripe(`${process.env.VUE_APP_STRIPE_KEY}`);
        stripe.redirectToCheckout({
          sessionId: this.planToken
        });
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    getTokenId() {
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API_BASE}/plan`, {
          plan_id: this.plan.id,
          payment_method: "credit card"
        })
        .then(res => {
          this.planToken = res.data.data.id;
          this.processStripe();
        })
        .catch(error => {
          this.isLoading = false;
          alert(error);
        });
    }
  },
  computed: {
    ...mapGetters({
      userPlan: "user/userPlan"
    }),
    features() {
      return JSON.parse(this.plan.benefits);
    }
  }
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
