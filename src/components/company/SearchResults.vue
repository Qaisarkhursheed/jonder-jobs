<template>
  <div class="search-results">
    <div class="heading pb-4">
      {{ $t('company.search.searchResults') }}
    </div>
    <v-row>
      <v-col cols="4" v-for="(result, i) in results" :key="i">
        <SearchResultsCard :candidate="result"/>
      </v-col>
    </v-row>
  </div>

</template>

<script>

import SearchResultsCard from '@/components/company/SearchResultsCard';

export default {
  name: 'SearchResults',

  components: {
    SearchResultsCard
  },

  props: {
    results: {
      type: Array
    }
  },

};

</script>

<style lang="scss" scoped>
  .search-results {
    .heading {
      font-family: $open-sans;
      font-weight: 600;
      font-size: 14px;
      color: #0253B3;
    }
  }
</style>