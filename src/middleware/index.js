import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE;

// Request interceptor for API calls
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("user-token");
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      localStorage.removeItem("user-token");
      window.location = "/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
