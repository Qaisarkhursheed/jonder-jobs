<template>
  <div class="jobseeker-management-table">
    <v-data-table
      :headers="headers"
      :items="$store.getters['admin/jobseekers']"
      :server-items-length="$store.getters['admin/jobseekersTotal']"
      :items-per-page.sync="params.per_page"
      :page.sync="params.page"
      @update:page="fetchJobseekers()"
      @update:items-per-page="fetchJobseekers()"
      @click:row="openItem"
      show-select
      :single-select="true"
    >
      <template #item.name="{ item }">
        <v-avatar color="primary" size="30" class="mr-2">
          <img v-if="item.profile_img" :src="item.profile_img" />
        </v-avatar>
        {{ item.first_name }} {{ item.last_name }}
      </template>
       <template #item.current_position="{ item }">
        <span>
          {{ idToString("JOB_POSITION", item.current_position) }}
        </span>
      </template>
      <template #item.plan="{ item }">
        <div 
        v-for='plan in item.plan'
        :key='plan.id'
        >
          <v-chip
            v-if="plan"
            class="pl-5 pr-5"
            :color="plans[plan.plan_slug] && plans[plan.plan_slug].color ? plans[plan.plan_slug].color : '#ffffff'"
            :text-color="plans[plan.plan_slug] && plans[plan.plan_slug].text ? plans[plan.plan_slug].text : '#000000'"
          >
            {{ plan && plan.name ? plan.name : '-'}}
          </v-chip>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>

import store from "@/store";

export default {
  
  name: "JobseekerManagementTable",

  data() {
    return {
      params: {
        page: 1,
        per_page: 10,
        user_type: "jobseeker"
      },
      headers: [
        {
          text: this.$t('name'),
          value: "name",
          width: "30%"
        },
        {
          text: this.$t('address'),
          value: "address",
          width: "30%"
        },
        {
          text: this.$t('position'),
          value: "current_position",
          width: "20%"
        },
        {
          text: this.$t('plan'),
          value: "plan",
          width: "20%"
        },
      ],
      plans: {
        basic: {
          color: "#F2E7FC",
          text: "#8C18E2"
        },
        highlighted: {
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
    this.fetchJobseekers();
  },

  methods: {
    fetchJobseekers() {
      store.dispatch("admin/fetchJobseekers", this.params);
    },
    openItem(item) {
      this.$router.push({
        name: "AdminJobseekerManagementUser",
        params: { id: item.id }
      });
    }
  },
};

</script>