import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { VueMaskDirective } from "v-mask";
import VueMoment from "vue-moment";
// import VueI18n from 'vue-i18n';
import i18n from './locales';

require("./middleware");

Vue.use(VueMoment);
Vue.directive("mask", VueMaskDirective);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
