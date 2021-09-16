<template>
  <v-navigation-drawer class="admin-sidebar" permanent fixed>
    <template v-slot:prepend>
      <div class="logo ma-6 mb-0 pb-6">
        <router-link :to="{ name: 'AdminDashboard' }">
          <v-img
            :src="require('@/assets/jonder_white.png')"
            max-width="128px"
          />
        </router-link>
      </div>
    </template>
    <v-list class="pt-6 pr-3 pl-3">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="{ name: item.name }"
        class="pl-3 pr-3"
        active-class="admin-sidebar-active"
      >
        <v-list-item-icon class="mr-4 aaa">
          <v-icon color="rgba(255, 255, 255, 0.7)">
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="logout d-flex align-center ma-6 mb-0 pt-5 pb-5">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-avatar v-on="on" color="primary pointer" size="40"></v-avatar>
            <div class="pl-3 admin-text-white">
              {{ $store.getters["user/user"].first_name }}
              {{ $store.getters["user/user"].last_name }}
            </div>
          </template>
          <v-list class="nav">
            <v-list-item>
              {{ $t("general.profile") }}
            </v-list-item>
            <v-list-item @click="$router.push({ name: 'Logout' })">
              {{ $t("general.logout") }}
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",

  data() {
    return {
      items: [
        {
          title: "Dashboard",
          name: "AdminDashboard",
          icon: "mdi-chart-bar-stacked"
        },
        {
          title: "Unternehmen",
          name: "AdminCompanies",
          icon: "mdi-office-building-outline"
        },
        {
          title: "Nutzer",
          name: "AdminUsers",
          icon: "mdi-account-group-outline"
        },
        {
          title: "CMS",
          name: "AdminCMS",
          icon: "mdi-cog-transfer"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.admin-sidebar.v-navigation-drawer {
  background-color: #1662cd;
  color: $admin-primary-text;
}
.admin-sidebar .theme--light.v-list-item:hover::before,
.admin.sidebar .theme--light.v-list-item--active:hover::before,
.admin-sidebar .theme--light.v-list-item--active::before {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0.2;
  transition: none;
}
.admin-sidebar
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: rgba(255, 255, 255, 0.7) !important;
}
.admin-sidebar .theme--light.v-list-item::before {
  color: #fff;
  transition: none;
}
.admin-sidebar-active {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: #fff;
  font-weight: 500;
}
.logo {
  border-bottom: 1px solid rgba(230, 231, 233, 0.2) !important;
}
.logout {
  border-top: 1px solid rgba(230, 231, 233, 0.2) !important;
}
</style>
