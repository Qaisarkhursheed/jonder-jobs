<template>
  <dashboard-layout>
    <div class="dashboard-holder">
      <user-headline />
      <user-stats />
      <user-messages />
      <user-notes />
      <company-list />
    </div>
  </dashboard-layout>
</template>

<script>
import UserHeadline from "@/components/dashboard/UserHeadline";
import UserStats from "@/components/dashboard/UserStats";
import UserMessages from "@/components/dashboard/UserMessages";
import UserNotes from "@/components/dashboard/UserNotes";
import CompanyList from "@/components/dashboard/CompanyList";
import DashboardLayout from "@/layouts/DashboardLayout";

export default {
  name: "Dashboard",
  components: { DashboardLayout, CompanyList, UserNotes, UserMessages, UserStats, UserHeadline }
};
</script>

<style lang="scss">
.short-message {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-row {
  border-bottom: 1px solid $light-grey;
  font-size: 14px;
  color: $dark-grey;

  &:last-child {
    border-bottom: none;
  }
}
</style>