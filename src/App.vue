<template>
  <v-app>
    <div id="nav">
      <v-container fluid no-gutters class='pa-0'>
        <v-row no-gutters>
          <v-col class='pa-3'></v-col>
          <v-col class='pa-3 pt-12 d-flex justify-center'>
            <router-link to="/">
              <v-img
                :src="require('@/assets/jonder_blue.png')"
                max-width='128px'
              ></v-img>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <router-view />
  </v-app>
</template>

<style lang="scss">
html {
  overflow: hidden!important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: absolute;
  display: flex;
  width: 100%;
  z-index: 99;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
