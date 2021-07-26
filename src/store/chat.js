import axios from "axios";
import router from "@/router";

export default {
  namespaced: true,

  state: {
    conversations: null,
    conversationDetails: {
      user_id: null,
      user_name: null,
      unread_messages: 0,
      profile_img: null
    },
    selectedConversation: null,
    loaded: false
  },

  getters: {
    conversations(state) {
      return state.conversations;
    },
    selectedConversation(state) {
      return state.selectedConversation
        ? state.selectedConversation.reverse()
        : null;
    },
    conversationDetails(state) {
      return state.conversationDetails;
    },
    unreadMessages: state => {
      return id => {
        const conversation = state.conversations.find(i => i.user_id === id);
        return conversation && conversation.unread_messages
          ? conversation.unread_messages
          : 0;
      };
    },
    messagesLoaded(state) {
      return state.loaded;
    }
  },

  mutations: {
    FILL_CONVERSATIONS(state, value) {
      state.conversations = value;
    },
    ADD_PLACEHOLDER_CONVERSATIONS(state, value) {
      if (!state.conversations) state.conversations = [];
      state.conversations.unshift(value);
    },
    FILL_SINGLE_CONVERSATION(state, value) {
      state.selectedConversation = value;
    },
    SET_CONVERSATION_DETAILS(state, value) {
      state.conversationDetails = value;
    },
    SET_LOADED_STATE(state, value) {
      state.loaded = value;
    }
  },

  actions: {
    getAllConversations({ commit }) {
      // let offset = payload && payload.offset ? payload.offset : 0;
      // let limit = payload && payload.limit ? payload.limit : 10;

      return axios
        .get(`/conversations`)
        .then(resp => {
          commit("SET_LOADED_STATE", true);
          commit("FILL_CONVERSATIONS", resp.data);
          console.log(resp.data);
        })
        .catch(err => {
          console.error("Error getting conversations. " + err);
          commit("FILL_CONVERSATIONS", null);
        });
    },
    getSingleConversation({ commit }, payload) {
      // if (!payload.offset) payload.offset = 0;
      // if (!payload.limit) payload.limit = 10;
      return (
        axios
          .get(`/conversations/${payload.id}`)
          // .get(`/messages/${payload.id}/${payload.offset}/${payload.limit}`)
          .then(resp => {
            commit("FILL_SINGLE_CONVERSATION", resp.data);
          })
          .catch(err => {
            console.error("Error getting conversation. " + err);
            commit("FILL_SINGLE_CONVERSATION", null);
          })
      );
    },
    async sendMessage({ dispatch }, payload) {
      try {
        const resp = await axios.post(`/conversations/${payload.id}`, payload);
        dispatch("getSingleConversation", { id: payload.id });
        dispatch("getAllConversations");
        return resp;
      } catch (err) {
        return Promise.reject(err.data);
      }
    },
    async seenMessage(context, id) {
      return axios.post("/messages/seen/" + id);
    },
    async addPlaceholderMessage({ state, commit, dispatch }, id) {
      const existingRecipient =
        state.conversations && state.conversations.find(i => i.user_id === id);
      if (existingRecipient) return;
      let user = await dispatch("user/getUser", id, { root: true });
      if (!user) router.push("/dashboard/chat");
      user = user.data;

      let newRecipient = {
        user_name: user.first_name + " " + user.last_name,
        user_id: user.id,
        messages: []
      };
      commit("ADD_PLACEHOLDER_CONVERSATIONS", newRecipient);
    }
  }
};
