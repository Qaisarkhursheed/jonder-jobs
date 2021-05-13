<template>
  <div>
    <!--<SearchHeader />-->
    <SearchForm class="mb-10"
                @searchResults="setResults"
                @toggleAdvanced="toggle()"/>
    <SearchFormAdvanced :active="advancedSearch"/>
    <SearchResults class="mt-10"
                   :results="searchResults"/>
  </div>
</template>

<script>

// import SearchHeader from '@/components/company/SearchHeader';
import SearchForm from '@/components/company/SearchForm';
import SearchFormAdvanced from '@/components/company/SearchFormAdvanced';
import SearchResults from '@/components/company/SearchResults';

export default {
  name: 'CompanySearch',

  components: {
    // SearchHeader,
    SearchForm,
    SearchResults,
    SearchFormAdvanced
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
