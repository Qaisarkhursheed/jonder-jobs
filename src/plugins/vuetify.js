import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import en from "vuetify/es5/locale/en";
import de from "vuetify/es5/locale/de";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0253b3"
      }
    }
  },
  lang: {
    locales: { en, de },
    current: localStorage.getItem("lang") || "de"
  }
});
