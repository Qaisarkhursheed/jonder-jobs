import axios from "axios";
import { serialize } from "object-to-formdata";
import i18n from "@/locales";
import { findIndex } from "lodash";

export default {
  me({ state, commit, dispatch }, force = false) {
    if (state.user && !force) {
      return new Promise(resolve => resolve(state.user));
    }

    if (
      !localStorage.getItem("user-token") &&
      !new URLSearchParams(window.location.search).get("token")
    ) {
      return;
    }

    return axios
      .get("/me")
      .then(response => {
        const user = response.data;

        if (user.locale) {
          i18n.locale = user.locale;
        }

        commit("auth/SET_AUTHENTICATED", true, { root: true });
        commit("SET_USER", user);
        dispatch("fetchPlans");
        return response.data;
      })
      .catch(() => {
        commit("auth/SET_AUTHENTICATED", false, { root: true });
        commit("SET_USER", null);
        localStorage.removeItem("user-token");
      });
  },

  async postOnboardingCompany({ commit, state }, data) {
    let formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] || data[key] == 0) {
        formData.append(key, data[key]);
      }
    });
    formData.append("_method", "PATCH");

    try {
      const resp = await axios.post(
        "/company/onboarding/" + state.user.id,
        formData
      );
      commit("SET_USER", resp.data.data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  async postOnboardingUser({ commit, state }, data) {
    console.log(data);
    //data.branche = data.branche.join();
    //data.looking_for_employment_type = data.looking_for_employment_type.join();
    console.log(data);
    let formData = serialize(data, { booleansAsIntegers: true });
    formData.append("_method", "PATCH");

    try {
      const resp = await axios.post(
        "/user/onboarding/" + state.user.id,
        formData
      );
      commit("SET_USER", resp.data.data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  getUser({ commit }, userId) {
    return axios
      .get("/users/" + userId)
      .then(resp => {
        if (resp.data) commit("SET_USER_DETAILS", resp.data);
        return resp;
      })
      .catch(err => {
        console.error("Error getting user details:", err);
      });
  },

  getAllUsers() {
    return axios.get("/users");
  },

  async updateUser({ commit, state }, data) {
    let formData = serialize(data, { booleansAsIntegers: true });
    formData.append("_method", "PATCH");

    try {
      const resp = await axios.post("/users/" + state.user.id, formData);
      commit("SET_USER", resp.data.data);
      return resp;
    } catch (error) {
      return Promise.reject(error.response);
    }
  },
  async changePassword(context, payload) {
    let formData = new FormData();
    let data = payload;
    if (data.data) data = data.data;
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        data[key].forEach(el => {
          if (el && el !== null) formData.append(key + "[]", el);
        });
      } else {
        formData.append(key, data[key]);
      }
    });
    //formData.append("_method", "PATCH");
    try {
      const resp = await axios.post("/password/change/", formData);
      //commit("SET_USER", resp.data.data);
      return resp;
    } catch (error) {
      return Promise.reject(error.response);
    }
  },
  async updateCompany({ commit, state }, payload) {
    console.log(state.user.id);
    let formData = new FormData();
    let data = payload;
    if (data.data) data = data.data;
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        data[key].forEach(el => {
          if (el && el !== null) formData.append(key + "[]", el);
        });
      } else {
        formData.append(key, data[key]);
      }
    });
    formData.append("_method", "PATCH");
    try {
      const resp = await axios.post("/copmanies/" + state.user.id, formData);
      commit("SET_USER", resp.data.data);
      return resp;
    } catch (error) {
      return Promise.reject(error.response);
    }
  },
  async updateCompanyUser({ commit, state }, payload) {
    console.log(state.user.id);
    let formData = new FormData();
    let data = payload;
    if (data.data) data = data.data;
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        data[key].forEach(el => {
          if (el && el !== null) formData.append(key + "[]", el);
        });
      } else {
        formData.append(key, data[key]);
      }
    });
    formData.append("_method", "PATCH");
    try {
      const resp = await axios.post("/users/" + state.user.id, formData);
      commit("SET_USER", resp.data.data);
      return resp;
    } catch (error) {
      return Promise.reject(error.response);
    }
  },
  searchUsers({ dispatch }, payload) {
    return axios
      .get("/search/0/10?data=" + payload)
      .then(res => {
        if (res.data.success)
          return res.data.data.map(i => transformSearchResult(i, dispatch));
        return [];
      })
      .catch(err => {
        console.error("Error getting search results: ", err);
        return [];
      });
  },

  /*
  addUserProfileView(context, payload) {
    return axios.post("stats/profile", payload).then(() => {
      "Yupiii";
    });
  },
  */
  saveCv(context, payload) {
    return axios.post("/cv_store", payload);
  },
  async addJobseekerExperience({ dispatch }, payload) {
    try {
      const resp = await axios.post("/jobseeker-experience", payload);
      dispatch("getAllJobseekerExperience");
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async getAllJobseekerExperience({ commit }) {
    try {
      const resp = await axios.get("/jobseeker-experience");
      commit("SET_JOBSEEKER_EXPERIENCE", resp.data.data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async getJobseekerExperience(context, id) {
    try {
      const resp = await axios.get(`/jobseeker-experience/${id}`);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async deleteJobseekerExperience({ dispatch }, id) {
    try {
      const resp = await axios.delete(`/jobseeker-experience/${id}`);
      dispatch("getAllJobseekerExperience");
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async updateJobseekerExperience({ dispatch }, data) {
    try {
      const resp = await axios.patch(
        `/jobseeker-experience/${data.id}`,
        data.payload
      );
      dispatch("getAllJobseekerExperience");
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async addJobseekerEducation({ dispatch }, payload) {
    try {
      const resp = await axios.post("/jobseeker-education", payload);
      dispatch("getAllJobseekerEducation");
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async getAllJobseekerEducation({ commit }) {
    try {
      const resp = await axios.get("/jobseeker-education");
      commit("SET_JOBSEEKER_EDUCATION", resp.data.data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async getJobseekerEducation(context, id) {
    try {
      const resp = await axios.get(`/jobseeker-education/${id}`);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async deleteJobseekerEducation({ dispatch }, id) {
    try {
      const resp = await axios.delete(`/jobseeker-education/${id}`);
      dispatch("getAllJobseekerEducation");
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async updateJobseekerEducation({ dispatch }, data) {
    try {
      const resp = await axios.patch(
        `/jobseeker-education/${data.id}`,
        data.payload
      );
      dispatch("getAllJobseekerEducation");
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  async fetchPlans({ state, commit }) {
    try {
      const resp = await axios.get(`/plan-packages`, {
        params: {
          per_page: 999,
          plan_type:
            state.user.role == "Jobseeker" ? "jobseeker_plan" : "employer_plan"
        }
      });
      commit("SET_PLANS", resp.data.data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  async cancelSubscription({ commit, getters }, payload) {
    console.log(payload);
    const baseURI = `/stripe/cancel/${payload}`;
    const response = await axios.post(baseURI);
    if (response.status === 200) {
      const user = getters.user;
      if (user.role === "Employer") {
        commit("SET_USER_SUBSCRIPTION_RENEWAL");
      } else {
        const index = findIndex(user.plan, plan => plan.id === payload);
        if (index >= 0) {
          commit("SET_USER_SUBSCRIPTION_RENEWAL", index);
        }
      }
    }
  },
  async setLocale({ state }, locale) {
    try {
      const resp = await axios.put("locale", { locale });
      state.user.locale = locale;
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  async removeDocument(context, payload) {
    try {
      const resp = axios.patch(`/user/reset-docs/${payload.user}`, payload.documentType);
      return resp;

    } catch (err) {
      return Promise.reject(err.response);
    }

  }
};

const transformSearchResult = (user, dispatch) => {
  dispatch("stats/updateSearchView", user.id, { root: true });
  return {
    name:
      user.role === "user"
        ? user.first_name + " " + user.last_name
        : user.company,
    id: user.id
  };
};
