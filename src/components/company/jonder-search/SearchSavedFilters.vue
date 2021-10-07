<template>
  <div class="search-saved-filters">
    <div v-for="(filter, i) in searchFilters" :key="i">
      <SearchSavedFilter
        class="mb-5"
        :filter="filter"
        @use-filter="$emit('use-filter', $event)"
        @filter-search="$emit('search')"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import SearchSavedFilter from "@/components/company/jonder-search/SearchSavedFilter";

export default {
  components: { SearchSavedFilter },

  created() {
    store.dispatch("company/searchFilterFetchAll");
  },

  computed: {
    searchFilters() {
      return store.getters["company/searchFilters"];
    }
  }
};
</script>
