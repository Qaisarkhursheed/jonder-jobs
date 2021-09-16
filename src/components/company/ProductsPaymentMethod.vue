<template>
  <div class="products-payment-method">
    <div class="heading">2 {{ $t("chooseYourPaymentMethod") }}</div>
    <v-row class="d-flex">
      <v-radio-group v-model="selected" style="width: 100%;">
        <v-col v-for="(method, i) in methods" :key="i" class="pa-4" flat>
          <v-radio class="method-card" active-class="active" :value="method">
            <template v-slot:label>
              <div style="margin: 0 auto;">
                <v-icon size="45px" color="#9EA0A5" class="text-center">
                  mdi-credit-card-outline
                </v-icon>
              </div>
            </template>
          </v-radio>
        </v-col>
      </v-radio-group>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProductsPaymentMethod",

  data() {
    return {
      selected: "",
      methods: [
        {
          type: "paypal"
        },
        {
          type: "mastercard",
          icon: "credit-card-outline"
        },
        {
          type: "western union"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.method-card {
  position: relative;
  height: 78px;
  border-radius: 10px;
  background: #fff;
}
.active {
  transition: filter 0.3s;
  filter: drop-shadow(0px 4px 23px rgba(2, 83, 179, 0.2));
}
.heading {
  font-weight: 600;
  font-size: 24px;
  color: #0253b3;
}
</style>
