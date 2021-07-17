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
  }
};
