<template>
  <v-row class="slider-input no-gutters">
    <v-col cols="auto" class="pa-0">
      <div class="monthly-salary">{{ model }}{{ suffix }}</div>
    </v-col>
    <v-col cols="col" class="d-flex my-auto">
      <v-slider
        v-model="model"
        :rules="[validations.required]"
        hide-details
        loader-height="30"
        track-color="#e5e5e5"
        color="#0253b3"
        always-dirty
        :min="min"
        :max="max"
        :step="step"
        @end="change"
      ></v-slider>  
    </v-col>
  </v-row>
</template>

<script>

export default {

  name: 'SliderInput',

  props: {
    value: {
      required: true,
    },
    suffix: {
      type: String,
    },
    min: {
      type: [String, Number]
    },
    max: {
      type: [String, Number]
    },
    step: {
      type: [String, Number]
    }
  },
  created() {
    this.model = this.value ? this.value : '';
  },
  data() {
    return {
      model: null
    }
  },
  methods: {
    change(value) {
      this.$emit('change', value);
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-input {
  border: 1px solid #e5e5e5; 
  border-radius: 10px;
}
</style>