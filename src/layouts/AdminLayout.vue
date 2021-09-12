<template>
  <div class="full-h" style="background: #f7f7f8;">
    <Sidebar />
    <v-container
      class="admin-wrap" 
      fluid>
        <div class="pa-5">
          <router-view></router-view>
        </div>
    </v-container>
  </div>
</template>

<script>

import Sidebar from "@/components/admin/Sidebar";

export default {

  name: "AdminLayout",

  components: {
    Sidebar,
  }
};

</script>

<style lang="scss" scoped>
.admin-wrap {
  padding-left: 256px;
  padding-top: 20px;
  background: #f7f7f8;
}
</style>