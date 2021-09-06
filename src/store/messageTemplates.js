import axios from "axios";

export default {
  namespaced: true,

  state: {
    items: [],
    totalItems: null,
    loadingFetch: false,
    loadingCreate: false,
    loadingUpdate: false,
    loadingDelete: false,
    paramsCache: {}
  },

  getters: {
    items: state => state.items,
    totalItems: state => state.totalItems,
    loadingFetch: state => state.loadingFetch,
    loadingCreate: state => state.loadingCreate,
    loadingUpdate: state => state.loadingUpdate,
    loadingDelete: state => state.loadingDelete
  },

  mutations: {
    SET_ITEMS: (state, value) => (state.items = value),
    SET_TOTAL_ITEMS: (state, value) => (state.totalItems = value),
    SET_LOADING_FETCH: (state, value) => (state.loadingFetch = value),
    SET_LOADING_CREATE: (state, value) => (state.loadingCreate = value),
    SET_LOADING_UPDATE: (state, value) => (state.loadingUpdate = value),
    SET_LOADING_DELETE: (state, value) => (state.loadingDelete = value)
  },

  actions: {
    async fetch({ state, commit }, params) {
      try {
        commit("SET_LOADING_FETCH", true);
        const resp = await axios.get("/message-template", { params });
        commit("SET_ITEMS", resp.data.data);
        commit("SET_TOTAL_ITEMS", resp.data.meta.total);
        state.paramsCache = params;
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      } finally {
        commit("SET_LOADING_FETCH", false);
      }
    },

    async create({ commit, dispatch, state }, data) {
      try {
        commit("SET_LOADING_CREATE", true);
        const resp = await axios.post("/message-template", data);
        dispatch("fetch", state.paramsCache);
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      } finally {
        commit("SET_LOADING_CREATE", false);
      }
    },

    async update({ commit, dispatch, state }, data) {
      try {
        commit("SET_LOADING_UPDATE", true);
        const resp = await axios.put(`/message-template/${data.id}`, data);
        dispatch("fetch", state.paramsCache);
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      } finally {
        commit("SET_LOADING_UPDATE", false);
      }
    },

    async delete({ commit, dispatch, state }, id) {
      try {
        commit("SET_LOADING_DELETE", true);
        const resp = await axios.delete(`/message-template/${id}`);
        dispatch("fetch", state.paramsCache);
        return resp;
      } catch (error) {
        return Promise.reject(error.response);
      } finally {
        commit("SET_LOADING_DELETE", false);
      }
    }
  }
};
