<template>
  <div class="company-management-table">
    <v-data-table
      :headers="headers"
      :items="$store.getters['admin/companies']"
      :server-items-length="$store.getters['admin/companiesTotal']"
      :items-per-page.sync="params.per_page"
      :page.sync="params.page"
      @update:page="fetchCompanies()"
      @update:items-per-page="fetchCompanies()"
      @click:row="openItem"
      show-select
      flat
      :single-select="true"
    >
      <template #item.company="{ item }">
        <v-avatar color="primary" size="30" class="mr-2">
          <img v-if="item.profile_img" :src="item.profile_img" />
        </v-avatar>
        {{ item.company }}
      </template>
      <template #item.plan="{ item }">
          <v-chip
            v-if="item.plan"
            class="pl-5 pr-5"
            :color="plans[item.plan.plan_slug].color"
            :text-color="plans[item.plan.plan_slug].text"
          >
            {{ item.plan.name }}
          </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>

import store from "@/store";

export default {

  name: "CompanyManagementTable",

  data() {
    return {
      params: {
        page: 1,
        per_page: 10,
        user_type: "Employer"
      },
      headers: [
        {
          text: this.$t('company'),
          value: "company",
          width: "25%"
        },
        {
          text: this.$t('subscriptionPlan'),
          value: "plan",
          width: "20%",
        },
        {
          text: this.$t('address'),
          value: "address",
          width: "20%"
        },
        {
          text: this.$t('branch'),
          value: "branche",
          width: "20%"
        },
        {
          text: this.$t('employees'),
          value: "company_employees",
          width: "20%"
        }
      ],
      plans: {
        basic: {
          color: "#F2E7FC",
          text: "#8C18E2"
        },
        "all-inclusive": {
          color: "#E1F5FD",
          text: "#4A4DE6",
        },
        premium: {
          color: "#FBEDE7",
          text: "#FF6422",
        }
      }
    }
  },

  created() {
    this.fetchCompanies();
  },

  methods: {
    fetchCompanies() {
      store.dispatch("admin/fetchCompanies", this.params);
    },
    openItem(item) {
      this.$router.push({
        name: "AdminCompanyManagementUser",
        params: { id: item.id }
      });
    }
  },

};
</script>

<style lang="scss" scoped>
// .company-management-table {
//   .v-data-table {
//     background: transparent;
//     table {
//       border-spacing: 0 20px !important;  
//     }
//   }
//   .v-data-table table {
//     border-spacing: 0 20px !important;
//   }
// }

</style>