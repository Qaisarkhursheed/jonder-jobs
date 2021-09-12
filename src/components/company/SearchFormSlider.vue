<template>
  <v-row class="search-slider no-gutters align-center">
    <v-col cols="1">
      <label class="pb-0">
        {{ $t("location") }}
      </label>
    </v-col>
    <v-col cols="9">
      <v-slider
        class="align-center"
        v-model="slider"
        hide-details="true"
        @mouseup="selected"
        :max="max"
        :min="min"
        style="height: 38px;"
        track-color="#E3F2FB"
        track-fill-color="#0253B3"
      >
      </v-slider>
    </v-col>
    <v-col cols="2">
      <v-btn class="ma-2" outlined height="50px" color="#0253B3">
        {{ slider }}km {{ $t("radius") }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
// Move to generic components ?

export default {
  name: "SearchFormSlider",

  data() {
    return {
      slider: 200,
      min: 10,
      max: 2000
    };
  },
  methods: {
    selected() {
      this.$emit("selected", this.slider);
    }
  }
};
</script>
