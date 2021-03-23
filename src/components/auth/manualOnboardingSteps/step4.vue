<template>
  <div class="mo-step-4">
    <p class="text-center">Zeig uns deine Qualifikationen..</p>

    <div class="mt-6">
      <v-btn outlined color="primary" class="full-w mt-4 mo-step-4__upload-btn">
        <v-icon class="mo-step-4__btn-icon">
          mdi-cloud-upload-outline
        </v-icon>
        Dokument hochladen
      </v-btn>
      <v-btn outlined color="primary" class="full-w mt-4 mo-step-4__upload-btn">
        <v-icon class="mo-step-4__btn-icon">
          mdi-cloud-upload-outline
        </v-icon>
        Qualifikationen hochladen
      </v-btn>
      <v-btn outlined color="primary" class="full-w mt-4 mo-step-4__upload-btn">
        <v-icon class="mo-step-4__btn-icon">
          mdi-cloud-upload-outline
        </v-icon>
        Lebenslauf hochladen
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step4"
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
