<template>
  <div class="pb-7">
    <div class="page-heading mb-6">
      <div class="title">
        {{ $t("upradeYourCompany") }}
      </div>
      <div class="subtitle">
        {{ $t("upradeYourCompanySubtitle") }}
      </div>
    </div>

    <CompanyPlans class="mb-7" />

    <UserPlan
      :border-plan="true"
      :payment-info="false"
      :payment-action="true"
    />
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

<style lang="scss" scoped></style>
