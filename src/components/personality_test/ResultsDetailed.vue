<template>
  <div class="personality-test-results-detailed">
    <div
      v-for="domain in results"
      :key="domain.id"
    >
      <ResultsDetailedSection :domain="domain" />
    </div>
  </div>
</template>

<script>

import ResultsDetailedSection from "@/components/personality_test/ResultsDetailedSection";

export default {

  name: "ResultsDetailed",

  components: {
    ResultsDetailedSection
  },

  props: {
    results: {
      type: [Array, Object]
    }
  },

};

</script>