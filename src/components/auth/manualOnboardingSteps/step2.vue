<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("detailsAboutYou") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <!-- Current position -->
      <label class="profile-label">
        {{ $t("detailsAboutYouPosition") }}
        <span style="color: red;">*</span>
      </label>
      <v-autocomplete
        :attach="true"
        v-model="value.current_position"
        :items="types.JOB_POSITION"
        :rules="[validations.required]"
        item-value="id"
        :item-text="$i18n.locale"
        outlined
        flat
        :placeholder="$t('detailsAboutYouPositionPlace')"
        class="mt-1"
        append-icon="mdi-chevron-down"
      ></v-autocomplete>

      <!-- Branche -->
      <label class="profile-label">
        {{ $t("detailsAboutYouBranches") }}
        <span style="color: red;">*</span>
      </label>
      <v-autocomplete
        :attach="true"
        v-model="value.branche"
        :items="types.JOB_BRANCHE"
        :rules="[validations.required, validations.max.selection(3)]"
        item-value="id"
        :item-text="$i18n.locale"
        v-clearable-autocomplete
        outlined
        flat
        multiple
        small-chips
        deletable-chips
        :placeholder="$t('detailsAboutYouBranchesPlace')"
        class="mt-1"
        append-icon="mdi-chevron-down"
      />

      <!-- Looking for role -->
      <label class="profile-label">
        {{ $t("detailsAboutYouRole") }}
        <span style="color: red;">*</span>
      </label>
      <v-autocomplete
        :attach="true"
        v-model="value.looking_for_position"
        :items="types.JOB_POSITION"
        item-value="id"
        :item-text="$i18n.locale"
        :placeholder="$t('detailsAboutYouRolePlace')"
        :rules="[validations.required, validations.max.selection(5)]"
        v-clearable-autocomplete
        multiple
        small-chips
        deletable-chips
        outlined
        flat
        class="mt-1"
        append-icon="mdi-chevron-down"
      ></v-autocomplete>

      <label class="profile-label">
        {{ $t("city") }}
        <span style="color: red;">*</span>
      </label>
      <GooglePlacesInput
        v-model="value.city"
        :rules="[validations.required]"
        :types="['(cities)']"
      />

      <v-checkbox
        class="mb-5 mt-0"
        :label="$t('locationChecbox')"
        hide-details="auto"
        v-model="value.location_show"
      ></v-checkbox>

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
            height="58"
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
import types from "@/types";
import GooglePlacesInput from "@/components/controls/GooglePlacesInput";

export default {
  name: "Step2",

  components: { GooglePlacesInput },

  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data() {
    return {
      formValid: false
    };
  },
  computed: {
    types() {
      return types;
    }
  },
  created() {
    this.$store.dispatch("professions/fetch");
  }
};
</script>

<style scoped lang="scss">
.info-text {
  font-size: 12px;
  position: absolute;
  bottom: 3.5rem;
}
</style>
