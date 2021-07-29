<template>
  <v-container class="auth-login-wrap mx-auto" fluid no-gutters>
    <jonder-title>
      Loggen Sie sich in Ihren Jonder Account ein
    </jonder-title>

    <v-alert v-if="$route.query.resetPassword" text type="success">
      Ihr Passwort wurde zurückgesetzt!
    </v-alert>

    <div class="mt-5">
      <v-form
        v-model="formValid"
        class="auth-form"
        @submit.prevent="handleLogin"
      >
        <label class="profile-label">Email</label>
        <v-text-field
          dense
          :rules="[validations.required, validations.email]"
          type="email"
          outlined
          background-color="white"
          v-model="formData.email"
        ></v-text-field>

        <label class="profile-label">Passwort</label>
        <v-text-field
          dense
          :rules="[validations.required]"
          type="password"
          outlined
          background-color="white"
          v-model="formData.password"
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

        <v-btn
          link
          href="https://dev.api.jonder.devla.dev/api/v1/auth/google"
          outlined
          color="primary"
          class="full-w mt-2"
          >Continue with Google
        </v-btn>

        <v-btn
          link
          href="https://dev.api.jonder.devla.dev/api/v1/auth/facebook"
          outlined
          color="primary"
          class="full-w mt-4"
        >
          Continue with Facebook
        </v-btn>

        <v-btn
          type="submit"
          color="primary"
          class="full-w mt-5"
          :disabled="!formValid"
          :loading="formLoading"
        >
          Loggen Sie
        </v-btn>
      </v-form>
    </div>

    <p class="text-caption text-left mt-1">
      Haben Sie kein Konto?
      <router-link to="/register">
        Registrieren
      </router-link>
    </p>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";
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
      formLoading: false,
      formResponse: {},
      formValid: false
    };
  },
  methods: {
    async handleLogin() {
      this.formLoading = true;
      this.formResponse = {};
      this.$store
        .dispatch("auth/login", this.formData)
        .then(() => {
          this.$router.replace({ name: "Home" });
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

<style lang="scss" scoped>
.auth-login-wrap {
  max-width: 450px;
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
