<template>
  <!-- <div class="chat-holder flex-grow-1 flex-shrink-1 mt-4 full-h">
    <v-row class="mt-0 mb-0 full-h">
      <v-col cols="4" class="d-flex flex-column full-h">
        <h2 class="text-color-primary-blue-dark mb-4 flex-shrink-0 flex-grow-0">
          Nachrichten
        </h2>
        <chat-asside class="flex-grow-1 flex-shrink-1 overflow-list" />
      </v-col>
      <v-col cols="8" class="full-h">
        <chat-messages
          v-if="selectedConversation && conversationDetails"
          :messages="selectedConversation"
          :conversation-details="conversationDetails"
        />
      </v-col>
    </v-row>
    <user-preview
      v-if="showProfile"
      :user-id="conversationDetails.user_id"
      @hide-profile="showProfile = false"
    />
  </div> -->
  <div class="chat-container">
    <v-row class="full-h">
      <v-col v-if="!chatFull" cols="5" class="full-h">
        <chat-asside class="full-h flex-grow-1 flex-shrink-1 overflow-list" />
      </v-col>
      <v-col cols="col" class="full-h">
        <chat-messages
          @chat-full="chatFull = $event"
          v-if="selectedConversation && conversationDetails"
          :messages="selectedConversation"
          :conversation-details="conversationDetails"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ChatAsside from "@/components/chat/ChatAsside";
import ChatMessages from "@/components/chat/ChatMessages";
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
    showProfile: null,
    polling: null,
    chatFull: false
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
      await this.getAllConversations();

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
      }, 30000);
    }
  },
  computed: mapGetters("chat", ["selectedConversation", "conversationDetails"]),
  components: {
    //UserPreview,
    ChatMessages,
    ChatAsside
  }
};
</script>

<style lang="scss">
.chat-holder {
  overflow: hidden;
}
.chat-container {
  height: 800px;
}
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
