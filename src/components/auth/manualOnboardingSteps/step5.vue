<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("uploadDocuments") }}
    </p>

    <v-alert
      dense
      text
      type="success"
    > 
        {{ $t('supportedFileTypes') }}: <strong>.pdf, .png, .jpg, .jpeg</strong> (10 MB max)
    </v-alert>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <DocumentUploadSection @change="e => (cv = e)" type="Cv" />

      <DocumentUploadSection
        @change="e => (qualifications = e)"
        type="Qualifications"
      />

      <DocumentUploadSection @change="e => (resume = e)" type="Resume" />

      <v-row class="mt-0">
        <v-col cols="3">
          <v-btn @click="$emit('prevScreen')" height="55" text block>
            {{ $t("back") }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :disabled="!formValid"
            type="submit"
            color="primary"
            height="55"
            block
          >
            {{ $t("next") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import DocumentUploadSection from "@/components/DocumentUploadSection.vue";

export default {
  name: "Step5",

  components: {
    DocumentUploadSection
  },

  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function,
    formLoading: Boolean
  },
  data() {
    return {
      formValid: true,
      qualifications: null,
      resume: null,
      cv: null
    };
  },
  watch: {
    cv(val) {
      console.log(val);
      this.$emit("input", {
        ...this.value,
        cv: val[0]
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
