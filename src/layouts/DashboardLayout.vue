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
            <span>Nachrichten</span>
          </router-link>
          <router-link to="/dashboard/product-pricing">
            <v-icon>mdi-currency-usd</v-icon>
            <span>Preise</span>
          </router-link>
          <router-link to="/dashboard/profile" class="with-submenu">
            <v-icon>mdi-account-outline</v-icon>
            <span>Profile</span>
          </router-link>
          <div class="submenu">
            <router-link to="/dashboard/profile">Persönliche Daten</router-link>
            <router-link to="/dashboard/profile">Qualifikationen</router-link>
            <router-link to="/dashboard/profile">Aktuelle Position</router-link>
            <router-link to="/onboarding">Onboarding</router-link>
            <router-link to="/dashboard/profile/cv-maker">CV Maker</router-link>
            <router-link to="/dashboard/profile">Zahlung</router-link>
          </div>
        </nav>
      </v-col>
      <v-col cols="9" class="full-h bg-light-gray">
        <v-container fluid class="d-flex flex-column full-h">
          <v-row class="flex-shrink-0 flex-grow-0 search-holder">
            <v-col cols="6">
              <v-autocomplete
                v-model="searchString"
                :loading="searchLoading"
                :items="searchItems"
                :search-input.sync="search"
                cache-items
                flat
                dense
                outlined
                hide-no-data
                hide-details
                label="Suche"
                append-icon="mdi-magnify"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
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
                      <v-list-item-title
                        @click="navigateTo('/dashboard/profile')"
                        >Profile</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="navigateTo('/logout')"
                        >Logout</v-list-item-title
                      >
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
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";

export default {
  data: () => ({
    searchString: null,
    searchLoading: false,
    searchItems: [],
    search: null
  }),
  computed: {
    ...mapGetters("user", ["user", "getUserFullName", "getUserInitials"])
  },
  methods: {
    ...mapActions("user", ["searchUsers"]),
    handleSearch: debounce(async function(val) {
      this.searchItems = await this.searchUsers(val);
      this.searchLoading = false;
    }, 2000),
    navigateTo(url) {
      this.$router.push(url);
    }
  },
  watch: {
    search(val) {
      this.searchLoading = true;
      if (val && val.trim().length > 0 && val !== this.searchString)
        this.handleSearch(val);
    },
    searchString(val) {
      if (val) {
        this.$router.push("/dashboard/profile/view/" + val);
        setTimeout(() => {
          this.search = null;
          this.searchString = null;
        });
      }
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

    &.with-submenu {
      margin-bottom: 10px;
    }

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

  .submenu {
    padding-left: 34px;

    a {
      padding: 4px 0;
      margin-bottom: 5px;
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

.search-holder
  .v-select.v-select--is-menu-active
  .v-input__icon--append
  .v-icon {
  transform: rotate(0) !important;
}
</style>
