import axios from 'axios';

export default {
  namespaced: true,

  state: {
    // Request, negotiate, call
    userInteractions: null,
    peopleReach: null,
    profileViews: null,
    companyInteractions: {
      yearlyActivity: null,
      interactions: null
    }
  },

  getters: {
    userInteractions(state) {
      return state.userInteractions;
    },
    peopleReach(state) {
      return state.peopleReach;
    },
    profileViews(state) {
      return state.profileViews;
    },
    companyInteractions(state) {
      return state.companyInteractions.interactions;
    },
    companyInteractionsYearly(state) {
      return state.companyInteractions.yearlyActivity;
    }
  },

  mutations: {
    SET_USER_INTERACTIONS(state, value) {
      state.userInteractions = {
        request_users: {
          type: 'request',
          users: value.request_users
        },
        negotiation_users: {
          type: 'negotiation',
          users: value.negotiation_users
        },
        call_users: {
          type: 'call',
          users: value.call_users
        }
      };
    },
    SET_PEOPLE_REACH(state, value) {
      state.peopleReach = value;
    },
    SET_PROFILE_VIEWS(state, value) {
      state.profileViews = value;
    },
    SET_COMPANY_INTERACTIONS(state, value) {
      state.companyInteractions.yearlyActivity = value.yearly_activity;
      state.companyInteractions.interactions = value.interactions;
    }
  },
  actions: {
    fetchUserInteractions({ commit }) {
      return axios
        .get('/stats/company/user/interactions')
        .then((res) => {
          if (res.data.success) {
            commit('SET_USER_INTERACTIONS', res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    },
    fetchPeopleReach({ commit }) {
      return axios
        .get('/stats/company/people/reach')
        .then((res) => {
          if (res.data.success) {
            commit('SET_PEOPLE_REACH', res.data.people_reach);
          }
        })
    },
    fetchProfileViews({ commit }) {
      return axios
        .get('/stats/company/profile/views')
        .then((res) => {
          if(res.data.success) {
            commit('SET_PROFILE_VIEWS', res.data.profile_views)
          }
        })
    },
    fetchCompanyInteractions({ commit }) {
      return axios
        .get('/stats/company/interactions')
        .then((res) => {
          if(res.data.success) {
            commit('SET_COMPANY_INTERACTIONS', res.data)
          }
        })
    }
  }
};