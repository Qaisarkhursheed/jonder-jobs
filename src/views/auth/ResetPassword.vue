<template>
  <auth-wrap img="1">
    <v-container
      class="auth-login-wrap mx-auto"
      style="max-width: 500px"
      fluid
      no-gutters
    >
      <jonder-title>
        {{ $t("resetPassword") }}
      </jonder-title>

      <p class="p-text mb-7">
        {{ $t("resetPasswordDescription") }}
      </p>

      <v-form v-model="formValid" class="auth-form" @submit.prevent="submit">
        <label class="profile-label">{{ $t("newPassword") }}</label>
        <v-text-field
          v-model="formData.password"
          dense
          solo
          :rules="[validations.required, validations.password]"
          type="password"
          outlined
          background-color="white"
        ></v-text-field>

        <label class="profile-label">
          {{ $t("confirmNewPassword") }}
        </label>
        <v-text-field
          v-model="formData.password_confirmation"
          dense
          solo
          :rules="[
            validations.required,
            validations.same('Neues Passwort', formData.password)
          ]"
          type="password"
          outlined
          background-color="white"
        ></v-text-field>

        <ResponseAlert :response="formResponse"></ResponseAlert>

        <v-btn
          type="submit"
          color="primary"
          class="full-w"
          height="55"
          :disabled="!formValid"
        >
          {{ $t("send") }}
        </v-btn>
      </v-form>
    </v-container>
  </auth-wrap>
</template>

<script>
import JonderTitle from "@/components/parts/JonderTitle.vue";
import AuthWrap from "@/components/auth/AuthWrap.vue";

export default {
  data() {
    return {
      formData: {},
      formResponse: {},
      formValid: false
    };
  },
  components: {
    AuthWrap,
    JonderTitle
  },
  methods: {
    submit() {
      this.formResponse = {};
      this.formData.email = this.$route.params.email;
      this.formData.expires = this.$route.params.expires;
      this.formData.token = this.$route.params.token;
      this.formData.signature = this.$route.params.signature;

      this.$store
        .dispatch("auth/resetPassword", this.formData)
        .then(() => {
          this.$router.push({
            name: "Login",
            query: {
              resetPassword: 1
            }
          });
        })
        .catch(err => {
          this.formResponse = err.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.p-text {
  color: $dark-grey;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  text-align: center;
  margin: auto;
}
</style>
