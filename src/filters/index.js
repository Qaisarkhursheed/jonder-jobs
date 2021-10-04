import Vue from "vue";
import i18n from "../locales";

Vue.filter("EUR", number => {
  if (!number) {
    return "";
  }

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(number);
});

Vue.filter("initials", user => {
  if (!user) {
    return "";
  }

  if (user.company) {
    if (user.company.split(" ").length > 1) {
      return user.company.charAt(0) + user.company.split(" ")[1].charAt(0);
    }

    return user.company.substr(0, 2);
  }

  const initials = user.first_name.charAt(0) + user.last_name.charAt(0);
  return initials.toUpperCase();
});

Vue.filter("fullname", (user, considerCompany = false) => {
  if (!user) {
    return "";
  }

  if (considerCompany && user.company) {
    return user.company;
  }

  return `${user.first_name} ${user.last_name}`;
});

Vue.filter("jobSearchStatus", status => {
  return i18n.t("jobSearchStatus" + Vue.options.filters.capitalize(status));
});
