import axios from 'axios';

export default {
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
  },
  // move to notepad probably later
  addUserNote(context, payload) {
    return axios
      .post('/notepad/user/description', payload)
  },
  fetchUserNotes(context, user_id) {
    return axios
      .get(`/notepad/user/description/${user_id}`)
  }
};