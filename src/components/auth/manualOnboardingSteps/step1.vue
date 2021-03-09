<template>
  <div class="mo-step-1">
    <p class="text-center">Erzahl uns etwas uber dich!</p>

    <div class="mt-6">
      <v-btn color="primary" class="full-w mt-4">
        <v-icon class="mo-step-1__btn-icon">
          mdi-linkedin
        </v-icon>
        Continue with Linkedin
      </v-btn>
      <v-btn outlined color="primary" class="full-w mt-4">
        <v-icon class="mo-step-1__btn-icon">
          mdi-xing
        </v-icon>
        Continue with Xing
      </v-btn>
      <v-btn outlined color="primary" class="full-w mt-4">
        <v-icon class="mo-step-1__btn-icon">
          mdi-cog-box
        </v-icon>
        Continue Manual
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step1"
};
</script>

<style scoped lang="scss">
.mo-step-1 {
  &__btn-icon {
    position: absolute;
    left: 5px;
  }
}
</style>
