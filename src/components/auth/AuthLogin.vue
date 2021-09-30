<template>
  <v-container class="auth-login-wrap mx-auto" fluid no-gutters>
    <jonder-title>
      {{ $t("loginAccount") }}
    </jonder-title>

    <v-alert v-if="$route.query.resetPassword" text type="success">
      {{ $t("alertPasswordReset") }}
    </v-alert>

    <v-alert v-if="$route.query.setPassword" text type="success">
      {{ $t("alertPasswordSet") }}
    </v-alert>

    <v-alert v-if="$route.query.changePassword" text type="success">
      {{ $t("alertPasswordChanged") }}
    </v-alert>

    <v-alert v-if="$route.query.emailVerified" text type="success">
      {{ $t("alertEmailVerified") }}
    </v-alert>

    <div class="mt-5">
      <v-form
        v-model="formValid"
        class="auth-form"
        @submit.prevent="handleLogin"
      >
        <p class="login-by-email text-medium">
          {{ $t("loginByEmail") }}
        </p>
        <label class="profile-label">{{ $t("email") }}</label>
        <v-text-field
          dense
          :rules="[validations.required, validations.email]"
          type="email"
          outlined
          solo
          background-color="white"
          v-model="formData.email"
        ></v-text-field>

        <label class="profile-label">{{ $t("password") }}</label>
        <v-text-field
          dense
          :rules="[validations.required]"
          type="password"
          outlined
          solo
          hide-details="auto"
          background-color="white"
          v-model="formData.password"
        ></v-text-field>

        <!--        <v-checkbox-->
        <!--          label="Ich stimme der Datenschutzerklärung zu."-->
        <!--          v-model="formData.privacy"-->
        <!--        ></v-checkbox>-->

        <p class="text-caption text-left mt-2" style="font-size: 14px">
          <router-link
            :to="{ name: 'ForgotPassword' }"
            class="text-color-primary-blue-dark"
            style="text-decoration: none"
          >
            {{ $t("forgotPassowrd") }}
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
        >
          <v-icon left>mdi-google</v-icon>
          {{ $t("continueWithGoogle") }}
        </v-btn>

        <v-btn
          link
          href="https://dev.api.jonder.devla.dev/api/v1/auth/facebook"
          outlined
          color="primary"
          class="full-w mt-4"
        >
          <v-icon left>mdi-facebook</v-icon>
          {{ $t("continueWithFacebook") }}
        </v-btn>

        <v-btn
          type="submit"
          class="full-w mt-5 dark-blue"
          :disabled="!formValid"
          :loading="formLoading"
        >
          {{ $t("login") }}
        </v-btn>
      </v-form>
    </div>

    <p class="text-center mt-2" style="font-size: 14px">
      {{ $t("dontHaveAccount") }}
      <router-link
        :to="{ name: 'Register' }"
        class="text-color-primary-blue-dark"
        style="text-decoration: none"
      >
        {{ $t("register") }}
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
          localStorage.removeItem("verificationTime");

          if (this.$route.query.redirect) {
            this.$router.replace(this.$route.query.redirect);
          } else {
            this.$router.replace({ name: "Home" });
          }

          this.$store.dispatch("user/fetchPlans");
        })
        .catch(err => {
          if (err.data.data?.email_not_verified) {
            this.$router.replace({
              name: "RegisterVerifyEmail",
              query: {
                email: this.formData.email
              }
            });
          } else {
            this.formResponse = err.data;
          }
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
  .profile-label,
  .login-by-email {
    color: $medium-grey;
    font-weight: normal;
  }
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
