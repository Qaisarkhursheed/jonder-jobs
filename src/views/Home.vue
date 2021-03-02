<template>
  <div class="home">
    <auth-wrap img="1">
      <auth-welcome />
    </auth-wrap>
  </div>
</template>

<script>
import AuthWrap from "../components/auth/AuthWrap.vue";
import AuthWelcome from "../components/auth/AuthWelcome.vue";

export default {
  name: "Home",
  components: {
    AuthWrap,
    AuthWelcome
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
