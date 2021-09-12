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
        v-model="value.current_position"
        :items="$store.getters['professions/items']"
        :rules="[validations.required]"
        outlined
        flat
        hide-no-data
        :placeholder="$t('detailsAboutYouPositionPlace')"
        class="mt-1"
      >
      </v-autocomplete>

      <!-- Branche -->
      <label class="profile-label">
        {{ $t("detailsAboutYouBranches") }}
        <span style="color: red;">*</span>
      </label>
      <v-autocomplete
        v-model="value.branche"
        :items="types.JOB_BRANCHE"
        :rules="[validations.required, validations.max.selection(3)]"
        v-clearable-autocomplete
        outlined
        flat
        hide-no-data
        multiple
        :placeholder="$t('detailsAboutYouBranchesPlace')"
        class="mt-1"
      >
        <template v-slot:selection="{ item }"> {{ $t(item) }}, </template>
        <template v-slot:item="{ item }">
          <v-list-item-action>
            <v-simple-checkbox
              v-ripple="false"
              @input="toggleValues($event, item)"
              :value="searchForValue(item)"
            >
            </v-simple-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t(item) }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>

      <!-- Looking for role -->
      <label class="profile-label">
        {{ $t("detailsAboutYouRole") }}
        <span style="color: red;">*</span>
      </label>
      <v-autocomplete
        v-model="value.looking_for"
        :items="$store.getters['professions/items']"
        :placeholder="$t('detailsAboutYouRolePlace')"
        :rules="[validations.required, validations.max.selection(5)]"
        v-clearable-autocomplete
        multiple
        outlined
        flat
        hide-no-data
        class="mt-1"
      >
      </v-autocomplete>

      <label class="profile-label">
        {{ $t("location") }}
        <span style="color: red;">*</span>
      </label>
      <GooglePlacesAutocomplete
        @select="e => (value.city = e)"
        :required="true"
        class="mt-1"
      />

      <v-checkbox
        class="mb-5 mt-0"
        :label="$t('locationChecbox')"
        hide-details="auto"
        v-model="value.location_show"
      ></v-checkbox>

      <v-row class="mt-0">
        <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            height="55"
            class="full-w font-weight-medium "
          >
            {{ $t("back") }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :disabled="!formValid"
            type="submit"
            color="primary"
            height="58"
            class="full-w font-weight-medium dark-blue"
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
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete.vue";

export default {
  name: "Step2",

  components: {
    GooglePlacesAutocomplete
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
  },
  methods: {
    searchForValue(name) {
      return !!this.value.branche && this.value.branche.indexOf(name) >= 0;
    },
    toggleValues(event, name) {
      if (!this.value.branche) {
        this.value.branche = [];
      }
      const index = this.value.branche.indexOf(name);
      if (index < 0) {
        this.value.branche.push(name);
      } else {
        this.value.branche.splice(index, 1);
      }
    }
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
