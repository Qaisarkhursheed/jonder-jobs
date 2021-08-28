<template>
  <auth-layout>
    <div class="home">
      <auth-wrap img="1">
        <auth-welcome />
      </auth-wrap>
    </div>
  </auth-layout>
</template>

<script>
import AuthWrap from "../components/auth/AuthWrap.vue";
import AuthWelcome from "../components/auth/AuthWelcome.vue";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "Home",
  components: {
    AuthLayout,
    AuthWrap,
    AuthWelcome
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
