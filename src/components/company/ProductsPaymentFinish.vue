<template>
  <div class="products-payment-finish">
    <div class="heading pb-6">
      3 {{ $t("finishPayment") }}
    </div>
    <v-row>
      <v-col cols="7" class="payment-form">
        <v-card class="pa-15 rounded-lg" flat>
          <div>
            <label>{{ paymentForm.creditCardNumber.label }}</label>
            <v-text-field
              class="rounded-lg mt-3"
              style="height: 50px;"
              height="100%"
              type="text"
              :label="paymentForm.creditCardNumber.label"
              outlined
              flat
              dense
              solo
              background-color="#fff"
              v-model="paymentForm.creditCardNumber.value"
            >
            </v-text-field>
          </div>
          <div>
            <label>{{ paymentForm.cardHolder.label }}</label>
            <v-text-field
              class="rounded-lg mt-3"
              style="height: 50px;"
              height="100%"
              type="text"
              :label="paymentForm.cardHolder.label"
              outlined
              flat
              dense
              solo
              background-color="#fff"
              v-model="paymentForm.cardHolder.value"
            >
            </v-text-field>
          </div>
          <div class="no-gutters d-flex">
            <v-card cols="6" flat class="mr-7">
              <div>
                <label>{{ paymentForm.monthYear.label }}</label>
                <v-text-field
                  class="rounded-lg mt-3"
                  style="height: 50px;"
                  height="100%"
                  type="text"
                  :label="paymentForm.monthYear.label"
                  outlined
                  flat
                  dense
                  solo
                  background-color="#fff"
                  v-model="paymentForm.monthYear.value"
                >
                </v-text-field>
              </div>
            </v-card>
            <v-card cols="6" flat>
              <div>
                <label>{{ paymentForm.cvv.label }}</label>
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
                  v-model="paymentForm.cvv.value"
                >
                </v-text-field>
              </div>
            </v-card>
          </div>
        </v-card>
      </v-col>
      <v-col cols="5" class="payment-details">
        <v-card flat class="rounded-lg pa-5">
          <div class="title mb-5">
            {{ $t("paymentDetails") }}
          </div>
          <!--    left hardcoded      -->
          <div class="detail d-flex justify-space-between mb-5">
            <div class="label">{{ paymentDetails.package.label }}</div>
            <div class="value">{{ paymentDetails.package.value }}</div>
          </div>
          <div class="detail d-flex justify-space-between mb-5">
            <div class="label">{{ paymentDetails.costs.label }}</div>
            <div class="value">{{ paymentDetails.costs.value }}</div>
          </div>
          <div class="detail d-flex justify-space-between mb-5">
            <div class="label">{{ paymentDetails.valueAddedTax.label }}</div>
            <div class="value">{{ paymentDetails.valueAddedTax.value }}</div>
          </div>

          <v-divider class="mt-3 mb-5"></v-divider>

          <div class="detail d-flex justify-space-between mb-5">
            <div class="label-final">
              {{ paymentDetails.total.label }}
            </div>
            <div class="value-final">
              {{ paymentDetails.total.value }}
            </div>
          </div>
          <v-card-actions>
            <v-btn
              class="font-weight-bold"
              height="54px"
              width="100%"
              style="border-radius: 10px;"
              elevation="1"
              color="#0253B3"
              dark
            >
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
  name: "ProductsPaymentFinish",

  data() {
    return {
      paymentForm: {
        creditCardNumber: {
          label: "creditCardNumber",
          value: "XXXX-XXXX-XXXX-XXXX"
        },
        cardHolder: {
          label: "cardHolder",
          value: "Max Mustermann"
        },
        monthYear: {
          label: "monthYear",
          value: "Monat/Jahr"
        },
        cvv: {
          label: "cvv",
          value: "***"
        }
      },
      paymentDetails: {
        package: {
          label: "package",
          value: "8 Bewerber"
        },
        costs: {
          label: "costs",
          value: "200,00$"
        },
        valueAddedTax: {
          label: "valueAddedTax",
          value: "38,00$"
        },
        total: {
          label: "total",
          value: "238,00$"
        }
      }
    };
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
  color: #0253b3;
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
    color: #3e3e47;
  }
  .label {
    font-size: 16px;
    color: #9ea0a5;
  }
  .value {
    font-weight: 600;
    font-size: 16px;
    color: #3e3e47;
  }
  .label-final {
    font-size: 16px;
    color: #000000;
  }
  .value-final {
    font-weight: 600;
    font-size: 16px;
    color: #0253b3;
  }
}
</style>
