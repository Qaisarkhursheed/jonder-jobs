<template>
  <v-container fluid no-gutters class="main-wrap fill-height pa-0">
    <v-row no-gutters class="full-h">
      <!-- Left half -->
      <v-col class="full-h" 
        cols="12" 
        md="6"
        order="2"
        order-md="1" 
        style="position: relative;">
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
      <v-col class="full-h" 
        cols="12" 
        md="6"
        order="1"
        order-md="2" 
        style="position: relative">
        <div class="auth-wrap">
          <div class="auth-logo d-flex flex-column justify-center align-center">
            <v-img
              :src="require('@/assets/jonder_blue.png')"
              max-width="128px"
            ></v-img>
          </div>
          <div class="auth-form d-flex flex-column justify-center align-center">
            <slot></slot>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AuthWrap",
  props: ["img"]
};
</script>

<style lang="scss" scoped>
.main-wrap {
  height: 100vh;
}

.hero-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.auth-wrap {
  height: 100%;
  padding: 30px;
  overflow: auto;
  .auth-logo {
    height: 40px;
  }
  .auth-form {
    height: auto;
  }
}
</style>
