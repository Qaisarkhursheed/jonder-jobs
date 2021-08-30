import Vue from "vue";

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

  return user.first_name.charAt(0) + user.last_name.charAt(0);
});
