<template>
  <auth-wrap :img="img">
    <auth-register-company @changeImage="changeImage" />
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthRegisterCompany from "@/components/auth/AuthRegisterCompany";

export default {
  components: {
    AuthWrap,
    AuthRegisterCompany
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
