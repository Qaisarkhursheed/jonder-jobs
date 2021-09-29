import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import en from "vuetify/es5/locale/en";
import de from "vuetify/es5/locale/de";
import fr from "vuetify/es5/locale/fr";

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
    locales: { en, de, fr },
    current: localStorage.getItem("lang") || "de",
    defaultLocale: "de"
  }
});
