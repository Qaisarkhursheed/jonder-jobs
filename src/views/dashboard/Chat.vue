<template>
  <v-row v-if="chatLoading" class="full-h">
    <spinner />
  </v-row>
  <v-row v-else class="" style="height: calc(100vh - 150px)">
    <v-col v-if="!chatFull" cols="col" class="full-h">
      <chat-asside
        class="full-h flex-grow-1 flex-shrink-1 overflow-list"
        @item-click="showProfile = false"
      />
    </v-col>
    <v-col
      cols="col"
      class="full-h"
      v-if="selectedConversation && conversationDetails"
    >
      <chat-messages
        v-if="!showProfile"
        @chat-full="chatFull = $event"
        @show-profile="showProfile = true"
        :messages="selectedConversation"
        :conversation-details="conversationDetails"
      />

      <PublicProfile v-else @back="showProfile = false" />
    </v-col>
  </v-row>
</template>

<script>
import ChatAsside from "@/components/chat/ChatAsside";
import ChatMessages from "@/components/chat/ChatMessages";
import PublicProfile from "@/components/chat/PublicProfile";
import Spinner from "@/components/loaders/Spinner";
import { mapActions, mapGetters } from "vuex";
//import UserPreview from "@/components/parts/UserPreview";

export default {
  name: "Chat",
  created() {
    this.init();
    this.pollData();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  data: () => ({
    messages: null,
    showProfile: false,
    polling: null,
    chatFull: false,
    chatLoading: false,
  }),
  methods: {
    ...mapActions("chat", [
      "getAllConversations",
      "addPlaceholderMessage",
      "getSingleConversation",
      "startChat",
      "seenMessage",
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
        // this.getAllConversations();
        if (this.conversationDetails && this.conversationDetails.user_id) {
          // if (this.conversationDetails.unread_messages > 0)
          //   await this.seenMessage(this.conversationDetails.user_id);
          this.getSingleConversation({ id: this.conversationDetails.id });
        }
        this.getAllConversations();
      }, 5000);
    },
  },
  computed: mapGetters("chat", ["selectedConversation", "conversationDetails"]),
  components: {
    //UserPreview,
    ChatMessages,
    ChatAsside,
    PublicProfile,
    Spinner,
  },
};
</script>

<style lang="scss">
.chat-holder {
  overflow: hidden;
}
// .chat-container {
//   height: 800px;
// }
.overflow-list {
  overflow: auto;
}

.dashboard-holder {
  position: relative;
}

.short-message {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-row {
  border-bottom: 1px solid $light-grey;
  font-size: 14px;
  color: $dark-grey;

  &:last-child {
    border-bottom: none;
  }
}
</style>
