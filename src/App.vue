<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style lang="scss">
html {
  overflow: hidden !important;
}

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.v-application .v-input.error--text,
.v-application .v-messages.error--text {
  color: $primary-error !important;
}
.v-application .v-input.error--text {
  border-color: $primary-error;
}
.v-input__icon.v-input__icon--append,
.v-file-input.v-text-field--outlined .v-text-field__slot {
  cursor: pointer !important;
}
.v-input__slot {
  .v-select__slot {
    height: auto !important;
    min-height: 55px;
  }
}
.selection-management-table-list .v-input__slot .v-select__slot {
  height: 40px !important;
  min-height: 40px !important;
}
.options .upgrade-option > span {
  width: 100% !important;
}
</style>
<script>
export default {
  created: function() {
    var Tawk_API = Tawk_API || {};
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6124dee6649e0a0a5cd2ab4e/1fds0dddm";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  }
};
</script>
