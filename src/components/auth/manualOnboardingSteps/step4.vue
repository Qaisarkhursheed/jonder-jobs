<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.whatYouLookinFor") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <label class="profile-label">
        {{ $t("user.onboarding.lookingForBranche") }}
      </label>
      <v-select
        v-model="value.looking_for_branche"
        :items="positions"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-select>

      <label class="profile-label">
        {{ $t("user.onboarding.lookingForEmployement") }}
      </label>
      <v-select
        v-model="value.looking_for_employment_type"
        :items="emplType"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-select>

      <label class="profile-label">
        {{ $t("user.onboarding.whereToWork") }}
      </label>
      <v-select
        v-model="value.address_to_work"
        :items="cities"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-select>

      <label class="profile-label">
        {{ $t("user.onboarding.whenToStart") }}
      </label>
      <Calendar
        @setDate="value.ready_for_work = $event"
        :rules="[validations.required]"
      />

      <label class="profile-label">
        {{ $t("user.onboarding.monthlySalary") }}
      </label>
      <v-row>
        <v-col cols="auto">
          <div class="monthly-salary">{{ value.monthly_salary }}k</div>
        </v-col>
        <v-col cols="col" class="d-flex">
          <v-slider
            class="my-auto"
            v-model="value.monthly_salary"
            :rules="[validations.required]"
            track-color="grey"
            hide-details
            color="primary"
            always-dirty
            min="1"
            max="12"
            step="0.5"
          ></v-slider>
        </v-col>
      </v-row>

      <v-row class="mt-5">
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
import Calendar from "@/components/Calendar";

export default {
  name: "Step4",

  components: {
    Calendar
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
      formValid: false,
      positions: [
        this.$t("user.onboarding.positionDeveloper"),
        this.$t("user.onboarding.positionProjectManager"),
        this.$t("user.onboarding.positionConstructionManager"),
        this.$t("user.onboarding.positionIntern"),
        this.$t("user.onboarding.positionApprentice"),
        this.$t("user.onboarding.positionManager")
      ],
      branches: [
        this.$t("user.onboarding.branchMedicine"),
        this.$t("user.onboarding.branchAutomotive"),
        this.$t("user.onboarding.branchMechanical"),
        this.$t("user.onboarding.branchChemical"),
        this.$t("user.onboarding.branchFood"),
        this.$t("user.onboarding.branchElectrical")
      ],
      emplType: [
        this.$t("user.onboarding.trainee"),
        this.$t("user.onboarding.fulltime"),
        this.$t("user.onboarding.parttime")
      ],
      cities: ["Zenica", "Visoko"]
    };
  }
};
</script>

<style scoped lang="scss"></style>
