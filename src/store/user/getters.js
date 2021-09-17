import { filter, findIndex } from "lodash";

export default {
  user(state) {
    if (state.user) {
      return state.user;
    }

    return null;
  },

  getUserFullName(state) {
    if (state.user) {
      return state.user.first_name + " " + state.user.last_name;
    }

    return null;
  },

  getUserInitials(state) {
    let initials = "";
    if (state.user) {
      if (state.user.first_name) initials += state.user.first_name.charAt(0);
      if (state.user.last_name) initials += state.user.last_name.charAt(0);
    }

    return initials;
  },

  isUserEmployed(state) {
    return (
      state.user && state.user.working_in && state.user.working_in.length > 0
    );
  },

  userDetails(state) {
    return state.userDetails;
  },

  userDetailsFullName(state) {
    if (state.userDetails) {
      return state.userDetails.first_name + " " + state.userDetails.last_name;
    }

    return null;
  },

  userDetailsInitials(state) {
    let initials = "";
    if (state.userDetails) {
      if (state.userDetails.first_name)
        initials += state.userDetails.first_name.charAt(0);
      if (state.userDetails.last_name)
        initials += state.userDetails.last_name.charAt(0);
    }

    return initials;
  },
  jobseekerExperience(state) {
    return state.jobseeker.experience;
  },
  jobseekerEducation(state) {
    return state.jobseeker.education;
  },
  userPlan: state => {
    let plans = [];
    if (state.user.role === "Jobseeker") {
      plans = state.user.plan;
    } else if (state.user.plan) {
      plans = [state.user.plan];
    }
    return plans;
  },
  userPlans: state => state.plans,
  isPlanActive: (state, getters) => id =>
    findIndex(getters.userPlan, plan => plan.id === id) >= 0,
  getUserPlan: (state, getters) => id =>
    filter(getters.userPlan, plan => plan.id === id),
  plans: state => type => filter(state.plans, plan => plan.plan_type === type)
};
