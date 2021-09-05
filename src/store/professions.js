import axios from "axios";

export default {
  namespaced: true,

  state: {
    items: [],
    loading: false
  },

  getters: {
    items: state => state.items,
    loading: state => state.loading
  },

  mutations: {
    SET_ITEMS(state, value) {
      state.items = value;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    }
  },

  actions: {
    async fetch({ state, commit }, search) {
      if (state.items.length) {
        return;
      }

      try {
        commit("SET_LOADING", true);
        const resp = await axios.get("/professions", {
          params: {
            search,
            map: 1
          }
        });
        commit("SET_ITEMS", resp.data.professions);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING", false);
      }
    }
  }
};
