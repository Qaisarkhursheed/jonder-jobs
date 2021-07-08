import axios from "axios";
import router from "@/router";
import store from "@/store";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE;

// Request interceptor for API calls
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("user-token");
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
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      if (
        error.response.data.message == "Beenden Sie den Onboarding-Prozess."
      ) {
        const name =
          store.getters["user/user"].role == "Jobseeker"
            ? "ManualOnboarding"
            : "ManualOnboardingCompany";

        router.replace({ name });
      } else {
        localStorage.removeItem("user-token");

        if (router.currentRoute.name != "Login") {
          router.replace({ name: "Login" });
        }
      }
    }

    return Promise.reject(error);
  }
);
