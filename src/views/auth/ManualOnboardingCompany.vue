<template>
  <auth-wrap :img="1">
    <auth-manual-onboarding-company></auth-manual-onboarding-company>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthManualOnboardingCompany from "@/components/auth/AuthManualOnboardingCompany.vue";

export default {
  name: "ManualOnboardingCompany",
  components: {
    AuthWrap,
    AuthManualOnboardingCompany
  }
};
</script>
