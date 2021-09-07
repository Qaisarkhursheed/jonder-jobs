<template>
  <div class="team-management-table">
    <v-data-table
      v-model="selected"
      :loading="$store.getters['teamManagement/loading']"
      :headers="headers"
      :items="$store.getters['teamManagement/users']"
      :server-items-length="$store.getters['teamManagement/totalUsers']"
      :items-per-page.sync="params.per_page"
      :page.sync="params.page"
      :single-select="true"
      @update:page="fetchData()"
      @update:items-per-page="fetchData()"
      item-key="name"
      show-select
      flat
      class="table"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <TeamManagementDeleteUser :user="item"></TeamManagementDeleteUser>
      </template>
      <template v-slot:[`item.created_at`]="{ item }">
        {{ item.created_at | moment("MMM DD, HH:mm") }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TeamManagementDeleteUser from "@/components/company/TeamManagementDeleteUser";

export default {
  components: { TeamManagementDeleteUser },

  data() {
    return {
      params: {
        page: 1,
        per_page: 15,
      },
      selected: null,
      headers: [
        {
          text: "Nutzer",
          value: "name",
          width: "25%",
        },
        {
          text: "E-mail",
          value: "email",
          width: "25%",
        },
        {
          text: "Status",
          value: "status",
          width: "15%",
        },
        {
          text: "Eingeladen am:",
          value: "created_at",
          width: "15%",
        },
        {
          text: "",
          value: "actions",
          width: "10%",
        },
      ],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.$store.dispatch("teamManagement/fetchUsers", this.params);
    },
    removeUser() {},
  },
};
</script>
<style lang="scss" scoped>
.team-management-table {
  .table {
    border: 1px solid #e6e7e9;
  }
}
</style>
