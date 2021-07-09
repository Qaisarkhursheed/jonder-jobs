<template>
  <v-dialog class="dialog onboarding-dialog"
            v-model="active"
            @click:outside="close('abort')"
            persistent
            width="750px"
            max-width="750px">
    <v-card flat class="rounded-lg wrap">
      <p class="text-left font-weight-bold mb-3 font-size-16 header">
        {{ $t('user.onboarding.addEducation') }}
      </p>
      <v-row>
        <v-col cols="12" md="6">
          <v-row>
            <v-col>
              <label>University</label>
              <v-text-field
                class="rounded-lg mt-3"
                style="height: 50px;"
                height="100%"
                type="text"
                outlined
                flat
                dense
                solo
                background-color="#fff"
                v-model="form.university_name">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="mt-2">
              <label>Start date</label>
              <Calendar @setDate="form.start_time = $event" />
            </v-col>
            <v-col cols="6" class="mt-2">
              <label>End date</label>
              <Calendar  @setDate="form.end_time = $event" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col>
              <label>Degree, field, study</label>
              <v-text-field
                class="rounded-lg mt-3"
                style="height: 50px;"
                height="100%"
                type="text"
                outlined
                flat
                dense
                solo
                background-color="#fff"
                v-model="form.study">
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
        <v-col cols="6"></v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="6">
              <v-btn
                @click="close"
                height="58"
                class="full-w mt-16 font-weight-medium "
                color="#fff"
                light
              >
                {{ $t('general.cancel') }}
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                @click="save"
                color="primary"
                height="58"
                class="full-w mt-16 font-weight-medium "
              >
                {{ $t('general.save') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

// Move to generic global component if needed
import store from '@/store';
import Calendar from '@/components/Calendar';

export default {
  name: 'ModalEducation',

  components: {
    Calendar,
  },

  props: {
    active: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'ok'
    },
    positions: {
      type: Array,
    }
  },
  data() {
    return {
      form: {
        university_name: '',
        study: '',
        start_time: '',
        end_time: '',
        study_here: 0
      }
    };
  },
  methods: {
    close(type) {
      this.$emit('close', type);
    },
    save() {
      store.dispatch('user/addJobseekerEducation', this.form);
      this.$emit('close', 1);
    },
  }
}
</script>

<style lang="scss" scoped>
  .dialog {
    font-family: $open-sans !important;
  }
  .message {
    font-weight: 600;
    font-size: 16px;
    color: #222222;
  }
  .action-btn {
    font-weight: bold;
    font-size: 16px;
  }
  .wrap {
    padding: 30px;
    .header {
      font-size: 28px;
    }
    label {
      font-weight: 600 !important;
      color: #222 !important;
    }
  }
</style>