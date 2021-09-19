<template>
  <div class="team-management">
    <!-- Header -->
    <v-row class="page-heading mb-3">
      <v-col cols="col">
        <div class="title">{{ $t("teamManagement") }}</div>
        <div class="subtitle">
          {{ $t("inviteHelp") }}
        </div>
      </v-col>
      <v-col cols="auto">
        <TeamManagementInviteUser />
      </v-col>
    </v-row>

    <!-- Content -->
    <div class="table">
      <TeamManagementTable />
    </div>
  </div>
</template>

<script>
import TeamManagementTable from "@/components/company/team-management/TeamManagementTable";
import TeamManagementInviteUser from "@/components/company/team-management/TeamManagementInviteUser";

export default {
  components: { TeamManagementTable, TeamManagementInviteUser }
};
</script>

<style lang="scss" scoped></style>
