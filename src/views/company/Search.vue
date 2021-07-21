<template>
  <div>
    <SearchForm class="mb-10"
                @searchResults="setResults"
                @toggleAdvanced="toggle()"/>
    <SearchFormAdvanced :active="advancedSearch"/>

    <SearchSaved />
    <SearchResultsLock />
    <SearchNoResults />
    <SearchResults class="mt-10"
                   :results="searchResults"/>
  </div>
</template>

<script>

import SearchForm from '@/components/company/SearchForm';
import SearchFormAdvanced from '@/components/company/SearchFormAdvanced';
import SearchSaved from '@/components/company/SearchSaved';
import SearchResults from '@/components/company/SearchResults';
import SearchNoResults from '@/components/company/SearchNoResults';
import SearchResultsLock from '@/components/company/SearchResultsLock';

export default {
  name: 'CompanySearch',

  components: {
    SearchForm,
    SearchResults,
    SearchSaved,
    SearchFormAdvanced,
    SearchNoResults,
    SearchResultsLock
  },

  data() {
    return {
      advancedSearch: false,
      searchResults: [],
    }
  },

  methods: {
    toggle() {
      this.advancedSearch = !this.advancedSearch;
    },
    setResults(results) {
      this.searchResults = results;
    }
  }
};

</script>
