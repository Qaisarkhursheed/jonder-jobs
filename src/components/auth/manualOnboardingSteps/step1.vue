<template>
  <div class="mo-step-1">
    <v-container>
      <v-sheet class="pa-12 ">
        <v-card
          class="d-flex align-center justify-center mb-6"
          flat
          tile
        >
          <v-sheet width="330">
            <p class="text-center font-weight-bold text-h6">
              {{ $t('user.onboarding.location') }}
            </p>
            <v-text-field
              dense
              type="text"
              :placeholder="$t('user.onboarding.locationPlaceholder')"
              outlined
              background-color="white"
              :rules="rules"
              v-model="value.city"
            ></v-text-field>
            <v-btn
              @click="nextScreen"
              color="primary"
              height="55"
              class="full-w mt-16 font-weight-medium "
            >
              {{ $t('user.onboarding.next') }}
            </v-btn>
          </v-sheet>
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Step1",
  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data: () => ({
    rules: [value => !!value || "Required."]
  })
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
