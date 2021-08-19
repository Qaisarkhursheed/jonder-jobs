<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.uploadDocuments") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <v-file-input
        v-model="cv"
        :placeholder="$t('user.onboarding.uploadCv')"
        multiple
        outlined
        color="#0253B3"
        :prepend-icon="null"
        prepend-inner-icon="mdi-cloud-upload"
        class="file-input-jonder text-center"
      >
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary">
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>

      <v-file-input
        v-model="qualifications"
        :placeholder="$t('user.onboarding.uploadQualifications')"
        multiple
        outlined
        :prepend-icon="null"
        prepend-inner-icon="mdi-cloud-upload"
        class="file-input-jonder text-center"
      >
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary">
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>

      <v-file-input
        v-model="resume"
        :placeholder="$t('user.onboarding.uploadResume')"
        multiple
        outlined
        :prepend-icon="null"
        prepend-inner-icon="mdi-cloud-upload"
        class="file-input-jonder"
      >
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary">
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>

      <v-row class="mt-0">
        <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            height="55"
            class="full-w font-weight-medium "
          >
            Back
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :disabled="!formValid"
            :loading="formLoading"
            type="submit"
            color="primary"
            height="55"
            class="full-w font-weight-medium "
          >
            {{ $t("user.onboarding.next") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Step6",

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

<style scoped lang="scss"></style>
