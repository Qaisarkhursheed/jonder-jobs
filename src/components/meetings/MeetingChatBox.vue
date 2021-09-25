<template>
  <v-card flat class="meeting-chat-box pa-5 text-left">
    <!-- Heading -->
    <h3 class="mb-2" style="font-size: 16px; font-weight: 600">
      {{ $t("meetingRequest") }}
    </h3>

    <!-- Date & Time -->
    <div
      class="mb-1"
      :style="{ opacity: meetingLocal.status == 'declined' ? 0.5 : 1 }"
    >
      <!-- Date -->
      {{ meetingLocal.date_start | moment("dddd, MMMM DD") }}

      <v-icon color="primary" size="15" style="vertical-align: -1px">
        {{ "mdi-circle-medium" }}
      </v-icon>

      {{ meetingLocal.date_start | moment("HH:mm") }}
      &dash;
      {{ meetingLocal.date_end | moment("HH:mm") }}
    </div>

    <!-- Status -->
    <div :style="{ color: status.color }" style="font-weight: 600">
      {{ status.text }}
    </div>

    <!-- Link -->
    <div v-if="meetingLocal.status == 'accepted'" class="mt-2">
      <v-icon color="primary" size="20" class="mr-2" @click="copyLink">
        {{
          copyLinkSuccess
            ? "mdi-checkbox-multiple-marked-outline"
            : "mdi-checkbox-multiple-blank-outline"
        }}
      </v-icon>
      <a
        :href="meetingLocal.link"
        target="_blank"
        rel="noopener noreferrer"
        style="font-weight: 600; text-decoration: none"
        >{{ visibleLink }}
      </a>
    </div>

    <!-- Response buttons for Jobseeker -->
    <div v-if="showResponseButtons" class="response-buttons mt-2">
      <!-- Loader -->
      <div
        v-if="$store.getters['meetings/loadingUpdate'] == meetingLocal.id"
        class="full-w text-center"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>

      <!-- Buttons -->
      <template v-else>
        <a @click.prevent="acceptMeeting" style="color: #20E070">{{
          $t("accept")
        }}</a>

        <DeclineMeetingDialog
          @decline="declineMeeting"
          @changedate="openMeetingForm"
        />

        <MeetingForm
          :meeting="meetingLocal"
          @update:meeting="meetingLocal = $event"
        >
          <a style="color: #0253b3">{{ $t("meetingProposeDiffDate") }} </a>
        </MeetingForm>
      </template>
    </div>
  </v-card>
</template>

<script>
import DeclineMeetingDialog from "@/components/meetings/DeclineMeetingDialog";
import MeetingForm from "@/components/meetings/MeetingForm";

export default {
  components: { DeclineMeetingDialog, MeetingForm },

  props: {
    reciever: {
      type: String,
      required: true
    },
    meeting: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      meetingLocal: null,
      copyLinkSuccess: false,
      declineMeetingDialog: false
    };
  },

  computed: {
    visibleLink() {
      if (this.meetingLocal.link.length > 50) {
        return this.meetingLocal.link.replace(
          "jonder-staging.plutuswork.com",
          "jonder.jobs"
        );
      }

      return this.meetingLocal.link;
    },
    status() {
      switch (this.meetingLocal.status) {
        case "pending":
          return {
            text: this.$t("meetingWaitingForResponse"),
            color: "#999999"
          };

        case "accepted":
          return {
            text: this.$t("meetingAccepted"),
            color: "#20E070"
          };

        case "declined":
          return {
            text: this.$t("meetingDeclined"),
            color: "#EE0000"
          };

        case "date_changed":
          return {
            text: `${this.$t("meetingDateChanged")} ${this.$t(
              "meetingWaitingForResponse"
            )}`,
            color: "#FFA500"
          };

        default:
          return {
            text: "-",
            color: "black"
          };
      }
    },
    showResponseButtons() {
      if (
        this.meetingLocal.status == "pending" &&
        this.reciever == "jobseeker"
      ) {
        return true;
      }

      if (this.meetingLocal.status == "date_changed") {
        if (
          this.meetingLocal.updated_by == this.meetingLocal.jobseeker_id &&
          this.reciever == "employer"
        ) {
          return true;
        }
        if (
          this.meetingLocal.updated_by == this.meetingLocal.employer_id &&
          this.reciever == "jobseeker"
        ) {
          return true;
        }
      }
      return false;
    }
  },

  watch: {
    meeting(val) {
      this.meetingLocal = val;
    }
  },

  created() {
    this.meetingLocal = this.meeting;
  },

  methods: {
    acceptMeeting() {
      this.$store
        .dispatch("meetings/accept", this.meetingLocal.id)
        .then(resp => (this.meetingLocal = resp.data.meeting));
    },
    declineMeeting() {
      this.$store
        .dispatch("meetings/decline", this.meetingLocal.id)
        .then(resp => (this.meetingLocal = resp.data.meeting));
    },
    openMeetingForm() {
      document.querySelector(".meeting-form-button").click();
    },
    copyLink() {
      navigator.clipboard.writeText(this.meetingLocal.link);
      this.copyLinkSuccess = true;
      setTimeout(() => {
        this.copyLinkSuccess = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.meeting-chat-box {
  .response-buttons {
    display: flex;
    justify-content: space-between;

    a {
      font-weight: 600 !important;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
}
</style>
