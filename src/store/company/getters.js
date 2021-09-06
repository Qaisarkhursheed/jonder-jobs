import { groupBy, forEach } from "lodash";
import types from "../../types";

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
  selectionManagement: state => view => {
    let data;
    if (view === "list") {
      data = state.selectionManagement;
    } else {
      data = groupBy(state.selectionManagement, "managment_status");
      forEach(types.SELECTION_MANAGEMENT_STATUS, item => {
        if (!(item in data)) {
          data[item] = [];
        }
      });
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
  },
  searchType(state) {
    return state.searchType;
  }
};
