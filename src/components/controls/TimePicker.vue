<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="time"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        :prepend-icon="prependIcon"
        :rules="rules"
        :readonly="readonly"
        :hide-details="hideDetails"
        :style="textFieldStyle"
        outlined
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu"
      v-model="time"
      @click:minute="$refs.menu.save(time)"
      full-width
      scrollable
      :format="format"
      :min="min"
      :max="max"
      :allowed-minutes="m => m % 5 === 0"
    ></v-time-picker>
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

    // TimePicker
    format: {
      type: String,
      default: "24hr"
    },
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
      time: "",
      menu: false
    };
  },

  watch: {
    value(val) {
      this.time = val;
    },
    time(val) {
      this.$emit("input", val);
    }
  },

  created() {
    this.time = this.value;
  }
};
</script>

<style></style>
