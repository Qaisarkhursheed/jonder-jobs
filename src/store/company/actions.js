import axios from "axios";

export default {
  fetchUserInteractions({ commit }) {
    return axios
      .get("/stats/company/user/interactions")
      .then(res => {
        if (res.data.success) {
          commit("SET_USER_INTERACTIONS", res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetchPeopleReach({ commit }) {
    return axios.get("/stats/company/people/reach").then(res => {
      if (res.data.success) {
        commit("SET_PEOPLE_REACH", res.data.people_reach);
      }
    });
  },
  fetchProfileViews({ commit }) {
    return axios.get("/stats/company/profile/views").then(res => {
      if (res.data.success) {
        commit("SET_PROFILE_VIEWS", res.data.profile_views);
      }
    });
  },
  fetchCompanyInteractions({ commit }) {
    return axios.get("/stats/company/interactions").then(res => {
      if (res.data.success) {
        commit("SET_COMPANY_INTERACTIONS", res.data);
      }
    });
  },
  //  management
  slManagementGetAll({ commit }) {
    return axios.get("/selection-managment").then(res => {
      if (res.data.success) {
        commit("SET_SELECTION_MANAGEMENT", res.data.data);
      }
    });
  },
  slManagementMoveCandidate({ dispatch }, payload) {
    return axios
      .patch(`/selection-managment/${payload.id}`, payload.data)
      .then(res => {
        if (res.status === 200) {
          dispatch("slManagementGetAll");
        }
      });
  },
  slManagementAddCandidate({ dispatch }, payload) {
    return axios.post("/selection-managment", payload).then(res => {
      console.log(res);
      if (res.status === 200) {
        dispatch("slManagementGetAll");
      }
    });
  },
  slManagementDeleteCandidate(context, id) {
    try {
      const resp = axios.delete(`/selection-managment/${id}`);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  // Saved search filters
  searchFilterFetchAll({ commit }) {
    return axios.get("/jobseeker-filter").then(res => {
      if (res.status === 200) {
        commit("SET_SEARCH_FILTERS", res.data.data);
      }
    });
  },
  searchFilterSave({ dispatch }, payload) {
    return axios.post("/jobseeker-filter", payload).then(res => {
      if (res.status === 200) {
        dispatch("searchFilterFetchAll");
      }
    });
  },
  searchFilterDelete({ dispatch }, id) {
    return axios.delete(`/jobseeker-filter/${id}`).then(res => {
      if (res.status === 200) {
        dispatch("searchFilterFetchAll");
      }
    });
  },
  // Jobseeker
  jobseekerNotesGetAll({ commit }, id) {
    return axios
      .get(`/jobseeker-note?per_page=10&page=1&search=&jobseeker_id=${id}`)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          commit("SET_JOBSEEKER_NOTES", res.data.data);
        }
      });
  },
  jobseekerNotesAdd({ dispatch }, payload) {
    return axios.post("/jobseeker-note/", payload).then(res => {
      if (res.status === 200) {
        dispatch("jobseekerNotesGetAll", payload.jobseeker_id);
      }
    });
  },
  async jobseekerNotesEdit({ dispatch }, payload) {
    try {
      const resp = await axios.patch(`/jobseeker-note/${payload.id}`, payload);
      dispatch("jobseekerNotesGetAll", payload.jobseeker_id);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },
  jobseekerNotesDelete({ dispatch }, payload) {
    return axios.delete(`/jobseeker-note/${payload.id}`).then(res => {
      if (res.status === 200) {
        dispatch("jobseekerNotesGetAll", payload.userId);
      }
    });
  },

  searchJobseekers({ commit }, payload) {
    let obj = {
      per_page: 6,
      page: 1,
      ...payload
    };
    commit("SET_SEARCH_INPROGRESS", true);

    return axios
      .post("/company/search/", obj)
      .then(res => {
        if (res.status === 200) {
          commit("SET_SEARCH_INPROGRESS", false);
          commit("SET_SEARCH_RESULTS", res.data.data);
          commit("SET_SEARCH_META", {
            current_page: res.data.meta.current_page,
            per_page: res.data.meta.per_page,
            total: res.data.meta.total,
            searchInput: payload
          });
        }
      })
      .catch(err => {
        if (
          JSON.parse(err.request.response).message ==
          "Upgrade your plan to use this action."
        ) {
          commit("SET_SEARCH_INPROGRESS", false);
          commit("SET_SEARCH_STATUS", "limited");
        }
      });
  },
  searchJobseekerPagination({ commit, getters }, page) {
    let obj = {
      ...getters["searchMeta"].searchInput,
      page: page,
      per_page: getters["searchMeta"].per_page
    };
    console.log(obj);
    return axios.post("/company/search/", obj).then(res => {
      if (res.status === 200) {
        commit("SET_SEARCH_INPROGRESS", false);
        commit("SET_SEARCH_RESULTS", res.data.data);
      }
    });
  },
  async presearchJobseekers(context, payload) {
    try {
      const resp = await axios.post("/company/search/?presearch=1", payload);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
};
