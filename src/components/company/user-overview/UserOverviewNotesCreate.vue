<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close"
    persistent
    width="750px"
    max-width="750px"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <v-card class="pa-8">
      <p class="text-left font-weight-bold mb-3 font-size-16 header">
        {{ $t("newNote") }}
      </p>

      <v-row>
        <v-col cols="12">
          <v-textarea v-model="content" outlined> </v-textarea>
        </v-col>
      </v-row>

      <div class="text-right">
        <v-btn @click="close" height="58" color="#fff" secondary>
          {{ $t("cancel") }}
        </v-btn>
        <v-btn @click="save" color="primary" height="58" class="px-10 ml-5">
          {{ $t("save") }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean
    },
    note: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      content: ""
    };
  },

  watch: {
    active(val) {
      if (val) {
        if (this.note) {
          this.content = this.note.content;
        }
      } else {
        this.content = "";
      }
    }
  },

  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit(this.note ? "edit" : "create", this.content);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 28px;
}
</style>
