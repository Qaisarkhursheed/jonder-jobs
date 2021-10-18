<template>
  <v-row
    v-if="chatLoading"
    class="d-flex justify-center align-center"
    style="height: calc(100vh - 100px)"
  >
    <v-progress-circular
      indeterminate
      size="150"
      color="primary"
    ></v-progress-circular>
  </v-row>

  <v-row v-else-if="isCompany && isChatEmpty">
    <v-col>
      <ChatEmpty />
    </v-col>
  </v-row>

  <v-row
    v-else
    class="chat-wrap"
    style="height: calc(100vh - 100px); min-height: 500px"
  >
    <v-col v-if="!chatFull" cols="col" class="full-h">
      <chat-asside
        class="full-h flex-grow-1 flex-shrink-1 overflow-list"
        @item-click="showProfile = false"
      />
    </v-col>

    <v-col
      cols="col"
      class="full-h"
      v-if="
        selectedConversation && conversationDetails && conversationDetails.user
      "
    >
      <ChatMessages
        v-if="!showProfile"
        @chat-full="chatFull = $event"
        @show-profile="showProfile = true"
        :messages="selectedConversation"
        :conversation-details="conversationDetails"
      />

      <PublicProfile
        v-else
        @back="showProfile = false"
        @close="
          showProfile = false;
          chatFull = false;
          $store.commit('chat/CLEAR_SINGLE_CONVERSATION');
        "
        style="overflow-y: auto"
      />
    </v-col>
  </v-row>
</template>

<script>
import ChatAsside from "@/components/chat/ChatAsside";
import ChatMessages from "@/components/chat/ChatMessages";
import PublicProfile from "@/components/chat/PublicProfile";
import ChatEmpty from "@/components/chat/ChatEmpty";
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.init();
    this.pollData();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  props: {
    isCompany: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    messages: null,
    showProfile: false,
    polling: null,
    chatFull: false,
    chatLoading: false
  }),
  methods: {
    ...mapActions("chat", [
      "getAllConversations",
      "addPlaceholderMessage",
      "getSingleConversation",
      "startChat",
      "seenMessage"
    ]),
    async init() {
      this.chatLoading = true;
      await this.getAllConversations();
      this.chatLoading = false;

      if (this.$route.params.type === "new" && this.$route.params.id) {
        this.startChat(this.$route.params.id);
      }
    },
    async pollData() {
      this.polling = setInterval(async () => {
        if (this.conversationDetails && this.conversationDetails.user_id) {
          this.getSingleConversation({ id: this.conversationDetails.id });
        }
        this.getAllConversations();
      }, 5000);
    }
  },
  computed: {
    ...mapGetters("chat", [
      "conversations",
      "selectedConversation",
      "conversationDetails"
    ]),
    isChatEmpty() {
      const selectedConversationId = this.$store.getters[
        "chat/conversationDetails"
      ].id;

      return (
        this.conversations &&
        this.conversations.filter(
          c =>
            c.conversation.last_message ||
            c.conversation.id == selectedConversationId
        ).length == 0
      );
    }
  },
  components: {
    ChatMessages,
    ChatAsside,
    PublicProfile,
    ChatEmpty
  }
};
</script>
