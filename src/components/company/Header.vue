<template>
  <v-row
    class="header justify-space-between align-center pr-4 pl-4 pr-md-8 pl-md-13"
  >
    <v-col cols="6" md="3">
      <router-link to="" class="logo">
        <v-img :src="require('@/assets/jonder_blue.png')" max-width="128px" />
      </router-link>
    </v-col>
    <v-col cols="6" md="4" class="text-right">
      <div class="dashboard-avatar">
        <span class="name">{{ user.company }}</span>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-avatar color="primary" size="38" v-on="on">
              <v-img v-if="user.profile_img" :src="user.profile_img"></v-img>
              <span v-else class="white--text">
                {{ $store.getters["user/getUserInitials"] }}
              </span>
            </v-avatar>
          </template>
          <v-list class="nav">
            <v-list-item @click="$router.push({ name: 'CompanySettings' })">
              {{ $t("profile") }}
            </v-list-item>
            <v-list-item @click="$router.push({ name: 'Logout' })">
              {{ $t("logout") }}
            </v-list-item>
          </v-list>
        </v-menu>
        <LanguageDropdown />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";
import LanguageDropdown from '../LanguageDropdown';

export default {
  name: "Header",

  components: {LanguageDropdown},

  data() {
    return {
      searchString: null,
      searchLoading: false,
      searchItems: [],
      search: null
    };
  },

  computed: {
    ...mapGetters("user", ["user"])
  },

  methods: {
    ...mapActions("user", ["searchUsers"]),
    handleSearch: debounce(async function(val) {
      this.searchItems = await this.searchUsers(val);
      this.searchLoading = false;
    }, 2000)
  },

  watch: {
    search(val) {
      this.searchLoading = true;
      if (val && val.trim().length > 0 && val !== this.searchString)
        this.handleSearch(val);
    },
    searchString(val) {
      if (val) {
        this.$router.push({ name: "CompanyUser", params: { id: val } });
        setTimeout(() => {
          this.search = null;
          this.searchString = null;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  background: #fff;
  z-index: 1111;

  .dashboard-avatar {
    .name {
      display: none;
    }
  }
}

@media (min-width: 960px) {
  .header {
    .dashboard-avatar {
      .name {
        display: inline;
      }
    }
  }
}
</style>
