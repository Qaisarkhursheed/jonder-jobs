<template>
  <div class="language-toggle">
    <v-select
      :value="language"
      :items="items"
      @change="changeLanguage"
      outlined
      :attach="true"
      background-color="white"
      hide-details
      append-icon="mdi-chevron-down"
    >
      <template v-slot:selection="{ item }">
        <img
          width="20"
          class="rounded-circle mr-3"
          :src="require('@/assets/flags/' + item.value + '.svg')"
        />
        {{ item.text }}
      </template>
      <template v-slot:item="{ item }">
        <img
          width="20"
          class="rounded-circle mr-3"
          :src="require('@/assets/flags/' + item.value + '.svg')"
        />
        {{ item.text }}
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
          text: "English",
          value: "en"
        },
        {
          text: "Deutsch",
          value: "de"
        },
        {
          text: "Français",
          value: "fr"
        }
      ]
    };
  },

  computed: {
    language() {
      return (
        this.$store.getters["user/user"]?.locale ||
        localStorage.getItem("lang") ||
        "de"
      );
    }
  },

  methods: {
    changeLanguage(locale) {
      if (this.$store.getters["user/user"]) {
        this.$store.dispatch("user/setLocale", locale).then(() => {
          this.$store.dispatch("user/me", true);
        });
      }

      this.$i18n.locale = locale;
      this.$vuetify.lang.current = locale;
      this.$moment.locale(locale);
      localStorage.setItem("lang", locale);
    }
  }
};
</script>

<style lang="scss"></style>
