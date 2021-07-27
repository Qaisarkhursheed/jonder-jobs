import axios from "axios";

export default {
  async login({ commit }, credentials) {
    let response = {};

    await axios
      .post("/login", credentials)
      .then(resp => {
        const token = resp.data.token;
        const user = JSON.stringify(resp.data.user);
        localStorage.setItem("user-token", token);
        localStorage.setItem("user", user);
        localStorage.setItem("onboarding-status", resp.data.onboarding_status);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        commit("SET_AUTHENTICATED", true);
        commit("SET_ONBOARDING_STATUS", resp.data.onboarding_status);
        response = resp.data;
      })
      .catch(err => {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user");
        commit("SET_AUTHENTICATED", false);
        response = err.response.data;
      });

    return response;
  },

  async register({ commit }, data) {
    try {
      const resp = await axios.post("/register", data);
      const token = resp.data.token;
      const user = JSON.stringify(resp.data.user);
      localStorage.setItem("user-token", token);
      localStorage.setItem("user", user);
      localStorage.setItem("onboarding-status", "false");
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      commit("SET_AUTHENTICATED", true);
      return resp;
    } catch (err) {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user");
      localStorage.removeItem("onboarding-status");
      commit("SET_AUTHENTICATED", false);
      return Promise.reject(err.response);
    }
  },

  async registerCompany({ commit }, data) {
    try {
      const resp = await axios.post("/company/register", data);
      localStorage.setItem("user-token", resp.data.token);
      localStorage.setItem("user", JSON.stringify(resp.data.user));
      localStorage.setItem("onboarding-status", "false");
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + resp.data.token;
      commit("SET_AUTHENTICATED", true);
      return resp;
    } catch (error) {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user");
      localStorage.removeItem("onboarding-status");
      commit("SET_AUTHENTICATED", false);
      return Promise.reject(error.response);
    }
  },

  async forgotPassword(context, data) {
    try {
      const resp = await axios.post("/password/email", data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  logout({ commit }) {
    return axios.post("/logout").then(() => {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user");
      localStorage.removeItem("onboarding-status");
      delete axios.defaults.headers.common["Authorization"];
      commit("SET_AUTHENTICATED", false);
      this.reset();
    });
  },

  async facebooklogin() {
    await axios.get("/login/facebook").catch(err => {
      console.log("Facebook login error:", err);
    });
  },

  async googlelogin() {
    await axios.get("/login/google").catch(err => {
      console.log("Google login error:", err);
    });
  }
};
