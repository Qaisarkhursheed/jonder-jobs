export default {
  data() {
    return {
      validations: {
        email: v =>
          !v ||
          /\S+@\S+\.\S+/.test(v) ||
          "Muss eine gültige E-Mail-Adresse sein.",

        greater: compareValue => v =>
          !v ||
          !compareValue ||
          parseInt(v.replace(":", "")) >
            parseInt(compareValue.replace(":", "")) ||
          `Muss größer als ${compareValue} sein.`,

        less: compareValue => v =>
          !v ||
          !compareValue ||
          parseInt(v.replace(":", "")) <
            parseInt(compareValue.replace(":", "")) ||
          `Muss kleiner als ${compareValue} sein.`,

        phone: v =>
          !v ||
          /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/gm.test(
            v
          ) ||
          "Muss eine gültige Telefonnummer sein.",

        time24: v =>
          !v ||
          /^([01]\d|2[0-3]):([0-5]\d)$/.test(v) ||
          "Die Zeit muss im Format hh:mm sein",

        required: v => !!v || "Feld ist erforderlich.",

        same: (field, fieldVal) => v =>
          v === fieldVal || `Muss mit ${field} identisch sein.`,

        size: {
          string: n => v => (v && v.length == n) || `Muss ${n} Zeichen sein.`
        },

        url: v =>
          !v ||
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
            v
          ) ||
          "Muss eine gültige URL sein.",

        max: {
          string: n => v =>
            !v || v.length <= n || `Darf nicht größer als ${n} Zeichen sein.`
        },

        min: {
          string: n => v =>
            !v || v.length >= n || `Muss mindestens ${n} Zeichen lang sein.`
        }
      }
    };
  }
};
