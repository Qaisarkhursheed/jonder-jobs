export default {
  SET_CMS_LISTS(state, value) {
    state.cms = {...state.cms, ...value};
  },

  SET_CMS_LIST_TYPE(state, value) {
    state.cms[value.type] = value.data;
  },
  SET_COMPANIES(state, value) {
    state.company_management.users = value;
  },
  SET_COMPANIES_TOTAL(state, value) {
    state.company_management.total = value;
  },
  SET_JOBSEEKERS(state, value) {
    state.jobseeker_management.users = value;
  },
  SET_JOBSEEKERS_TOTAL(state, value) {
    state.jobseeker_management.total = value;
  }
};