export default {
  cmsLists(state) {
    return state.cms; 
  },
  companies(state) {
    return state.company_management.users;
  },
  companiesTotal(state) {
    return state.company_management.total;
  },
  jobseekers(state) {
    return state.jobseeker_management.users;
  },
  jobseekersTotal(state) {
    return state.jobseeker_management.total;
  }
};