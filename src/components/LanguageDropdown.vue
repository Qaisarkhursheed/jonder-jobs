<template>
  <div class="language-toggle">
    <v-select
        :value="getLanguage"
        :items="items"
        @change="changeLanguage"
        outlined
        hide-details
    >
      <template v-slot:selection="{ item }">
        <img
            width="20"
            class="rounded-circle mr-3"
            :src="require('@/assets/flags/' + item.value + '.svg')"
        />
        {{ $t(item.value) }}
      </template>
      <template v-slot:item="{ item }">
        <img
            width="20"
            class="rounded-circle mr-3"
            :src="require('@/assets/flags/' + item.value + '.svg')"
        />
        {{ $t(item.text) }}
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "english",
          value: "en"
        },
        {
          text: "german",
          value: "de"
        },
        {
          text: "french",
          value: "fr"
        }
      ]
    };
  },
  computed: {
    getLanguage() {
      return this.$store.getters["user/user"]
        ? this.$store.getters["user/user"].locale
        : localStorage.getItem("lang") || "de";
    }
  },
  methods: {
    changeLanguage(locale) {
      if (this.$store.getters["user/user"]) {
        this.$store.dispatch("user/setLocale", locale);
      }
      this.$i18n.locale = locale;
      localStorage.setItem("lang", locale);
    }
  },
};
</script>

<style scoped>
.language-toggle {
  display: inline-block;
  padding-left: 20px;
  width: 120px;
}
</style>
