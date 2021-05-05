<template>
  <div class="products-payment-finish">
    <div class="heading pb-6">
      3 Finish Payment
    </div>
    <v-row>
      <v-col cols="7" class="payment-form">
        <v-card class="pa-15 rounded-lg" flat>
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
          <div class="no-gutters d-flex">
            <v-card cols="6" flat class="mr-7">
              <div>
                <label>{{paymentForm.karteninhaber2.label}}</label>
                <v-text-field
                  class="rounded-lg mt-3"
                  style="height: 50px;"
                  height="100%"
                  type="text"
                  :label="paymentForm.karteninhaber2.label"
                  outlined
                  flat
                  dense
                  solo
                  background-color="#fff"
                  v-model="paymentForm.karteninhaber2.value">
                </v-text-field>
              </div>
            </v-card>
            <v-card cols="6" flat>
              <div>
                <label>{{paymentForm.cvv.label}}</label>
                <v-text-field
                  class="rounded-lg mt-3"
                  style="height: 50px;"
                  height="100%"
                  type="text"
                  :label="paymentForm.cvv.label"
                  outlined
                  flat
                  dense
                  solo
                  background-color="#fff"
                  v-model="paymentForm.cvv.value">
                </v-text-field>
              </div>
            </v-card>
          </div>
        </v-card>
      </v-col>
      <v-col cols="5" class="payment-details">
        <v-card flat class="rounded-lg pa-5">
          <div class="title mb-5">
            Payment details
          </div>
          <div class="detail d-flex justify-space-between mb-5">
            <div class="label">{{paymentDetails.paket.label}}</div>
            <div class="value">{{paymentDetails.paket.value}}</div>
          </div>
          <div class="detail d-flex justify-space-between mb-5">
            <div class="label">{{paymentDetails.kosten.label}}</div>
            <div class="value">{{paymentDetails.kosten.value}}</div>
          </div>
          <div class="detail d-flex justify-space-between mb-5">
            <div class="label">{{paymentDetails.umsatzsteuer.label}}</div>
            <div class="value">{{paymentDetails.umsatzsteuer.value}}</div>
          </div>

          <v-divider class="mt-3 mb-5"></v-divider>

          <div class="detail d-flex justify-space-between mb-5">
            <div class="label-final">{{paymentDetails.gesamtsumme.label}}</div>
            <div class="value-final">{{paymentDetails.gesamtsumme.value}}</div>
          </div>
          <v-card-actions>
            <v-btn class="font-weight-bold"
              height="54px"
              width="100%"
              style="border-radius: 10px;"
              elevation="1"
              color="#0253B3"
              dark>
              Buy
            </v-btn>
          </v-card-actions>
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
        },
        karteninhaber2: {
          label: 'Karteninhaber',
          value: 'Monat/Jahr'
        },
        cvv: {
          label: 'CVV',
          value: "***"
        }
      },
      paymentDetails: {
        paket: {
          label: 'Paket',
          value: '8 Bewerber'
        },
        kosten: {
          label: 'Kosten',
          value: '200,00$'
        },
        umsatzsteuer: {
          label: 'Umsatzsteuer (19%)',
          value: '38,00$'
        },
        gesamtsumme: {
          label: 'Gesamtsumme',
          value: '238,00$'
        }
      }
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
    label {
      color: #222222;
      font-weight: 600;
    }
  }
  .payment-details {
    .title {
      font-weight: 600;
      font-size: 16px !important;
      color: #3E3E47;
    }
    .label {
      font-size: 16px;
      color: #9EA0A5;
    }
    .value {
      font-weight: 600;
      font-size: 16px;
      color: #3E3E47;
    }
    .label-final {
      font-size: 16px;
      color: #000000;
    }
    .value-final {
      font-weight: 600;
      font-size: 16px;
      color: #0253B3;
    }
  }
</style>