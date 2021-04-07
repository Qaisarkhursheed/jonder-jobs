import axios from "axios";

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem("user-token") || "",
    authenticated: false,
    user: null,
    message: null
  },

  getters: {
    authenticated(state) {
      return state.authenticated;
    },

    user(state) {
      if (state.user) {
        return state.user;
      }

      return null;
    },

    getUserFullName(state) {
      if (state.user) {
        return state.user.first_name + " " + state.user.last_name;
      }

      return null;
    },

    getUserInitials(state) {
      let initials = "";
      if (state.user) {
        if (state.user.first_name) initials += state.user.first_name.charAt(0);
        if (state.user.last_name) initials += state.user.last_name.charAt(0);
      }

      return initials;
    }
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },

    SET_USER(state, value) {
      state.user = value;
    },

    SET_MESSAGE(state, value) {
      state.message = value;
    }
  },

  actions: {
    async login({ dispatch }, credentials) {
      let response = {};

      await axios
        .post("/login", credentials)
        .then(resp => {
          const token = resp.data.token;
          const user = JSON.stringify(resp.data.user);
          localStorage.setItem("user-token", token);
          localStorage.setItem("user", user);
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;

          response = resp.data;
        })
        .catch(err => {
          console.log("Login error:", err);
          localStorage.removeItem("user-token");
          localStorage.removeItem("user");

          response = err.response.data;
        });

      dispatch("me");
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

    async logout({ dispatch }) {
      await axios.post("/logout").then(() => {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
      });

      return dispatch("me");
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
    },

    me({ commit }) {
      return axios
        .get("/me")
        .then(response => {
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
        })
        .catch(() => {
          commit("SET_AUTHENTICATED", false);
          commit("SET_USER", null);
          localStorage.removeItem("user-token");
          localStorage.removeItem("user");
        });
    }
  }
};
