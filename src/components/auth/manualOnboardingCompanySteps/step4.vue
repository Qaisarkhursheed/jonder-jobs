<template>
  <div class="moc-step-1">
    <v-form ref="form" @submit.prevent="nextStep">
      <v-row>
        <v-col cols="12">
          <p class="body-1 font-weight-medium">
            Which department do you work in?
          </p>
          <v-radio-group
            v-model="formData.department"
            :rules="rules"
            column
            dense
            hide-details
          >
            <v-radio
              label="Customer Service"
              value="Customer Service"
            ></v-radio>
            <v-radio
              label="Finance or Legal"
              value="Finance or Legal"
            ></v-radio>
            <v-radio label="Engineering" value="Engineering"></v-radio>
            <v-radio
              label="Marketing or Sales"
              value="Marketing or Sales"
            ></v-radio>
            <v-radio label="Human Resources" value="Human Resources"></v-radio>
            <v-radio label="Other" value="Other"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex flex-wrap align-center justify-center">
            <v-btn color="primary" @click="nextStep" large>
              Finish
            </v-btn>
            <div class="break"></div>
            <v-btn @click="$emit('prevStep')" plain class="mt-2">
              Bisherige
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Step4",
  data: () => ({
    formData: {
      department: ""
    },
    rules: [value => !!value || "Required."]
  }),
  methods: {
    nextStep() {
      if (this.$refs.form.validate()) {
        this.$emit("nextStep", this.formData);
      }
    }
  }
};
</script>

<style lang="scss">
.break {
  flex-basis: 100%;
  height: 0;
}
</style>
