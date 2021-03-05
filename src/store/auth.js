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
        return state.user.data.user;
      }

      return null;
    },

    // Dummy user data
    dummyUser() {
      return {
        name: "Mirza Masic",
        photo:
          "https://cdn-images-1.medium.com/fit/c/100/100/2*EcZb9cndrhTF7_d74dv2Fg.png",
        company: "Company GbmH",
        social: [
          { network: "facebook", url: "https://facbook.com" },
          { network: "instagram", url: "https://instagram.com" },
          { network: "linkedin", url: "https://linkedin.com" }
        ],
        contact: [
          { name: "Mobil", value: "221 85485278", type: "tel" },
          { name: "Arbeit", value: "221 85485278", type: "tel" },
          { name: "E-Mail", value: "email@email.com", type: "mailto" }
        ]
      };
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
    },
  },

  actions: {
    async login({ dispatch }, credentials) {
      await axios.get("/csrf-cookie");
      await axios.post("/login", credentials)
        .then(resp => {
          const token = resp.data.token;
          localStorage.setItem("user-token", token);
          axios.defaults.headers.common["Authorization"] = token;
        })
        .catch(err => {
          console.log("Login error:", err);
          localStorage.removeItem("user-token");
        });

      return dispatch("me");
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
        .get("/auth-user")
        .then(response => {
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
        })
        .catch(() => {
          commit("SET_AUTHENTICATED", false);
          commit("SET_USER", null);
        });
    }
  }
};
