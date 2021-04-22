<template>
  <auth-wrap :img="img">
    <auth-register @changeImage="changeImage" />
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthRegister from "@/components/auth/AuthRegister";

export default {
  components: {
    AuthWrap,
    AuthRegister
  },
  data: () => ({
    img: 1
  }),
  methods: {
    changeImage() {
      this.img = 2;
    }
  }
};
</script>

<style></style>
