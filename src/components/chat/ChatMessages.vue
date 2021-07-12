<template>
  <v-card flat class="messages-holder full-h d-flex flex-column">
    <v-card-title class="flex-grow-0 flex-shrink-0 pb-5 pt-5">
      <v-list-item class="grow">
        <v-list-item-avatar color="blue" @click="$emit('show-profile')">
          <v-img
            v-if="conversationDetails.profile_img"
            :alt="`${conversationDetails.user_name} avatar`"
            :src="conversationDetails.profile_img"
          ></v-img>
          <span class="white--text full-w text-center d-block" v-else>{{
            getInitials(conversationDetails)
          }}</span>
        </v-list-item-avatar>

        <v-list-item-content @click="$emit('show-profile')">
          <v-list-item-title
            >{{ conversationDetails.user_name }}
          </v-list-item-title>
          <!--<v-list-item-subtitle>Online now</v-list-item-subtitle>-->
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="chat-icon mr-4">
            mdi-information-outline
          </v-icon>
          <v-icon class="chat-icon mr-4">
            mdi-arrow-expand
          </v-icon>
          <v-icon class="chat-icon mr-4">
            mdi-close
          </v-icon>
        </v-row>
      </v-list-item>
    </v-card-title>
    <div class="pl-5 pr-5">
      <v-card-text
        class="messages-content pa-5 flex-grow-1 flex-shrink-1 overflow-list"
        id="messageList"
      >
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="{ 'text-right': msg.send_by === msg.user_id }"
        >
          <v-card
            flat
            class="message rounded-lg"
            :class="[
              { 'my-message': msg.send_by === msg.user_id },
              [msg.send_by === msg.user_id ? 'rounded-tr-0' : 'rounded-tl-0']
            ]"
          >
            <v-card-text>
              <div v-text="msg.message"></div>
              <small>{{ msg.created_at.toString() | moment("h:mm") }}</small>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </div>
    <v-card-actions class="flex-grow-0 flex-shrink-0 pa-5 message-type-new">
      <v-icon class="chat-icon pl-3 pr-3"
        >mdi-paperclip
      </v-icon>
      <v-textarea
        class="rounded-lg"
        label="Type a message"
        outlined
        solo
        flat
        hide-details
        background-color="white"
        rows="3"
        auto-grow
        v-model="newMessage"
        >Message
      </v-textarea>
      <v-icon v-if="!loading" @click="send" class="message-type-new-send"
        >mdi-send-circle
      </v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    messages: {
      type: Array,
      required: true
    },
    conversationDetails: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    newMessage: "",
    loading: false
  }),
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    ...mapActions("chat", ["sendMessage", "getSingleConversation"]),
    ...mapActions("stats", ["updateMessageYou"]),
    scrollToBottom() {
      const messageListDiv = document.getElementById("messageList");
      if (messageListDiv) {
        setTimeout(() => {
          messageListDiv.scrollTop = messageListDiv.scrollHeight;
        });
      }
    },
    async send() {
      this.loading = true;
      await this.sendMessage({
        send_to: this.conversationDetails.user_id,
        message: this.newMessage
      });
      this.updateMessageYou(this.conversationDetails.user_id);
      this.newMessage = "";
      this.loading = false;
    },
    getInitials(conversation) {
      return (
        conversation.user_name.charAt(0) +
        conversation.user_name.split(" ")[1].charAt(0)
      );
    }
  },
  watch: {
    messages() {
      this.scrollToBottom();
    }
  }
};
</script>

<style lang="scss">
.messages-content {
  background-color: #eff2f4 !important;
  padding: 1rem !important;

  .message {
    display: inline-block;
    max-width: 360px;
    margin-bottom: 16px;
  }

  .my-message {
    background-color: #e3f2fb !important;
  }
}

.message-type-new {
  position: relative;
  border-radius: 62px !important;

  label {
    top: 10px !important;
  }

  fieldset {
    border-color: #d4d4d4 !important;
  }

  .message-type-new-send {
    position: absolute;
    bottom: 36px;
    right: 34px;
    width: 32px;
    height: 32px;
    font-size: 16px;
    line-height: 32px;
    background: #e3f2fb;
    border-radius: 50%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    color: $primary-blue-dark;
    cursor: pointer;
    z-index: 10;
  }
}
.chat-icon {
  cursor: pointer;
}
</style>
