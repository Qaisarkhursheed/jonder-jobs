<template>
  <component :is="`step${cvMakerStep}`" @confirm="goToStep" />
</template>

<script>
import Step1 from "../../../components/cv-maker/Step1";
import Step2 from "../../../components/cv-maker/Step2";
import Step3 from "../../../components/cv-maker/Step3";
import Step4 from "../../../components/cv-maker/Step4";
import Step5 from "../../../components/cv-maker/Step5";

export default {
  data: () => ({
    cvMakerStep: 1
  }),
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  methods: {
    goToStep() {
      this.cvMakerStep++;
      const layoutDiv = document.getElementsByClassName("layout-content");
      if (layoutDiv && layoutDiv[0]) layoutDiv[0].scrollTop = 0;
    }
  }
};
</script>

<style lang="scss">
.step-header-detail {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: $primary-blue-dark;

  .v-icon {
    font-size: 28px;
    color: $primary-blue-dark;
    margin-right: 10px;
  }
}

.step-header-description {
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: $dark-grey;

  .date {
    font-size: 12px;
    line-height: 16px;
    color: $medium-grey;
  }
}

.v-card__subtitle {
  border-bottom: 1px solid $light-grey;
  margin: 20px -32px 20px !important;
  padding: 32px 32px 20px;
}

.col > label {
  display: block;
  padding-bottom: 8px;
  margin-right: 8px;
}
</style>
