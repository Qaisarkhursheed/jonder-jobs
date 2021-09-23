<template>
  <div class="full-h" style="background: #f7f7f8;">
    <Sidebar />
    <v-container
      class="admin-wrap" 
      fluid>
        <div class="pa-5">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>