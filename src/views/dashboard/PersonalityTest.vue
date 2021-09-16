<template>
  <div class="personality-test-jobseeker">
    <div style="width: 80%; margin: 0 auto;">
      <template v-if="!results">
        <Test  />
      </template>
      <template v-else>
        <Results />
      </template>

    </div>
  </div>
</template>

<script>

import Test from "@/components/personality_test/Test";
import Results from "@/components/personality_test/Results";
import store from "@/store";

export default {
  
  name: "PersonalityTestJobseeker",

  components: {
    Test,
    Results
  },

  computed: {
    results() {
      return store.getters["personalityTest/GET_RESULTS"]
    }
  }
};

</script>