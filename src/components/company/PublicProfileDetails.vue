<template>
  <div class="public-profile-details d-flex flex-column">
    <div class="section mb-6">
      <label class="section-label">
        Industry
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
        Number of employees
      </label>
     <v-select
      v-model="form.company_employees"
      :items="types.EMPLOYEE_NUMBER"
      :hide-details="true"
      outlined
    ></v-select>
    </div>
    <div class="action d-flex justify-end">
      <v-btn
        color="primary"
        height="55"
        class="font-weight-medium"
        @click="save"
      >
        Save changes
      </v-btn>
    </div>
  </div>
</template>

<script>
import types from '@/types';

export default {
  
  name: 'PublicProfileDetails',

  props: {
    user: {
      type: Object
    }
  },

  data() {
    return {
      form: {
        branche: '',
        company_employees: ''
      },
    }
  },

  created() {
    this.populate();
  },
  methods: {
    populate() {
      this.form.branche = this.user.branche;
      this.form.company_employees = this.user.company_employees
    },
    save() {
      this.$emit('update', {
        ...this.form
      });
    },
  },
  computed: {
    types() {
      return types;
    }
  }
};

</script>