<template>
  <div>
    <dashboard-layout>
      <router-view />
    </dashboard-layout>
    <footer-legal :white="false"></footer-legal>
  </div>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout";
import FooterLegal from "@/components/parts/FooterLegal.vue";

export default {
  name: "DashboardWrap",
  components: { DashboardLayout, FooterLegal}
};
</script>
