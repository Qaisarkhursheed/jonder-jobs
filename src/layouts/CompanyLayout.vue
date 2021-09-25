<template>
  <v-container fluid class="full-h pa-0" style="overflow: hidden">
    <Header />

    <v-row class="main-wrap full-h ma-0" v-resize="onResize">
      <v-col cols="auto" class="pa-0">
        <Sidebar :mobile="mobile" />
      </v-col>
      <v-col
        cols="col"
        class="main-panel-wrap pt-7 px-3 px-md-7 bg-light-gray"
        :class="{ 'mobile-layout': !mobile }"
      >
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/company/Header";
import Sidebar from "@/components/company/Sidebar";

export default {
  name: "CompanyLayout",

  components: {
    Header,
    Sidebar
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
