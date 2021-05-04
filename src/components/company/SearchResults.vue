<template>
  <div class="search-results">
    <div class="heading pb-4">
      Search results
    </div>
    <v-row>
      <v-col cols="4" v-for="(result, i) in results" :key="i">
        <SearchResultsCard :candidate="result"/>
      </v-col>
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

  data() {
    return {
      results: [
        {
          name: 'Victoria Anderson',
          job: 'Bauleiter Hochbau',
          location: 'Berlin',
          branche: 'Bauwesen',
          schulabschluss: 'Abitur',
          ausbildung: 'Kaufmann für Bürokommunikation',
          berufserfahrung: '10 Jahre',
          gehalt: '6.300,00€'
        },
        {
          name: 'Victoria Anderson',
          job: 'Bauleiter Hochbau',
          location: 'Viewnna',
          branche: 'Bauwesen',
          schulabschluss: 'Abitur',
          ausbildung: 'Kaufmann für Bürokommunikation',
          berufserfahrung: '2 Jahre',
          gehalt: '3.300,00€'
        },
        {
          name: 'Victoria Anderson',
          job: 'Bauleiter Hochbau',
          location: 'Stuttgart',
          branche: 'Bauwesen',
          schulabschluss: 'Abitur',
          ausbildung: 'Kaufmann für Bürokommunikation',
          berufserfahrung: '4 Jahre',
          gehalt: '4.000,00€'
        },
      ]
    }
  }
};

</script>

<style lang="scss" scoped>
  .search-results {
    .heading {
      font-family: $open-sans;
      font-weight: 600;
      font-size: 14px;
      color: #0253B3;
    }
  }
</style>