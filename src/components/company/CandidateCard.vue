<template>
  <v-card flat
          class="candidate-card rounded-lg"
          :class="`${type}-border`">

    <div class="main-content pa-6 pb-5" @click="$router.push({name: 'CompanyUser', params: {id: candidate.id}})">
      <v-card-text class="d-flex pa-0">
        <v-img
          :lazy-src="require('@/assets/candidate.png')"
          height="70px"
          width="70px"
          max-width="70px"
          :src="require('@/assets/candidate.png')"
          class="image">
        </v-img>
        <div class="pl-4">
          <div class="name font-weight-bold pb-1">
            {{candidate.first_name}} {{candidate.last_name}}
          </div>
          <div class="job pb-1">
            <v-icon size="18px"
                    color="#C4C6C9">
              mdi-briefcase-outline
            </v-icon>
            <span class="text-color-primary-blue-dark">
              {{candidate.branche}}
            </span>
          </div>
          <div class="location">
            <v-icon size="18px"
                    color="#C4C6C9">
              mdi-map-marker-outline
            </v-icon>
            {{candidate.address_to_work}}
          </div>
        </div>
      </v-card-text>
    </div>
    <v-card-actions class="note-actions d-flex flex-column align-end justify-end pa-0 pr-4 mb-4 text-color-primary-blue-dark">
      <span class="note-btn pb-2" @click="toggleNoting">
        <v-icon class="text-color-primary-blue-dark">mdi-pencil-outline</v-icon>
        <span>Hinweis</span>
      </span>
      <span class="note-input pl-4" v-if="notingActive">
        <v-textarea
          no-resize
          height="60px"
          :hide-details="true"
          style="font-size: 12px; border-radius: 10px;"
          outlined
          name="input-7-4"
          placeholder= "Add note ..."
          v-model="note"
        ></v-textarea>
        <v-btn @click="saveNote"
               text
               class="save-btn mt-2"
               color="white">
          Save
        </v-btn>
      </span>
      <div class="notes-list align-self-start pl-4 pt-4">
        <!-- <span v-for="(note, i ) in notes" :key="i"> -->
        <span>
          {{notes.content}}
        </span>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'CandidateCard',

  props: {
    candidate: {
      type: Object
    },
    type: {
      type: String,
    }
  },

  data() {
    return {
      notingActive: false,
      note: '',
      notes: ''
    }
  },

  created() {
    this.fetchNotes();
  },
  methods: {
    ...mapActions('company', ['addUserNote', 'fetchUserNotes']),
    toggleNoting() {
      this.notingActive = !this.notingActive;
    },
    saveNote() {
      this.addUserNote({
        title: 'note',
        content: this.note,
        user_for: this.candidate.id
      }).then((res)=> {
        if(res.data.success) {
          this.note = '';
          this.notes = res.data.note;
        }
      })
    },
    fetchNotes() {
      this.fetchUserNotes(this.candidate.id)
        .then(res => {
          if(res.data.success) {
            this.note = '';
            this.notes = res.data.notepad;
          }
        })
    }
  },
};

</script>

<style lang="scss" scoped>
  .candidate-card {
    font-family: $open-sans;
  }
  .main-content {
    cursor: pointer;
  }
  .name {
    font-size: 18px;
    color: #3E3E47;
  }
  .job, .location {
    font-size: 14px;
  }
  .image {
    border-radius: 50%;
  }
  .negotiation-border {
    border: 1px solid $status-negotiation;
  }
  .request-border {
    border: 1px solid $status-request;
  }
  .call-border {
    border: 1px solid $status-call;
  }
  .note-actions {
    span{
      &:nth-child(1) {}
     }
  }
  .note-input {
    width: 100%;
  }
  .note-btn {
    cursor: pointer;

    &:hover{ 
      opacity: 0.7;
    }
  }
  .notes-list {
    span {
      display: block;
      font-size: 12px;
      color: #9EA0A5;
    }
  }
  .save-btn {
    height: 22px !important;
    min-width: 54px !important;
    width: 54px !important;
    background: rgb(103, 164, 255);
    font-size: 12px;
  }
</style>