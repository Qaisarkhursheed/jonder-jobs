<template>
  <v-row class="auth-wrap" no-gutters style="height: 100vh">
    <!-- Left half -->
    <v-col
      class="full-h"
      cols="12"
      md="6"
      order="2"
      order-md="1"
      style="position: relative;"
    >
      <div
        class="hero-image d-flex justify-content-center align-center"
        :style="{
          backgroundImage: 'url(' + require('@/assets/' + img + '.png') + ')'
        }"
      ></div>
      <v-overlay :absolute="true" :value="true">
        <v-img
          :src="require('@/assets/jonder_white.png')"
          max-width="212"
        ></v-img>
      </v-overlay>
    </v-col>

    <!-- Right half -->
    <v-col
      class="right-half d-flex full-h"
      style="overflow: auto"
      cols="12"
      md="6"
      order="1"
      order-md="2"
    >
      <div class="mx-auto my-auto py-5">
        <!-- Logo -->
        <v-img
          :src="require('@/assets/jonder_blue.png')"
          class="mx-auto"
          max-width="128px"
          max-height="42px"
          contain
        ></v-img>

        <!-- Content -->
        <slot></slot>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AuthWrap",
  props: ["img", "haveWidth"]
};
</script>

<style lang="scss">
.auth-wrap {
  .hero-image {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media screen and (max-width: 959px) {
    .right-half {
      height: unset !important;
      min-height: 100vh;
    }
  }

  .v-stepper {
    .v-stepper__content {
      padding-top: 0px !important;
    }
  }
}
</style>
