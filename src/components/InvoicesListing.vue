<template>
  <div class="invoice-listing">
    <div v-if="!invoices.length">
      <i>{{ $t("noDataAvailable") }}</i>
    </div>

    <v-row v-for="item in invoices" :key="item.id" class="invoice-row py-1">
      <v-col>
        <div class="invoice-number">
          {{ $t("numberOfBill") }}: {{ item.invoice_number }}
        </div>
        <div class="invoice-date">
          {{ $t("dateOfInvoice") }}:
          {{ item.transaction_completed_at | moment("DD.MM.YYYY / HH:mm") }}
        </div>
      </v-col>
      <v-col cols="auto d-flex align-center">
        <v-progress-circular
          v-if="downloading == item.id"
          indeterminate
          size="25"
          color="primary"
        ></v-progress-circular>

        <v-img
          v-else
          class="hover-pointer"
          :src="require('@/assets/icons/download.svg')"
          @click="downloadInvoice(item)"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    invoices: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      downloading: false
    };
  },

  methods: {
    downloadInvoice(item) {
      this.downloading = item.id;
      this.$store
        .dispatch("invoices/downloadInvoice", {
          id: item.id,
          number: item.invoice_number
        })
        .finally(() => (this.downloading = false));
    }
  }
};
</script>

<style lang="scss">
.invoice-listing {
  max-height: 290px;
  padding-right: 15px;
  overflow-x: hidden;
  overflow-y: auto;

  .invoice-row {
    border-bottom: 1px solid #dedede;

    &:last-of-type {
      border-bottom: none !important;
    }

    .invoice-number {
      font-weight: 500;
      font-size: 13px;
      color: #000000;
      opacity: 0.7;
    }

    .invoice-date {
      font-weight: 500;
      font-size: 16px;
      color: #101010;
    }
  }
}
</style>
