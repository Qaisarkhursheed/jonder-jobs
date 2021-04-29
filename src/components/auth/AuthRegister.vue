<template>
  <v-container
    class="auth-register-wrap justify-content-center align-center"
    fluid
    no-gutters
  >
    <jonder-title>
      Morbi at venenatis.
    </jonder-title>

    <v-row class="mb-1">
      <v-col cols="12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
        ultricies felis eu libero.
      </v-col>
    </v-row>

    <v-alert
      v-if="showValidationMessage && !isValid"
      text
      prominent
      type="error"
      :icon="false"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ultricies
      felis eu libero.
    </v-alert>

    <div>
      <v-form
        ref="form"
        class="auth-form"
        action="#"
        v-model="isValid"
        @submit.prevent="handleRegister"
      >
        <v-row>
          <v-col cols="12">
            <v-text-field
              dense
              label="Vorname"
              :rules="rules"
              type="text"
              outlined
              background-color="white"
              v-model="formData.first_name"
              hide-details
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              label="Nachname"
              :rules="rules"
              type="text"
              outlined
              background-color="white"
              v-model="formData.last_name"
              hide-details
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              label="Email Addresse"
              :rules="[!validationErrors.email || 'Email exists', ...rules]"
              type="text"
              outlined
              background-color="white"
              v-model="formData.email"
              hide-details
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              label="Passwort"
              :rules="rules"
              type="password"
              outlined
              background-color="white"
              v-model="formData.password"
              hide-details
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              label="Repeat Passwort"
              :rules="[
                formData.password === formData.password_confirmation ||
                  'Passwort muss übereinstimmen',
                rules[0]
              ]"
              type="password"
              outlined
              background-color="white"
              v-model="formData.password_confirmation"
              hide-details
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              label="Telefonnummer"
              :rules="[
                formData.phone.match(
                  /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/
                )
                  ? true
                  : 'Invalid phone'
              ]"
              type="text"
              outlined
              background-color="white"
              v-model="formData.phone"
              hide-details
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="caption text-left">
              Du bist bereits Mitglied?
              <router-link to="/login">Hier einloggen</router-link>
            </div>
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
          </v-col>
          <v-col cols="12">
            <v-btn type="submit" color="primary" class="full-w" large>
              Kostenlos registrieren
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
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
      ],
      showValidationMessage: false,
      validationErrors: {},
      isValid: false
    };
  },
  methods: {
    ...mapActions({
      register: "auth/register"
    }),

    async handleRegister() {
      this.validationErrors = {};
      await this.$refs.form.validate();
      if (!this.isValid) {
        this.showValidationMessage = true;
        this.$emit("changeImage");
        return false;
      }

      let response = await this.register(this.formData);

      if (response.success) {
        this.$router.replace({ name: "ManualOnboarding" });
      } else {
        this.validationErrors = response.message;
        this.showValidationMessage = true;
        this.$refs.form.validate();
        this.$emit("changeImage");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.auth-register-wrap {
  width: 60%;
}
</style>
