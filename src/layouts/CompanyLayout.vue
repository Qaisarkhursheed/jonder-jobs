<template>
  <v-container fluid class="full-h pa-0" style="overflow: hidden">
    <Header />
    <div class="main-wrap full-h" v-resize="onResize">
      
      <Sidebar :mobile="mobile" />
        
      <div class="main-panel-wrap full-h bg-light-gray"
          :class="{ 'mobile-layout': !mobile}">
        <v-container :fluid="true" class="company pt-8 pl-7 pr-7 pb-0 full-h">
          <router-view></router-view>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script>
import Header from "@/components/company/Header";
import Sidebar from "@/components/company/Sidebar";
//import FooterLegal from "../components/parts/FooterLegal.vue";

export default {
  name: "CompanyLayout",

  components: {
    Header,
    Sidebar,
    //FooterLegal,
  },
  data() {
    return {
      mobile: false
    }
  },
  mounted() {
    if(window.innerWidth < 900) {
      this.mobile = true;
    }
  },
  methods: {
    onResize() {
       if(window.innerWidth < 900) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  }
};
</script>

<style lang="scss">
.company {
  font-family: $inter;
  overflow: auto;
}
.main-wrap {
  position: relative;
  display: flex;
}

.main-panel-wrap {
  width: 100%;
  overflow: auto;
  padding-bottom: 80px;
  padding-left: 60px;

  &.mobile-layout {
    padding-left: 370px;
  }
}
.fix-bottom {
  position: fixed;
  bottom: 0;
}
</style>
