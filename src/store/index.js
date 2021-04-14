import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import user from "./user";
import stats from "./stats";
import notepad from "./notepad";
import chat from "./chat";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    stats,
    notepad,
    chat
  }
});
