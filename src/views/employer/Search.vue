<template>
  <div>
    <SearchForm
      class="mb-10"
      @search="search"
      :selected-filter="selectedFilter"
    />
    <SearchSavedFilters
      @search="search"
      @use-filter="selectedFilter = $event"
    />

    <component :is="searchComponents[searchStatus]" :results="searchResults" />
  </div>
</template>

<script>
import store from "@/store";
import SearchForm from "@/components/company/jonder-search/SearchForm";
import SearchSavedFilters from "@/components/company/jonder-search/SearchSavedFilters";
import SearchResults from "@/components/company/jonder-search/SearchResults";
import SearchResultsLock from "@/components/company/jonder-search/SearchResultsLock";

export default {
  components: {
    SearchForm,
    SearchResults,
    SearchSavedFilters,
    SearchResultsLock
  },

  data() {
    return {
      selectedFilter: null,
      advancedSearch: false,
      searchExecuted: false,
      searchComponents: {
        results: SearchResults,
        limited: SearchResultsLock,
        default: false
      }
    };
  },
  beforeDestroy() {
    if (this.$route.name !== "EmployerUserOverview") {
      console.log("erase user results serach");
      store.commit("company/SET_SEARCH_RESULTS", []);
      store.commit("company/SET_SEARCH_META", {
        per_page: 6,
        current_page: 1,
        total: 0
      });
      this.searchExecuted = false;
      // this.searchStatus.current = 'default';
      store.commit("company/SET_SEARCH_STATUS", "default");
    }
  },
  methods: {
    search() {
      this.searchExecuted = true;
      // this.searchStatus.current = 'results';
      store.commit("company/SET_SEARCH_STATUS", "results");
    }
  },
  computed: {
    searchResults() {
      return store.getters["company/searchResults"];
    },
    searchStatus() {
      return store.getters["company/searchStatus"];
    }
  }
};
</script>
