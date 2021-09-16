<template>
  <div class="products-plan">
    <div class="heading pb-6">
      1 {{ $t("chooseYourPlan") }}
    </div>
    <v-row class="d-flex">
      <v-col v-for="(card, i) in cards" :key="i" flat>
        <ProductsPlanCard :details="card" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// Products payment plan is also, by design, available
// on dashboard page

import ProductsPlanCard from "@/components/company/ProductsPlanCard.vue";

export default {
  name: "ProductsPlan",

  components: {
    ProductsPlanCard
  },

  data() {
    return {
      selected: "",
      cards: [
        {
          type: "free",
          title: "Lorem ipsum",
          desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
          price: "Free",
          icon: "account-multiple-outline",
          color: "#9F900B"
        },
        {
          type: "price_1",
          title: "Lorem ipsum",
          desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
          price: "$400",
          icon: "account-multiple-plus",
          color: "#018D28"
        },
        {
          type: "price_2",
          title: "Lorem ipsum",
          desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
          price: "$800",
          icon: "domain",
          color: "#031594"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.products-plan {
  font-family: $open-sans;
}

.heading {
  font-weight: 600;
  font-size: 24px;
  color: #0253b3;
}
</style>
