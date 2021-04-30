<template>
  <div class="mo-step-4">
    <p class="text-center">Zeig uns deine Qualifikationen..</p>

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
        class="text-center"
      >
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary">
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>

      <v-file-input
        v-model="profile"
        placeholder="Profile img"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Step4",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    document: null,
    resume: null,
    qualifications: null,
    profile: null
  }),
  created() {
    this.populateData();
  },
  methods: {
    populateData() {
      if (this.value.document && this.value.document.length > 0)
        this.document = { name: this.value.document };
      if (this.value.resume && this.value.resume.length > 0)
        this.resume = { name: this.value.resume };
      if (this.value.qualifications && this.value.qualifications.length > 0)
        this.qualifications = { name: this.value.qualifications };
      if (this.value.profile_img && this.value.profile_img.length > 0)
        this.profile = { name: this.value.profile_img };
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
    },
    profile(val) {
      this.$emit("input", {
        ...this.value,
        profile_img: val[0]
      });
    }
  }
};
</script>

<style scoped lang="scss">
.mo-step-4 {
  &__upload-btn {
    border-style: dashed;
  }

  &__btn-icon {
    position: absolute;
    left: 5px;
  }
}
</style>
