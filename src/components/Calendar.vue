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
        :placeholder="$t('user.onboarding.choose')"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      :flat="true"
      :disabled="disabled"
      v-model="date"
      @input="menu = false"
      @change="dateSelect"
      :type="type"
      :min="startDate"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "Calendar",

  props: {
    value: {
      type: [String, Object, Date],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: Array,
    },
    type: {
      type: String,
      default: 'month'
    },
    fromToday: {
      type: Boolean,
    }
  },
  created() {
    if (this.value) {
      this.date = this.value;
    }
  },
  data() {
    return {
      date: "",
      menu: false,
    };
  },
  computed: {
    dateFormatted() {
      return this.date.substr(0, 10);
    },
    startDate() {
      if(this.fromToday) {
        return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
      }
      return '1970-01-01';
    }
  },
  methods: {
    dateSelect(date) {
      this.$emit("setDate", date);
    },
  },
};
</script>
