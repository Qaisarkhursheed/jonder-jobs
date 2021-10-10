<template>
  <v-sheet class="px-12">
    <v-card class="d-flex align-center justify-center" flat tile>
      <v-sheet>
        <v-sheet class="d-flex align-center justify-center mb-16">
          <v-img class="checked" src="../../../assets/checked.svg"></v-img>
        </v-sheet>

        <p class="text-center font-weight-bold mb-7 primary--text text-h6">
          {{ $t("successMessageJobseeker") }}
        </p>
        <p class="text-center text-body-2">
          {{ $t("successMessageJobseekerSub") }}
        </p>
        <v-btn
          type="submit"
          color="primary"
          height="58"
          class="full-w font-weight-medium dark-blue"
          :to="{ name: 'JobseekerHome' }"
        >
          {{ $t("finish") }}
        </v-btn>
      </v-sheet>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  props: {
    nextScreen: Function,
    formLoading: Boolean
  },
  name: "StepSucces"
};
</script>

<style scoped>
.checked {
  max-width: 6rem;
}
</style>
