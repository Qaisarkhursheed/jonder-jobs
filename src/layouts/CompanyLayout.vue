<template>
  <v-container fluid class="full-h pa-0" style="overflow: hidden">
    <Header />
    <div class="main-wrap full-h">
      <div class="sidebar-wrap">
        <Sidebar />
      </div>
      <div class="main-panel-wrap full-h bg-light-gray">
        <v-container :fluid="true" class="company pt-8 pl-7 pr-7 pb-0 full-h">
          <router-view></router-view>
        </v-container>
      </div>
    </div>
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
    overflow: auto;
  }
  .main-wrap {
    display: flex;
  }
  .sidebar-wrap {
    width: 360px;
    min-width: 360px;
  }
  .main-panel-wrap {
    width: 100%;
    overflow: auto;
    padding-bottom: 80px;
  }
</style>