<template>
  <v-app v-if="loaded">
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
#app.v-application {
  overflow: auto;
  .v-application--wrap {
    overflow: visible !important;
  }
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

  > div:first-child,
  > div.plan-content {
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
  .landing-header-container {
    z-index: 10;
  }
  .landing-header-container,
  .landing-hero {
    position: relative;
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

// Privacy policy
#freeprivacypolicy-com---nb {
  max-width: 100%;

  .cc-nb-main-container {
    background-color: $primary-blue-light;
    padding: 2rem;

    button {
      border-radius: 10px;
    }

    .cc-nb-okagree {
      background-color: $primary-blue-dark;
    }

    .cc-nb-reject {
      background-color: $medium-grey;
    }
  }
}

#freeprivacypolicy-com---preferences-center {
  button {
    border-radius: 10px;
  }

  .freeprivacypolicy-com---pc-dialog
    input[type="checkbox"].cc-custom-checkbox:checked
    + label:before {
    background: $primary-blue-dark;
  }

  .cc-pc-container {
    .cc-cp-foot-save {
      background-color: $primary-blue-dark;
    }
  }
}
// end privacy policy
</style>
<script>
import axios from "axios";
import types from "@/types";

export default {
  data() {
    return {
      loaded: false
    };
  },

  created() {
    var Tawk_API = Tawk_API || {};
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6124dee6649e0a0a5cd2ab4e/1fds0dddm";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    axios.get("/admin/cms-lists").then(res => {
      types.initData(res.data.data[0]);
      this.loaded = true;
    });
  },

  mounted() {
    const adjustTawk = setInterval(() => {
      const tawkIframe = document.querySelector(`iframe[src="about:blank"]`);

      if (tawkIframe) {
        tawkIframe.style.bottom = "5px";
        tawkIframe.style.right = "5px";
        clearInterval(adjustTawk);
      }
    }, 500);
  }
};
</script>
