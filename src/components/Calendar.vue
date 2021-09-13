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
        v-model="dateFormatted"
        :rules="rules"
        :disabled="disabled"
        readonly
        outlined
        height="35px"
        :placeholder="$t('choose')"
        v-bind="attrs"
        v-on="on"
        :hide-details="hideDetails"
      >
      </v-text-field>
    </template>

    <v-date-picker
      :flat="true"
      :disabled="disabled"
      v-model="date"
      @input="menu = false"
      @change="dateSelect"
      :type="type"
      :min="startDate"
      locale="de-de"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "Calendar",

  props: {
    value: {
      type: [String, Object, Date]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideDetails: {
      type: [Boolean, String],
      default: false
    },
    rules: {
      type: Array,
      default: Array
    },
    type: {
      type: String,
      default: "month"
    },
    fromToday: {
      type: Boolean
    }
  },
  fromToday: {
    type: Boolean
  },

  created() {
    if (this.value) {
      this.date = this.formatServerDate(this.value);
    }
  },

  data: () => ({
    date: "",
    menu: false
  }),

  computed: {
    dateFormatted() {
      return this.formatDate(this.date);
    },
    startDate() {
      if (this.fromToday) {
        return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10);
      }
      return "1970-01-01";
    },

    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  methods: {
    dateSelect(date) {
      let newDate = date;
      if (this.type === "month") {
        let [year, month, day] = date.split("-");
        if (!day) newDate = `${year}-${month}-01`;
      }
      this.$emit("setDate", newDate);
    },
    formatDate(date) {
      if (!date) return null;

      let [year, month, day] = date.split("-");
      if (!day) {
        return `${month}.${year}`;
      }
      if (this.type === "month") {
        return `${month}.${year}`;
      }
      return `${day}.${month}.${year}`;
    },
    // parseDate(date) {
    //   if (!date) return null;

    //   const [month, day, year] = date.split("/");
    //   return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    // },
    formatServerDate(val) {
      return val.substr(0, 10);
    }
  },
  watch: {
    // date() {
    //   this.dateFormatted = this.formatDate(this.date);
    // }
  }
};
</script>
