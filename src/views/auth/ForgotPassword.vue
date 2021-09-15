<template>
  <auth-wrap img="1">
    <AuthForgotPassword v-if="step == 1" @success="step = 2" />

    <div v-if="step == 2" class="mt-4 text-center" style="max-width: 400px">
      <img :src="require('@/assets/svg/email_sent.svg')" width="230" />

      <h1 class="mt-5" style="font-size: 24px">
        {{ $t("emailSentSuccess") }}
      </h1>

      <p class="mt-2">
        {{ $t("emailSentSuccessMessage") }}
      </p>
    </div>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthForgotPassword from "@/components/auth/AuthForgotPassword.vue";

export default {
  data() {
    return {
      step: 1
    };
  },
  components: {
    AuthWrap,
    AuthForgotPassword
  }
};
</script>

<style></style>
