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
            <span>{{ $t('company.dashboard.dashboard') }}</span>
          </router-link>
          <router-link :to="{ name: 'CompanyInbox'}">
            <v-icon>mdi-email-outline</v-icon>
            <span>{{ $t('company.dashboard.inbox') }}</span>
          </router-link>
          <router-link :to="{ name: 'CompanySearch'}">
            <v-icon>mdi-magnify</v-icon>
            <span>{{ $t('company.dashboard.search') }}</span>
          </router-link>
          <router-link :to="{ name: 'CompanyProducts'}">
            <v-icon>mdi-currency-usd</v-icon>
            <span>{{ $t('company.dashboard.productPricing') }}</span>
          </router-link>
          <router-link :to="{name: 'CompanyProfile'}">
            <v-icon>mdi-account-outline</v-icon>
            <span>{{ $t('general.profile') }}</span>
          </router-link>
        </nav>
      </v-col>
      <v-col cols="9" class="full-h bg-light-gray">
        <v-container fluid class="d-flex flex-column full-h">
            <DashboardHeader class="pl-10 pr-10"/>
          <v-row style="overflow: auto;">
            <v-container :fluid="true" class="company pl-13 pr-13">
                <router-view></router-view>
            </v-container>
          </v-row>
        </v-container>
          
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import DashboardHeader from '@/components/company/DashboardHeader';

export default {
  name: 'CompanyLayout',

  components: {
    DashboardHeader
  }
};

</script>

<style lang="scss">
  .company {
    font-family: $open-sans;
  }
</style>