<template>
  <v-container fluid class="full-h pa-0" style="overflow: hidden">
    <Header />
    <v-row class="full-h ma-0">
      <v-col cols="3" class="full-h pa-0">
        <Sidebar />
      </v-col>
      <v-col cols="9" class="full-h bg-light-gray">
        <v-container fluid class="d-flex flex-column full-h">
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

import Header from '@/components/company/Header';
import Sidebar from '@/components/company/Sidebar';

export default {
  name: 'CompanyLayout',

  components: {
    Header,
    Sidebar
  }
};

</script>

<style lang="scss">
  .company {
    font-family: $open-sans;
  }
</style>