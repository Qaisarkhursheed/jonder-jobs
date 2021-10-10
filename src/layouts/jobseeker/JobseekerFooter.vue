<template>
  <v-footer
    class="jobseeker-footer"
    bottom
    style="border-top: 1px solid #c4c4c4;"
  >
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(item, index) in links"
        :key="index"
        color="black"
        text
        rounded
        class="my-2 footer-link"
        :href="item.link"
      >
        {{ item.name }}
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

<style lang="scss">
.jobseeker-footer {
}
</style>
