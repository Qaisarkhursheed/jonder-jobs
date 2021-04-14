import axios from "axios";
import router from "@/router";

export default {
  namespaced: true,

  state: {
    conversations: null,
    conversationDetails: { user_id: null, user_name: null },
    selectedConversation: null
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
    unreadMessages: () => () => []
    // unreadMessages: state => {
    //   return id => {
    //     const conversation = state.conversations.find(i => i.user_id === id);
    //     const messages = conversation ? conversation.messages : null;
    //     return messages
    //       ? messages
    //           .filter(i => i.message_seen === 0 && i.send_by === i.user_id)
    //           .map(i => i.id)
    //       : [];
    //   };
    // }
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
      state.conversationDetails.user_id = value.user_id;
      state.conversationDetails.user_name = value.user_name;
    }
  },

  actions: {
    getAllConversations({ commit }, payload = null) {
      let offset = payload && payload.offset ? payload.offset : 0;
      let limit = payload && payload.limit ? payload.limit : 10;
      return axios
        .get(`/messages/${offset}/${limit}`)
        .then(resp => {
          if (resp.data.success)
            commit("FILL_CONVERSATIONS", resp.data.conversations);
        })
        .catch(err => {
          console.error("Error getting conversations. " + err);
          commit("FILL_CONVERSATIONS", null);
        });
    },
    getSingleConversation({ commit }, payload) {
      if (!payload.offset) payload.offset = 0;
      if (!payload.limit) payload.limit = 10;
      return axios
        .get(`/messages/${payload.id}/${payload.offset}/${payload.limit}`)
        .then(resp => {
          if (resp.data.success)
            commit("FILL_SINGLE_CONVERSATION", resp.data.messages);
        })
        .catch(err => {
          console.error("Error getting conversation. " + err);
          commit("FILL_SINGLE_CONVERSATION", null);
        });
    },
    async sendMessage({ dispatch }, payload) {
      await axios
        .post("/messages", payload)
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          console.error(err);
        });
      dispatch("getSingleConversation", { id: payload.send_to });
      return new Promise(resolve => resolve(payload));
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
