<template>
  <v-alert
    v-if="shouldShow"
    class="response-alert"
    :type="response.success ? 'success' : 'error'"
    :icon="false"
    text
  >
    <p if="message" class="ma-0">{{ message }}</p>
    <template v-if="response.errors">
      <ul v-for="[key, value] of Object.entries(response.errors)" :key="key">
        <template v-if="Array.isArray(value)">
          <li v-for="(err, index) in value" :key="index">
            {{ err }}
          </li>
        </template>
      </ul>
    </template>
  </v-alert>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
      required: false
    },
    hideErrors: {
      type: Boolean,
      default: false
    },
    hideSuccess: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isEmpty() {
      return !this.response || Object.keys(this.response).length === 0;
    },

    shouldShow() {
      if (this.isEmpty) {
        return false;
      }

      if (this.response.success && this.hideSuccess) {
        return false;
      }

      if (!this.response.success && this.hideErrors) {
        return false;
      }

      return true;
    },

    message() {
      return (
        this.response.message || (this.response.success ? "Erfolg!" : "Fehler!")
      );
    }
  }
};
</script>

<style lang="scss">
.response-alert {
  border-radius: 10px !important;
  text-align: left !important;

  .v-icon {
    align-self: center;
  }
}
</style>
