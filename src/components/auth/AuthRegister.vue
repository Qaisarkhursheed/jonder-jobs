<template>
  <v-container
    class="auth-register-wrap justify-content-center align-center"
    fluid
    no-gutters
  >
    <jonder-title>
      Morbi at venenatis.
    </jonder-title>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ultricies
      felis eu libero.
    </p>

    <div>
      <form class="auth-form" action="#" @submit.prevent="handleRegister">
        <v-text-field
          dense
          label="Vorname"
          :rules="rules"
          type="text"
          outlined
          background-color="white"
          v-model="formData.first_name"
        ></v-text-field>

        <v-text-field
          dense
          label="Nachname"
          :rules="rules"
          type="text"
          outlined
          background-color="white"
          v-model="formData.last_name"
        ></v-text-field>

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
          :rules="rules"
          outlined
          background-color="white"
          v-model="formData.password"
        ></v-text-field>

        <v-text-field
          dense
          label="Repeat Passwort"
          type="password"
          :rules="[
            formData.password === formData.password_confirmation ||
              'Passwort muss übereinstimmen',
            rules[0]
          ]"
          outlined
          background-color="white"
          v-model="formData.password_confirmation"
        ></v-text-field>

        <v-text-field
          dense
          label="Telefonnummer"
          type="number"
          :rules="rules"
          outlined
          background-color="white"
          v-model="formData.phone"
        ></v-text-field>

        <p class="caption text-left">
          Du bist bereits Mitglied?
          <router-link to="/login">Hier einloggen</router-link>
        </p>

        <v-checkbox
          label="Möchten Sie, dass wir Ihren Namen anzeigen?"
          hide-details="auto"
          v-model="formData.show_name"
        ></v-checkbox>

        <v-checkbox
          label="Möchten Sie, dass wir Ihren Standort anzeigen?"
          hide-details="auto"
          v-model="formData.show_location"
        ></v-checkbox>

        <v-btn type="submit" color="primary" class="full-w mt-5">
          Kostenlos registrieren
        </v-btn>
      </form>
    </div>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";
import { mapActions } from "vuex";

export default {
  name: "AuthRegister",
  components: {
    JonderTitle
  },
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        show_name: false,
        show_location: false,
        role: "user"
      },
      rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
      ]
    };
  },
  methods: {
    ...mapActions({
      register: "auth/register"
    }),

    async handleRegister() {
      await this.register(this.formData);
      console.log("Register");
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.auth-register-wrap {
  width: 60%;
}
</style>
