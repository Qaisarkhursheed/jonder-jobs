<template>
  <v-container class="auth-login-wrap mx-auto" fluid no-gutters>
    <jonder-title>
      Loggen Sie sich in Ihren Jonder Account ein
    </jonder-title>

    <v-alert v-if="message.show" class="mt-4" text type="error">
      {{ this.message.text }}
    </v-alert>

    <div class="mt-10">
      <p class="text-caption text-left">
        Einloggen via Email
      </p>

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
          class="mb-6"
        ></v-text-field>

        <!--        <v-checkbox-->
        <!--          label="Ich stimme der Datenschutzerklärung zu."-->
        <!--          v-model="formData.privacy"-->
        <!--        ></v-checkbox>-->

        <p class="text-caption text-left">
          <router-link to="/forgot-password">
            Passwort vergessen?
          </router-link>
        </p>

      <!-- Response alert -->
      <response-alert :response="formResponse"></response-alert> 

        <v-btn outlined color="primary" class="full-w mt-4 "
          >Continue with Google
        </v-btn>

        <v-btn color="primary" class="full-w mt-4 fb-button">
          Continue with Facebook
        </v-btn>

        <v-btn
          type="submit"
          color="primary"
          class="full-w"
          :disabled="
            formData.email.length === 0 || formData.password.length === 0
          "
        >
          Loggen Sie
        </v-btn>
      </form>
    </div>

    <p class="text-caption text-left">
      Haben Sie kein Konto?
      <router-link to="/register">
        Registrieren
      </router-link>
    </p>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";
import { mapActions } from "vuex";
import ResponseAlert from "@/components/ResponseAlert";

export default {
  name: "AuthLogin",
  components: {
    JonderTitle,
    ResponseAlert
  },
  data() {
    return {
      message: {
        show: false,
        text: ""
      },
      formData: {
        email: "",
        password: "",
        privacy: false
      },
      formResponse: {},
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
      this.formResponse = {};
      this.response = await this.login(this.formData);
      console.log("LOGIN", this.response);

      if (this.response.success) {
        if (
          this.response.user.role === "Jobseeker" ||
          this.response.user.role === "user"
        ) {
          this.$router.replace({ name: "Dashboard" });
        } else if (
          this.response.onboarding_status &&
          this.response.user.role === "Employer"
        ) {
          this.$router.replace({ name: "CompanySearch" });
        } else if (this.response.user.role === "user") {
          this.$router.replace({ name: "ManualOnboarding" });
        } else if (this.response.user.role === "Employer") {
          // this.$router.replace({ name: "ManualOnboardingCompany" });
          this.$router.replace({ name: "CompanySearch" });
        }
      } else {
        this.formResponse = this.response
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.auth-login-wrap {
  width: 60%;
}

.fb-button {
  margin-bottom: 50px;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 55px !important;
}

@media (max-width: 600px) {
  .auth-login-wrap {
    width: 90%;
  }
}
</style>
