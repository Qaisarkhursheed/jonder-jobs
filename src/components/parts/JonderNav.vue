<template>
  <div class="dashboard-nav">
    <router-link to="/">
      <v-img
        :src="require('@/assets/jonder_blue.png')"
        max-width="128px"
      ></v-img>
    </router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
</template>

<style lang="scss" scoped>
.jonder-title {
  font-size: 24px;
  text-align: center;
  color: #222;
  font-weight: 600;
}
</style>
