import Vue from "vue";

export default {
  SET_USER(state, value) {
    state.user = value;
  },
  SET_USER_DETAILS(state, value) {
    state.userDetails = value;
  },
  SET_JOBSEEKER_EXPERIENCE(state, value) {
    state.jobseeker.experience = value;
  },
  SET_JOBSEEKER_EDUCATION(state, value) {
    state.jobseeker.education = value;
  },
  SET_PLANS(state, value) {
    state.plans = value;
  },
  SET_USER_SUBSCRIPTION_RENEWAL(state, payload) {
    if (!payload) {
      Vue.set(state.user.plan, "renewal", 0);
    } else {
      Vue.set(state.user.plan[payload], "renewal", 0);
    }
  }
};
