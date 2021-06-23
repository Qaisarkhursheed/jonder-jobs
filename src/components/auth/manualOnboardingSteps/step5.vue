<template>
  <div>
    <v-sheet class="px-12">
      <v-card
        class="d-flex align-center justify-center "
        height="70vh"
        flat
        tile
      >
        <v-sheet width="400">
          <p class="text-center font-weight-bold mb-15 text-h6">
            Zeig uns deine Qualifikationen..
          </p>

          <div class="mt-6">
            <v-file-input
              v-model="document"
              placeholder="Dokument hochladen"
              multiple
              dense
              outlined
              prepend-icon=""
              prepend-inner-icon="mdi-cloud-upload-outline"
              class="text-center"
              accept=".doc, .docx, .pdf, .jpg, .png, .txt"
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>

            <v-file-input
              v-model="qualifications"
              placeholder="Qualifikationen hochladen"
              multiple
              dense
              outlined
              prepend-icon=""
              prepend-inner-icon="mdi-cloud-upload-outline"
              class="text-center"
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>

            <v-file-input
              v-model="resume"
              placeholder="Lebenslauf hochladen"
              multiple
              dense
              outlined
              prepend-icon=""
              prepend-inner-icon="mdi-cloud-upload-outline"
              class="text-center "
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
            <v-sheet class="d-flex justify-center mt-16 pt-16">
              <v-icon @click="prevScreen" class="mr-5">
                mdi-arrow-left
              </v-icon>

              <v-sheet width="380">
                <v-btn
                  @click="nextScreen"
                  block
                  color="primary"
                  class="font-weight-medium mr-5"
                >
                  Nur noch 2 Schritte!
                </v-btn></v-sheet
              >
            </v-sheet>
          </div>
        </v-sheet>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Step5",
  props: {
    value: {
      type: Object,
      required: true
    },
    prevScreen: Function,
    nextScreen: Function
  },
  data: () => ({
    document: null,
    resume: null,
    qualifications: null,
    //profile: null
  }),
  created() {
    this.populateData(this.user);
  },
  methods: {
    populateData() {
      if (this.value.document && this.value.document.length > 0)
        this.document = { name: this.value.document };
      if (this.value.resume && this.value.resume.length > 0)
        this.resume = { name: this.value.resume };
      if (this.value.qualifications && this.value.qualifications.length > 0)
        this.qualifications = { name: this.value.qualifications };
    }
  },
  watch: {
    document(val) {
      console.log(val);
      this.$emit("input", {
        ...this.value,
        document: val[0]
      });
    },
    resume(val) {
      this.$emit("input", {
        ...this.value,
        resume: val[0]
      });
    },
    qualifications(val) {
      this.$emit("input", {
        ...this.value,
        qualifications: val[0]
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
