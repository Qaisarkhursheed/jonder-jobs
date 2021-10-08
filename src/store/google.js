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

        const service = new window.google.maps.places.AutocompleteService();
        const resp = await service.getPlacePredictions({
          input,
          types
        });

        const result = resp.predictions?.map(i => i.description) || [];
        commit("SET_PLACES", result);

        return result;
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      } finally {
        commit("SET_LOADING_PLACES", false);
      }
    }
  }
};
