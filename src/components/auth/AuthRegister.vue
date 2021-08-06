<template>
  <v-container
    class="auth-register-wrap mx-auto"
    fluid
    no-gutters
    style="max-width: 450px"
  >
    <jonder-title>
      Create account
    </jonder-title>

    <div class="text-center mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ultricies
      felis eu libero.
    </div>

    <v-form
      ref="form"
      class="auth-form"
      v-model="formValid"
      @submit.prevent="handleRegister"
    >
      <!-- First name -->
      <v-text-field
        v-model="formData.first_name"
        label="Vorname"
        :rules="[validations.required]"
        type="text"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        v-model="formData.last_name"
        label="Nachname"
        :rules="[validations.required]"
        type="text"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Email -->
      <v-text-field
        v-model="formData.email"
        label="Email Addresse"
        :rules="[validations.required, validations.email]"
        type="email"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Password -->
      <v-text-field
        v-model="formData.password"
        label="Passwort"
        :rules="[validations.required, validations.min.string(6)]"
        type="password"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Password confirm -->
      <v-text-field
        v-model="formData.password_confirmation"
        label="Passwort erneut eingeben"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password)
        ]"
        type="password"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Phone -->
      <v-text-field
        v-model="formData.phone"
        label="Telefonnummer"
        :rules="[validations.phone]"
        type="text"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Show name -->
      <v-checkbox
        class="mt-0"
        label="Möchten Sie, dass wir Ihren Namen anzeigen?"
        hide-details="auto"
        v-model="formData.show_name"
      ></v-checkbox>

      <!-- Show location -->
      <v-checkbox
        class="mb-3"
        label="Möchten Sie, dass wir Ihren Standort anzeigen?"
        hide-details="auto"
        v-model="formData.show_location"
      ></v-checkbox>

      <!-- ResponseAlert -->
      <ResponseAlert :response="formResponse" />

      <!-- Submit button -->
      <v-btn
        type="submit"
        color="primary"
        class="full-w"
        :disabled="!formValid"
        :loading="formLoading"
        large
      >
        Kostenlos registrieren
      </v-btn>

      <div class="caption mt-1">
        Du bist bereits Mitglied?

        <router-link to="/login">
          Hier einloggen
        </router-link>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";

export default {
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
        role: "Jobseeker"
      },
      formLoading: false,
      formResponse: {},
      formValid: false
    };
  },
  methods: {
    async handleRegister() {
      this.formResponse = {};
      this.formLoading = true;
      this.$store
        .dispatch("auth/register", this.formData)
        .then(resp => {
          localStorage.setItem("registration-id", resp.data.user.id);
          this.$router.replace({ name: "ManualOnboarding" });
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
