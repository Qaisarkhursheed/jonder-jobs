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
          width: "35%"
        },
        {
          text: this.$t('address'),
          value: "address",
          width: "35%"
        },
        {
          text: this.$t('position'),
          value: "current_position",
          width: "30%"
        },
      ]
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