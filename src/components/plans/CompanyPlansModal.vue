<template>
  <v-dialog
    v-model="dialog"
    @click:outside="dialog = false"
    persistent
    style="z-index: 2222"
    width="100%"
    height="100%"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <CompanyPlans class="pa-3" />
  </v-dialog>
</template>

<script>
import CompanyPlans from "./CompanyPlans";

export default {
  components: { CompanyPlans },

  props: {
    value: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      dialog: this.value
    };
  },

  watch: {
    dialog(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style></style>
