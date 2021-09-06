<template>
  <div class="public-profile-details d-flex flex-column">
    <div class="section mb-6">
      <label class="section-label">
        Branche
      </label>
      <v-autocomplete
        v-model="form.branche"
        :items="types.JOB_BRANCHE"
        cache-items
        outlined
        flat
        hide-no-data
        :hide-details="true"
        placeholder="Enter industry "
      ></v-autocomplete>
    </div>
    <div class="section mb-6">
      <label class="section-label">
        Anzahl an Angestellten
      </label>
      <v-select
        v-model="form.company_employees"
        :items="types.EMPLOYEE_NUMBER"
        :hide-details="true"
        outlined
      ></v-select>
    </div>
    <div class="section mb-6">
      <label class="section-label">
        Gründungsjahr
      </label>
      <v-text-field 
        v-model="form.establishment_date"
        type="number"
        outlined
      >
      </v-text-field>
    </div>
    <div class="action d-flex justify-end">
      <v-btn
        height="55"
        class="font-weight-medium main-accept-btn dark-blue"
        @click="save"
      >
        {{ $t("general.saveChanges") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import types from "@/types";

export default {
  name: "PublicProfileDetails",

  props: {
    user: {
      type: Object,
    },
  },

  data() {
    return {
      form: {
        branche: "",
        company_employees: "",
        establishment_date: ""
      },
    };
  },

  created() {
    this.populate();
  },
  methods: {
    populate() {
      this.form.branche = this.user.branche;
      this.form.company_employees = this.user.company_employees;
      this.form.establishment_date = this.user.establishment_date;
    },
    save() {
      this.$emit("update", {
        ...this.form,
      });
    },
  },
  computed: {
    types() {
      return types;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-btn.main-accept-btn {
  background-color: $primary-blue-dark !important;
  color: #fff;
}
</style>
