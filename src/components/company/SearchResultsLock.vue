<template>
  <!-- <v-overlay :absolute="true">
    <v-row>
      <v-col cols="4" v-for="(result, i) in 6" :key="i">
      </v-col>
    </v-row>
  </v-overlay> -->
  <div class="search-results-lock">
    <div class="message d-flex align-center flex-column pt-10 pb-10">
      <v-icon
        size="45"
        color="#0253B3"
        class="pb-6"
      >
        mdi-lock
      </v-icon>
      <div class="title">
        You reached limit of 5 searches.
      </div>
      <div class="subtitle">
        Upgrade account to search without any limits.
      </div>
    </div>
    <Packages />
  </div>
</template>

<script>

import Packages from '@/components/Packages';

export default {

  name: 'SearchResultsLock',
  
  components: {
    Packages
  }
};

</script>

<style lang="scss" scoped>
  .search-results-lock {
    position: relative;
  }
  .message {
    .title {
      font-weight: 600;
      font-size: 32px !important;
      color: #222222;
    }
    .subtitle {
      font-weight: normal;
      font-size: 24px !important;
      color: #222222;
      opacity: 0.8;
    }
  }
</style>