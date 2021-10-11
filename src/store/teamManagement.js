import axios from "axios";

export default {
  namespaced: true,

  state: {
    users: [],
    totalUsers: 0,
    loading: false,
    paramsCache: {}
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
    async fetchUsers({ state, commit }, params) {
      try {
        commit("SET_LOADING", true);
        const resp = await axios.get("/team-managment", { params });
        const users = resp.data.data;
        if (!params || params.page === 1) {
          users.unshift(resp.data.owner);
        }
        commit("SET_USERS", users);
        commit("SET_TOTAL_USERS", resp.data.meta.total);
        state.paramsCache = params;
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async inviteUser({ dispatch, state }, data) {
      try {
        const resp = await axios.post("/team/proccess", data);
        dispatch("fetchUsers", state.paramsCache);
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      }
    },

    async deleteUser({ dispatch, state }, id) {
      try {
        const resp = await axios.delete("/team-managment/" + id);
        dispatch("fetchUsers", state.paramsCache);
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      }
    }
  }
};
