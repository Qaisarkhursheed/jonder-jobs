<template>
  <div class="search-results">
    <template v-if="results.length">
      <div class="heading pb-4">
        {{ searchMeta.total }} {{ $t('company.search.searchResults') }}
      </div>
      <v-row>
        <v-col 
          cols="12"
          md="6"
          lg="4"
          xl="3"
          v-for="(result, i) in results" :key="i">
          <SearchResultsCard :candidate="result"/>
        </v-col>
      </v-row>
      <v-row>
        <div class="search-pagination pb-6 pt-4">
          <v-pagination
            v-model="page"
            :length="pagination"
            :total-visible="7"
            @input="pageChange"
            @next="pageChange"
            @previous="pageChange"
          ></v-pagination>
        </div>
      </v-row>
    </template>
    <template v-else>
      <SearchNoResults /> 
    </template>
  </div>

</template>

<script>
import store from '@/store';
import SearchResultsCard from '@/components/company/SearchResultsCard';
import SearchNoResults from '@/components/company/SearchNoResults';

export default {
  name: 'SearchResults',

  components: {
    SearchResultsCard,
    SearchNoResults
  },

  props: {
    results: {
      type: Array
    }
  },

  data() {
    return {
      page: 1,
    }
  },
  methods: {
    pageChange(ind) {
      this.page = ind;
      store.dispatch('company/searchJobseekerPagination', ind);
    }
  },
  computed: {
    searchMeta() {
      return store.getters['company/searchMeta'];
    },
    pagination() {
      return Math.round(
        this.searchMeta.total/this.searchMeta.per_page
      );
    }
  }

};

</script>

<style lang="scss" scoped>
  .search-results {
    .heading {
      font-weight: 600;
      font-size: 24px;
      color: #000000;
    }
  }
  .search-pagination {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>