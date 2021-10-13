import axios from "axios";

export default {
  namespaced: true,

  state: {
    userPlans: null,
    userPlansLoading: false,
    companyPlans: null,
    companyPlansLoading: false
  },

  getters: {
    userPlans: state => state.userPlans,
    userPlansLoading: state => state.userPlanLoading,
    companyPlans: state => state.companyPlans,
    companyPlansLoading: state => state.companyPlansLoading
  },

  mutations: {
    SET_USER_PLANS(state, value) {
      state.userPlans = value;
    },
    SET_USER_PLANS_LOADING(state, value) {
      state.userPlansLoading = value;
    },
    SET_COMPANY_PLANS(state, value) {
      state.companyPlans = value;
    },
    SET_COMPANY_PLANS_LOADING(state, value) {
      state.companyPlansLoading = value;
    }
  },

  actions: {
    async fetchUserPlans({ state, commit }) {
      if (state.userPlans != null) {
        return;
      }

      try {
        commit("SET_USER_PLANS_LOADING", true);
        const resp = await axios.get("/plan-packages", {
          params: {
            plan_type: "jobseeker_plan"
          }
        });
        commit("SET_USER_PLANS", resp.data.data);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_USER_PLANS_LOADING", false);
      }
    },

    async fetchCompanyPlans({ state, commit }) {
      if (state.companyPlans != null) {
        return;
      }

      try {
        commit("SET_COMPANY_PLANS_LOADING", true);
        const resp = await axios.get("/plan-packages", {
          params: {
            plan_type: "employer_plan"
          }
        });
        commit("SET_COMPANY_PLANS", resp.data.data);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      } finally {
        commit("SET_COMPANY_PLANS_LOADING", false);
      }
    }
  }
};
