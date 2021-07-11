<template>
  <v-dialog class="dialog"
            v-model="active"
            @click:outside="close('abort')"
            persistent
            width="750px"
            max-width="750px">
    <v-card flat class="rounded-lg wrap onboarding-dialog">
      <p class="text-left font-weight-bold mb-3 font-size-16 header">
        {{ $t('user.onboarding.addExperience') }}
      </p>
      <v-row>
        <v-col cols="12" md="6">
          <v-row>
            <v-col>
              <label class="font-weight-medium">
                {{ $t('user.onboarding.company') }}
              </label>
              <v-text-field
                class="rounded-lg"
                style="height: 50px;"
                height="100%"
                type="text"
                outlined
                :hide-details="true"
                :placeholder="$t('user.onboarding.choose')"
                flat
                dense
                solo
                background-color="#fff"
                v-model="form.company_name">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="mt-2">
              <label>{{ $t('user.onboarding.startDate') }}</label>
              <Calendar @setDate="form.start_time = $event" 
                :value="form.start_time" />
            </v-col>
            <v-col cols="6" class="mt-2">
              <label>{{ $t('user.onboarding.endDate') }}</label>
              <Calendar  @setDate="form.end_time = $event" 
                :value="form.end_time" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col>
              <label>{{ $t('user.onboarding.position') }}</label>
              <v-select
                v-model="form.position"
                :items="positions"
                :hide-details="true"
                :label="$t('user.onboarding.choose')"
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label>{{ $t('user.onboarding.type') }}</label>
              <v-select
                v-model="form.employment_type"
                :items="emplType"
                :hide-details="true"
                :label="$t('user.onboarding.choose')"
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

        </v-col>
        <v-col cols="12">
          <label>{{ $t('user.onboarding.description') }}</label>
          <v-textarea
            v-model="form.description"
            outlined
            name="input-7-4"
            height="140px"
            :placeholder="$t('user.onboarding.enter')"
          ></v-textarea>
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
  name: 'ModalExperience',

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
    edit: {
      type: [Object, Boolean]
    }
  },
  data() {
    return {
       emplType: [
        this.$t('user.onboarding.trainee'),
        this.$t('user.onboarding.fulltime'),
        this.$t('user.onboarding.parttime')
      ],
      positions: [
        this.$t('user.onboarding.positionDeveloper'),
        this.$t('user.onboarding.positionProjectManager'),
        this.$t('user.onboarding.positionConstructionManager'),
        this.$t('user.onboarding.positionIntern'),
        this.$t('user.onboarding.positionApprentice'),
        this.$t('user.onboarding.positionManager'),
      ],
      form: {
        company_name: '',
        position: '',
        employment_type: '',
        start_time: '',
        end_time: '',
        description: '',
        working_here: 0,
      }
    };
  },
  created() {
    if (this.edit) {
      this.populate();
    }
  },
  methods: {
    close(type) {
      this.$emit('close', type);
    },
    save() {
      if (this.edit) {
        store.dispatch('user/updateJobseekerExperience', {
          id: this.edit.id,
          payload: this.form,
        });
      } else {
        store.dispatch('user/addJobseekerExperience', this.form);
      }
      this.$emit('close', 1);
    },
    populate() {
      this.form.company_name = this.edit.company_name;
      this.form.position = this.edit.position;
      this.form.employment_type = this.edit.employment_type;
      this.form.start_time = this.edit.start_time;
      this.form.end_time = this.edit.end_time;
      this.form.description = this.edit.description;
      this.form.working_here = this.edit.working_here;
    }
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