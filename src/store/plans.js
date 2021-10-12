import axios from "axios";

export default {
  namespaced: true,

  state: {
    userPlans: null,
    companyPlans: null
  },

  getters: {
    userPlans: state => state.userPlans,
    companyPlans: state => state.companyPlans
  },

  mutations: {
    SET_USER_PLANS(state, value) {
      state.userPlans = value;
    },
    SET_COMPANY_PLANS(state, value) {
      state.companyPlans = value;
    }
  },

  actions: {
    async fetchUserPlans({ state, commit }) {
      if (state.userPlans != null) {
        return;
      }

      try {
        const resp = await axios.get("/plan-packages", {
          params: {
            plan_type: "jobseeker_plan"
          }
        });
        commit("SET_USER_PLANS", resp.data.data);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      }
    },

    async fetchCompanyPlans({ state, commit }) {
      if (state.companyPlans != null) {
        return;
      }

      try {
        const resp = await axios.get("/plan-packages", {
          params: {
            plan_type: "employer_plan"
          }
        });
        commit("SET_COMPANY_PLANS", resp.data.data);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      }
    }
  }
};
