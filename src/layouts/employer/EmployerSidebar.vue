<template>
  <div class="sidebar-wrap d-flex" :class="{ mini: isMini }">
    <nav class="sidebar-navigation px-2 px-md-5" :class="{ mini: isMini }">
      <v-icon
        class="ml-2 mb-4 mt-1"
        size="26px"
        style="cursor: pointer; user-select: none;"
        @click="toggleSidebar"
        v-if="mobile"
      >
        mdi-menu
      </v-icon>

      <router-link :to="{ name: 'EmployerSearch' }">
        <Loop :color="getNavIconColor('EmployerSearch')" />
        <span class="nav-title">{{ $t("jonderSearch") }}</span>
      </router-link>

      <router-link :to="{ name: 'EmployerSelectionManagement' }">
        <SelectManagement
          :color="getNavIconColor('EmployerSelectionManagement')"
        />
        <span class="nav-title">{{ $t("selectionManagement") }}</span>
      </router-link>

      <router-link :to="{ name: 'EmployerMessages' }">
        <Messages :color="getNavIconColor('EmployerMessages')" />
        <span class="nav-title">{{ $t("messages") }}</span>
      </router-link>

      <router-link :to="{ name: 'EmployerMessageTemplates' }">
        <v-icon :color="getNavIconColor('EmployerMessageTemplates')">
          mdi-message-bulleted
        </v-icon>
        <span class="nav-title">{{ $t("messageTemplates") }}</span>
      </router-link>

      <router-link :to="{ name: 'EmployerTeamManagement' }">
        <TeamManagement :color="getNavIconColor('EmployerTeamManagement')" />
        <span class="nav-title">{{ $t("teamManagement") }}</span>
      </router-link>

      <router-link :to="{ name: 'EmployerPublicProfile' }">
        <PublicCompany :color="getNavIconColor('EmployerPublicProfile')" />
        <span class="nav-title">{{ $t("publicCompanyProfile") }}</span>
      </router-link>

      <router-link :to="{ name: 'EmployerPackagesPricing' }">
        <Pricing :color="getNavIconColor('EmployerPackagesPricing')" />
        <span class="nav-title">{{ $t("packagesPricing") }}</span>
      </router-link>
    </nav>

    <footer-legal class="footer-impressum"></footer-legal>
  </div>
</template>

<script>
import FooterLegal from "@/components/parts/FooterLegal.vue";
import Loop from "../../svgs/Loop";
import SelectManagement from "../../svgs/SelectManagement";
import Messages from "../../svgs/Messages";
import TeamManagement from "../../svgs/TeamManagement";
import PublicCompany from "../../svgs/PublicCompany";
import Pricing from "../../svgs/Pricing";

export default {
  name: "Sidebar",

  components: {
    Pricing,
    PublicCompany,
    TeamManagement,
    Messages,
    SelectManagement,
    Loop,
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

  computed: {
    isMini() {
      if (!this.mobile) {
        return false;
      } else {
        return this.extended;
      }
    }
  },

  mounted() {
    this.extended = !this.mobile;
  },

  methods: {
    toggleSidebar() {
      this.extended = !this.extended;
    },
    getNavIconColor(route) {
      return this.$route.name === route ? "#222" : "#616161";
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  background: white;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 86px);
}

.sidebar-navigation {
  overflow-y: auto;
  width: 350px;
  min-width: 350px;
  transition: width, min-width 0.2s ease-in;

  &.mini {
    transition: width, min-width 0.2s ease-in;
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

    .v-icon {
      width: 20px;
    }

    span,
    .v-icon {
      display: inline-block;
      height: 20px;
      border: none !important;
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
      padding: 14px 10px;
      margin: 0 auto;
      margin-bottom: 10px;

      span {
        display: none;
      }
    }

    .nav-title {
      font-size: 18px;
      line-height: 20px;
      padding-left: 16px;
    }
  }
}

.footer-impressum {
  .mini & {
    display: none;
  }
}
</style>
