import axios from "axios";

export default {
  me({ state, commit }) {
    if (state.user) {
      return new Promise(resolve => resolve(state.user));
    }

    return axios
      .get("/me")
      .then(response => {
        commit("SET_USER", response.data);
        return response.data;
      })
      .catch(() => {
        commit("SET_USER", null);
        localStorage.removeItem("user-token");
        localStorage.removeItem("user");
      });
  },

  postOnboardingCompany({ commit }, data) {
    return axios
      .post("/company/onboarding", data)
      .then(resp => {
        if (resp.data.success && resp.data.user) {
          commit("SET_USER", resp.data.user);
        }
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },

  async postOnboardingUser({ commit, state }, data) {
    let formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    formData.append("_method", "PATCH");
    formData.delete('looking_for');
    data.looking_for.forEach((key, i) => {
      formData.append(`looking_for[${i}]`, key);
    })
    try {
      const resp = await axios.post(
        "/user/onboarding/" + state.user.id,
        formData
      );
      commit("SET_USER", resp.data.user);
      return resp;
    } catch (error) {
      return Promise.reject(error);
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
    let formData = new FormData();
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        data[key].forEach(el => formData.append(key + "[]", el));
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
  updateCompanyUser({ commit }, payload) {
    let formData = new FormData();
    Object.keys(payload.data).forEach(key => {
      if (Array.isArray(payload.data[key])) {
        payload.data[key].forEach(el => formData.append(key + "[]", el));
      } else {
        formData.append(key, payload.data[key]);
      }
    });
    return axios
      .post(`/copmanies/${payload.id}`, formData)
      .then(resp => {
        console.log(resp);
        if (resp.data.success && resp.data.user) {
          commit("SET_USER", resp.data.user);
        }
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
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

  addUserProfileView(context, payload) {
    return axios.post("stats/profile", payload).then(() => {
      "Yupiii";
    });
  },
  saveCv(context, payload) {
    return axios.post("/cv_store", payload);
  },
  addJobseekerExperience({ dispatch }, payload) {
    return axios
      .post("/jobseeker-experience", payload)
      .then(() => {
        dispatch('getAllJobseekerExperience');
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  getAllJobseekerExperience({ commit }) {
    return axios
      .get("/jobseeker-experience")
      .then(resp => {
        commit("SET_JOBSEEKER_EXPERIENCE", resp.data.data);
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  getJobseekerExperience({ commit }, id) {
    return axios
      .get(`/jobseeker-experience/${id}`)
      .then(resp => {
        commit("SET_JOBSEEKER_EXPERIENCE", resp.data.data);
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  deleteJobseekerExperience({ dispatch }, id) {
    return axios
      .delete(`/jobseeker-experience/${id}`)
      .then(() => {
        dispatch('getAllJobseekerExperience');
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  updateJobseekerExperience({ dispatch }, data) {
    return axios
      .patch(`/jobseeker-experience/${data.id}`, data.payload)
      .then(() => {
        dispatch('getAllJobseekerExperience');
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  addJobseekerEducation({ dispatch }, payload) {
    return axios
      .post("/jobseeker-education", payload)
      .then(() => {
        dispatch('getAllJobseekerEducation');
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  getAllJobseekerEducation({ commit }) {
    return axios
      .get("/jobseeker-education")
      .then(resp => {
        commit("SET_JOBSEEKER_EDUCATION", resp.data.data);
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  getJobseekerEducation({ commit }, id) {
    return axios
      .get(`/jobseeker-education/${id}`)
      .then(resp => {
        commit("SET_JOBSEEKER_EDUCATION", resp.data.data);
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  deleteJobseekerEducation({ dispatch }, id) {
    return axios
      .delete(`/jobseeker-education/${id}`)
      .then(() => {
        dispatch('getAllJobseekerEducation');
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
  updateJobseekerEducation({ dispatch }, data) {
    return axios
      .patch(`/jobseeker-education/${data.id}`, data.payload)
      .then(() => {
        dispatch('getAllJobseekerEducation');
      })
      .catch(err => {
        console.error("Update user error:", err);
      });
  },
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
