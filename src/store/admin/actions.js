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

   cmsFetchListType({ commit }, params) {
    return axios
      .get(`/admin/lists`, { params })
      .then(res => {
        commit("SET_CMS_LIST_TYPE", {
          type: res.data.data[0].type,
          data: {
            items: res.data.data,
            meta: res.data.meta
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  },

  cmsAddListItem({ dispatch }, payload) {
    return axios
      .post("/admin/lists", payload.item)
      .then(() => {
        dispatch("cmsFetchListType", payload.params);
      })
      .catch(err => {
        console.log(err);
      });
  },

  cmsUpdateListItem({ dispatch }, payload) {
    return axios
      .patch(`/admin/lists/${payload.item.id}`, payload.item)
      .then(() => {
        dispatch("cmsFetchListType", payload.params);
      })
      .catch(err => {
        console.log(err);
      });
  },

  cmsDeleteListItem({ dispatch }, payload) {
    return axios
      .delete(`/admin/lists/${payload.item.id}`)
      .then(() => {
        dispatch("cmsFetchListType", payload.params);
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
  },

  importUsers(context, file) {
    let data = new FormData();
    data.append('csv_file', file);

    return axios
      .post("/admin/bulk-register", data);
  },

  checkDuplicateUsers({ commit }, params) {
    return axios
      .get("/admin/check-duplicates", { params })
      .then(res => {
        commit("SET_DUPLICATE_USERS", res.data.data);
        commit("SET_DUPLICATE_USERS_TOTAL", {
          current_page: res.data.current_page,
          total: res.data.total,
          per_page: res.data.per_page
        });
      })
  },

  deleteUser({ dispatch }, id) {
    return axios
      .delete(`/users/${id}`)
      .then(() => {
        dispatch('checkDuplicateUsers');
      });
  }

};