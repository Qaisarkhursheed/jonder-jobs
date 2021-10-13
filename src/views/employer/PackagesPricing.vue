<template>
  <div
    v-if="$store.getters['plans/companyPlansLoading']"
    class="d-flex full-h justify-center align-center"
  >
    <v-progress-circular
      v-if="true"
      indeterminate
      size="150"
      color="primary"
    ></v-progress-circular>
  </div>

  <div v-else class="pb-7">
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
