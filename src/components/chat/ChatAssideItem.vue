<template>
  <v-list-item
    :key="`id-${conversation.id}`"
    class="py-3 px-3 px-sm-7"
    :class="{
      'v-list-item--active':
        conversation.id == $store.getters['chat/conversationDetails'].id
    }"
    @click="open"
    v-if="getParticipian(conversation)"
  >
    <v-list-item-avatar color="primary" class="text-center">
      <v-img
        v-if="getProfileImage(conversation)"
        :src="getProfileImage(conversation)"
      ></v-img>
      <span v-else class="white--text full-w text-center d-block">
        {{ getParticipian(conversation) | initials }}
      </span>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title
        v-text="getFullName(conversation)"
        style="color: #222222; font-weight: 600;"
      ></v-list-item-title>
      <v-list-item-subtitle
        v-text="getShortMessage(conversation)"
      ></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-icon class="flex-column text-right">
      <v-badge
        color="blue"
        class="ml-auto"
        :content="getUnreadCount"
        v-if="getUnreadCount > 0"
        inline
      ></v-badge>
      <div
        class="time-label"
        :title="$options.filters.moment(lastMessage, 'DD.MM.YYYY HH:mm')"
      >
        <template v-if="lastMessage">
          {{ lastMessage | moment("from", "now") }}
        </template>
      </div>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: {
    conversation: {
      type: Object,
      required: true
    }
  },
  created() {
    this.checkUrl();
  },
  computed: {
    ...mapGetters("chat", ["unreadMessages"]),
    getUnreadCount() {
      return this.conversation.unread_messages;
    },
    lastMessage() {
      return this.conversation.conversation.last_message
        ? this.conversation.conversation.last_message.updated_at
        : "";
    }
  },
  methods: {
    ...mapActions("chat", [
      "getAllConversations",
      "getSingleConversation",
      "seenMessage"
    ]),
    ...mapMutations("chat", ["SET_CONVERSATION_DETAILS"]),
    getParticipian(conversation) {
      const myId = this.$store.getters["user/user"].id;

      for (const p of conversation.conversation.participants) {
        if (p.messageable_id != myId) {
          return p.messageable;
        }
      }

      return null;
    },
    getProfileImage(conversation) {
      const img = this.getParticipian(conversation).profile_img;

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
    getFullName(conversation) {
      const p = this.getParticipian(conversation);
      return p.company || p.first_name + " " + p.last_name;
    },
    getShortMessage(conversation) {
      if (!conversation.conversation.last_message) {
        return "";
      }

      if (conversation.conversation.last_message.type == "upload") {
        return this.$t("file");
      }

      if (conversation.conversation.last_message.type == "meeting") {
        return this.$t("meeting");
      }

      return conversation.conversation.last_message
        ? conversation.conversation.last_message.body.substr(0, 50)
        : "-";
    },
    checkUrl() {
      if (
        this.$route.params.id &&
        parseInt(this.$route.params.id) === parseInt(this.conversation.user_id)
      ) {
        this.open();
        if (!this.$route.params.company) {
          this.$router.replace("/dashboard/chat");
        }
      }
    },
    async open() {
      this.$emit("loading", true);
      this.$emit("item-click");
      const p = this.getParticipian(this.conversation);

      this.SET_CONVERSATION_DETAILS({
        id: this.conversation.id,
        user_id: p.id,
        user_name: this.getFullName(this.conversation),
        unread_messages: this.conversation.unread_messages,
        profile_img: p.profile_img,
        starred: !!this.conversation.selection_managment.length,
        user: p
      });

      // if (this.getUnreadCount > 0) {
      //   await this.seenMessage(this.conversation.id);
      //   this.getAllConversations();
      // }
      await this.getSingleConversation({ id: this.conversation.id });
      this.getAllConversations();
      this.$emit("refresh", false);
      this.$emit("loading", false);
    }
  }
};
</script>

<style lang="scss">
.chat-conversations {
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(39, 170, 225, 0.3);
    z-index: 10;
  }
}
.time-label {
  font-weight: normal;
  font-size: 12px;
  color: #7a7a7a;
  text-align: center;
}
</style>
