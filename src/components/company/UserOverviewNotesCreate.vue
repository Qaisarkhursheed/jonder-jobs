<template>
  <v-dialog class="dialog"
            v-model="active"
            @click:outside="close"
            persistent
            width="750px"
            max-width="750px">
    <v-card flat class="rounded-lg wrap onboarding-dialog pa-8">
      <p class="text-left font-weight-bold mb-3 font-size-16 header">
        Create Note
      </p>
      <v-row>
        <v-col cols="12">
          <v-textarea 
            v-model="content"
            height="200px"
            outlined
            no-resize
          >

          </v-textarea>
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
                class="full-w white mt-16 font-weight-medium "
                color="#fff"
                light
                elevation="0"
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

// import store from '@/store'

export default {

  name: 'UserOverviewNotesCreate',

  props: {
    active: {
      type: Boolean
    }
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    save() {
      this.$emit('create', this.content);
    }
  }

};
</script>

<style lang="scss" scoped>
.header {
  font-size: 28px;
}
</style>