import axios from "axios";

export default {
  namespaced: true,

  state: {
    userStats: {
      search_display: 0,
      messaged_you: 0,
      profile_views: 0
    },
    companyViewed: null
  },

  getters: {
    userStats(state) {
      return state.userStats;
    },
    companyViewed(state) {
      return state.companyViewed;
    }
  },

  mutations: {
    SET_USER_STATS(state, value) {
      state.userStats = value;
    },
    SET_COMPANY_VIEWED(state, value) {
      state.companyViewed = value;
    }
  },

  actions: {
    updateSearchView(context, userId) {
      return axios.post("/stats/search", { user_id: userId });
    },
    updateProfileView(context, userId) {
      return axios.post("/stats/profile", { user_id: userId });
    },
    updateMessageYou(context, userId) {
      return axios.post("/stats/message", { user_id: userId });
    },
    getCompanyViewed({ commit }, limit = 5) {
      return axios
        .get("/stats/companies/" + limit)
        .then(resp => {
          if (resp.data.success)
            commit("SET_COMPANY_VIEWED", resp.data.companies);
        })
        .catch(err => {
          console.error("Error on user stats:", err);
        });
    },
    getUserStats({ commit }, params) {
      if (!params) params = { offset: 0, limit: 2 };
      return axios
        .get("/stats/" + params.offset + "/" + params.limit)
        .then(resp => {
          if (resp.data.success) commit("SET_USER_STATS", resp.data);
        })
        .catch(err => {
          console.error("Error on user stats:", err);
        });
    }
  }
};
