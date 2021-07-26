<template>
  <div>
    <SearchForm class="mb-10" @search="search"/>

    <SearchSavedFilters @search="search" />

    <component :is="searchStatus.components[searchStatus.current]"
      :results="searchResults" 
    />
  </div>
</template>

<script>
import store from '@/store'
import SearchForm from '@/components/company/SearchForm';
import SearchSavedFilters from '@/components/company/SearchSavedFilters';
import SearchResults from '@/components/company/SearchResults';
import SearchResultsLock from '@/components/company/SearchResultsLock';

export default {

  name: 'CompanySearch',

  components: {
    SearchForm,
    SearchResults,
    SearchSavedFilters,
    SearchResultsLock
  },

  data() {
    return {
      advancedSearch: false,
      searchExecuted: false,
      searchStatus: {
        current: 'default',
        options: ['default', 'results', 'limited'],
        components: {
          results: SearchResults,
          limited: SearchResultsLock,
          default: false,
        }
      }
    }
  },
  beforeDestroy() {
    store.commit('company/SET_SEARCH_RESULTS', []);
    this.searchExecuted = false;
    this.searchStatus.current = 'default';
  },
  methods: {
    search() {
      this.searchExecuted = true;
      this.searchStatus.current = 'results';
    }
  },
  computed: {
    searchResults() {
      return store.getters['company/searchResults']
    }
  }
};

</script>
