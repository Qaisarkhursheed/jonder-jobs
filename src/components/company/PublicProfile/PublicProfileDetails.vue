<template>
  <div class="public-profile-details">
    <v-form v-model="formValid">
      <!-- Branche -->
      <div class="section">
        <label class="section-label">
          {{ $t("branch") }}
        </label>
        <v-autocomplete
          v-model="formData.branche"
          :items="types.JOB_BRANCHE"
          :rules="[validations.required]"
          cache-items
          outlined
          hide-no-data
        >
          <template v-slot:selection="{ item }"> {{ $t(item) }} </template>
          <template v-slot:item="{ item }">
            <v-list-item-content>
              <v-list-item-title>
                {{ $t(item) }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </div>

      <!-- Number of employees -->
      <div class="section">
        <label class="section-label">
          {{ $t("numberOfEmployees") }}
        </label>
        <v-select
          v-model="formData.company_employees"
          :items="types.EMPLOYEE_NUMBER"
          :rules="[validations.required]"
          outlined
        >
          <template v-slot:selection="{ item }"> {{ $t(item) }}</template>
          <template v-slot:item="{ item }">
            <v-list-item-content>
              <v-list-item-title>
                {{ $t(item) }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-select>
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
      this.formData.branche = this.user.branche;
      this.formData.company_employees = this.user.company_employees;
      this.formData.establishment_date = this.user.establishment_date;
    },
    save() {
      this.$emit("update", {
        ...this.formData
      });
    },
    toggleValues(event, name) {
      const index = this.formData.branche.indexOf(name);
      if (index < 0) {
        this.formData.branche.push(name);
      } else {
        this.formData.branche.splice(index, 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
