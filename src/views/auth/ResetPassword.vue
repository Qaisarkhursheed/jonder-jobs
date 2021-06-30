<template>
  <auth-wrap img="1">
    <auth-password />
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthPassword from "@/components/auth/AuthPassword.vue";

export default {
  name: "ResetPassword",
  components: {
    AuthWrap,
    AuthPassword
  }
};
</script>

<style></style>