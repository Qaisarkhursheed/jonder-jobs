<template>
  <div class="plan-actions mt-6 pt-4">
    <span @click="$store.dispatch('user/cancelSubscription', id)">
      {{ $t("cancelSubscription") }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CancelSubscription",
  props: {
    id: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.plan-actions {
  border-top: 1px solid #e9e9e9;
  color: #27aae1 !important;
  font-size: 11px;
  font-weight: 600;
  text-align: right;
  > span {
    cursor: pointer;
  }
}
</style>
