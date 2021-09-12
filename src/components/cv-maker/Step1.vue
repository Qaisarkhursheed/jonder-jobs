<template>
  <div class="pa-10">
    <v-card-title class="pl-0 pt-0">Personliche Daten</v-card-title>
    <v-row>
      <v-col cols="6">
        <label class="font-weight-bold">E-mail Adresse</label>
        <v-text-field
          dense
          type="email"
          placeholder="Text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.email"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="font-weight-bold">Telefonnummer</label>
        <v-text-field
          dense
          type="text"
          placeholder="Text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.phone"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label class="font-weight-bold">Adresse</label>
        <v-text-field
          dense
          type="address"
          placeholder="Text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="value.street_address"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="font-weight-bold">Geburtsdatum</label>
        <div class="form-group d-flex">
          <div class="flex-grow-0 flex-shrink-0" style="width: 110px">
            <v-text-field
              dense
              type="number"
              placeholder="Tag"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="day"
            ></v-text-field>
          </div>
          <div class="flex-grow-1 flex-shrink-1 pl-4 pr-4">
            <v-text-field
              dense
              type="text"
              placeholder="Monat"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="month"
            ></v-text-field>
          </div>
          <div class="flex-grow-0 flex-shrink-0" style="width: 110px">
            <v-text-field
              dense
              type="number"
              :placeholder="$t('general.years')"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="year"
            ></v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-sheet class="d-flex justify-space-between mt-6">
      <v-sheet width="300">
        <v-btn
          depressed
          block
          outlined
          color="primary"
          large
          class="font-weight-bold"
        >
          {{ $t("cancel") }}
        </v-btn>
      </v-sheet>
      <v-sheet width="300">
        <v-btn
          depressed
          block
          color="dark-blue"
          large
          :disabled="!isValid"
          @click="nextStep"
          class="font-weight-bold"
        >
          {{ $t("confirm") }}
        </v-btn>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    day: "",
    month: "",
    year: "",
  }),
  computed: {
    isValid() {
      return (
        this.value.email.length > 0 &&
        this.value.phone.length > 0 &&
        this.value.street_address.length > 0 &&
        this.value.birthday.length > 0
      );
    },
  },
  methods: {
    nextStep() {
      if (this.isValid) this.$emit("confirm");
    },
    updateDate() {
      if (this.day && this.month && this.year) {
        const birthDay = this.year + "-" + this.month + "-" + this.day;
        console.log(birthDay);
        this.$emit("input", {
          ...this.value,
          birthday: birthDay,
        });
      }
    },
  },
  watch: {
    day(newVal) {
      if (newVal) this.updateDate();
    },
    month(newVal) {
      if (newVal) this.updateDate();
    },
    year(newVal) {
      if (newVal) this.updateDate();
    },
  },
};
</script>
