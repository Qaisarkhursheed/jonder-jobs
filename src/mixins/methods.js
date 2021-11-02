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
    },

    getDocumentIcon(filePath) {
      if (!filePath) {
        return require(`@/assets/file-icons/_blank.png`);
      }

      let ext = filePath.split(".");

      if (ext.length < 2) {
        return require(`@/assets/file-icons/_blank.png`);
      }

      ext = ext.pop();

      try {
        return require(`@/assets/file-icons/${ext}.png`);
      } catch (err) {
        return require(`@/assets/file-icons/_blank.png`);
      }
    },

    countWords(str) {
      return str.split(" ").filter(function(n) {
        return n != "";
      }).length;
    },

    getCaptchaKey() {
      return process.env.VUE_APP_CAPTCHA_KEY;
    }
  }
};
