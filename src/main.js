import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { VueMaskDirective } from "v-mask";
import VueMoment from "vue-moment";
// import VueI18n from 'vue-i18n';
import i18n from "./locales";
<<<<<<< HEAD
=======
import ResponseAlert from "@/components/ResponseAlert";
import Validations from "@/mixins/validations";
>>>>>>> 7e5bdf9f96b326aba5055a829f4e2b90dd3e5636

require("./middleware");

Vue.use(VueMoment);
Vue.directive("mask", VueMaskDirective);
Vue.component("ResponseAlert", ResponseAlert);
Vue.mixin(Validations);

Vue.config.productionTip = false;
<<<<<<< HEAD
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
=======

store.dispatch("user/me").finally(() => {
  new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
  }).$mount("#app");
});
>>>>>>> 7e5bdf9f96b326aba5055a829f4e2b90dd3e5636
