<template>
  <v-footer color="white  lighten-1" bottom >
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        text
        rounded
        class="my-2"
        :href="hrefs"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    fixed: {
      type: String,
    },
  },
  data: () => ({
    links: ["Impressum", "Datenschutz", "AGB"],
  }),
};
</script>

<style scoped></style>
