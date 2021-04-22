<template>
  <v-container class="auth-register-wrap align-center" fluid no-gutters>
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ultricies felis eu libero.
    </v-alert>

    <div>
      <v-form
        ref="form"
        class="auth-form"
        action="#"
        @submit.prevent="handleRegister"
        v-model="isValid"
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
              label="Name der Firma"
              :rules="rules"
              type="text"
              outlined
              background-color="white"
              v-model="formData.company"
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
              type="email"
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
              label="Telefonnummer"
              type="text"
              :rules="[
                formData.phone.match(
                  /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/
                )
                  ? true
                  : 'Invalid phone'
              ]"
              outlined
              background-color="white"
              v-model="formData.phone"
              hide-details
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              label="Passwort"
              type="password"
              :rules="rules"
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
              type="password"
              :rules="[
                formData.password === formData.password_confirmation ||
                  'Passwort muss übereinstimmen',
                rules[0]
              ]"
              outlined
              background-color="white"
              v-model="formData.password_confirmation"
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
  name: "AuthRegisterCompany",
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
        company: "",
        role: "company"
      },
      rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
      ],
      isValid: false,
      showValidationMessage: false,
      validationErrors: {}
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
        this.$router.replace({ name: "ManualOnboardingCompany" });
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
