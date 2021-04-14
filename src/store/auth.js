import axios from "axios";

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem("user-token") || "",
    authenticated: false,
    message: null
  },

  getters: {
    authenticated(state) {
      return state.authenticated;
    }
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },

    SET_MESSAGE(state, value) {
      state.message = value;
    }
  },

  actions: {
    async login({ commit }, credentials) {
      let response = {};

      await axios
        .post("/login", credentials)
        .then(resp => {
          const token = resp.data.token;
          const user = JSON.stringify(resp.data.user);
          localStorage.setItem("user-token", token);
          localStorage.setItem("user", user);
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          commit("SET_AUTHENTICATED", true);
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
      await axios
        .post("/register", data)
        .then(() => {
          commit("SET_MESSAGE", "User registered");
        })
        .catch(err => {
          console.log("Register error:", err);

          commit("SET_MESSAGE", "Register error");
        });
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

    async logout({ dispatch, commit }) {
      await axios.post("/logout").then(() => {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
        commit("SET_AUTHENTICATED", false);
      });

      return dispatch("user/me", null, { root: true });
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
  }
};
