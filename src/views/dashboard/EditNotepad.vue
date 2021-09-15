<template>
  <v-row class="layout-content mt-4 flex-shrink-1 flex-grow-1" v-if="!loading">
    <v-col cols="12">
      <v-card class="update-note-overlay">
        <div class="pa-8">
          <v-row>
            <v-col cols="6">
              <router-link to="/dashboard" class="back-link">
                <v-icon>mdi-arrow-left</v-icon>
              </router-link>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn
                depressed
                color="primary"
                class="pl-8 pr-8"
                @click="handleUpdate"
                >{{ $t("save") }}
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field
                flat
                solo
                outlined
                v-model="notepadEditData.title"
              ></v-text-field>
              <v-textarea
                dense
                outlined
                solo
                flat
                hide-details
                background-color="white"
                v-model="notepadEditData.content"
              ></v-textarea>
            </v-col>
          </v-row>
        </div>
        <div class="overlay" v-if="saving"></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.getEditData();
  },
  data: () => ({
    loading: true,
    isCreate: false,
    saving: false,
    notepadEditData: {
      title: "",
      content: ""
    }
  }),
  computed: mapGetters("notepad", ["notepadDetails"]),
  methods: {
    ...mapActions("notepad", ["getNotepad", "updateNotepad", "createNotepad"]),
    async getEditData() {
      if (this.$route.params.id) {
        if (this.$route.params.id === "new") this.isCreate = true;
        else await this.getNotepad(this.$route.params.id);
      } else this.$router.push("/dashboard");
      this.loading = false;
    },
    resetNotepadEdit() {
      this.notepadEditData.title = this.notepadDetails.title;
      this.notepadEditData.content = this.notepadDetails.content;
    },
    async handleUpdate() {
      if (this.saving) return false;
      this.saving = true;
      if (this.isCreate) {
        await this.createNotepad(this.notepadEditData);
        this.$router.push("/dashboard");
      } else this.updateNotepad(this.notepadEditData);
      this.saving = false;
    }
  },
  watch: {
    "notepadDetails.content"(newVal, oldVal) {
      if (newVal !== oldVal) this.resetNotepadEdit();
    }
  }
};
</script>

<style lang="scss">
.back-link {
  text-decoration: none;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.6);
}
</style>
