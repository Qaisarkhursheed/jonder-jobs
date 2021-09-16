<template>
  <v-container
    class="auth-login-wrap mx-auto"
    style="max-width: 500px"
    fluid
    no-gutters
  >
    <jonder-title>
      {{ $t("forgotPassowrd") }}
    </jonder-title>

    <p class="p-text mb-7">
      {{ $t("forgotPassowrdDescription") }}
    </p>

    <v-form v-model="formValid" class="auth-form" @submit.prevent="submit">
      <label class="profile-label">{{ $t("enterYourEmail") }}</label>
      <v-text-field
        dense
        placeholder="Email"
        :rules="[validations.required, validations.email]"
        type="email"
        outlined
        background-color="white"
        v-model="formData.email"
      ></v-text-field>

      <ResponseAlert :response="formResponse"></ResponseAlert>

      <v-btn
        type="submit"
        color="primary"
        class="full-w"
        :disabled="!formValid"
      >
        {{ $t("sendEmail") }}
      </v-btn>
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
        email: ""
      },
      formResponse: {},
      formValid: false
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch("auth/forgotPassword", this.formData)
        .then(() => {
          this.$emit("success");
        })
        .catch(err => {
          this.formResponse = err.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: 55px;
}

.p-text {
  color: $dark-grey;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  text-align: center;
  margin: auto;
}
</style>
