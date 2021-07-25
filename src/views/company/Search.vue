<template>
  <div>
    <SearchForm class="mb-10" />

    <SearchSavedFilters />
    <component :is="searchStatus.components[searchStatus.current]"
      :results="searchResults" />
    <!-- <SearchResultsLock style="display: none" />
    <template v-if="searchResults.length">
      <SearchResults class="mt-10"
                   :results="searchResults"/>
    </template>
    <template v-else>
      <SearchNoResults />
    </template> -->
  </div>
</template>

<script>
import store from '@/store'
import SearchForm from '@/components/company/SearchForm';
import SearchSavedFilters from '@/components/company/SearchSavedFilters';
import SearchResults from '@/components/company/SearchResults';
import SearchNoResults from '@/components/company/SearchNoResults';
import SearchResultsLock from '@/components/company/SearchResultsLock';

export default {

  name: 'CompanySearch',

  components: {
    SearchForm,
    SearchResults,
    SearchSavedFilters,
    SearchNoResults,
    SearchResultsLock
  },

  data() {
    return {
      advancedSearch: false,
      searchStatus: {
        current: 'results',
        options: ['default', 'results', 'noresults', 'limited'],
        components: {
          results: SearchResults,
          noresults: SearchNoResults,
          limited: SearchResultsLock,
          default: false,
        }
      }
    }
  },
  beforeDestroy() {
    store.commit('company/SET_SEARCH_RESULTS', []);
  },
  methods: {
    
  },
  computed: {
    searchResults() {
      return store.getters['company/searchResults']
    }
  }
};

</script>
