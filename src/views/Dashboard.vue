<template>
  <div class="dashboard-holder">
    <user-headline />
    <user-stats />
  </div>
</template>

<script>
import UserHeadline from "@/components/dashboard/UserHeadline";
import UserStats from "@/components/dashboard/UserStats";
export default {
  name: "Dashboard",
  components: { UserStats, UserHeadline }
};
</script>