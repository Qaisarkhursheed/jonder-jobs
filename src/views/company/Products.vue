<template>
  <div>
    <ProductsPlan class="mb-10" />
    <ProductsPaymentMethod class="mb-10"/>
    <!-- <ProductsPaymentFinish />-->
  </div>
</template>

<script>

import ProductsPlan from '@/components/company/ProductsPlan';
import ProductsPaymentMethod from '@/components/company/ProductsPaymentMethod';
// import ProductsPaymentFinish from '@/components/company/ProductsPaymentFinish';

export default {
  name: 'CompanyProducts',

  components: {
    ProductsPlan,
    ProductsPaymentMethod,
    // ProductsPaymentFinish
  }
};

</script>