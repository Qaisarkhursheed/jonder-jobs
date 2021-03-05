<template>
  <auth-wrap img="1">
    <auth-login />
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthLogin from "@/components/auth/AuthLogin.vue";

export default {
  name: "Login",
  components: {
    AuthWrap,
    AuthLogin
  }
};
</script>

<style></style>
