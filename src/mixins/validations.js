import { parsePhoneNumber, isPossiblePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

const validatePhoneNumber = (number) => {
  let isValid = false;
  try {
    const numberResult = parsePhoneNumber(number);
    console.log('numberResult', numberResult);
    if (numberResult) {
      isValid =
        numberResult.isValid() &&
        isPossiblePhoneNumber(number, numberResult.country) === true &&
        isValidPhoneNumber(number, numberResult.country) === true;
    }
  } catch {
    isValid = false;
  }
  return isValid;
};

export default {
  computed: {
    validations() {
      return {
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
          validatePhoneNumber(v) ||
          "Muss eine gültige Telefonnummer sein und beginnen mit Ländernummer Beispiel (+49)",

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
      };
    }
  }
};
