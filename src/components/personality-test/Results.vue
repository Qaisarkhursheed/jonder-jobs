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

import ResultsDetailed from "@/components/personality-test/ResultsDetailed";
import ResultsChart from "@/components/personality-test/ResultsChart";

export default {

  name: "Results",

  props: {
    results: {
      type: [Object, Array, Boolean]
    }
  },

  components: {
    ResultsDetailed,
    ResultsChart
  },

};
</script>