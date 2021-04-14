<template>
  <dashboard-layout>
    <router-view />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout";

export default {
  name: "DashboardWrap",
  components: { DashboardLayout }
};
</script>
