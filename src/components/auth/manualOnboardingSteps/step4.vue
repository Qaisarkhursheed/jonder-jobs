<template>
  <div class="mo-step-3">
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">
        {{ $t('user.onboarding.whatYouLookinFor') }}
      </p>

      <div class="mt-10">
        <v-row>
          <v-col cols="12" class="pb-2">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.lookingForBranche') }}
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-select
              v-model="value.looking_for_branche"
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
              {{ $t('user.onboarding.lookingForEmployement') }}
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-select
              v-model="value.looking_for_employment_type"
              :items="emplType"
              :hide-details="true"
              :label="$t('user.onboarding.choose')"
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="pb-2">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.whereToWork') }}
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-select
              v-model="value.address_to_work"
              :items="cities"
              :hide-details="true"
              :label="$t('user.onboarding.choose')"
              outlined
              flat
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="pb-2">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.whenToStart') }}
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <div style="height: 35px;">
              <Calendar @setDate="value.ready_for_work = $event" />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-6">
            <p class="text-left font-weight-bold mb-3">
              {{ $t('user.onboarding.monthlySalary') }}
            </p>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <div class="monthly-salary">
                  {{ value.monthly_salary }}k
                </div>
              </v-col>
              <v-col cols="9">
                <v-slider
                  v-model="value.monthly_salary"
                  track-color="grey"
                  color="primary"
                  always-dirty
                  min="0"
                  max="200"
                  height="30px"
                  step="1"
                ></v-slider>
              </v-col>
            </v-row>
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
import Calendar from '@/components/Calendar';

export default {
  name: "Step4",

  components: {
    Calendar,
  },

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
      ],
      emplType: [
        this.$t('user.onboarding.trainee'),
        this.$t('user.onboarding.fulltime'),
        this.$t('user.onboarding.parttime')
      ],
      cities: [
        'Zenica',
        'Visoko',
      ],
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
