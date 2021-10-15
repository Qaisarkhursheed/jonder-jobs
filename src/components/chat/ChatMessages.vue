<template>
  <v-card
    flat
    class="messages-holder full-h d-flex flex-column pa-0"
    v-if="conversationDetails"
  >
    <v-card-title class="flex-grow-0 flex-shrink-0 py-5">
      <v-list-item class="grow">
        <v-list-item-avatar color="primary">
          <v-img
            v-if="conversationDetails.profile_img"
            :alt="`${conversationDetails.user_name} avatar`"
            :src="getProfileImage(conversationDetails)"
          ></v-img>
          <span v-else class="white--text full-w text-center d-block">
            {{ conversationDetails.user | initials }}
          </span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="font-weight: 600;">
            {{ conversationDetails.user_name }}
          </v-list-item-title>
          <!--<v-list-item-subtitle>Online now</v-list-item-subtitle>-->
        </v-list-item-content>

        <v-row align="center" justify="end">
          <!-- Star -->
          <v-icon
            v-if="conversationDetails.user.role == 'Jobseeker'"
            class="chat-icon mr-3"
            :color="conversationDetails.starred ? '#0253B3' : null"
            @click="handleStarIconClick"
          >
            {{ conversationDetails.starred ? "mdi-star" : "mdi-star-outline" }}
          </v-icon>

          <!-- Info -->
          <v-icon class="chat-icon mr-3" @click="$emit('show-profile')">
            mdi-information-outline
          </v-icon>

          <!-- Resize -->
          <v-icon
            class="chat-icon mr-3"
            @click="
              chatFull = !chatFull;
              $emit('chat-full', chatFull);
            "
          >
            {{ !chatFull ? "mdi-arrow-expand" : "mdi-arrow-collapse" }}
          </v-icon>

          <!-- Close -->
          <v-icon
            class="chat-icon"
            @click="
              $store.commit('chat/CLEAR_SINGLE_CONVERSATION');
              $emit('chat-full', false);
            "
          >
            mdi-close
          </v-icon>
        </v-row>
      </v-list-item>
    </v-card-title>

    <div class="px-5 flex-grow-1 flex-shrink-1 overflow-list">
      <v-card-text
        class="messages-content pa-5 full-h flex-grow-1 flex-shrink-1 overflow-list"
        id="messageList"
      >
        <div
          v-for="(msg, index) in messages"
          :key="msg.id"
          :class="{ 'text-right': msg.is_sender }"
        >
          <div
            class="day-in-chat"
            v-if="
              index === 0 ||
                msg.created_at.substr(0, 10) !=
                  messages[index - 1].created_at.substr(0, 10)
            "
          >
            <span>{{ msg.created_at | moment("ddd, DD/MM") }}</span>
          </div>

          <!-- Meeting -->
          <MeetingChatBox
            v-if="msg.type == 'meeting'"
            class="mx-auto mb-4"
            style="max-width: 360px"
            :meeting="JSON.parse(msg.body)"
            :reciever="user.role.toLowerCase()"
          />

          <v-card
            v-else
            flat
            class="message rounded-lg pa-0"
            :class="[
              { 'my-message': msg.is_sender },
              [msg.is_sender ? 'rounded-tr-0' : 'rounded-tl-0']
            ]"
          >
            <v-card-text>
              <!-- Text -->
              <div
                class="message-text"
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
              <small
                class="message-time"
                :title="
                  $options.filters.moment(msg.created_at, 'DD.MM.YYYY HH:mm')
                "
              >
                {{ msg.created_at | moment("from", "now") }}
              </small>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </div>

    <v-row no-gutters class="pa-5 message-type-new">
      <v-col cols="auto" class="d-flex align-center">
        <v-file-input
          v-model="newFile"
          class="pa-0"
          :class="{ 'file-set': newFile }"
          hide-input
        ></v-file-input>
      </v-col>

      <v-col class="d-flex align-center">
        <v-textarea
          v-model="newMessage"
          style="width: 100%; border-radius: 30px"
          :label="$t('messageNow')"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          rows="1"
          auto-grow
          @drop.prevent="handleTextareaDrop"
          >{{ $t("message") }}
        </v-textarea>
      </v-col>

      <v-col
        :cols="user.role != 'Jobseeker' ? 12 : 'auto'"
        sm="auto"
        class="d-flex align-center justify-center"
        :class="{ 'mt-3 mt-sm-0': user.role != 'Jobseeker' }"
      >
        <MeetingForm
          v-if="user.role == 'Employer'"
          :jobseeker="conversationDetails.user"
        />

        <MessageTemplatesPicker @submit="msg => send(msg)" />

        <v-btn
          color="primary"
          icon
          :loading="sending"
          width="30"
          class="ml-2"
          elevation="0"
          @click="send(null)"
        >
          <v-icon size="30" color="primary">
            mdi-send-circle
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import MessageTemplatesPicker from "@/components/company/message-templates/MessageTemplatesPicker";
import MeetingForm from "@/components/meetings/MeetingForm";
import MeetingChatBox from "@/components/meetings/MeetingChatBox";

export default {
  components: { MessageTemplatesPicker, MeetingForm, MeetingChatBox },
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
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },
  mounted() {
    this.scrollToBottom();
    console.log("this.conversationDetails", this.conversationDetails);
  },
  methods: {
    ...mapActions("chat", ["sendMessage", "getSingleConversation"]),
    ...mapActions("stats", ["updateMessageYou"]),
    scrollToBottom() {
      const messageListDiv = document.getElementById("messageList");
      // messageListDiv.scrollTop = messageListDiv.scrollHeight;

      setTimeout(() => {
        messageListDiv.scrollTo(messageListDiv.scrollLeft, 999999999);
      }, 100);
    },
    send(msg = null) {
      const textMessage = msg || this.newMessage;

      if (!textMessage && !this.newFile) {
        return;
      }

      this.sending = true;
      this.sendMessage({
        id: this.conversationDetails.id,
        file: this.newFile,
        message: textMessage
      })
        .then(() => {
          this.newMessage = "";
          this.newFile = null;

          setTimeout(this.scrollToBottom, 1000);
        })
        .finally(() => {
          this.sending = false;
        });
    },
    getProfileImage(conversation) {
      const img = conversation.profile_img;

      if (!img) {
        return null;
      }

      try {
        const url = new URL(img);
        return url.href;
      } catch (err) {
        const origin = new URL(process.env.VUE_APP_API_BASE).origin;
        return `${origin}/storage/avatars/${img}`;
      }
    },
    isImage(msg) {
      if (msg.type != "upload") {
        return false;
      }

      return this.getFileData(msg).path.match(/.(jpg|jpeg|png|gif)$/i);
    },
    getFileData(msg) {
      return JSON.parse(msg.body);
    },
    handleStarIconClick() {
      if (this.conversationDetails.starred) {
        this.$store
          .dispatch(
            "company/slManagementDeleteCandidate",
            this.conversationDetails.user_id
          )
          .then(() => {
            this.conversationDetails.starred = false;
          });
      } else {
        this.$store
          .dispatch("company/slManagementAddCandidate", {
            jobseeker_id: this.conversationDetails.user_id,
            managment_status: "Saved candidates"
          })
          .then(() => {
            this.conversationDetails.starred = true;
          });
      }
    },
    handleTextareaDrop(ev) {
      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (ev.dataTransfer.items[i].kind === "file") {
            this.newFile = ev.dataTransfer.items[i].getAsFile();
            break;
          }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          this.newFile = ev.dataTransfer.files[i];
          break;
        }
      }
    }
  },
  watch: {
    conversationDetails() {
      setTimeout(() => {
        this.scrollToBottom();
      }, 500);
    }
  }
};
</script>

<style lang="scss">
.messages-content {
  background-color: #f7f7f8 !important;
  padding: 1rem !important;

  .message {
    background-color: #ffffff;
    color: #2d3037;
    display: inline-block;
    max-width: 360px;
    margin-bottom: 16px;
  }

  .my-message {
    background-color: #0253b3 !important;

    .message-text,
    .message-time {
      color: white !important;
    }
  }

  .day-in-chat {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ededed;
    line-height: 0.1em;
    margin: 10px 0 20px;

    span {
      color: #adb5bd;
      padding: 0 10px;
      background: #f7f7f8;
    }
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

  .file-set {
    button {
      color: #0253b3;
    }
  }

  .v-icon {
    &:hover {
      color: #0253b3;
    }
  }

  .v-textarea {
    textarea {
      margin-top: 15px !important;
      margin-bottom: 10px;
    }

    .v-label {
      top: 18px !important;
    }
  }
}
</style>
