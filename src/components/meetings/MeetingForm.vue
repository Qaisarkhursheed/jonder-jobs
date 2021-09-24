<template>
  <v-dialog
    v-model="dialog"
    width="435"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
    content-class="meeting-form"
  >
    <!-- Button -->
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on" class="d-inline meeting-form-button">
        <slot>
          <v-icon size="33" class="ml-2">
            mdi-video-plus-outline
          </v-icon>
        </slot>
      </div>
    </template>

    <v-card class="pa-7">
      <!-- Heading -->
      <h1 class="mb-4" style="font-size: 26px;">
        {{ meeting ? $t("meetingProposeDiffDate") : $t("meetingRequest") }}
      </h1>

      <v-form ref="form" action="#" @submit.prevent="submit" v-model="isValid">
        <!-- Date -->
        <v-row>
          <v-col cols="auto">
            <v-icon>
              mdi-calendar-month
            </v-icon>
          </v-col>
          <v-col cols="col">
            <DatePicker
              v-model="formData.date"
              :rules="[validations.required]"
              :min="new Date() | moment('YYYY-MM-DD')"
            />
          </v-col>
        </v-row>

        <!-- Times -->
        <v-row>
          <v-col cols="auto">
            <v-icon>
              mdi-clock
            </v-icon>
          </v-col>

          <!-- Start -->
          <v-col cols="auto">
            <TimePicker
              v-model="formData.startTime"
              :rules="[validations.required]"
              text-field-style="max-width: 150px"
            />
          </v-col>

          <v-col cols="auto" class="px-0">&dash;</v-col>

          <!-- End -->
          <v-col cols="auto">
            <TimePicker
              v-model="formData.endTime"
              :rules="[validations.required]"
              text-field-style="max-width: 150px"
            />
          </v-col>
        </v-row>

        <ResponseAlert :response="formResponse" class="mt-5"></ResponseAlert>

        <!-- Buttons -->
        <div class="text-right mt-5">
          <v-btn text height="48" @click="dialog = false">
            {{ $t("cancel") }}
          </v-btn>
          <v-btn
            type="submit"
            color="primary"
            height="48"
            class="ml-3 px-15"
            :disabled="!isValid"
            :loading="
              $store.getters['meetings/loadingCreate'] ||
                !!$store.getters['meetings/loadingUpdate']
            "
          >
            {{ $t("send") }}
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import DatePicker from "@/components/controls/DatePicker";
import TimePicker from "@/components/controls/TimePicker";

export default {
  components: { DatePicker, TimePicker },

  props: {
    jobseeker: {
      type: Object,
      required: false
    },
    meeting: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      dialog: false,
      isValid: false,
      formData: {
        startTime: "",
        endTime: "",
        date: ""
      },
      formResponse: {}
    };
  },

  watch: {
    dialog(val) {
      if (!val) {
        this.formResponse = {};

        if (this.meeting) {
          this.populateData();
        } else {
          this.$refs.form.reset();
        }
      }
    }
  },

  created() {
    this.populateData();
  },

  methods: {
    populateData() {
      if (this.meeting) {
        this.formData.startTime = this.moment(this.meeting.date_start, "HH:mm");
        this.formData.endTime = this.moment(this.meeting.date_end, "HH:mm");
        this.formData.date = this.moment(this.meeting.date_start, "YYYY-MM-DD");
      }
    },
    submit() {
      const action = this.meeting ? "changeDate" : "create";
      this.$store
        .dispatch(`meetings/${action}`, this.formatFormData())
        .then(resp => {
          this.$emit("update:meeting", resp.data.meeting);
          this.dialog = false;
        })
        .catch(err => {
          this.formResponse = err.data;
        });
    },
    formatFormData() {
      return {
        id: this.meeting?.id,
        jobseeker_id: this.jobseeker?.id,
        date_start: `${this.formData.date} ${this.formData.startTime}`,
        date_end: `${this.formData.date} ${this.formData.endTime}`
      };
    },
    moment(val, format) {
      return this.$options.filters.moment(val, format);
    }
  }
};
</script>

<style lang="scss">
.meeting-form {
  .col {
    display: flex;
    align-items: center;
  }
}
</style>
