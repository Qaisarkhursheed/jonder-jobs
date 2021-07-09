import axios from "axios";

export default {
  namespaced: true,

  state: {
    user: null,
    userDetails: null,
    jobseeker: {
      experience: null,
      education: null
    }
  },

  getters: {
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
    }
  },

  mutations: {
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
    }
  },

  actions: {
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
    updateCompanyUser({ commit }, details) {
      return axios
        .post("/user", details)
        .then(resp => {
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
    addJobseekerExperience({ commit }, payload) {
      console.log('asda', payload);
      return axios
            .post("/jobseeker-experience", payload)
            .then(resp => {
              console.log('AA', resp);
              commit("SET_JOBSEEKER_EXPERIENCE", resp.data.data);
            })
            .catch(err => {
              console.error("Update user error:", err);
            });
    },
    addJobseekerEducation({ commit }, payload) {
      return axios
            .post("/jobseeker-education", payload)
            .then(resp => {
              commit("SET_JOBSEEKER_EDUCATION", resp.data.data);
            })
            .catch(err => {
              console.error("Update user error:", err);
            });
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
