<template>
  <v-list-item :key="`id-${conversation.user_id}`" @click="open">
    <v-list-item-avatar color="primary" class="text-center">
      <v-img
        v-if="conversation.profile_img"
        :alt="`${conversation.user_name} avatar`"
        :src="conversation.profile_img"
      ></v-img>
      <span class="white--text full-w text-center d-block" v-else>{{
        getInitials(conversation)
      }}</span>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="conversation.user_name"></v-list-item-title>
      <v-list-item-subtitle
        v-text="getShortMessage(conversation)"
      ></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-icon class="flex-column text-right">
      <v-badge
        color="blue"
        :content="getUnreadCount"
        v-if="getUnreadCount > 0"
        inline
      ></v-badge>
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
      return this.unreadMessages(this.conversation.user_id);
    }
  },
  methods: {
    ...mapActions("chat", [
      "getAllConversations",
      "getSingleConversation",
      "seenMessage"
    ]),
    ...mapMutations("chat", ["SET_CONVERSATION_DETAILS"]),
    getInitials(conversation) {
      return (
        conversation.user_name.charAt(0) +
        conversation.user_name.split(" ")[1].charAt(0)
      );
    },
    getShortMessage(conversation) {
      return conversation.messages && conversation.messages[0]
        ? conversation.messages[0].message.substring(0, 200)
        : "";
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
      this.SET_CONVERSATION_DETAILS(this.conversation);
      if (this.getUnreadCount > 0) {
        await this.seenMessage(this.conversation.user_id);
        this.getAllConversations();
      }
      await this.getSingleConversation({ id: this.conversation.user_id });
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
    background: rgba(255, 255, 255, 0.6);
    z-index: 10;
  }
}
</style>
