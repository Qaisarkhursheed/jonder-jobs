<template>
  <v-container fluid class="full-h pa-0">
    <v-row class="full-h ma-0">
      <v-col cols="3" class="full-h">
        <nav class="dashboard-navigation">
          <router-link to="/" class="logo">
            <v-img :src="require('@/assets/jonder_blue.png')" max-width="128px" />
          </router-link>
          <router-link to="/dashboard">
            <v-img
              :src="require('@/assets/icons/menu.svg')"
              max-width="20"
            ></v-img>
            <span>Dashboard</span>
          </router-link>
          <router-link to="/chat">
            <v-img
              :src="require('@/assets/icons/chat.svg')"
              max-width="20"
            ></v-img>
            <span>Chat</span>
          </router-link>
          <router-link to="/product-pricing">
            <v-img
              :src="require('@/assets/icons/pricing.svg')"
              max-width="20"
            ></v-img>
            <span>Product Pricing</span>
          </router-link>
          <router-link to="/profile">
            <v-img
              :src="require('@/assets/icons/profile.svg')"
              max-width="20"
            ></v-img>
            <span>Profile</span>
          </router-link>
        </nav>
      </v-col>
      <v-col cols="9" class="full-h bg-light-gray layout-content">
        <v-container fluid>
          <v-row>
            <v-col cols="6">
              <form class="dashboard-search" action="#" @submit.prevent="handleSearch">
                <v-text-field
                  type="search"
                  outlined
                  dense
                  placeholder="Suche"
                  background-color="white"
                  hide-details="auto"
                  v-model="searchString"
                ></v-text-field>
                <v-img
                  class="dashboard-search-submit"
                  :src="require('@/assets/icons/search.svg')"
                ></v-img>
              </form>
            </v-col>
            <v-col cols="6" class="text-right">
              <div class="dashboard-avatar">
                <span class="name">Joe Smith</span>
                <v-avatar
                  color="primary"
                  size="38"
                >
                  <span class="white--text headline">JS</span>
                </v-avatar>
              </div>
            </v-col>
          </v-row>
          <slot />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    searchString: ""
  }),
  methods: {
    handleSearch() {
      console.log("Handle search");
    }
  }
};
</script>

<style lang="scss">
.v-application--wrap {
  height: 100vh;
}
.dashboard-navigation {
  padding: 0 0 0 50px;
  box-shadow: 8px 0 34px 0 #000000 3%;

  a {
    display: block;
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 21px;
    text-align: left;
    clear: both;
    color: $medium-grey;
    @include clearfix;

    &.logo {
      margin-bottom: 30px;
    }

    .v-image, span {
      float: left;
    }

    .v-image {
      margin-right: 10px;
    }

    &:hover, &.router-link-active {
      color: $primary-blue-dark;
    }
  }
}

.dashboard-search {
  position: relative;

  .dashboard-search-submit {
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    width: 20px;
  }
}

.dashboard-avatar {
  font-size: 16px;
  line-height: 38px;

  .name {
    margin-right: 10px;
  }
}
.layout-content {
  overflow: auto;
}
</style>