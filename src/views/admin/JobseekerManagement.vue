<template>
  <div class="admin-jobseeker-management">
    <PageHeader :title="$t('user')" />
    <div class="pt-8">
      <JobseekerMngTable />
    </div>
  </div>
</template>

<script>

import PageHeader from "@/components/admin/PageHeader";
import JobseekerMngTable from "@/components/admin/JobseekerMngTable";

export default {

  name: "AdminUsers",

  components: {
    PageHeader,
    JobseekerMngTable
  }
  
};

</script>