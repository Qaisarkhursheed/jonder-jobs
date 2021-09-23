<template>
  <div>
    <v-row class="layout-content mt-4 flex-shrink-1 flex-grow-1" v-if="user">
      <v-col cols="cols" v-if="messagesLoaded && conversations.length">
        <Chat />
      </v-col>
      <v-col
        cols="cols"
        v-if="!$store.getters['chat/selectedConversation']"
        :class="{ 'd-flex flex-column my-auto': !showUpgradeBox }"
      >
        <!-- Hello -->
        <div class="user-name">
          {{ $t('hello') }},
          <span style="color:#0253B3;">
            {{ user.first_name }} {{ user.last_name }}
          </span>
        </div>

        <!-- Messages text -->
        <div class="no-msg">
          {{
            conversations.length
              ? `${$t("openChat")}`
              : `${$t("noMessages")}`
          }}
        </div>

        <!-- Upgrade box -->
        <UpgradeAccountBox class="dashboard-upgrade-account-box" v-if="showUpgradeBox" />

        <!-- Image -->
        <div class="mt-5">
          <v-img
            :src="require('@/assets/svg/rafiki.svg')"
            max-width="500"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UpgradeAccountBox from "@/components/user/UpgradeAccountBox";
import Chat from "@/views/dashboard/Chat";

export default {
  name: "Dashboard",
  created() {
    this.getAllConversations({ limit: 2 });
  },
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("chat", ["conversations", "messagesLoaded"]),

    showUpgradeBox() {
      return !(this.messagesLoaded && this.conversations.length);
    }
  },
  methods: {
    ...mapActions("chat", ["getAllConversations"])
  },
  components: {
    Chat,
    UpgradeAccountBox
  }
};
</script>
