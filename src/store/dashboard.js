import axios from "axios";

export default {
  namespaced: true,

  state: {},

  getters: {
    authenticated(state) {
      return state.authenticated;
    }
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    }
  },

  actions: {
    async login(context, credentials) {
      let response = {};

      await axios
        .post("/login", credentials)
        .then(resp => {
          console.log(resp);
          response = resp.data;
        })
        .catch(err => {
          console.log("Login error:", err);
        });
      return response;
    }
  }
};
