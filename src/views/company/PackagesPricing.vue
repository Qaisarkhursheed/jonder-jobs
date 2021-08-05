<template>
  <div>
    <div class="heading pb-10">
      <div class="title">
        Upgrade your company
      </div>
      <div class="subtitle">
        Explanation what are message templates
      </div>
    </div>
    <Packages />
  </div>
</template>

<script>

import Packages from '@/components/Packages';

export default {
  name: 'CompanyPackagesPricing',

  components: {
    Packages,
  },
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
    color: #7A7A7A;
  }
}
</style>