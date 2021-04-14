<template>
  <component :is="`step${cvMakerStep}`" @confirm="cvMakerStep++" />
</template>

<script>
import Step1 from "../../../components/cv-maker/Step1";
import Step2 from "../../../components/cv-maker/Step2";
export default {
  data: () => ({
    cvMakerStep: 1
  }),
  components: {
    Step1,
    Step2
  }
}
</script>