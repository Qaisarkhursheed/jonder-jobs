<template>
  <v-container class="auth-welcome-wrap align-center" fluid no-gutters>
    <jonder-title>
      Morbi at venenatis.
    </jonder-title>

    <p class="mb-15">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ultricies
      felis eu libero.
    </p>

    <router-link to="/login">
      <v-btn color="primary" class="full-w mt-15">Jetzt durchstarten</v-btn>
    </router-link>
  </v-container>
</template>

<script>
import JonderTitle from "@/components/parts/JonderTitle.vue";

export default {
  name: "AuthWelcome",
  components: {
    JonderTitle
  }
};
</script>

<style lang="scss" scoped>
.auth-welcome-wrap {
  width: 60%;
}
@media (max-width: 600px) {
  .auth-welcome-wrap {
    width: 90%;
  }
}
</style>
