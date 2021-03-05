<template>
  <auth-wrap img="1">
    <auth-register />
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthRegister from "@/components/auth/AuthRegister";

export default {
  components: {
    AuthWrap,
    AuthRegister
  }
};
</script>

<style></style>
