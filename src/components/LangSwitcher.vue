<template>
  <div class="lang-switcher">
    <v-select
      :items="options"
      dense
      :filled="true"
      background-color="#fff"
      :rounded="true"
      :value="selected"
      :hide-details="true"
      outlined
      @change="selectLanguage"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "LangSwitcher",

  data() {
    return {
      options: ["en", "de"],
      selected: "en",
    };
  },
  mounted() {
    this.selected = localStorage.getItem("lang") || "de";
  },
  methods: {
    selectLanguage(value) {
      localStorage.setItem("lang", value);
      this.$root.$i18n.locale = value;
    },
  },
};
</script>

<style scoped lang="scss">
.lang-switcher {
  width: 80px;
}
</style>
