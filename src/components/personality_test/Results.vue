<template>
  <v-card
    class="pa-8"
    flat
  >
    <div class="personality-test-results">
      <ResultsChart :data="results" :max="Number(120)"/>
      <ResultsDetailed :results="results"/>
    </div>
</v-card>
</template>

<script>

import ResultsDetailed from "@/components/personality_test/ResultsDetailed";
import ResultsChart from "@/components/personality_test/ResultsChart";
import store from '@/store'

export default {

  name: "Results",

  components: {
    ResultsDetailed,
    ResultsChart
  },
  data() {
    return {
      results: null
    }
  },
  created() {
    this.results = store.getters["personalityTest/GET_RESULTS"];
  }

};
</script>