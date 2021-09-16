<template>
  <div class="dashboard-active-plan">
    <div class="image-wrapper">
      <v-img
        class="img-icon"
        :src="
          require(`@/assets/icons/${userPlan.id === 11 ? 'top-rated' : 'medal'}.svg`)
        "
      ></v-img>
    </div>
    <div class="info-wrapper">
      <div class="info-title" v-if="userPlan.id === 11">{{ remainingDays }} {{ $t("remainingDays") }}</div>
      <div class="info-title" v-else>{{ $t("success") }}!</div>
      <div class="info-desscription">
        {{ userPlan.plan_description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardActivePlan",
  props: {
    userPlan: {
      type: Object,
      required: true,
    }
  },
  computed: {
    remainingDays() {
      const start = new Date().getTime();
      const end = new Date(this.userPlan.end_timestamp).getTime();
      return Math.floor((end - start) / 86400000);
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-active-plan {
  align-items: center;
  background: #f5f5f5;
  border-radius: 10px;
  display: flex;
  margin-bottom: 18px;
  padding: 19px 22px;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    text-align: center;
  }
  @media (min-width: 960px) and (max-width: 1280px) {
    flex-direction: column;
    text-align: center;
  }
  .image-wrapper {
    .img-icon {
      width: 40px;
      height: 60px;
      margin-right: 10px;
      max-width: 40px;
    }
  }
  .info-wrapper {
    .info-title {
      font-weight: 700;
    }
    .info-desscription {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
