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
        placeholder="Vorname"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        hide-details
        outlined
        background-color="white"
        v-model="formData.first_name"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        dense
        placeholder="Nachname"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        hide-details
        outlined
        background-color="white"
        v-model="formData.last_name"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Company name -->
      <v-text-field
        dense
        placeholder="Name der Firma"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        hide-details
        outlined
        background-color="white"
        v-model="formData.company"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Email -->
      <v-text-field
        dense
        placeholder="Email Addresse"
        :rules="[validations.required, validations.email]"
        type="email"
        hide-details
        outlined
        background-color="white"
        v-model="formData.email"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Phone number -->
      <v-text-field
        dense
        placeholder="Telefonnummer"
        type="text"
        :rules="[validations.required, validations.phone]"
        hide-details
        outlined
        background-color="white"
        v-model="formData.phone"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Hiring location -->
      <GooglePlacesAutocomplete @select="e => (formData.hiring_location = e)" />
      <!-- <v-text-field
        dense
        placeholder="Hiring location"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        hide-details
        outlined
        background-color="white"
        v-model="formData.hiring_location"
        solo
        flat
        class="mb-4"
      ></v-text-field> -->

      <!-- Password -->
      <v-text-field
        dense
        placeholder="Passwort"
        :rules="[validations.required, validations.min.string(6)]"
        :type="showPass ? 'text' : 'password'"
        hide-details=""
        outlined
        background-color="white"
        v-model="formData.password"
        solo
        flat
        class="mb-4"
      >
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-icon style="line-height: 1.5" @click="showPass = !showPass">
              <template v-if="showPass">
                mdi-eye
              </template>
              <template v-else>
                mdi-eye-off
              </template>
            </v-icon>
          </div>
        </template>
      </v-text-field>

      <!-- Password confirmation -->
      <v-text-field
        dense
        placeholder="Repeat Passwort"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password)
        ]"
        :type="showPassConfirm ? 'text' : 'password'"
        outlined
        hide-details
        background-color="white"
        v-model="formData.password_confirmation"
        solo
        flat
        class="mb-4"
      >
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-icon
              style="line-height: 1.5"
              @click="showPassConfirm = !showPassConfirm"
            >
              <template v-if="showPassConfirm">
                mdi-eye
              </template>
              <template v-else>
                mdi-eye-off
              </template>
            </v-icon>
          </div>
        </template>
      </v-text-field>

      <!-- Response alert -->
      <response-alert :response="formResponse"></response-alert>

      <!-- Submit button -->
      <div class="text-left mb-1" style="color: #222222">
        Ja, ich stimme der Datenschutzerklärung zu.
      </div>
      <v-btn
        :disabled="!isValid"
        type="submit"
        class="dark-blue mt-3"
        block
        large
        height="56"
        :loading="isLoading"
      >
        Kostenlos registrieren
      </v-btn>

      <!-- Login link -->
      <div class="login-caption mt-5 text-center">
        Du bist bereits Mitglied?

        <router-link to="/login" class="login-caption-bold">
          Hier einloggen
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
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete";

export default {
  name: "AuthRegisterCompany",
  mixins: [Validations],
  components: {
    JonderTitle,
    ResponseAlert,
    GooglePlacesAutocomplete
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
      isValid: false,
      showPass: false,
      showPassConfirm: false
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
        .then(() => {
          this.$router.replace({ name: "RegisterVerifyEmail" });
        })
        .catch(err => {
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
.login-caption {
  font-size: 14px;
}
.login-caption-bold {
  font-weight: 600;
}
</style>
