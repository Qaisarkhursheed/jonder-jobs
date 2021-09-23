import axios from "axios";
import { groupBy } from "lodash";

export default {

  cmsFetchLists({ commit }) {
    return axios
      .get("/admin/lists")
      .then(res => {
        let parsed = groupBy(res.data.data, "type");
        commit("SET_CMS_LISTS", parsed);
      });
  },

   cmsFetchListType({ commit }, type) {
    return axios
      .get(`/admin/lists?type=${type}`)
      .then(res => {
        commit("SET_CMS_LIST_TYPE", {
          type: res.data.data[0].type,
          data: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  },

  cmsAddListItem({ dispatch }, payload) {
    return axios
      .post("/admin/lists", payload)
      .then(() => {
        dispatch("cmsFetchListType", payload.type);
      })
      .catch(err => {
        console.log(err);
      });
  },

  cmsUpdateListItem({ dispatch }, payload) {
    return axios
      .patch(`/admin/lists/${payload.id}`, payload)
      .then(() => {
        dispatch("cmsFetchListType", payload.type);
      })
      .catch(err => {
        console.log(err);
      });
  },

  cmsDeleteListItem({ dispatch }, payload) {
    return axios
      .delete(`/admin/lists/${payload.id}`)
      .then(() => {
        dispatch("cmsFetchListType", payload.type);
      })
      .catch(err => {
        console.log(err);
      });
  },

  fetchCompanies({ commit }, params) {
    return axios
      .get("/copmanies", { params })
      .then(res => {
        commit(`SET_COMPANIES`, res.data.data);
        commit(`SET_COMPANIES_TOTAL`, res.data.meta.total);
      })
  },

  fetchJobseekers({ commit }, params) {
    return axios
      .get("/users", { params })
      .then(res => {
        commit(`SET_JOBSEEKERS`, res.data.data);
        commit(`SET_JOBSEEKERS_TOTAL`, res.data.meta.total);
      })
  }

};