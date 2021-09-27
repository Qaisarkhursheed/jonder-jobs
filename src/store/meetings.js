import axios from "axios";

export default {
  namespaced: true,

  state: {
    loadingFetch: false,
    loadingCreate: false,
    loadingUpdate: false
  },

  getters: {
    loadingFetch: state => state.loadingFetch,
    loadingCreate: state => state.loadingCreate,
    loadingUpdate: state => state.loadingUpdate
  },

  mutations: {
    SET_LOADING_FETCH: (state, value) => {
      state.loadingFetch = value;
    },
    SET_LOADING_CREATE: (state, value) => {
      state.loadingCreate = value;
    },
    SET_LOADING_UPDATE: (state, value) => {
      state.loadingUpdate = value;
    }
  },

  actions: {
    async fetchByMeetId({ commit }, id) {
      try {
        commit("SET_LOADING_FETCH", true);
        const resp = await axios.get("/meetings/meet/" + id);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_FETCH", false);
      }
    },

    async create({ commit }, data) {
      try {
        commit("SET_LOADING_CREATE", true);
        const resp = await axios.post("/meetings", data);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_CREATE", false);
      }
    },

    async update({ commit }, data) {
      try {
        commit("SET_LOADING_UPDATE", data.id);
        const resp = await axios.put(`/meetings/${data.id}`);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_UPDATE", false);
      }
    },

    async accept({ commit }, id) {
      try {
        commit("SET_LOADING_UPDATE", id);
        const resp = await axios.put(`/meetings/${id}/accept`);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_UPDATE", false);
      }
    },

    async decline({ commit }, id) {
      try {
        commit("SET_LOADING_UPDATE", id);
        const resp = await axios.put(`/meetings/${id}/decline`);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_UPDATE", false);
      }
    },

    async changeDate({ commit }, data) {
      try {
        commit("SET_LOADING_UPDATE", true);
        const resp = await axios.put(`/meetings/${data.id}/change-date`, data);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_UPDATE", false);
      }
    }
  }
};
