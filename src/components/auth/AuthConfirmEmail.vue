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
    </div>  
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";

export default {
  components: {
    AuthWrap,
  }
};
</script>

<style></style>
