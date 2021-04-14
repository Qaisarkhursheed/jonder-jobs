<template>
  <v-card class="update-note-overlay" v-if="notepadDetails">
    <div class="pa-8">
      <v-row>
        <v-col cols="6">
          <router-link to="/dashboard">
            <v-icon>mdi-arrow-left</v-icon>
          </router-link>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn
            depressed
            color="primary"
            class="pl-8 pr-8"
            @click="handleUpdate"
            >Save
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
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    if (this.$route.params.id) this.getNotepad(this.$route.params.id);
    else this.$router.push("/dashboard");
  },
  data: () => ({
    notepadEditData: {
      title: "",
      content: ""
    }
  }),
  computed: mapGetters("notepad", ["notepadDetails"]),
  methods: {
    ...mapActions("notepad", ["getNotepad", "updateNotepad"]),
    resetNotepadEdit() {
      this.notepadEditData.title = this.notepadDetails.title;
      this.notepadEditData.content = this.notepadDetails.content;
    },
    handleUpdate() {
      console.log("Update note");
      this.updateNotepad(this.notepadEditData);
    }
  },
  watch: {
    "notepadDetails.content"(newVal, oldVal) {
      if (newVal !== oldVal) this.resetNotepadEdit();
    }
  }
};
</script>

<style lang="scss"></style>
