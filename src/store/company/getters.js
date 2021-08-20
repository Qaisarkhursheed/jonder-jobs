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
  selectionManagement(state) {
    return state.selectionManagement;
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
