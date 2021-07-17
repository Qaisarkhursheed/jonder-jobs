export default {
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
};