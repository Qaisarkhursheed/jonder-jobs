<template>
  <v-card class="chat-conversations" flat>
    <v-card-title class="chat-conversations-title pl-7 pr-7">
      Messages
    </v-card-title>
    <v-divider></v-divider>
    <v-list subheader class="pb-0">
      <v-list-item-group color="primary">
        <template v-for="(conversation, index) in conversations">
          <chat-asside-item
            v-if="showConversation(conversation)"
            :key="conversation.id"
            :conversation="conversation"
            @loading="loading = $event"
            @reload="refreshConversations"
            @item-click="$emit('item-click')"
          />
          <v-divider
            v-if="
              index < conversations.length - 1 && showConversation(conversation)
            "
            :key="conversation.id"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <div class="overlay" v-if="loading"></div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import ChatAssideItem from "@/components/chat/ChatAssideItem";

export default {
  components: { ChatAssideItem },
  data: () => ({
    loading: false
  }),
  computed: mapGetters("chat", ["conversations"]),
  methods: {
    refreshConversations() {
      this.$store.dispatch("chat/getAllConversations");
    },

    showConversation(conversation) {
      const selectedConversationId = this.$store.getters[
        "chat/conversationDetails"
      ].id;

      return (
        conversation.id == selectedConversationId ||
        (conversation.ids.length && conversation.conversation.last_message)
      );
    }
  }
};
</script>

<style lang="scss">
.chat-conversations {
  position: relative;
  border-radius: 10px !important;
  height: 500px;

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
.chat-conversations-title {
  color: #222;
  font-weight: bold;
}
</style>
