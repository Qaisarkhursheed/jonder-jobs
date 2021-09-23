<template>
  <div>
    <v-combobox
      :items="entries"
      v-model="model"
      :value="model"
      :loading="isLoading"
      :rules="[validations.required]"
      :search-input.sync="search"
      hide-selected
      outlined
      flat
      no-filter
      hide-no-data
      placeholder="Enter location"
      @input="select"
      append-icon="mdi-chevron-down"
    >
      <template v-slot:item="{ item }">
        {{ item.description }}
      </template>
      <template v-slot:selection="{ item }">
        <template v-if="type == 'geocode' && !fullAddress">
          {{ item.structured_formatting.main_text }}
        </template>
        <template v-else>
          {{ item.description }}
        </template>
      </template>
    </v-combobox>
  </div>
</template>

<script>
export default {
  name: "GooglePlacesAutocomplete",
  props: {
    value: {
      type: [String, Object]
    },
    type: {
      type: String,
      default: "(cities)"
    },
    fullAddress: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      service: null,
      entries: [],
      model: null,
      isLoading: false,
      search: null
    };
  },

  created() {
    this.service = new window.google.maps.places.AutocompleteService();
    // refactor in better times
    if (this.value) {
      if (this.type == "geocode") {
        if (this.fullAddress) {
          this.model = {
            description: this.value
          };
        } else {
          this.model = {
            structured_formatting: {
              main_text: this.value
            }
          };
        }
      } else {
        this.model = {
          description: this.value
        };
      }
    }
  },

  methods: {
    async getPlaces() {
      await this.service
        .getPlacePredictions({
          input: this.search,
          types: [this.type]
        })
        .then(res => {
          this.entries = res.predictions;
          // this.isLoading = false;
        });
    },
    select() {
      if (!this.model) return;
      if (this.type == "geocode") {
        if (this.fullAddress) {
          this.$emit("select", this.model.description);
        } else {
          this.$emit("select", this.model.structured_formatting.main_text);
        }
      } else {
        this.$emit("select", this.model.description);
      }
    }
  },

  watch: {
    search() {
      if (!this.search) return;
      this.getPlaces();
    }
  }
};
</script>
