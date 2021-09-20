import axios from "axios";

export default {
  namespaced: true,

  state: {
    users: [],
    totalUsers: 0,
    loading: false
  },

  getters: {
    users(state) {
      return state.users;
    },
    totalUsers(state) {
      return state.totalUsers;
    },
    loading(state) {
      return state.loading;
    }
  },

  mutations: {
    SET_USERS(state, value) {
      state.users = value;
    },
    SET_TOTAL_USERS(state, value) {
      state.totalUsers = value;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    }
  },

  actions: {
    async fetchUsers({ commit }, params) {
      try {
        commit("SET_LOADING", true);
        const resp = await axios.get("/team-managment", { params });
        const users = resp.data.data;
        if (params.page === 1) {
          users.unshift(resp.data.owner);
        }
        commit("SET_USERS", users);
        commit("SET_TOTAL_USERS", resp.data.meta.total);
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async inviteUser({ dispatch }, data) {
      try {
        const resp = await axios.post("/team/proccess", data);
        dispatch("fetchUsers");
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      }
    },

    async deleteUser({ dispatch }, id) {
      try {
        const resp = await axios.delete("/team-managment/" + id);
        dispatch("fetchUsers");
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      }
    }
  }
};
