<template>
  <v-card flat class="messages-holder full-h d-flex flex-column">
    <v-card-title class="flex-grow-0 flex-shrink-0 pb-2">
      <v-list-item class="grow">
        <v-list-item-avatar>
          <v-img :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jason Oner</v-list-item-title>
          <v-list-item-subtitle>Online now</v-list-item-subtitle>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1">
            mdi-video-outline
          </v-icon>
          <v-icon class="mr-1">
            mdi-phone-outline
          </v-icon>
        </v-row>
      </v-list-item>
    </v-card-title>
    <v-card-text
      class="messages-content pa-5 flex-grow-1 flex-shrink-1 overflow-list"
      id="messageList"
    >
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="{ 'text-right': msg.isMy }"
      >
        <v-card
          flat
          class="message rounded-lg"
          :class="[
            { 'my-message': msg.isMy },
            [msg.isMy ? 'rounded-tr-0' : 'rounded-tl-0']
          ]"
        >
          <v-card-text>
            <div v-text="msg.content"></div>
            <div><small v-text="msg.time"></small></div>
          </v-card-text>
        </v-card>
      </div>
    </v-card-text>
    <v-card-actions class="flex-grow-0 flex-shrink-0 pa-5 message-type-new">
      <v-textarea
        class="rounded-lg"
        dense
        label="Type a message"
        outlined
        solo
        flat
        hide-details
        background-color="white"
        rows="3"
        auto-grow
        >Message</v-textarea
      >
      <v-icon class="message-type-new-send">mdi-send-outline</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      const messageListDiv = document.getElementById("messageList");
      messageListDiv.scrollTop = messageListDiv.scrollHeight;
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
    transform: rotate(-45deg);
    color: $primary-blue-dark;
    cursor: pointer;
    z-index: 10;
  }
}
</style>
