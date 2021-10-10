<template>
  <v-footer
    :class="['lighten-1', { white: white }, { default: !white }]"
    bottom
  >
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        color="black"
        text
        rounded
        class="my-2 footer-links"
        :href="link.link"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    links: [
      {
        name: "Impressum",
        link: "https://jonder.jobs/impressum"
      },
      {
        name: "Datenschutz",
        link: "https://jonder.jobs/datenschutz"
      },
      {
        name: "AGB",
        link: "https://jonder.jobs/agb"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.default {
  border-top: 1px solid #c4c4c4;
}
</style>
