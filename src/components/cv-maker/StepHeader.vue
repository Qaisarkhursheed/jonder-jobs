<template>
  <div class="step-header">
    <div class="step-header-item" :class="{ active: activeStep >= 1 }">
      <v-icon v-if="activeStep >= 1">mdi-check</v-icon>
    </div>
    <div class="step-header-divider">
      <span v-if="activeStep >= 1" :style="{width: activeStep === 1 ? '50%' : '100%'}"></span>
    </div>

    <div class="step-header-item" :class="{ active: activeStep >= 2 }">
      <v-icon v-if="activeStep >= 2">mdi-check</v-icon>
    </div>
    <div class="step-header-divider">
      <span v-if="activeStep >= 2" :style="{width: activeStep === 2 ? '50%' : '100%'}"></span>
    </div>

    <div class="step-header-item" :class="{ active: activeStep >= 3 }">
      <v-icon v-if="activeStep >= 3">mdi-check</v-icon>
    </div>
    <div class="step-header-divider">
      <span v-if="activeStep >= 3" :style="{width: activeStep === 3 ? '50%' : '100%'}"></span>
    </div>

    <div class="step-header-item" :class="{ active: activeStep >= 4 }">
      <v-icon v-if="activeStep >= 4">mdi-check</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeStep: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.step-header {
  display: flex;
  align-items: center;
  width: 100%;
  .step-header-item {
    flex: 0 0 34px;
    height: 34px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    border-radius: 50%;
    border: 1px solid $light-grey;
    .v-icon {
      color: white;
      font-size: 16px;
    }

    &.active{
      background-color: $primary-blue-dark;
      border-color: $primary-blue-dark;

    }
  }
  .step-header-divider {
    position: relative;
    flex: 1 1 auto;
    height: 4px;
    background: $light-grey;

    span {
      position: absolute;
      display: inline-block;
      height: 4px;
      background: $primary-blue-dark;
    }
  }
}
</style>