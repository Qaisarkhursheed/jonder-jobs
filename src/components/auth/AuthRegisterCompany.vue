<template>
  <div class="auth-register-wrap align-center">
    <jonder-title>
      Create account
    </jonder-title>

    <v-row class="mb-1">
      <v-col cols="12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
        ultricies felis eu libero.
      </v-col>
    </v-row>

    <v-form
      ref="form"
      class="auth-form"
      action="#"
      @submit.prevent="handleRegister"
      v-model="isValid"
    >
      <!-- First name -->
      <v-text-field
        dense
        label="Vorname"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        outlined
        background-color="white"
        v-model="formData.first_name"
        solo
        flat
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        dense
        label="Nachname"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        outlined
        background-color="white"
        v-model="formData.last_name"
        solo
        flat
      ></v-text-field>

      <!-- Company name -->
      <v-text-field
        dense
        label="Name der Firma"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        outlined
        background-color="white"
        v-model="formData.company"
        solo
        flat
      ></v-text-field>

      <!-- Email -->
      <v-text-field
        dense
        label="Email Addresse"
        :rules="[validations.required, validations.email]"
        type="email"
        outlined
        background-color="white"
        v-model="formData.email"
        solo
        flat
      ></v-text-field>

      <!-- Phone number -->
      <v-text-field
        dense
        label="Telefonnummer"
        type="text"
        :rules="[validations.required, validations.phone]"
        outlined
        background-color="white"
        v-model="formData.phone"
        solo
        flat
      ></v-text-field>

      <!-- Hiring location -->
      <v-text-field
        dense
        label="Hiring location"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        outlined
        background-color="white"
        v-model="formData.hiring_location"
        solo
        flat
      ></v-text-field>

      <!-- Password -->
      <v-text-field
        dense
        label="Passwort"
        type="password"
        :rules="[validations.required, validations.min.string(6)]"
        outlined
        background-color="white"
        v-model="formData.password"
        solo
        flat
      ></v-text-field>

      <!-- Password confirmation -->
      <v-text-field
        dense
        label="Repeat Passwort"
        type="password"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password)
        ]"
        outlined
        background-color="white"
        v-model="formData.password_confirmation"
        solo
        flat
      ></v-text-field>

      <!-- Response alert -->
      <response-alert :response="formResponse"></response-alert>

      <!-- Submit button -->
      <div class="text-left mb-1" style="color: #222222">
        Ja, ich stimme der Datenschutzerklärung zu.
      </div>
      <v-btn
        :disabled="!isValid"
        type="submit"
        color="primary"
        block
        large
        :loading="isLoading"
      >
        Kostenlos registrieren
      </v-btn>

      <!-- Login link -->
      <div class="mt-2">
        <span style="color: #222222">
          Du bist bereits Mitglied?
        </span>
        <router-link to="/login" style="text-decoration: none">
          <b>Hier einloggen</b>
        </router-link>
      </div>
    </v-form>
  </div>
</template>

<script>
import Validations from "@/mixins/validations";
import JonderTitle from "../parts/JonderTitle.vue";
import { mapActions } from "vuex";
import ResponseAlert from "@/components/ResponseAlert";

export default {
  name: "AuthRegisterCompany",
  mixins: [Validations],
  components: {
    JonderTitle,
    ResponseAlert
  },
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        hiring_location: "",
        password: "",
        password_confirmation: "",
        phone: "",
        company: "",
        role: "company"
      },
      formResponse: {},
      isLoading: false,
      isValid: false
    };
  },
  methods: {
    ...mapActions({
      register: "auth/registerCompany"
    }),

    async handleRegister() {
      this.formResponse = {};
      this.isLoading = true;
      this.register(this.formData)
        .then(resp => {
          console.log("resp", resp);
          this.$router.replace({ name: "ManualOnboardingCompany" });
        })
        .catch(err => {
          console.log("err", err);
          this.formResponse = err.data;
          this.$emit("changeImage");
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// .auth-register-wrap {
//   width: 60%;
// }
// @media (max-width: 600px) {
//   .auth-register-wrap {
//     width: 90%;
//   }
// }
</style>
