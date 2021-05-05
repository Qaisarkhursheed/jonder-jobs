<template>
  <div class="products-payment-finish">
    <div class="heading">
      3 Finish Payment
    </div>
    <v-row class="no-gutters">
      <v-col cols="7" class="payment-form">
        <v-card class="pa-15 rounded-lg">
          <div>
            <label>{{paymentForm.kreditkartennummer.label}}</label>
            <v-text-field
              class="rounded-lg mt-3"
              style="height: 50px;"
              height="100%"
              type="text"
              :label="paymentForm.kreditkartennummer.label"
              outlined
              flat
              dense
              solo
              background-color="#fff"
              v-model="paymentForm.kreditkartennummer.value">
            </v-text-field>
          </div>
          <div>
            <label>{{paymentForm.karteninhaber.label}}</label>
            <v-text-field
              class="rounded-lg mt-3"
              style="height: 50px;"
              height="100%"
              type="text"
              :label="paymentForm.karteninhaber.label"
              outlined
              flat
              dense
              solo
              background-color="#fff"
              v-model="paymentForm.karteninhaber.value">
            </v-text-field>
          </div>
          <v-row class="no-gutters d-flex">
            <v-card cols="6">
              <div>
                <label>{{paymentForm.karteninhaber.label}}</label>
                <v-text-field
                  class="rounded-lg mt-3"
                  style="height: 50px;"
                  height="100%"
                  type="text"
                  :label="paymentForm.karteninhaber.label"
                  outlined
                  flat
                  dense
                  solo
                  background-color="#fff"
                  v-model="paymentForm.karteninhaber.value">
                </v-text-field>
              </div>
            </v-card>
            <v-card cols="6">
              <div>
                <label>{{paymentForm.karteninhaber.label}}</label>
                <v-text-field
                  class="rounded-lg mt-3"
                  style="height: 50px;"
                  height="100%"
                  type="text"
                  :label="paymentForm.karteninhaber.label"
                  outlined
                  flat
                  dense
                  solo
                  background-color="#fff"
                  v-model="paymentForm.karteninhaber.value">
                </v-text-field>
              </div>
            </v-card>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="5" class="payment-details">
        <v-card>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'ProductsPaymentFinish',

  data() {
    return {
      paymentForm: {
        kreditkartennummer: {
          label: 'Kreditkartennummer',
          value: 'XXXX-XXXX-XXXX-XXXX'
        },
        karteninhaber: {
          label: 'Karteninhaber',
          value: 'Max Mustermann'
        }
      },
      paymentDetails: {}
    }
  }
};

</script>

<style lang="scss" scoped>

  .products-payment-finish {
    font-family: $open-sans;
  }
  .heading {
    font-weight: 600;
    font-size: 24px;
    color: #0253B3;  
  }
  .payment-form {

  }
  .payment-details {

  }
</style>