import types from "@/types";
import i18n from "@/locales";

export default {
  methods: {
    alert(text) {
      alert(text);
    },

    log(...args) {
      console.log(args);
    },

    idToString(type, id) {
      const item = types[type].find(i => i.id == id);

      if (!item) {
        return null;
      }

      return item[i18n.locale];
    },

    idsToArray(type, ids) {
      return types[type]
        .filter(i => ids.includes(parseInt(i.id)))
        .map(i => i[i18n.locale]);
    }
  }
};
