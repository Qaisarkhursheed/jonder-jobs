<template>
  <div class="admin-dashboard">
    <PageHeader :title="$t('dashboard')" />
  </div>
</template>

<script>

import PageHeader from "@/components/admin/PageHeader";

export default {

  name: 'AdminDashboard',

  components: {
    PageHeader
  }
  
};

</script>