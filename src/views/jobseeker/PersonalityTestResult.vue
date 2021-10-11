<template>
    <div class="personality-test-jobseeker-result">
      <h2 class="text-center mb-3">
        {{ $t("personalityTest.results") }}
      </h2>
      <div style="width: 80%; margin: 0 auto;" v-if="results">
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
    id: {
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
      .dispatch("personalityTest/FETCH_RESULT", this.id)
      .then(res => {
        this.results = results.generateResultData(res.data.data.results);
      })
  },
};

</script>