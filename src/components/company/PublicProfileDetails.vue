<template>
  <div class="public-profile-details d-flex flex-column">
    <div class="section mb-6">
      <label class="section-label">
        Industry
      </label>
     <v-select
      v-model="form.branche"
      :hide-details="true"
      :items="branches"
      outlined
      ></v-select>
    </div>
    <div class="section mb-6">
      <label class="section-label">
        Number of employees
      </label>
     <v-select
      v-model="form.company_employees"
      :items="employeeNumber"
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
      branches: [
        this.$t('user.onboarding.branchMedicine'),
        this.$t('user.onboarding.branchAutomotive'),
        this.$t('user.onboarding.branchMechanical'),
        this.$t('user.onboarding.branchChemical'),
        this.$t('user.onboarding.branchFood'),
        this.$t('user.onboarding.branchElectrical'),
      ],
      employeeNumber: [
        '0-50',
        '50-100',
        '100-500',
        '1000+'
      ],
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
};

</script>