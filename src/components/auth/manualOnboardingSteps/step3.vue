<template>
  <div class="mo-step-3">
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">
        {{ $t('user.onboarding.detailsAboutYou') }}
      </p>

      <div class="mt-10">
        <v-row>
          <v-col cols="12" class="pb-2">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.detailsAboutYouPosition') }}
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-select
              v-model="value.current_position"
              :items="positions"
              :hide-details="true"
              :label="$t('user.onboarding.choose')"
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="pb-2">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.detailsAboutYouBranches') }}
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-select
              v-model="value.branche"
              :items="branches"
              :hide-details="true"
              :label="$t('user.onboarding.choose')"
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="p2-0">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.detailsAboutYouRole') }}
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-select
              v-model="value.looking_for"
              :items="positions"
              :hide-details="true"
              :label="$t('user.onboarding.choose')"
              multiple
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <v-btn
        @click="nextScreen"
        color="primary"
        height="58"
        class="full-w mt-16 font-weight-medium "
      >
        {{ $t('user.onboarding.next') }}
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Step3",
  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data() {
    return {
      rules: [value => !!value || "Required."],
      positions: [
        this.$t('user.onboarding.positionDeveloper'),
        this.$t('user.onboarding.positionProjectManager'),
        this.$t('user.onboarding.positionConstructionManager'),
        this.$t('user.onboarding.positionIntern'),
        this.$t('user.onboarding.positionApprentice'),
        this.$t('user.onboarding.positionManager'),
      ],
      branches: [
         this.$t('user.onboarding.branchMedicine'),
         this.$t('user.onboarding.branchAutomotive'),
         this.$t('user.onboarding.branchMechanical'),
         this.$t('user.onboarding.branchChemical'),
         this.$t('user.onboarding.branchFood'),
         this.$t('user.onboarding.branchElectrical'),
      ]
    };
  },
};
</script>

<style scoped lang="scss">
.mo-step-3 {
  &__salary {
    border: solid 1px $primary-blue;
    border-radius: 4px;
    color: $primary-blue;
  }
}
</style>
