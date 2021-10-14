<template>
  <div class="packages">
    <v-row>
      <v-col cols="12" md="6" v-for="(item, i) in packages" :key="i">
        <CompanyPlan :plan="item" :color="packagesBranding[i]" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CompanyPlan from "@/components/plans/CompanyPlan";

export default {
  components: {
    CompanyPlan
  },

  data() {
    return {
      packagesBranding: ["#F3B10E", "#1DABF2", "#0253B3"]
    };
  },

  computed: {
    packages() {
      return this.$store.getters["plans/companyPlans"];
    }
  },

  created() {
    if (this.packages == null) {
      this.$store.dispatch("plans/fetchCompanyPlans");
    }
  }
};
</script>
