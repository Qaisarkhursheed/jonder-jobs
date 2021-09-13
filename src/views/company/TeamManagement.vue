<template>
  <div class="team-management">
    <v-row class="heading mb-5">
      <v-col cols="9">
        <div class="title">Team Management</div>
        <div class="subtitle">
          {{ $t("inviteHelp") }}
        </div>
      </v-col>
      <v-col cols="3">
        <TeamManagementInviteUser />
      </v-col>
    </v-row>
    <div class="table">
      <TeamManagementTable />
    </div>
  </div>
</template>

<script>
import TeamManagementTable from "@/components/company/TeamManagementTable";
import TeamManagementInviteUser from "@/components/company/TeamManagementInviteUser";

export default {
  name: "CompanyTeamManagement",

  components: {
    TeamManagementTable,
    TeamManagementInviteUser
  }
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
    color: #7a7a7a;
  }
}
</style>
