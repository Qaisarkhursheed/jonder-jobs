<template>
  <auth-wrap img="1">
    <div class="mt-4 text-center" style="max-width: 400px">
      <img :src="require('@/assets/svg/email_sent.svg')" width="230" />

      <h1 class="mt-5" style="font-size: 24px">
        Confirm your account
      </h1>

      <p class="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat est
        purus ipsum.
      </p>

      <div class="reset-email-btn mb-2">
        <v-btn
          color="blue darken-4"
          text
          :disabled="!resendValid"
          elevation="0"
          large
          @click="verificationEmail()"
        >
          {{ $t("company.profile.resendEmail") }}
        </v-btn>
      </div>
      <router-link :to="{ name: 'Login' }">
        <v-btn type="button" color="primary" height="55">
          Back to Login
        </v-btn>
      </router-link>
    </div>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";

export default {
  data() {
    return {
      email: localStorage.getItem("user-email"),
      resendValid: false,
      interval: null
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
      if (this.resendValid) {
        this.$store.dispatch("auth/sendVerificationEmail", this.email);
        const time = new Date().getTime().toString();
        localStorage.setItem("verificationTime", time);
        this.setInterval();
      }
    }
  },
  mounted() {
    this.setInterval();
  }
};
</script>

<style lang="scss">
.reset-email-btn {
  .v-btn:before {
    display: none;
  }
}
</style>
