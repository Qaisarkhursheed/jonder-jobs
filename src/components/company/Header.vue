<template>
  <v-row class="header justify-space-between align-center pr-8 pl-13">
    <v-col cols="3">
      <router-link to="" class="logo">
      <v-img
        :src="require('@/assets/jonder_blue.png')"
        max-width="128px"/>
    </router-link>
    </v-col>
    <v-col cols="4" class="text-right">
      <div class="dashboard-avatar">
        <span class="name">{{ user.company }}</span>
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
                @click="navigateTo('CompanyProfile')"
                >Profile</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="navigateTo('Logout')"
                >Logout</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-col>
  </v-row>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";

export default {
  name: 'Header',

  components: {
  },

  data() {
    return {
      searchString: null,
      searchLoading: false,
      searchItems: [],
      search: null
    }
  },

  computed: {
    ...mapGetters("user", ["user", "getUserInitials"])
  },

  methods: {
    ...mapActions("user", ["searchUsers"]),
    handleSearch: debounce(async function(val) {
      this.searchItems = await this.searchUsers(val);
      this.searchLoading = false;
    }, 2000),
    navigateTo(url) {
      this.$router.push({name: url});
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
        this.$router.push({name: 'CompanyUser', params: {id: val}});
        setTimeout(() => {
          this.search = null;
          this.searchString = null;
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 100px;
    background: #fff;
    z-index: 1111;
  }
</style>