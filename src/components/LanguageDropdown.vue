<template>
  <v-select
    :value="$store.getters['user/user'].locale"
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
      {{ $t(item.text) }}
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

  methods: {
    changeLanguage(locale) {
      this.$store.dispatch("user/setLocale", locale).then(() => {
        this.$i18n.locale = locale;
        localStorage.setItem("lang", locale);
      });
    }
  }
};
</script>

<style scoped></style>
