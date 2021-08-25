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
  >
    <template v-slot:item="{ item }">
      {{ item.description }}
    </template>
    <template v-slot:selection="{ item }">
      {{ item.description }}
    </template>
  </v-combobox>
  </div>
</template>

<script>

export default {

  name: 'GooglePlacesAutocomplete',
  props: {
    value: {
      type: [String, Object]
    },
    type: {
      type: String,
      default: '(cities)'
    }
  },
  data() {
    return {
      service: null,
      entries: [],
      model: null,
      isLoading: false,
      search: null
    }
  },

  created() {
    this.service = new window.google.maps.places.AutocompleteService();
    if(this.value) {
      this.model = {
        description: this.value 
      };
    }
  },

  methods: {
    async getPlaces() {
      await this.service.getPlacePredictions({
        input: this.search,
        types: [this.type],
      }).then((res) => {
        this.entries = res.predictions;
        // this.isLoading = false;
      });
    },
    select() {
      if(!this.model)
        return;
      if (this.type == 'geocode') {
        this.$emit('select', this.model.structured_formatting.main_text);
      } else {
        this.$emit('select', this.model.description);
      }
    }
  },
  

  watch: {
    search () {
      if(!this.search)
        return;
      this.getPlaces();
    },
  },
}
</script>