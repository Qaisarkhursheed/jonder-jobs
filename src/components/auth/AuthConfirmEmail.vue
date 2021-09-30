<template>
  <auth-wrap img="1">
    <div class="mt-4 text-center" style="max-width: 400px">
      <img :src="require('@/assets/svg/email_sent.svg')" width="230" />

      <h1 class="mt-5" style="font-size: 24px">
        {{ $t("confirmYourAccount") }}
      </h1>

      <p class="mt-2 mb-5">
        {{ $t("confirmYourAccountSub") }}
      </p>

      <router-link :to="{ name: 'Login' }">
        <v-btn type="button" color="primary" height="55">
          {{ $t("backToLogin") }}
        </v-btn>
      </router-link>

      <br />

      <v-btn
        v-if="!successBox"
        text
        @click="verificationEmail"
        :loading="loading"
        height="55"
        class="mt-3"
      >
        {{ $t("resendEmail") }}
      </v-btn>

      <div v-else class="mt-3 d-block" style="color: #4caf50">
        {{ $t("emailSentSuccess") }}!
      </div>
    </div>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";

export default {
  data() {
    return {
      resendValid: false,
      interval: null,
      successBox: false,
      loading: false
    };
  },
  components: {
    AuthWrap
  },
  methods: {
    setInterval() {
      this.interval = setInterval(() => {
        this.canResend();
      }, 1000);
    },
    canResend() {
      const tempTime = new Date().getTime();
      const lastTime = +localStorage.getItem("verificationTime") || tempTime;
      this.resendValid = (tempTime - lastTime) / 1000 >= 60;
      if (this.resendValid) {
        clearInterval(this.interval);
      }
    },
    verificationEmail() {
      this.loading = true;
      this.$store
        .dispatch("auth/sendVerificationEmail", this.$route.query.email)
        .then(() => {
          this.successBox = true;
          setInterval(() => (this.successBox = false), 5000);
        })
        .finally(() => (this.loading = false));
      const time = new Date().getTime().toString();
      localStorage.setItem("verificationTime", time);
      this.setInterval();
    }
  },
  mounted() {
    this.setInterval();
  }
};
</script>

<style lang="scss"></style>
