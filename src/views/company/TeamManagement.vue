<template>
  <div class="team-management">
    <v-row class="heading mb-5">
      <v-col cols="9">
        <div class="title">Team Management</div>
        <div class="subtitle">Explanation what is team managment</div>
      </v-col>
      <v-col cols="3">
        <v-btn
          color="primary"
          height="48"
          class="full-w font-weight-medium "
        >
          Invite new user
        </v-btn>
      </v-col>
    </v-row>
    <div class="table">
      <TeamManagementTable />
    </div>
  </div>
</template>

<script>

import TeamManagementTable from '@/components/company/TeamManagementTable'

export default {
  name: 'CompanyTeamManagement',

  components: {
    TeamManagementTable
  },

};
</script>

<style lang="scss" scoped>

.heading {
  font-weight: 600;
  font-size: 32px;
  color: #222222;

  .title {
    font-weight: 600;
    font-size: 32px !important;
    color: #222222;
  }
  .subtitle {
    font-weight: normal;
    font-size: 18px;
    color: #7A7A7A;
  }
}
</style>