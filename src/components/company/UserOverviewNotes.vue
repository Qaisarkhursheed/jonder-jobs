<template>
  <div class="user-overview-notes pl-10 pr-10 pt-7 pb-7">
    <ModalNotesCreate
      :active="modalActive"
      @close="modalActive = false"
      @create="createNote"
      @edit="editNote"
      :note="selectedNote"
    />
    <v-row>
      <v-col cols="12" md="6" v-for="(note, i) in notes" :key="i">
        <v-card
          class="full-h d-flex flex-column justify-space-between"
          flat
          style="border: 1px solid #E9E9E9; border-radius: 10px"
        >
          <v-card-text class="note">
            {{ note.content }}
          </v-card-text>
          <v-card-actions class="pb-5 pl-4 pr-4">
            <v-row class="no-gutters divider pt-4">
              <v-col cols="auto" class="mr-2">
                <v-avatar color="primary" size="40"></v-avatar>
              </v-col>
              <v-col cols="cols" class="my-auto">
                {{ note.author.first_name }} {{ note.author.last_name }}
              </v-col>
              <v-col cols="auto" class="d-flex justify-end my-auto ml-1">
                <div
                  class="icon-action"
                  @click="
                    selectedNote = note;
                    modalActive = true;
                  "
                >
                  <v-icon size="25">
                    mdi-pencil
                  </v-icon>
                </div>
                <div class="icon-action" @click="deleteNote(note)">
                  <v-icon size="25">
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
          @click="
            selectedNote = null;
            modalActive = !modalActive;
          "
          color="primary"
          height="58"
          class="full-w mt-16 font-weight-medium dark-blue"
        >
          {{ $t("newNote") }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ModalNotesCreate from "@/components/company/UserOverviewNotesCreate";

export default {
  components: { ModalNotesCreate },

  props: {
    user: {
      type: Object
    }
  },

  data() {
    return {
      modalActive: false,
      selectedNote: null
    };
  },

  computed: {
    notes() {
      return this.$store.getters["company/jobseekerNotes"];
    }
  },

  created() {
    this.$store.dispatch("company/jobseekerNotesGetAll", this.user.id);
  },

  methods: {
    createNote(content) {
      this.$store
        .dispatch("company/jobseekerNotesAdd", {
          content: content,
          jobseeker_id: this.user.id,
          employer_id: this.$store.getters["user/user"].id
        })
        .then(() => {
          this.modalActive = false;
        });
    },
    editNote(content) {
      this.$store
        .dispatch("company/jobseekerNotesEdit", {
          id: this.selectedNote.id,
          jobseeker_id: this.user.id,
          content
        })
        .then(() => {
          this.modalActive = false;
        });
    },
    deleteNote(note) {
      this.$store.dispatch("company/jobseekerNotesDelete", {
        id: note.id,
        userId: this.user.id
      });
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
  border-top: 1px solid #c4c4c4;
}
</style>
