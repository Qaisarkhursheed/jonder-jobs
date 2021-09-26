<template>
  <main-layout>
    <div class="d-flex full-h justify-center align-center text-center">
      <!-- Loading spinner -->
      <v-progress-circular
        v-if="initializing"
        indeterminate
        size="150"
        color="primary"
      ></v-progress-circular>

      <!-- Errors -->
      <div v-if="error" class="text-h4">
        {{ error.text }}

        <div v-if="error.type == 'left-meeting'" class="mt-5">
          <v-btn text height="48" @click="attemptJoin">
            {{ $t("rejoin") }}
          </v-btn>
          <v-btn
            color="primary"
            height="48"
            @click="$router.push('/')"
            class="ml-3"
          >
            {{ $t("backToHome") }}
          </v-btn>
        </div>
      </div>

      <!-- Jitsi Meet container -->
      <v-card
        id="jitsi-container"
        :class="{ 'd-none': initializing || error }"
        class="full-h full-w"
        flat
      >
      </v-card>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  components: { MainLayout },

  data() {
    return {
      meeting: null,
      jitsiApi: null,
      initializing: true,
      error: null
    };
  },

  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },

  created() {
    this.$store
      .dispatch("meetings/fetchByMeetId", this.$route.params.meet_id)
      .then(r => {
        this.meeting = r.data?.meeting;
      })
      .finally(() => {
        this.attemptJoin();
      });
  },

  methods: {
    attemptJoin() {
      this.error = null;
      this.validateMeeting();
      this.initJitsi();
    },

    validateMeeting() {
      if (!this.meeting) {
        this.error = {
          type: "not-found",
          text: this.$t("meetingNotFound")
        };
        return;
      }

      if (
        this.meeting.jobseeker_id != this.user.id &&
        this.meeting.employer_id != this.user.id
      ) {
        this.error = {
          type: "not-allowed",
          text: this.$t("meetingNotAllowed")
        };
        return;
      }
    },

    initJitsi() {
      if (this.error) {
        this.initializing = false;
        return;
      }

      this.initializing = true;

      // eslint-disable-next-line no-undef
      this.jitsiApi = new JitsiMeetExternalAPI("jitsi.jonder.jobs", {
        roomName: this.meeting.meet_id,
        width: "100%",
        height: "100%",
        parentNode: document.querySelector("#jitsi-container"),
        userInfo: {
          id: this.user.id,
          displayName: this.$options.filters.fullname(this.user),
          email: this.user.email
        },
        configOverwrite: {
          defaultLanguage: this.user.locale || "de",
          toolbarButtons: [
            "camera",
            "chat",
            "closedcaptions",
            "desktop",
            "download",
            "embedmeeting",
            "etherpad",
            "feedback",
            "filmstrip",
            "fullscreen",
            "hangup",
            "help",
            // "invite",
            // "livestreaming",
            "microphone",
            // "mute-everyone",
            // "mute-video-everyone",
            "participants-pane",
            "profile",
            "raisehand",
            // "recording",
            "security",
            "select-background",
            "settings",
            "shareaudio",
            "sharedvideo",
            "shortcuts",
            "stats",
            "tileview",
            "toggle-camera",
            "videoquality",
            "__end"
          ]
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false
        },
        onload: () => {
          this.initializing = false;
        }
      });

      // Set avatar
      this.jitsiApi.executeCommand("avatarUrl", this.user.profile_img);

      // Set tile view
      this.jitsiApi.executeCommand("toggleTileView");

      // Event readyToClose
      this.jitsiApi.addEventListener("readyToClose", () => {
        this.error = {
          type: "left-meeting",
          text: this.$t("meetingLeft")
        };
        document.querySelector("#jitsi-container").innerHTML = "";
      });
    }
  }
};
</script>
