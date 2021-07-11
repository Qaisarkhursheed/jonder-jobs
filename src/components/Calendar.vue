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
        readonly
        outlined
        height="35px"
        :hide-details="true"
        :placeholder="$t('user.onboarding.choose')"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      :flat="true"
      v-model="date"
      @input="menu = false"
      @change="dateSelect"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'Calendar',

  props: {
    value: {
      type: [String, Object, Date]
    }
  },
  created() {
    if (this.value) {
      this.date = this.value;
    }
  },
  data() {
    return {
      date: '',
      menu: false,
    }
  },
  methods: {
    dateSelect(date) {
      this.$emit('setDate', date);
    }
  },
}
</script>