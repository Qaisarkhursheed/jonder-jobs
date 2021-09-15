<template>
  <auth-wrap img="1">
    <v-container
      class="auth-login-wrap mx-auto"
      style="max-width: 500px"
      fluid
      no-gutters
    >
      <jonder-title>
        {{ $t("setPassword") }}
      </jonder-title>

      <p class="p-text mb-7">
        {{ $t("setPasswordDescription") }}
      </p>

      <v-form v-model="formValid" class="auth-form" @submit.prevent="submit">
        <label class="profile-label">{{ $t("password") }}</label>
        <v-text-field
          v-model="formData.password"
          dense
          :rules="[validations.required, validations.min.string(6)]"
          type="password"
          outlined
          background-color="white"
        ></v-text-field>

        <label class="profile-label">{{ $t("confirmPassword") }}</label>
        <v-text-field
          v-model="formData.password_confirmation"
          dense
          :rules="[
            validations.required,
            validations.same('Passwort', formData.password)
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
          :loading="formLoading"
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
      formLoading: false,
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
      this.formLoading = true;
      this.formResponse = {};
      this.formData.expires = this.$route.params.expires;
      this.formData.token = this.$route.params.token;
      this.formData.signature = this.$route.params.signature;

      this.$store
        .dispatch("auth/setPassword", this.formData)
        .then(() => {
          this.$router.push({
            name: "Login",
            query: {
              setPassword: 1
            }
          });
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
.p-text {
  color: $dark-grey;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  text-align: center;
  margin: auto;
}
</style>
