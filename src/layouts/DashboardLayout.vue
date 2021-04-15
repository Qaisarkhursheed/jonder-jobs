<template>
  <v-container fluid class="full-h pa-0" v-if="user">
    <v-row class="full-h ma-0">
      <v-col cols="3" class="full-h">
        <nav class="dashboard-navigation">
          <router-link to="/dashboard" class="logo">
            <v-img
              :src="require('@/assets/jonder_blue.png')"
              max-width="128px"
            />
          </router-link>
          <router-link to="/dashboard">
            <v-icon>mdi-view-dashboard-outline</v-icon>
            <span>Dashboard</span>
          </router-link>
          <router-link to="/dashboard/chat">
            <v-icon>mdi-message-outline</v-icon>
            <span>Chat</span>
          </router-link>
          <router-link to="/dashboard/product-pricing">
            <v-icon>mdi-currency-usd</v-icon>
            <span>Product Pricing</span>
          </router-link>
          <router-link to="/dashboard/profile">
            <v-icon>mdi-account-outline</v-icon>
            <span>Profile</span>
          </router-link>
        </nav>
      </v-col>
      <v-col cols="9" class="full-h bg-light-gray">
        <v-container fluid class="d-flex flex-column full-h">
          <v-row class="flex-shrink-0 flex-grow-0">
            <v-col cols="6">
              <form
                class="dashboard-search"
                action="#"
                @submit.prevent="handleSearch"
              >
                <v-text-field
                  type="search"
                  outlined
                  dense
                  placeholder="Suche"
                  background-color="white"
                  hide-details="auto"
                  append-icon="mdi-magnify"
                  v-model="searchString"
                ></v-text-field>
              </form>
            </v-col>
            <v-col cols="6" class="text-right">
              <div class="dashboard-avatar">
                <span class="name">{{ getUserFullName }}</span>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-avatar color="primary" size="38" v-on="on">
                      <v-img
                        :src="user.profile_img"
                        v-if="user.profile_img"
                      ></v-img>
                      <span class="white--text headline" v-else>{{
                          getUserInitials
                        }}</span>
                    </v-avatar>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title @click="navigateTo('/dashboard/profile')">Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="navigateTo('/logout')">Logout</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
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
import { mapGetters } from "vuex";

export default {
  data: () => ({
    searchString: ""
  }),
  computed: {
    ...mapGetters("user", ["user", "getUserFullName", "getUserInitials"])
  },
  methods: {
    handleSearch() {
      console.log("Handle search");
    },
    navigateTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss">
.v-application--wrap {
  height: 100vh;
}

.v-application .dashboard-navigation {
  padding: 0 0 0 50px;

  a {
    display: block;
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 21px;
    text-align: left;
    clear: both;
    color: $medium-grey;
    text-decoration: none;
    @include clearfix;

    &.logo {
      margin-bottom: 30px;
    }

    span,
    .v-icon {
      float: left;
      display: inline-block;
      height: 20px;
      line-height: 22px;
    }

    .v-icon {
      margin-right: 10px;
      line-height: 20px;
    }

    &:hover,
    &.router-link-exact-active {
      &,
      span,
      .v-icon {
        color: $primary-blue-dark;
        text-decoration: none;
      }
    }

    &.router-link-exact-active {
      span {
        font-weight: bold;
      }
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
