<template>
  <div class="search-results-lock">
    <div class="message d-flex align-center flex-column pt-10 pb-10">
      <v-icon size="45" color="#0253B3" class="pb-6">
        mdi-lock
      </v-icon>
      <div class="title">
        {{ $t("limitOf3Searches") }}
      </div>
      <div class="subtitle">
        {{ $t("upgradeAccSearchWithoutRestriction") }}
      </div>
    </div>

    <CompanyPlans />
  </div>
</template>

<script>
import CompanyPlans from "@/components/plans/CompanyPlans";

export default {
  components: {
    CompanyPlans
  }
};
</script>

<style lang="scss" scoped>
.search-results-lock {
  position: relative;
}
.message {
  .title {
    font-weight: 600;
    font-size: 32px !important;
    color: #222222;
  }
  .subtitle {
    font-weight: normal;
    font-size: 24px !important;
    color: #222222;
    opacity: 0.8;
  }
}
</style>
