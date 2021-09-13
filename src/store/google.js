export default {
  namespaced: true,

  state: {
    places: [],
    loadingPlaces: false
  },

  getters: {
    places: state => state.places,
    loadingPlaces: state => state.loadingPlaces
  },

  mutations: {
    SET_PLACES: (state, value) => (state.places = value),
    CLEAR_PLACES: state => (state.places = []),
    SET_LOADING_PLACES: (state, value) => (state.loadingPlaces = value)
  },

  actions: {
    async places({ commit }, { input, types }) {
      try {
        if (!input) {
          commit("CLEAR_PLACES");
          return [];
        }

        commit("SET_LOADING_PLACES", true);
        const autocompleteService = new window.google.maps.places.AutocompleteService();
        const resp = await autocompleteService.getPredictions({ input, types });
        commit(
          "SET_PLACES",
          resp.predictions.map(i => i.description)
        );
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_LOADING_PLACES", false);
      }
    }
  }
};
