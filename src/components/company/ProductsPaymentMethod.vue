<template>
  <div class="products-payment-method">
    <div class="heading">
      2 Choose your payment method
    </div>
    <v-row class="d-flex">
      <v-radio-group v-model="selected" style="width: 100%;">
        <v-col v-for="(method, i) in methods" :key="i"
               class="pa-4"
               flat>
          <v-radio class="method-card"
                   :value="method">
            <template v-slot:label>
              <div style="margin: 0 auto;">
                <v-icon size="45px"
                        color="#9EA0A5"
                        class="text-center">
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
  name: 'ProductsPaymentMethod',

  data() {
    return {
      selected: '',
      methods: [
        {
          type: 'paypal',
        },
        {
          type: 'mastercard',
          icon: 'credit-card-outline'
        },
        {
          type: 'western union',
        }
      ]
    }
  },
};

</script>

<style lang="scss" scoped>
  .method-card {
    position: relative;
    height: 78px;
    border-radius: 10px;
    background: #fff;
  }
  .heading {
    font-weight: 600;
    font-size: 24px;
    color: #0253B3;  
  }
</style>