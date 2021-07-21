<template>
  <div class="search-results">
    <div class="heading pb-4">
      123 {{ $t('company.search.searchResults') }}
    </div>
    <v-row>
      <v-col 
        cols="12"
        md="6"
        lg="4"
        xl="3"
        v-for="(result, i) in 6" :key="i">
        <SearchResultsCard :candidate="dummy"/>
      </v-col>
    </v-row>
    <v-row>
      <div class="search-pagination pb-6 pt-4">
        <v-pagination
          v-model="page"
          :length="10"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-row>
  </div>

</template>

<script>

import SearchResultsCard from '@/components/company/SearchResultsCard';

export default {
  name: 'SearchResults',

  components: {
    SearchResultsCard
  },

  props: {
    results: {
      type: Array
    }
  },

  data() {
    return {
      page: 1,
      dummy: {
        id: 3,
        first_name: "Victoria",
        last_name: "Anderson",
        address: "248 Caitlyn Islands Suite 561",
        phone: "+19081150516",
        email: "test_company@test.com",
        role: "company",
        branche: "Bauwesen",
        job: "Designer",
        current_position: "Agricultural Crop Farm Manager",
        looking_for: [
          "Entwickler",
          "Projektmanager"
        ],
        looking_for_branche: "Automobilindustrie",
        looking_for_employment_type: "fulltime",
        address_to_work: "Issacland",
        ready_for_work: "2021-09-01 00:00:00",
        monthly_salary: "130000",
        work_experience: "2-5 years",
        why_jonder: "jonder for life",
        city: "North Roel",
        about_me: "this is an eazy job",
        training_studies: "Abitur",
        your_qualification: "Kaufmann für Bürokommunikation",
        job_status: null,
        cv: null,
        qualifications: null,
        resume: null,
        profile_img: null,
        created_at: null,
        updated_at: null
     },
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