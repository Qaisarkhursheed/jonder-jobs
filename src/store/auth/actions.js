/* eslint-disable no-unreachable */
import axios from "axios";
import i18n from "@/locales";

export default {
  async login({ commit }, credentials) {
    try {
      const resp = await axios.post("/login", credentials);
      const token = resp.data.token;
      const user = resp.data.user;

      if (user.locale) {
        i18n.locale = user.locale;
      }

      localStorage.setItem("user-token", token);
      commit("SET_AUTHENTICATED", true);
      commit("user/SET_USER", user, { root: true });

      return resp;
    } catch (err) {
      localStorage.removeItem("user-token");
      commit("SET_AUTHENTICATED", false);
      commit("user/SET_USER", null, { root: true });
      return Promise.reject(err.response);
    }
  },

  async register(context, data) {
    try {
      let formData = new FormData();
      Object.keys(data).forEach(key => {
        if (Array.isArray(data[key])) {
          data[key].forEach(el => {
            if (el && el !== null) formData.append(key + "[]", el);
          });
        } else {
          formData.append(key, data[key]);
        }
      });
      const resp = await axios.post("/register", formData);
      // const token = resp.data.token;
      // const user = resp.data.user;

      // localStorage.setItem("user-token", token);
      // commit("SET_AUTHENTICATED", true);
      // commit("user/SET_USER", user, { root: true });

      return resp;
    } catch (err) {
      // localStorage.removeItem("user-token");
      // commit("SET_AUTHENTICATED", false);
      // commit("user/SET_USER", null, { root: true });
      return Promise.reject(err.response);
    }
  },

  async registerCompany(context, data) {
    try {
      const resp = await axios.post("/company/register", data);
      // const token = resp.data.token;
      // const user = resp.data.user;

      // localStorage.setItem("user-token", token);
      // commit("SET_AUTHENTICATED", true);
      // commit("user/SET_USER", user, { root: true });

      return resp;
    } catch (error) {
      // localStorage.removeItem("user-token");
      // commit("SET_AUTHENTICATED", false);
      // commit("user/SET_USER", null, { root: true });
      return Promise.reject(error.response);
    }
  },

  async forgotPassword(context, data) {
    try {
      const resp = await axios.post("/password/email", data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  async resetPassword(context, data) {
    try {
      const resp = await axios.post("/password/reset", data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  async setPassword(context, data) {
    try {
      const resp = await axios.post("/set-password", data);
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  async logout({ commit }) {
    try {
      const resp = await axios.post("/logout");
      localStorage.removeItem("user-token");
      commit("SET_AUTHENTICATED", false);
      commit("user/SET_USER", null, { root: true });
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  sendVerificationEmail(context, data) {
    try {
      const resp = axios.post("/resend-by-email", { email: data });
      return resp;
    } catch (err) {
      return Promise.reject(err.response);
    }
  },

  async facebooklogin() {
    await axios.get("/login/facebook").catch(err => {
      console.log("Facebook login error:", err);
    });
  },

  async googlelogin() {
    await axios.get("/login/google").catch(err => {
      console.log("Google login error:", err);
    });
  }
};
