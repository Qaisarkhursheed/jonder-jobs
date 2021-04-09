<template>
  <dashboard-layout v-if="user">
    <div class="dashboard-holder">
      <user-headline />
      <user-stats v-if="userStats" />
      <user-messages />
      <user-notes v-if="notepad" />
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  created() {
    this.getUserStats();
    this.getAllNotepads();
    this.getCompanyViewed();
  },
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("stats", ["userStats"]),
    ...mapGetters("notepad", ["notepad"])
  },
  methods: {
    ...mapActions("notepad", ["getAllNotepads"]),
    ...mapActions("stats", ["getUserStats", "getCompanyViewed"])
  },
  components: {
    DashboardLayout,
    CompanyList,
    UserNotes,
    UserMessages,
    UserStats,
    UserHeadline
  }
};
</script>

<style lang="scss">
.dashboard-holder {
  position: relative;
}

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
