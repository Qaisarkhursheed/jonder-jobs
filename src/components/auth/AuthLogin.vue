<template>
  <v-container class="auth-login-wrap align-center" fluid no-gutters>
    <jonder-title>
      Loggen Sie sich in Ihren Jonder Account ein
    </jonder-title>

    <v-btn outlined color="primary" class="full-w mt-4">Continue with Google</v-btn>
    <v-btn color="primary" class="full-w mt-4">Continue with Facebook</v-btn>

    <div class="mt-10">
      <p class="text-caption text-left">Oder via Email einloggen</p>

      <form class="auth-form" action="#" @submit.prevent="handleLogin">
        <v-text-field
          dense
          label="Email Addresse"
          :rules="rules"
          type="email"
          outlined
          background-color="white"
          v-model="formData.email"
        ></v-text-field>

        <v-text-field
          dense
          label="Passwort"
          type="password"
          outlined
          background-color="white"
          hide-details="auto"
          v-model="formData.password"
        ></v-text-field>

        <v-checkbox
          label="Ich stimme der Datenschutzerklärung zu."
          v-model="formData.privacy"
        ></v-checkbox>
      </form>
    </div>

    <router-link to="/register">
      <v-btn color="primary" class="full-w mt-15">Kostenlos registrieren</v-btn>
    </router-link>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";
import { mapActions } from "vuex";

export default {
  name: "AuthLogin",
  components: {
    JonderTitle
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
        privacy: false
      },
      rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
      ]
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login"
    }),

    async handleLogin() {
      await this.login(this.formData);
      console.log("Login");
      this.$router.replace({ name: "Home" });
    }
}
};
</script>

<style lang="scss" scoped>
.auth-login-wrap {
  width: 60%;
}
</style>
