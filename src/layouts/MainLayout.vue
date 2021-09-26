<template>
  <v-container
    fluid
    class="pa-0 d-flex flex-column flex-grow-1"
    style="background-color: #f5f5f5"
  >
    <header class="pa-5 white">
      <Header />
    </header>

    <div class="pa-5 flex-grow-1">
      <slot />
    </div>

    <footer>
      <FooterLegal :white="false" />
    </footer>
  </v-container>
</template>

<script>
import Header from "@/components/parts/Header";
import FooterLegal from "@/components/parts/FooterLegal.vue";

export default {
  components: { Header, FooterLegal }
};
</script>
