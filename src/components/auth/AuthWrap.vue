<template>
  <v-container fluid no-gutters class="main-wrap fill-height pa-0">
    <v-row no-gutters class="full-h">
      <!-- Left half -->
      <v-col class="full-h" style="position: relative;">
        <div
          class="hero-image d-flex justify-content-center align-center"
          :style="{
            backgroundImage: 'url(' + require('@/assets/' + img + '.png') + ')'
          }"
        >
        </div>
        <v-overlay :absolute="true" :value="true">
          <v-img 
            :src="require('@/assets/jonder_white.png')"
            max-width='212'
          ></v-img>
        </v-overlay>
      </v-col>
      <!-- Right half -->
      <v-col class="full-h">
        <div class="auth-wrap d-flex justify-center align-center">
          <slot></slot>
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
  padding-top: 180px;
  padding-bottom: 60px;
  overflow: auto;
}
</style>
