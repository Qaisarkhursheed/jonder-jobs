<template>
  <v-container fluid class="full-h pa-0">
    <v-row class="full-h ma-0">
      <v-col cols="3" class="full-h">
        <nav class="dashboard-navigation">
          <router-link to="" class="logo">
            <v-img
              :src="require('@/assets/jonder_blue.png')"
              max-width="128px"/>
          </router-link>
          <router-link :to="{ name: 'CompanyDashboard'}">
            <v-icon>mdi-view-dashboard-outline</v-icon>
            <span>Dashboard</span>
          </router-link>
          <router-link :to="{ name: 'CompanyInbox'}">
            <v-icon>mdi-email-outline</v-icon>
            <span>Inbox</span>
          </router-link>
          <router-link :to="{ name: 'CompanySearch'}">
            <v-icon>mdi-magnify</v-icon>
            <span>Search</span>
          </router-link>
          <router-link :to="{ name: 'CompanyProducts'}">
            <v-icon>mdi-currency-usd</v-icon>
            <span>Product Pricing</span>
          </router-link>
          <router-link :to="{name: 'CompanyProfile'}">
            <v-icon>mdi-account-outline</v-icon>
            <span>Profile</span>
          </router-link>
        </nav>
      </v-col>
      <v-col cols="9" class="full-h bg-light-gray">
        <v-container fluid class="d-flex flex-column full-h pl-13 pr-13">
          <v-row class="flex-shrink-0 flex-grow-0 search-holder">
            <v-col cols="6">
              <!-- <v-autocomplete
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
              ></v-autocomplete> -->
              <v-autocomplete flat
                              dense
                              outlined
                              label="Suche"
                              append-icon="mdi-magnify">
              </v-autocomplete>
            </v-col>
            <v-col cols="6" class="text-right">
              <div class="dashboard-avatar">
                <!--<span class="name">{{ getUserFullName }}</span>-->
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-avatar color="primary" size="38" v-on="on">
                      <!--<v-img
                        :src="user.profile_img"
                        v-if="user.profile_img"
                      ></v-img>
                      <span class="white--text headline" v-else>{{
                          getUserInitials
                        }}</span>-->
                    </v-avatar>
                  </template>
                  <!--<v-list>
                    <v-list-item>
                      <v-list-item-title @click="navigateTo('/dashboard/profile')">Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="navigateTo('/logout')">Logout</v-list-item-title>
                    </v-list-item>
                  </v-list>-->
                </v-menu>
              </div>
            </v-col>
          </v-row>
          <v-row style="overflow: auto;">
            <v-container>
                <router-view></router-view>
            </v-container>
          </v-row>
        </v-container>
          
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'CompanyLayout',
};

</script>