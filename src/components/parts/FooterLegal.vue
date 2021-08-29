<template>
  <v-footer color="white  lighten-1" bottom>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        color="black"
        text
        rounded
        class="my-2"
        :href="link.link"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Impressum",
        link: "https://jonder.jobs/impressum",
      },
      {
        name: "Datenschutz",
        link: "https://jonder.jobs/datenschutz",
      },
      {
        name: "AGB",
        link: "https://jonder.jobs/agb",
      },
    ],
  }),
};
</script>

<style scoped></style>
