import axios from "axios";

export default {
  namespaced: true,

  state: {
    user: null,
    userDetails: null
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
    },

    userDetails(state) {
      return state.userDetails;
    },

    userDetailsFullName(state) {
      if (state.userDetails) {
        return state.userDetails.first_name + " " + state.userDetails.last_name;
      }

      return null;
    },

    userDetailsInitials(state) {
      let initials = "";
      if (state.userDetails) {
        if (state.userDetails.first_name) initials += state.userDetails.first_name.charAt(0);
        if (state.userDetails.last_name) initials += state.userDetails.last_name.charAt(0);
      }

      return initials;
    }
  },

  mutations: {
    SET_USER(state, value) {
      state.user = value;
    },
    SET_USER_DETAILS(state, value) {
      state.userDetails = value;
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

    getUser({ commit }, userId) {
      return axios
        .get("/users/" + userId)
        .then(resp => {
          if (resp.data) commit("SET_USER_DETAILS", resp.data);
        })
        .catch(err => {
          console.error("Error getting user details:", err);
        });
    },

    getAllUsers() {
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
    },

    searchUsers({ dispatch }, payload) {
      return axios.get("/search/0/10?data=" + payload)
        .then(res => {
          if (res.data.success)
            return res.data.data.map(i => transformSearchResult(i, dispatch));
          return [];
        })
        .catch(err => {
          console.error("Error getting search results: ", err);
          return [];
        });
    }
  }
};

const transformSearchResult = (user, dispatch) => {
  dispatch("stats/updateSearchView", user.id, { root: true });
  return {
    name:
      user.role === "user"
        ? user.first_name + " " + user.last_name
        : user.company,
    id: user.id
  };
};
