import axios from "axios";
import router from "@/router";
import store from "@/store";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE;

// Request interceptor for API calls
axios.interceptors.request.use(
  config => {
    const token =
      router.history.current.query.token || localStorage.getItem("user-token");
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = "application/json";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
axios.interceptors.response.use(
  response => {
    response.data.success = true;
    return response;
  },
  async error => {
    error.response.data.success = false;

    if (error.response.status === 401) {
      if (error.response.data.onboarding_error) {
        const userRole = store.getters["user/user"].role;

        if (userRole == "Jobseeker") {
          router.replace({ name: "ManualOnboarding" });
        } else if (userRole == "Employer") {
          router.replace({ name: "ManualOnboardingCompany" });
        } else {
          console.log("Err: Onboarding error for unsupported role.");
          alert("Error");
        }
      } else {
        localStorage.removeItem("user-token");
        store.commit("auth/SET_AUTHENTICATED", false);
        store.commit("user/SET_USER", null);

        // if (router.currentRoute.name != "Login") {
        //   router.replace({ name: "Login" });
        // }
      }
    }

    return Promise.reject(error);
  }
);
