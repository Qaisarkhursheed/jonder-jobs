<template>
  <div id="search-results" class="search-results">
    <v-dialog
      v-model="blockModalActive"
      style="z-index: 2222"
      width="100%"
      height="100%"
      overlay-color="#0253B3"
      overlay-opacity="0.3"
      content-class="elevation-0"
    >
      <CompanyPlans class="pa-3" />
    </v-dialog>

    <template v-if="results.length">
      <div class="heading pb-4">
        {{ searchMeta.total }} {{ searchMeta.total > 10 ? $t("searchResults") : $t("searchResultsSingular") }}
      </div>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(result, i) in results" :key="i">
          <SearchResultsCard :candidate="result" @block="toggleModal" />
        </v-col>
      </v-row>
      <v-row>
        <div class="search-pagination pb-6 pt-4">
          <v-pagination
            v-model="page"
            :length="pagination"
            :total-visible="7"
            @input="pageChange"
          ></v-pagination>
        </div>
      </v-row>
    </template>
    <template v-else-if="!$store.getters['company/searchInProgress']">
      <SearchNoResults />
    </template>
  </div>
</template>

<script>
import store from "@/store";
import SearchResultsCard from "@/components/company/jonder-search/SearchResultsCard";
import SearchNoResults from "@/components/company/jonder-search/SearchNoResults";
import CompanyPlans from "@/components/plans/CompanyPlans";

export default {
  name: "SearchResults",

  components: {
    SearchResultsCard,
    SearchNoResults,
    CompanyPlans
  },

  props: {
    results: {
      type: Array
    }
  },

  data() {
    return {
      page: 1,
      blockModalActive: false
    };
  },
  methods: {
    pageChange(ind) {
      this.page = ind;
      store.dispatch("company/searchJobseekerPagination", ind).then(() => {
        document
          .getElementById("search-results")
          .scrollIntoView({ behavior: "smooth" });
      });
    },
    toggleModal() {
      this.blockModalActive = !this.blockModalActive;
    }
  },
  computed: {
    searchMeta() {
      return store.getters["company/searchMeta"];
    },
    pagination() {
      return Math.round(this.searchMeta.total / this.searchMeta.per_page);
    }
  },
  mounted() {
    this.page = this.searchMeta.current_page;
  },
  created() {
    this.$store
      .dispatch("company/slManagementGetAll")
      .finally(() => (this.isLoading = false));
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
