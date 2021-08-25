import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-extensions";
import auth from "./auth";
import user from "./user";
import stats from "./stats";
import notepad from "./notepad";
import chat from "./chat";
import company from "./company";
import teamManagement from "./teamManagement";
import invoices from "./invoices";

Vue.use(Vuex);

export default createStore(Vuex.Store, {
  modules: {
    auth,
    user,
    stats,
    notepad,
    chat,
    company,
    teamManagement,
    invoices
  }
});
