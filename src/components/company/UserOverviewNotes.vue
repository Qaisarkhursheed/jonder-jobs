<template>
  <div class="user-overview-notes pl-10 pr-10 pt-7 pb-7" >
    <ModalNotesCreate 
      :active="addActive" 
      @close="addActive = false"
      @create="createNote" 
    />
    <v-row>
      <v-col cols="6" v-for="(note, i) in notes" :key="i">
        <v-card 
          class="full-h d-flex flex-column justify-space-between"
          flat
          style="border: 1px solid #E9E9E9">
          <v-card-text class="note">
            {{ note.content }}
          </v-card-text>
          <v-card-actions class="pt-5 pb-5 pl-4 pr-4">
            <v-row class="no-gutters divider pt-5">
              <v-col cols="10">
                <v-avatar
                  color="primary"
                  size="40"
                ></v-avatar>
                {{ note.author.first_name }} {{ note.author.last_name }}
              </v-col>
              <v-col cols="2" class="d-flex justify-end">
                <div class="icon-action" @click="editNote(note)">
                  <v-icon
                    size="20"
                  >
                    mdi-pencil
                  </v-icon>
                </div>
                <div class="icon-action" @click="deleteNote(note)">
                  <v-icon
                    size="20"
                  >
                    mdi-delete
                  </v-icon>
                </div>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>  
    <v-row class="justify-end">
      <v-col cols="4">
        <v-btn
          @click="addActive = !addActive"
          color="primary"
          height="58"
          class="full-w mt-16 font-weight-medium "
        >
        New note
        </v-btn>
  </v-col>
    </v-row>
  </div>
</template>

<script>

import store from '@/store';
import ModalNotesCreate from '@/components/company/UserOverviewNotesCreate';

export default {
  name: 'UserOverviewNotes',

  props: {
    user: {
      type: Object
    }
  },

  components: {
    ModalNotesCreate
  },

  data() {
    return {
      addActive: false,
    }
  },
  created() {
    store.dispatch('company/jobseekerNotesGetAll', this.user.id);
  },
  methods: {
    createNote(content) {
      store.dispatch('company/jobseekerNotesAdd', {
        content: content,
        jobseeker_id: this.user.id,
        employer_id: store.getters['user/user'].id,
      })
    },
    editNote() {},
    deleteNote(note) {
      console.log(note)
      store.dispatch('company/jobseekerNotesDelete', {
        id: note.id,
        userId: this.user.id
      });
    }
  },

  computed: {
    notes() {
      return store.getters['company/jobseekerNotes'];
    }
  }
};
</script>
<style lang="scss" scoped>
.note {
  font-weight: normal;
  font-size: 16px;
  color: #222222 !important;
}
.icon-action {
  cursor: pointer;
}
.divider {
  border-top: 1px solid #C4C4C4;
}

</style>