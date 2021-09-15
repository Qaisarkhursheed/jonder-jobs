<template>
  <div class="pb-7">
    <div class="heading mb-10">
      <div class="title">
        {{ $t("upradeYourCompany") }}
      </div>
      <div class="subtitle">
        {{ $t("upradeYourCompanySubtitle") }}
      </div>
    </div>

    <CompanyPlans class="mb-7" />

    <UserPlan :border-plan="true" :payment-info="false" />
  </div>
</template>

<script>
import CompanyPlans from "@/components/plans/CompanyPlans";
import UserPlan from "@/components/user/UserPlan";

export default {
  components: {
    CompanyPlans,
    UserPlan
  }
};
</script>

<style lang="scss" scoped>
.heading {
  .title {
    font-weight: 600;
    font-size: 32px !important;
    color: #222222;
  }
  .subtitle {
    font-weight: normal;
    font-size: 18px;
    color: #7a7a7a;
  }
}
</style>
