import axios from "axios";

export default {
  namespaced: true,

  state: {
    user: null
  },

  getters: {
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
    },

    isUserEmployed(state) {
      return (
        state.user && state.user.working_in && state.user.working_in.length > 0
      );
    }
  },

  mutations: {
    SET_USER(state, value) {
      state.user = value;
    }
  },

  actions: {
    me({ state, commit }) {
      if (state.user) return;
      return axios
        .get("/me")
        .then(response => {
          commit("SET_USER", response.data);
        })
        .catch(() => {
          commit("SET_USER", null);
          localStorage.removeItem("user-token");
          localStorage.removeItem("user");
        });
    },

    getUser(context, userId) {
      return axios.get("/users/" + userId);
    },

    // eslint-disable-next-line no-unused-vars
    getAllUsers(context) {
      return axios.get("/users");
    },

    updateUser({ commit }, userDetails) {
      return axios
        .post("/user", userDetails)
        .then(resp => {
          if (resp.data.success && resp.data.user) {
            commit("SET_USER", resp.data.user);
          }
        })
        .catch(err => {
          console.error("Update user error:", err);
        });
    }
  }
};
