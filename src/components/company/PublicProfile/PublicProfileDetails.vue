<template>
  <div class="public-profile-details">
    <v-form v-model="formValid">
      <!-- Branche -->
      <div class="section">
        <label class="section-label">
          {{ $t("branch") }}
        </label>
        <v-autocomplete
          :attach="true"
          v-model="formData.branche"
          :items="types.JOB_BRANCHE"
          :rules="[validations.required]"
          item-value="id"
          :item-text="$i18n.locale"
          cache-items
          outlined
          hide-no-data
          append-icon="mdi-chevron-down"
        />
      </div>

      <!-- Number of employees -->
      <div class="section">
        <label class="section-label">
          {{ $t("numberOfEmployees") }}
        </label>
        <v-select
          :attach="true"
          v-model="formData.company_employees"
          :items="types.EMPLOYEE_NUMBER"
          item-value="id"
          :item-text="$i18n.locale"
          :rules="[validations.required]"
          outlined
          append-icon="mdi-chevron-down"
        />
      </div>

      <!-- Establishment date -->
      <div class="section">
        <label class="section-label">
          {{ $t("foundingYear") }}
        </label>
        <v-text-field
          v-model="formData.establishment_date"
          :rules="[validations.required]"
          type="number"
          outlined
          solo
        />
      </div>
    </v-form>

    <div class="text-right">
      <v-btn color="primary" :disabled="!formValid" height="55" @click="save">
        {{ $t("saveChanges") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import types from "@/types";

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      formValid: false,
      formData: {}
    };
  },

  computed: {
    types() {
      return types;
    }
  },

  created() {
    this.populateData();
  },

  methods: {
    populateData() {
      this.formData.branche = parseInt(this.user.branche);
      this.formData.company_employees = parseInt(this.user.company_employees);
      this.formData.establishment_date = this.user.establishment_date;
    },
    save() {
      this.$emit("update", {
        ...this.formData
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
