<template>
  <div>
    <SearchForm class="mb-10"
                @toggleAdvanced="toggle()"/>
    <SearchFormAdvanced :active="advancedSearch"/>

    <SearchSaved style="display: none" />
    <SearchResultsLock style="display: none" />
    <template v-if="searchResults.length">
      <SearchResults class="mt-10"
                   :results="searchResults"/>
    </template>
    <template v-else>
      <SearchNoResults />
    </template>
  </div>
</template>

<script>
import store from '@/store'
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
    }
  },
  beforeDestroy() {
    console.log('before');
  },
  methods: {
    toggle() {
      this.advancedSearch = !this.advancedSearch;
    },
  },
  computed: {
    searchResults() {
      return store.getters['company/searchResults']
    }
  }
};

</script>
