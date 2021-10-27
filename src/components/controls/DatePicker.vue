<template>
  <v-menu
    :attach="attach"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateFormatted"
        v-bind="attrs"
        v-on="on"
        :prepend-icon="prependIcon"
        :disabled="disabled"
        :readonly="true"
        :rules="rules"
        :hide-details="hideDetails"
        :style="textFieldStyle"
        outlined
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      @input="menu = false"
      :type="type"
      :min="min || minLocal"
      :max="max"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import moment from "moment";

export default {
  props: {
    value: {
      type: String
    },

    attach: {
      type: Boolean,
      default: true
    },

    // TextField
    textFieldStyle: {
      type: [String, Object],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideDetails: {
      type: [Boolean, String],
      default: "auto"
    },
    prependIcon: {
      type: String,
      required: false
    },
    // readonly: {
    //   type: Boolean,
    //   default: true
    // },
    rules: {
      type: Array,
      default: () => []
    },

    // DatePicker
    type: {
      type: String,
      default: "date"
    },
    min: {
      type: String,
      required: false
    },
    max: {
      type: String,
      required: false
    },
    minThisMonth: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      menu: false,
      minLocal: null
    };
  },

  computed: {
    date: {
      get: function() {
        if (this.type == "month" && this.value) {
          return this.value.substr(0, 7);
        }

        return this.value;
      },
      set: function(newVal) {
        if (this.type == "month") {
          newVal += "-01";
        }

        this.$emit("input", newVal);
      }
    },
    dateFormatted() {
      if (!this.date) {
        return null;
      }

      if (this.type == "date") {
        return moment(this.date).format("MM.DD.YYYY");
      } else {
        return moment(this.date).format("MMMM, YYYY");
      }
    }
  },

  created() {
    if (this.minThisMonth) {
      this.minLocal = moment()
        .startOf("month")
        .format("YYYY-MM-DD");
    }
  }
};
</script>

<style></style>
