<template>
  <v-row class="mt-5">
    <v-col sm="12" md="5" lg="4" xl="3" tag="aside">
      <ProfileSidebar />
    </v-col>

    <v-col cols="col" v-if="messagesLoaded && conversations.length">
      <Chat />
    </v-col>

    <v-col
      cols="col"
      v-if="!$store.getters['chat/selectedConversation']"
      :class="{ 'mt-15': !showUpgradeBox }"
    >
      <div>
        <!-- Hello -->
        <div class="user-name">
          {{ $t("hello") }},
          <span style="color:#0253B3;">
            {{ user.first_name }} {{ user.last_name }}
          </span>
        </div>

        <!-- Messages text -->
        <div class="no-msg">
          {{
            conversations.length ? `${$t("openChat")}` : `${$t("noMessages")}`
          }}
        </div>

        <!-- Upgrade box -->
        <v-row>
          <v-col :cols="ctaBoxesWidth" v-if="showUpgradeBox" >
            <UpgradeAccountBox
              class="dashboard-upgrade-account-box"
              v-if="showUpgradeBox"
            />
          </v-col>
          <v-col :cols="ctaBoxesWidth" v-if="!user.personality_test">
            <PersonalityTestCTABox class="dashboard-upgrade-account-box" />
          </v-col>
        </v-row>

        <!-- Image -->
        <div class="mt-5">
          <v-img
            :src="require('@/assets/svg/rafiki.svg')"
            max-width="500"
          ></v-img>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UpgradeAccountBox from "@/components/user/UpgradeAccountBox";
import PersonalityTestCTABox from "@/components/personality-test/CTABox";
import Chat from "@/views/dashboard/Chat";
import ProfileSidebar from "@/components/jobseeker/ProfileSidebar";

export default {
  components: { Chat, UpgradeAccountBox, ProfileSidebar, PersonalityTestCTABox },

  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("chat", ["conversations", "messagesLoaded"]),

    showUpgradeBox() {
      return !(this.messagesLoaded && this.conversations.length);
    },

    ctaBoxesWidth() {
      return this.showUpgradeBox && !this.user.personality_test ? '6' : '12';
    }
  },

  created() {
    this.getAllConversations({ limit: 2 });
  },

  methods: {
    ...mapActions("chat", ["getAllConversations"])
  },
};
</script>
