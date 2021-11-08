export default {
  SET_CMS_LISTS(state, value) {
    state.cms = {...state.cms, ...value};
  },
  SET_CMS_LIST_TYPE(state, value) {
    state.cms[value.type].meta = value.data.meta;
    state.cms[value.type].items = value.data.items;
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
  },
  SET_DUPLICATE_USERS(state, value) {
    state.duplicateUsers.items = value;
  }
};