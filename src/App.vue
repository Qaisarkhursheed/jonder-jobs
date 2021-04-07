<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("auth/me");
  }
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
