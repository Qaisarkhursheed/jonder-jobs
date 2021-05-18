<template>
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
  name: 'DashboardHeader',

  data() {
    return {
      searchString: null,
      searchLoading: false,
      searchItems: [],
      search: null
    }
  },

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