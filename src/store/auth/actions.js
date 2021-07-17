import axios from 'axios';

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
        localStorage.setItem(
          "onboarding-status",
          resp.data.onboarding_status
        );
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
    let response = {};

    await axios
      .post("/register", data)
      .then(resp => {
        if (resp.data.success && resp.data.user) {
          const token = resp.data.token;
          const user = JSON.stringify(resp.data.user);
          localStorage.setItem("user-token", token);
          localStorage.setItem("user", user);
          localStorage.setItem("onboarding-status", "false");
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          commit("SET_AUTHENTICATED", true);
        }
        response = resp.data;
      })
      .catch(err => {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user");
        localStorage.removeItem("onboarding-status");
        commit("SET_AUTHENTICATED", false);
        response = err.response.data;
      });

    return response;
  },

  async forgotpass({ commit }, data) {
    await axios
      .post("/forgot-password", data)
      .then(() => {
        commit("SET_MESSAGE", "User requested new password");
      })
      .catch(err => {
        console.log("Forgot password error:", err);

        commit("SET_MESSAGE", "Request password error");
      });
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