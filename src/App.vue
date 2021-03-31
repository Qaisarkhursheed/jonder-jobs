<template>
  <v-app>
    <auth-layout v-if="!authenticated">
      <router-view />
    </auth-layout>
    <dashboard-layout v-else>
      <router-view />
    </dashboard-layout>
  </v-app>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("auth/me");
  },
  computed: {
    ...mapGetters("auth", ["authenticated"])
  },
  components: { DashboardLayout, AuthLayout }
};
</script>

<style lang="scss">
html {
  overflow: hidden !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
