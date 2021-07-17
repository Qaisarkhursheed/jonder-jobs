export default {
  token: localStorage.getItem("user-token") || "",
  authenticated: localStorage.getItem("user-token") !== null,
  message: null,
  onBoardingCompleted: localStorage.getItem("onboarding-status")
    ? JSON.parse(localStorage.getItem(""))
    : false
};