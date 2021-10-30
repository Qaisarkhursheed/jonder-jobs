<template>
    <div class="personality-test-jobseeker-result" v-if="results">
      <h2 class="text-center mb-3">
        {{ $t("personalityTest.results") }}
      </h2>
      <div style="width: 80%; max-width: 1000px; margin: 0 auto;">
        <Results :results="results"/>
      </div>
    </div>
</template>

<script>
import store from "@/store";
import Results from "@/components/personality-test/Results";
import results from "@/types/calculations";

export default {

  name: "PersonalityTestJobseekerResult",

  props: {
    testid: {
      type: [String, Number]
    },
    detailed: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      results: false
    }
  },

  components: {
    Results
  },

  created() {
    store
      .dispatch("personalityTest/FETCH_RESULT", this.testid)
      .then(res => {
        this.results = results.generateResultData(res.data.data.results);
      })
  },
};

</script>