<template>
  <div class="search-saved-filters">
    <div v-for="(filter, i) in searchFilters" :key="i">
      <SearchFilter class="mb-5" :filter="filter" />
    </div>
  </div>
</template>

<script>

import store from '@/store';
import SearchFilter from '@/components/company/SearchSavedFiltersFilter'; 

export default {

  name: 'SearchSavedFilters',

  components: {
    SearchFilter
  },

  created() {
    store.dispatch('company/searchFilterFetchAll');
  },

  computed: {
    searchFilters() {
      return store.getters['company/searchFilters']
    }
  }
};
</script>

