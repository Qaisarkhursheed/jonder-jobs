<template>
  <v-row class="layout-content mt-4 flex-shrink-1 flex-grow-1">
    <v-col cols="6">
      <v-card class="pricing-box pa-8 pb-4">
        <v-card-title>Bearbeiten Sie Ihr Paymant</v-card-title>
        <v-card-text>
          <div class="form-group">
            <label>Kreditkartennummer</label>
            <v-text-field
              v-mask="'####-####-####-####'"
              v-model="paymentDetails.card_number"
              label="XXXX-XXXX-XXXX-XXXX"
              type="text"
              dense
              outlined
              solo
              flat
              hide-details
              background-color="white"
            ></v-text-field>
          </div>
          <div class="form-group">
            <label>Karteninhaber</label>
            <v-text-field
              v-model="paymentDetails.card_name"
              label="Max Mustermann"
              type="text"
              dense
              outlined
              solo
              flat
              hide-details
              background-color="white"
            ></v-text-field>
          </div>
          <v-row>
            <v-col cols="6">
              <div class="form-group">
                <label>Monat/Jahr</label>
                <v-text-field
                  v-model="paymentDetails.card_expiration"
                  v-mask="'##/####'"
                  label="MM/YYYY"
                  type="text"
                  dense
                  outlined
                  solo
                  flat
                  hide-details
                  background-color="white"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="form-group">
                <label>CVV</label>
                <v-text-field
                  v-model="paymentDetails.card_cvv"
                  label="***"
                  type="text"
                  dense
                  outlined
                  solo
                  flat
                  hide-details
                  background-color="white"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <div>
            <v-switch
              v-model="creditcard"
              inset
              hide-details
              label="Karteninformationen speichern"
            ></v-switch>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="pricing-box pa-8 pb-4">
        <v-card-text class="price-summary">
          <div class="d-flex">
            <div class="flex-grow-1">Product</div>
            <div class="text-right text-color-primary-blue-dark">Weblink</div>
          </div>
          <div class="d-flex">
            <div class="flex-grow-1">Kosten</div>
            <div class="text-right text-color-primary-blue-dark">$9.99</div>
          </div>
          <div class="d-flex">
            <div class="flex-grow-1">Umsatzsteuer</div>
            <div class="text-right text-color-primary-blue-dark">$1,89</div>
          </div>
          <v-divider></v-divider>
          <div class="d-flex">
            <strong class="flex-grow-1">Gesamtsumme</strong>
            <strong class="text-right text-color-primary-blue-dark">$11,88</strong>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn  block color="dark-blue">Jetzt bezahien</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    paymentDetails: {
      card_number: "",
      card_name: "",
      card_expiration: "",
      card_cvv: ""
    }
  })
};
</script>

<style scoped lang="scss">
.pricing-box {
  box-shadow: 8px 0 34px 0 rgba(0, 0, 0, 0.03) !important;
}

.form-group {
  margin-bottom: 10px;

  > label {
    font-weight: bold;
  }
}

.price-summary {
  font-size: 16px;

  .d-flex {
    padding: 5px 0;
  }

  hr {
    margin: 10px 0;
    border-color: $light-grey;
  }
}
</style>