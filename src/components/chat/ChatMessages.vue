<template>
  <v-card
    flat
    class="messages-holder full-h d-flex flex-column"
    style="border-radius: 10px"
  >
    <v-card-title class="flex-grow-0 flex-shrink-0 pb-5 pt-5">
      <v-list-item class="grow">
        <v-list-item-avatar color="blue">
          <v-img
            v-if="conversationDetails.profile_img"
            :alt="`${conversationDetails.user_name} avatar`"
            :src="getProfileImage(conversationDetails)"
          ></v-img>
          <span class="white--text full-w text-center d-block" v-else>{{
            getInitials(conversationDetails)
          }}</span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            >{{ conversationDetails.user_name }}
          </v-list-item-title>
          <!--<v-list-item-subtitle>Online now</v-list-item-subtitle>-->
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="chat-icon mr-4" @click="$emit('show-profile')">
            mdi-information-outline
          </v-icon>
          <v-icon
            class="chat-icon mr-4"
            @click="
              chatFull = !chatFull;
              $emit('chat-full', chatFull);
            "
          >
            {{ !chatFull ? "mdi-arrow-expand" : "mdi-arrow-collapse" }}
          </v-icon>
          <v-icon
            class="chat-icon mr-4"
            @click="
              $store.commit('chat/FILL_SINGLE_CONVERSATION', null);
              $store.commit('chat/SET_CONVERSATION_DETAILS', {});
              $emit('chat-full', false);
            "
          >
            mdi-close
          </v-icon>
        </v-row>
      </v-list-item>
    </v-card-title>
    <div class="pl-5 pr-5 flex-grow-1 flex-shrink-1 overflow-list">
      <v-card-text
        class="messages-content pa-5 full-h flex-grow-1 flex-shrink-1 overflow-list"
        id="messageList"
      >
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="{ 'text-right': msg.is_sender }"
        >
          <v-card
            flat
            class="message rounded-lg"
            :class="[
              { 'my-message': msg.is_sender },
              [msg.is_sender ? 'rounded-tr-0' : 'rounded-tl-0']
            ]"
          >
            <v-card-text>
              <!-- Text -->
              <div
                v-if="msg.type == 'text'"
                v-text="msg.body"
                style="text-align: left; white-space: pre-wrap"
              ></div>

              <div v-if="msg.type == 'upload'">
                <!-- Image -->
                <img
                  v-if="isImage(msg)"
                  :src="getFileData(msg).url"
                  style="max-width: 100%"
                />

                <!-- Document -->
                <a v-else :href="getFileData(msg).url" target="_blank">
                  {{ getFileData(msg).name }}
                </a>
              </div>

              <!-- Time -->
              <small>{{ msg.created_at.toString() | moment("h:mm") }}</small>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </div>
    <v-card-actions class="flex-grow-0 flex-shrink-0 pa-5 message-type-new">
      <v-file-input v-model="newFile" class="pa-0" hide-input></v-file-input>

      <v-textarea
        class="rounded-lg"
        style="width: 100%"
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

      <v-icon v-if="!sending" @click="send" class="message-type-new-send"
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
    newFile: null,
    sending: false,
    chatFull: false
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
      if (!this.newMessage && !this.newFile) {
        return;
      }

      this.sending = true;
      await this.sendMessage({
        id: this.conversationDetails.id,
        file: this.newFile,
        message: this.newMessage
      })
        .then(() => {
          this.newMessage = "";
          this.newFile = null;
        })
        .finally(() => {
          this.sending = false;
        });
    },
    getInitials(conversation) {
      if (conversation.user_name.split(" ").length > 1) {
        return (
          conversation.user_name.charAt(0) +
          conversation.user_name.split(" ")[1].charAt(0)
        );
      }

      return conversation.user_name.substr(0, 2);
    },
    getProfileImage(conversation) {
      if (!conversation.profile_img) {
        return null;
      }

      const origin = new URL(process.env.VUE_APP_API_BASE).origin;
      return `${origin}/storage/avatars/${conversation.profile_img}`;
    },
    isImage(msg) {
      if (msg.type != "upload") {
        return false;
      }

      return this.getFileData(msg).path.match(/.(jpg|jpeg|png|gif)$/i);
    },
    getFileData(msg) {
      return JSON.parse(msg.body);
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
</style>
