<template>
  <v-autocomplete
    :attach="attach"
    v-model="valueLocal"
    :search-input.sync="searchInput"
    @update:search-input="fetchSuggestions($event)"
    @change="$refs[ref].lazySearch = ''"
    :items="items"
    :loading="loading"
    :rules="rules"
    :placeholder="placeholder || $t('choose')"
    :ref="ref"
    :hide-details="hideDetails"
    :multiple="multiple"
    :small-chips="multiple"
    :deletable-chips="multiple"
    :clearable="clearable"
    :no-data-text="noDataText"
    no-filter
    outlined
    append-icon="mdi-chevron-down"
  ></v-autocomplete>
</template>

<script>
export default {
  props: {
    value: {
      type: [Array, String]
    },
    attach: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: false
    },
    hideDetails: {
      type: [Boolean, String],
      default: false
    },
    multiple: {
      type: Boolean,
      defualt: false
    },
    placeholder: {
      type: String,
      required: false
    },
    rules: {
      type: Array,
      required: false
    },
    types: {
      type: Array,
      default: () => ["(cities)"]
    }
  },

  data() {
    return {
      valueLocal: this.value,
      suggestions: [],
      ref: "googlePlacesInput" + new Date().getTime(),
      loading: false,
      skipFetch: true,
      searchInput: ""
    };
  },

  computed: {
    items() {
      if (this.suggestions.length) {
        if (this.multiple) {
          return this.suggestions.concat(this.valueLocal);
        }

        return this.suggestions;
      }

      if (this.multiple) {
        return this.valueLocal ? this.valueLocal : [];
      } else {
        return this.valueLocal ? [this.valueLocal] : [];
      }
    },
    noDataText() {
      if (this.searchInput) {
        return this.$t("noDataAvailable");
      } else {
        return this.$t("enterCityInTheField");
      }
    }
  },

  watch: {
    value(val) {
      this.skipFetch = true;
      this.valueLocal = val;
    },
    valueLocal(val) {
      this.$emit("input", val);
    }
  },

  methods: {
    fetchSuggestions(input) {
      if (this.skipFetch) {
        this.skipFetch = false;
        return;
      }

      this.loading = true;
      this.$store
        .dispatch("google/places", {
          input,
          types: this.types
        })
        .then(resp => {
          this.suggestions = resp;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>
