<template>
  <v-row class="slider-range-input no-gutters">
    <!--    <v-col cols="auto" class="pa-0">-->
    <!--      <div class="monthly-salary">{{ model }} {{ suffix }}</div>-->
    <!--    </v-col>-->
    <v-col cols="col" class="d-flex my-auto">
      <v-range-slider
        v-model="model"
        :rules="[validations.required]"
        hide-details
        loader-height="30"
        track-color="#e5e5e5"
        thumb-color="#fff"
        color="#0253b3"
        always-dirty
        :min="min"
        :max="max"
        :step="step"
        @end="change"
      >
        <template v-slot:prepend>
          <v-text-field
            :value="model[0]"
            readonly
            disabled
            solo
            class="mt-0 pa-0 monthly-salary"
            hide-details
            single-line
            type="text"
            style="width: 60px"
            @change="$set(model, 0, $event)"
          ></v-text-field>
        </template>
        <template v-slot:append>
          <v-text-field
            :value="model[1]"
            solo
            readonly
            disabled
            class="mt-0 pa-0 monthly-salary"
            hide-details
            single-line
            type="text"
            style="width: 60px"
            @change="$set(model, 1, $event)"
          ></v-text-field>
        </template>
      </v-range-slider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SliderRangeInput",

  props: {
    value: {
      type: Array,
      required: true
    },
    suffix: {
      type: String
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
    const value = ["0", "10"];
    this.model = this.value ? this.value : value;
  },
  data() {
    return {
      model: null
    };
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss">
.slider-range-input {
  // border: 1px solid #e5e5e5;
  // border-radius: 10px;
  max-width: 335px;
  .v-input--range-slider {
    align-items: center;
    display: flex;
    .monthly-salary {
      height: 55px;
      width: 57px !important;
      input {
        color: $primary-blue-dark !important;
        font-size: 18px !important;
        font-weight: 600;
        text-align: center;
      }
    }
    .v-input__slot {
      &:before {
        border: 0;
      }
    }
  }
  .v-input__append-outer,
  .v-input__prepend-outer {
    margin-bottom: 0;
    margin-top: 0;
  }
  .v-slider__track-container {
    height: 10px !important;
  }
  .v-slider__track-background,
  .v-slider__track-fill {
    border-radius: 5px;
    height: 100%;
  }
  .v-slider__thumb-container {
    color: transparent !important;
  }
  .v-slider__thumb {
    border: 3px solid #0253b3 !important;
  }
  .v-slider__thumb {
    height: 22px;
    width: 22px;
  }
  .v-slider__track-container,
  .v-slider__thumb {
    cursor: pointer;
  }
}
</style>
