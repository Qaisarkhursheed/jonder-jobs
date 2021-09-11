<template>
  <div class="full-h">
    <Sidebar />
    <v-container
      class="admin-wrap full-h" 
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
  padding-top: 40px;
  background: #f7f7f8;
}
</style>