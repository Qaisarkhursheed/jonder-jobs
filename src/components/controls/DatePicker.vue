<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        v-bind="attrs"
        v-on="on"
        :prepend-icon="prependIcon"
        :readonly="readonly"
        :rules="rules"
        :hide-details="hideDetails"
        :style="textFieldStyle"
        outlined
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      @input="menu = false"
      :min="min"
      :max="max"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },

    // TextField
    textFieldStyle: {
      type: [String, Object],
      default: null
    },
    hideDetails: {
      type: [Boolean, String],
      default: "auto"
    },
    prependIcon: {
      type: String,
      required: false
    },
    readonly: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Array,
      default: () => []
    },

    // DatePicker
    min: {
      type: String,
      required: false
    },
    max: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      date: "",
      menu: false
    };
  },

  watch: {
    value(val) {
      this.date = val;
    },
    date(val) {
      this.$emit("input", val);
    }
  },

  created() {
    this.date = this.value;
  }
};
</script>

<style></style>
