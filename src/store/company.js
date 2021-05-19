import axios from 'axios';

export default {
  namespaced: true,

  state: {
    // Request, negotiate, call
    userInteractions: null,
  },

  getters: {
    userInteractions(state) {
      return state.userInteractions;
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
    }
  }
};