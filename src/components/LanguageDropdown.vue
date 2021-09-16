<template>
  <div class="language-toggle">
    <v-select
      outlined
      :items="languages"
      :value="$i18n.locale"
      @change="changeLanguage"
      hide-details
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "LanguageDropdown",
  data() {
    return {
      languages: ["de", "en", "fr"]
    };
  },
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event;
      localStorage.setItem("lang", event);
    }
  }
};
</script>

<style scoped>
.language-toggle {
  display: inline-block;
  padding-left: 20px;
  width: 100px;
}
</style>
