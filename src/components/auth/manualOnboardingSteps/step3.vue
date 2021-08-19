<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.detailsAboutYou") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <!-- Current position -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouPosition") }}
      </label>
      <v-autocomplete
        v-model="value.current_position"
        :items="positions"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-autocomplete>

      <!-- Branche -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouBranches") }}
      </label>
      <v-autocomplete
        v-model="value.branche"
        :items="branches"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
      ></v-autocomplete>

      <!-- Looking for role -->
      <label class="profile-label">
        {{ $t("user.onboarding.detailsAboutYouRole") }}
      </label>
      <v-autocomplete
        v-model="looking_for"
        :items="positions"
        :placeholder="$t('user.onboarding.choose')"
        :rules="[validations.required]"
        multiple
        outlined
        deletable-chips
        @change="limit()"
      ></v-autocomplete>
      <p class="info-text">You can select up to 5 positions</p>
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
            type="submit"
            color="primary"
            height="58"
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
  name: "Step3",
  props: {
    value: {
      type: Object,
      required: true,
    },
    nextScreen: Function,
  },
  data() {
    return {
      formValid: false,
      looking_for: [],
      positions: [
        this.$t("user.onboarding.positionDeveloper"),
        this.$t("user.onboarding.positionProjectManager"),
        this.$t("user.onboarding.positionConstructionManager"),
        this.$t("user.onboarding.positionIntern"),
        this.$t("user.onboarding.positionApprentice"),
        this.$t("user.onboarding.positionManager"),
      ],
      branches: [
        this.$t("user.onboarding.branchMedicine"),
        this.$t("user.onboarding.branchAutomotive"),
        this.$t("user.onboarding.branchMechanical"),
        this.$t("user.onboarding.branchChemical"),
        this.$t("user.onboarding.branchFood"),
        this.$t("user.onboarding.branchElectrical"),
      ],
    };
  },
  methods: {
    limit() {
      if (this.looking_for.length > 5) this.looking_for.pop();
    },
  },
};
</script>

<style scoped lang="scss">
.info-text {
  font-size: 12px;
  position: absolute;
  bottom: 3.5rem;
}
</style>
