<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style lang="scss">
html {
  overflow: hidden !important;
}

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.v-application .v-input.error--text,
.v-application .v-messages.error--text {
  color: $primary-error !important;
}
.v-application .v-input.error--text {
  border-color: $primary-error;
}
.v-input__icon.v-input__icon--append,
.v-file-input.v-text-field--outlined .v-text-field__slot {
  cursor: pointer !important;
}
.v-input__slot {
  .v-select__slot {
    height: auto !important;
    min-height: 55px;
  }
}
.selection-management-table-list .v-input__slot .v-select__slot {
  height: 40px !important;
  min-height: 40px !important;
}
.options .upgrade-option > span {
  width: 100% !important;
}
// Profile
.profile-title {
  font-size: 20px;
  width: 100%;
  line-height: 24px;
  font-weight: 600;
  // margin: 15px 0 0 15px;
}

.profile-subtitle {
  width: 100%;
  // margin-left: 15px;
}

.profile-label {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.branche {
  margin-top: 70px;
}

.monthly-salary {
  border: 1px solid $primary-blue-dark;
  border-radius: 10px;
  width: 80px;
  text-align: center;
  padding: 15px 0;
  color: $primary-blue-dark;
}

.upgrade {
  border: 1px solid $light-grey;
  border-radius: 10px;
  padding: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;

  > div:first-child {
    display: flex;
  }

  &.deactive {
    cursor: default;
  }
  .upgrade-title {
    font-size: 16px;
    font-weight: 700;
  }
  .updgrade-price {
    color: $primary-blue-dark;
    position: absolute;
    right: 25px;
    bottom: 23px;
    width: auto;
  }
}
.profile-section {
  padding: 40px;
  border-radius: 10px;
}

.upgrade-icon {
  width: 30px;
  height: 50px;
  margin-right: 18px;
  max-width: 30px;
}

.document-wrap {
  width: 70%;
}
.upgrade-default {
  order: 1;
  p {
    font-size: 11px;
  }
}
.plan-description {
  order: 1;
  h3 {
    font-size: 16px;
    font-weight: 700;
  }
  > div {
    color: #252525;
    font-size: 11px;
    b {
      color: #27aae1;
    }
    &.payment-info {
      color: #27aae1 !important;
      font-weight: 600;
      > span {
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 800px) {
  .document-wrap {
    width: 100%;
  }
}
// end Profile
// dashboard/Dashboard
.dashboard-holder {
  position: relative;
  margin-top: 20px;
  color: $dark-grey;
}

.short-message {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-row {
  border-bottom: 1px solid $light-grey;
  font-size: 14px;
  color: $dark-grey;

  &:last-child {
    border-bottom: none;
  }
}

.user-name {
  font-size: 32px;
  font-weight: 500;
  line-height: 39px;
}

.no-msg {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
}
.mt {
  position: fixed;
  bottom: 0;
  width: 65%;
  text-align: center;
}
// end dashboard/Dashboard
// Company Layout
.main-panel-wrap {
  height: calc(100% - 100px) !important;
  overflow: auto;
  padding-bottom: 80px;
}
// end Company Layout
// FAQ
.landing-page {
  position: relative;
  height: 100%;
  overflow: auto;
  background: #eff2f4;

  .button {
    text-decoration: none;
  }

  .hero-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 820px;
    height: 740px;
  }

  .landing-header-container,
  .landing-hero {
    position: relative;
    z-index: 10;
  }

  .landing-header {
    padding: 20px 60px;

    .links {
      text-align: right;

      .txt-link {
        margin-right: 20px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  .landing-hero {
    min-height: 740px;
    .box {
      background: rgba(2, 83, 179, 0.8);
      padding: 42px 42px 42px 82px;
      height: 540px;
      color: white;

      h1 {
        color: white !important;
        font-size: 40px;
        line-height: 54px;
        margin-bottom: 20px;
      }

      .inner {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        max-width: 540px;
      }
    }
  }

  .faq-title {
    text-align: center;
    color: $primary-blue-dark !important;
  }

  .faq-list {
    background: white;
  }

  .faq-item {
    padding: 26px 0 26px 50px;
    font-size: 20px;
    color: $primary-blue-dark;
    font-weight: 600;
    border-bottom: 1px solid $medium-grey;
    cursor: pointer;
  }

  footer {
    background: white;
  }
}
// end FAQ
// CV Maker
.step-header-detail {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: $primary-blue-dark;

  .v-icon {
    font-size: 28px;
    color: $primary-blue-dark;
    margin-right: 10px;
  }
}

.step-header-description {
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: $dark-grey;

  .date {
    font-size: 12px;
    line-height: 16px;
    color: $medium-grey;
  }
}

.v-card__subtitle {
  border-bottom: 1px solid $light-grey;
  margin: 20px -32px 20px !important;
  padding: 32px 32px 20px;
}

.col > label {
  display: block;
  padding-bottom: 8px;
  margin-right: 8px;
}
// end CV Maker
// Profile wrap
.profile-holder {
  .card-link {
    overflow: hidden;
  }

  .card-link-btn {
    display: inline-block;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: rgba(2, 83, 179, 0.1);
    border-radius: 50% !important;
    transform: rotate(43deg);
    overflow: hidden;
  }
}
// end Profile wrap
// Chat
.chat-holder {
  overflow: hidden;
}

.overflow-list {
  overflow: auto;
}

.dashboard-holder {
  position: relative;
}

.short-message {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-row {
  border-bottom: 1px solid $light-grey;
  font-size: 14px;
  color: $dark-grey;

  &:last-child {
    border-bottom: none;
  }
}
// end Chat
// Dashboard Layout
.v-application--wrap {
  height: 100vh;
  overflow: auto;
}

.main,
.navigation {
  background-color: $lighter-grey;
}

.v-application .dashboard-navigation {
  padding: 0 0 0 32px;
  position: sticky;
  top: 2rem;

  a {
    display: block;
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    text-align: left;
    clear: both;
    color: black;
    text-decoration: none;
    @include clearfix;

    &.with-submenu {
      margin-bottom: 10px;
      border: none !important;

      & i,
      span {
        border: none !important;
      }
    }

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
      line-height: 20px;
    }

    &:hover,
    &.router-link-exact-active {
      &,
      span,
      .v-icon {
        color: $primary-blue-dark;
        text-decoration: none;
        border-bottom: 1px solid $primary-blue-dark;
      }
    }

    &.router-link-exact-active {
      span {
        font-weight: bold;
      }
    }
  }
}

.logo {
  margin-bottom: 20px;
  border: none !important;
}

.dashboard-search {
  position: relative;

  .dashboard-search-submit {
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    width: 20px;
  }
}

.dashboard-avatar {
  font-size: 16px;
  line-height: 38px;
  cursor: default;

  .name {
    margin-right: 10px;
    color: $primary-blue-dark;
  }

  .v-avatar {
    cursor: pointer;
  }
}

.nav {
  cursor: pointer;
  width: 150px;
}

.search-holder
.v-select.v-select--is-menu-active
.v-input__icon--append
.v-icon {
  transform: rotate(0) !important;
}

.search-holder {
  padding: 20px;
  border-bottom: 1px solid $light-grey;
}

.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.5px solid #cacaca;
  font-weight: 500;
  font-size: 18px;
  height: auto;
  max-height: 90px;
  padding: 15px 0;
  cursor: pointer;
  color: #000;
  transition: 0.3s color, 0.3s border-color;

  &:hover {
    color: #0253b3;
    border-color: #0253b3;

    .v-icon {
      color: #0253b3 !important;
    }
  }
}

.settings-nav {
  background-color: white;
  padding: 32px;
  border-radius: 10px;
  margin-top: 40px;
}

.settings-title {
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  line-height: 38px;
  margin-bottom: 26px;
  color: #222;
}

button.back-btn.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.primary {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 15px;
  padding: 20px;
  height: 48px;
}

.dashboard-about {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
}

.top-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0px;
  word-break: break-all;
}

.dash-name {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  width: 100%;
  text-align: center;
}

.settings-link {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  text-underline-offset: 3px;
}

.about-info {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 14px;
  color: $primary-blue-dark;
  margin-bottom: 8px;
}
.about-text {
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 34px !important;
  color: $dark-grey;
}

.company-ed {
  font-size: 16px;
  font-weight: 600;
  line-height: 17px;
  color: $dark-grey;
  margin-bottom: 5px !important;
}

.profile-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  position: relative;
  top: -60px;
  margin: 0 auto -40px auto;

  .v-image {
    border-radius: 50px;
    max-width: 5rem;
    max-height: 5rem;
  }
  .profile-image-user {
    height: 80px;
    width: 80px;
  }
  .profile-image-badge-icons {
    position: absolute;
    bottom: 0;
    display: flex;
    right: -5px;
    .profile-image-badge-icon {
      max-width: 28px;
    }
  }
}
// end Dasboard Layout
// Settings
.v-btn.main-accept-btn {
  background-color: $primary-blue-dark !important;
  color: #fff !important;
}
.v-application .dashboard-navigation {
  padding: 0 0 0 32px;
  position: sticky;
  top: 2rem;

  a {
    display: block;
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    text-align: left;
    clear: both;
    color: black;
    text-decoration: none;
    @include clearfix;

    &.with-submenu {
      margin-bottom: 10px;
      border: none !important;

      & i,
      span {
        border: none !important;
      }
    }

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
      line-height: 20px;
    }

    &:hover,
    &.router-link-exact-active {
      &,
      span,
      .v-icon {
        color: $primary-blue-dark;
        text-decoration: none;
        border-bottom: 1px solid $primary-blue-dark;
      }
    }

    &.router-link-exact-active {
      span {
        font-weight: bold;
      }
    }
  }
}

.main,
.footer {
  background-color: $lighter-grey;
}

.footer {
  a {
    color: black !important;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.settings-nav {
  background-color: white;
  padding: 32px;
  border-radius: 10px;
  margin-top: 12px;
}

.settings-title {
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  line-height: 38px;
  margin-bottom: 26px;
  color: #222;
  word-break: break-all;
}

.profile-section {
  border-radius: 10px !important;
}

.invoice-row {
  border-top: 1px solid #dedede;

  .invoice-number {
    font-weight: 500;
    font-size: 13px;
    color: #000000;
    opacity: 0.7;
  }

  .invoice-date {
    font-weight: 500;
    font-size: 16px;
    color: #101010;
  }
}

.payment-card {
  border: 1px solid #e9e9e9;
  border-radius: 10px !important;

  .card-name {
    font-weight: bold;
    font-size: 16px;
    color: #252525;
  }

  .card-expiration {
    font-weight: normal;
    font-size: 11px;
    color: #252525;
  }
}
// end Settings
</style>
<script>
export default {
  created: function() {
    var Tawk_API = Tawk_API || {};
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6124dee6649e0a0a5cd2ab4e/1fds0dddm";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  }
};
</script>
