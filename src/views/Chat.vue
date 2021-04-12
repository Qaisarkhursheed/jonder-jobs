<template>
  <dashboard-layout>
    <div class="chat-holder flex-grow-1 flex-shrink-1">
      <v-row class="mt-0 mb-0 full-h">
        <v-col cols="4" class="d-flex flex-column full-h">
          <h2
            class="text-color-primary-blue-dark mb-4 flex-shrink-0 flex-grow-0"
          >
            Nachrichten
          </h2>
          <chat-asside
            class="flex-grow-1 flex-shrink-1 overflow-list"
            @clicked="setActiveMessages"
          />
        </v-col>
        <v-col cols="8" class="full-h">
          <chat-messages v-if="messages" :messages="messages" />
        </v-col>
      </v-row>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout";
import ChatAsside from "@/components/chat/ChatAsside";
import ChatMessages from "@/components/chat/ChatMessages";

export default {
  name: "Chat",
  data: () => ({
    messages: null
  }),
  methods: {
    setActiveMessages() {
      this.messages = [
        {
          id: 1,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut.",
          time: "10:30",
          isMy: false
        },
        {
          id: 2,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut.",
          time: "10:35",
          isMy: false
        },
        {
          id: 3,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut.",
          time: "10:40",
          isMy: true
        },
        {
          id: 4,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut.",
          time: "10:40",
          isMy: true
        },
        {
          id: 5,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut.",
          time: "10:40",
          isMy: false
        },
        {
          id: 6,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut.",
          time: "10:40",
          isMy: true
        },
        {
          id: 7,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut.",
          time: "10:40",
          isMy: false
        }
      ];
    }
  },
  components: {
    ChatMessages,
    ChatAsside,
    DashboardLayout
  }
};
</script>

<style lang="scss">
.chat-holder {
  overflow: hidden;
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
