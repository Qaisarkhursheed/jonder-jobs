<template>
  <nav class="sidebar-navigation pl-8 pr-5">
    <router-link :to="{ name: 'CompanyDashboard'}" >
      <v-icon>mdi-view-dashboard-outline</v-icon>
      <span>{{ $t('company.dashboard.dashboard') }}</span>
    </router-link>
    <router-link :to="{ name: 'CompanyInbox'}">
      <v-icon>mdi-email-outline</v-icon>
      <span>{{ $t('company.dashboard.inbox') }}</span>
    </router-link>
    <router-link :to="{ name: 'CompanySearch'}">
      <v-icon>mdi-magnify</v-icon>
      <span>{{ $t('company.dashboard.search') }}</span>
    </router-link>
    <router-link :to="{ name: 'CompanyProducts'}">
      <v-icon>mdi-currency-usd</v-icon>
      <span>{{ $t('company.dashboard.productPricing') }}</span>
    </router-link>
    <router-link :to="{name: 'CompanyProfile'}">
      <v-icon>mdi-account-outline</v-icon>
      <span>{{ $t('general.profile') }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss" scoped>

.sidebar-navigation {
  position: sticky;
  top: 2rem;

  a {
    display: block;
    padding: 16px;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    clear: both;
    text-decoration: none;
    @include clearfix;
    font-weight: normal;
    font-size: 18px;
    color: #7A7A7A;

    span,
    .v-icon {
      //float: left;
      display: inline-block;
      height: 20px;
      line-height: 22px;
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
  }
}</style>
