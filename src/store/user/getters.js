import filter from "lodash/filter";

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
    const plan1 = {
      id: 11,
      name: "Your account is higlighted in company search",
      price: 35,
      days_valid: 14,
      plan_slug: "higlighted",
      created_at: null,
      updated_at: "2021-08-29T12:56:07.000000Z",
      plan_description:
        "Highlights you in the Company-Search by visually highlighting your Search-Profile for 14 Days.",
      plan_type: "jobseeker_paln",
      plan_img: null,
      stripe_id: "price_1JS6laKKMFZvcsxufbEtXEs2",
      benefits: null,
      start_timestamp: "2021-09-16T13:17:45.000000Z",
      end_timestamp: "2021-09-30 15:17:45"
    };
    return state.user?.plan ? [plan1,state.user?.plan] : [];
  },
  userPlans: state => state.plans,
  plans: state => type => filter(state.plans, plan => plan.plan_type === type)
};
