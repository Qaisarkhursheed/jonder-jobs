import { parsePhoneNumber } from "libphonenumber-js";
import i18n from "@/locales";

const isValidPhoneNumber = number => {
  try {
    return parsePhoneNumber(number).isValid();
  } catch {
    return false;
  }
};

export default {
  computed: {
    validations() {
      return {
        email: v => !v || /\S+@\S+\.\S+/.test(v) || i18n.t("validations.email"),

        greater: compareValue => v =>
          !v ||
          !compareValue ||
          parseInt(v.replace(":", "")) >
            parseInt(compareValue.replace(":", "")) ||
          i18n.t("validations.greater", { n: compareValue }),

        less: compareValue => v =>
          !v ||
          !compareValue ||
          parseInt(v.replace(":", "")) <
            parseInt(compareValue.replace(":", "")) ||
          i18n.t("validations.less", { n: compareValue }),

        password: v =>
          !v ||
          /^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(v) ||
          i18n.t("validations.password"),

        phone: v => !v || isValidPhoneNumber(v) || i18n.t("validations.phone"),

        time24: v =>
          !v ||
          /^([01]\d|2[0-3]):([0-5]\d)$/.test(v) ||
          i18n.t("validations.time24"),

        required: v => !!v || i18n.t("validations.required"),

        same: (fieldName, fieldVal) => v =>
          v === fieldVal || i18n.t("validations.same", { field: fieldName }),

        size: {
          string: n => v =>
            (v && v.length == n) || i18n.t("validations.size", { n })
        },

        url: v =>
          !v ||
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
            v
          ) ||
          i18n.t("validations.url"),

        max: {
          string: n => v =>
            !v || v.length <= n || i18n.t("validations.max.string", { n }),
          selection: n => v =>
            !v || v.length <= n || i18n.t("validations.max.selection", { n })
        },

        min: {
          string: n => v =>
            !v || v.length >= n || i18n.t("validations.min.string", { n }),
          selection: n => v =>
            !v || v.length >= n || i18n.t("validations.min.selection", { n })
        }
      };
    }
  }
};
