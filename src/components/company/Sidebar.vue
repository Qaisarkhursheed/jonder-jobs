<template>
  <div class="sidebar-wrap" :class="{ mini: isMini }">
    <div class="sidebar-inner">
      <nav
        class="sidebar-navigation pl-2 pr-2 pl-md-8 pr-md-5"
        :class="{ mini: isMini }"
      >
        <v-icon
          class="ml-3 mb-4 mt-1"
          size="26px"
          style="cursor: pointer; user-select: none;"
          @click="toggleSidebar"
          v-if="mobile"
        >
          mdi-menu
        </v-icon>

        <router-link :to="{ name: 'CompanySearch' }">
          <v-icon>mdi-magnify</v-icon>
          <span>{{ $t("company.employer.search") }}</span>
        </router-link>
        <router-link :to="{ name: 'CompanySelectionManagement' }">
          <v-icon>mdi-account-switch</v-icon>
          <span>{{ $t("company.employer.selectionManagement") }}</span>
        </router-link>
        <router-link :to="{ name: 'CompanyMessages' }">
          <v-icon>mdi-message</v-icon>
          <span>{{ $t("company.employer.messages") }}</span>
        </router-link>
        <router-link :to="{ name: 'CompanyTeamManagement' }">
          <v-icon>mdi-account-group</v-icon>
          <span>{{ $t("company.employer.teamManagement") }}</span>
        </router-link>
        <router-link :to="{ name: 'CompanyPublicProfile' }">
          <v-icon>mdi-office-building</v-icon>
          <span>{{ $t("company.employer.publicProfile") }}</span>
        </router-link>
        <router-link :to="{ name: 'CompanyPackagesPricing' }">
          <v-icon>mdi-currency-usd</v-icon>
          <span>{{ $t("company.employer.packagesPricing") }}</span>
        </router-link>
      </nav>
      <footer-legal class="footer-impressum"></footer-legal>
    </div>
  </div>
</template>

<script>
import FooterLegal from "@/components/parts/FooterLegal.vue";

export default {
  name: "Sidebar",

  components: {
    FooterLegal
  },
  props: {
    mobile: {
      type: Boolean
    }
  },
  data() {
    return {
      extended: true
    };
  },
  mounted() {
    this.extended = !this.mobile;
  },
  methods: {
    toggleSidebar() {
      this.extended = !this.extended;
    }
  },
  computed: {
    isMini() {
      if (!this.mobile) {
        return false;
      } else {
        return this.extended;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  height: 100%;
  position: absolute;
  background: white;
  z-index: 10;
  overflow: hidden;
}
.sidebar-inner {
  position: relative;
  height: 100%;
}

.sidebar-navigation {
  position: sticky;
  top: 2rem;
  overflow: hidden;
  width: 360px;
  min-width: 360px;
  //transition: width, min-width 0.2s ease-in;

  &.mini {
    //transition: width, min-width 0.2s ease-in;
    width: 60px;
    min-width: 60px;
  }

  a {
    display: flex;
    padding: 20px 16px;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    clear: both;
    text-decoration: none;
    @include clearfix;
    font-weight: normal;
    font-size: 18px;
    color: #7a7a7a;

    span,
    .v-icon {
      //float: left;
      display: inline-block;
      height: 20px;
      border: none !important;
    }

    .v-icon {
      margin-right: 10px;
    }

    &:hover,
    &.router-link-exact-active {
      color: $primary-blue-dark;
      text-decoration: none;
      background: rgba(39, 170, 225, 0.1);
      border-radius: 6px;
      font-weight: 600;
      color: #222222;
    }

    &.router-link-exact-active {
      span {
        font-weight: bold;
      }
    }

    .mini & {
      span {
        display: none;
      }
    }
  }
}
.footer-impressum {
  position: absolute;
  bottom: 80px;

  .mini & {
    opacity: 0;
  }
}
</style>
