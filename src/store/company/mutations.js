import { groupBy, assign } from "lodash";

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
  },
  SET_SELECTION_MANAGEMENT(state, value) {
    assign(
      state.selectionManagement,
      groupBy(value, 'managment_status')
    );
  },
  SET_SEARCH_RESULTS(state, value) {
    state.searchResults = value;
  },
  SET_SEARCH_FILTERS(state, value) {
    state.searchFilters = value;
  },
  SET_SEARCH_INPROGRESS(state, value) {
    state.searchInProgress = value
  },
  SET_JOBSEEKER_NOTES(state, value) {
    state.jobseekerNotes = value;
  }
};