import axios from "axios";

// https://github.com/northdata/api/blob/master/doc/data-api-userguide/data-api-userguide.md

const ndAxios = axios.create({
  baseURL: "https://www.northdata.com/_api/",
  headers: {
    "X-Api-Key": process.env.VUE_APP_NORTHDATA_API_KEY
  }
});

export default {
  namespaced: true,

  state: {
    loadingSearch: false
  },

  getters: {
    loadingSearch: state => state.loadingSearch
  },

  mutations: {
    SET_LOADING_SEARCH: (state, value) => (state.loadingSearch = value)
  },

  actions: {
    async universalSearch({ commit }, query) {
      try {
        commit("SET_LOADING_SEARCH", true);
        const resp = await ndAxios.get("search/v1/universal", {
          params: {
            query,
            domain: "company",
            // history: 1,
            // financials: 1,
            // sheets: 1,
            // events: 1,
            // maxEvents: 1,
            // relations: 1,
            extras: 1
          }
        });
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_SEARCH", false);
      }
    },

    async suggestSearch({ commit }, query) {
      try {
        commit("SET_LOADING_SEARCH", true);
        const resp = await ndAxios.get("search/v1/suggest", {
          params: {
            query,
            domain: "company"
          }
        });
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_SEARCH", false);
      }
    }
  }
};
