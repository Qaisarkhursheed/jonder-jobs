<template>
  <div class="personality-test-jobseeker">
    <div style="width: 80%; margin: 0 auto; max-width: 900px">
      <Test />
    </div>
  </div>
</template>

<script>

import Test from "@/components/personality-test/Test";

export default {
  
  name: "PersonalityTestJobseeker",

  components: {
    Test,
  },

  computed: {
  }
};

</script>