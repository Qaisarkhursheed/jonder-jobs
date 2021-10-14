<template>
  <v-container fluid class="employer-layout full-h pa-0">
    <header class="pa-5 white">
      <EmployerHeader />
    </header>

    <v-row
      class="main-wrap ma-0"
      :class="{ 'sidebar-active': $route.meta.sidebar }"
      v-resize="onResize"
    >
      <v-col v-if="$route.meta.sidebar" cols="auto" class="pa-0">
        <EmployerSidebar :mobile="mobile" />
      </v-col>

      <v-col
        cols="col"
        class="main-panel-wrap bg-light-gray px-3 px-md-7 pt-5"
        :class="{ 'mobile-layout': !mobile }"
      >
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EmployerHeader from "./EmployerHeader";
import EmployerSidebar from "./EmployerSidebar";

export default {
  components: {
    EmployerHeader,
    EmployerSidebar
  },

  data() {
    return {
      mobile: false
    };
  },

  mounted() {
    if (window.innerWidth < 960) {
      this.mobile = true;
    }
  },

  methods: {
    onResize() {
      if (window.innerWidth < 960) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  }
};
</script>

<style lang="scss">
.employer-layout {
  .main-wrap {
    .main-panel-wrap {
      height: 100%;
      // overflow: auto;
    }
  }

  .main-wrap.sidebar-active {
    .main-panel-wrap {
      height: calc(100vh - 81px) !important;
      overflow: auto;
      padding-bottom: 20px;
    }
  }
}
</style>
