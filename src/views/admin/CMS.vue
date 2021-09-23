<template>
  <div class="admin-cms">
    <PageHeader title="CMS" />
    <div class="cms-wrap pt-8">
      <div class="row">
        <v-col cols="6" v-for="(list, type) in $store.getters['admin/cmsLists']" :key="type" >
          <CMSTable 
            :type="type"
            :list="list || []"
          />
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>

import PageHeader from "@/components/admin/PageHeader";
import CMSTable from "@/components/admin/CMSTable";
import store from "@/store";

export default {

  name: "AdminCMS",

  components: {
    PageHeader,
    CMSTable
  },
  
  created() {
    },
  beforeRouteEnter(to, from, next) {
    store
      .dispatch("admin/cmsFetchLists")
      .then(() => {
          next();
      });
  },
};
</script>