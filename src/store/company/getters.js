import groupBy from 'lodash/groupBy';

export default {
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
  },
  selectionManagement: (state) => (view) => {
    let data;
    if (view === 'list') {
      data = state.selectionManagement;
    } else {
      data = groupBy(state.selectionManagement, 'managment_status')
    }
    return data;
  },
  searchResults(state) {
    return state.searchResults;
  },
  searchStatus(state) {
    return state.searchStatus.current;
  },
  searchMeta(state) {
    return state.searchResultsMeta;
  },
  searchFilters(state) {
    return state.searchFilters;
  },
  searchInProgress(state) {
    return state.searchInProgress;
  },
  jobseekerNotes(state) {
    return state.jobseekerNotes;
  }
};
