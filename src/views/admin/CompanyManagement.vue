<template>
  <div class="admin-company-management">
    <PageHeader :title="$t('company')" />
    <div class="pt-8">
      <CompanyMngTable />
    </div>
  </div>
</template>

<script>

import PageHeader from "@/components/admin/PageHeader";
import CompanyMngTable from "@/components/admin/CompanyMngTable";

export default {

  name: "AdminCompanyManagement",

  components: {
    PageHeader,
    CompanyMngTable
  }
  
};

</script>