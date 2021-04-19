<template>
  <div class="moc-step-1">
    <v-form ref="form" @submit.prevent="nextStep">
      <v-row>
        <v-col cols="12">
          <p class="body-1 font-weight-medium">
            What describes your role in company?
          </p>
          <v-radio-group
            v-model="formData.role_in_company"
            :rules="rules"
            column
            dense
            hide-details
          >
            <v-radio
              label="Vice President or above"
              value="Vice President or above"
            ></v-radio>
            <v-radio
              label="Manager or Director"
              value="Manager or Director"
            ></v-radio>
            <v-radio label="Self-employed" value="Self-employed"></v-radio>
            <v-radio label="Developer" value="Developer"></v-radio>
            <v-radio
              label="Student or intern"
              value="Student or intern"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center justify-space-between">
            <v-btn @click="$emit('prevStep')" plain>
              Bisherige
            </v-btn>
            <v-btn color="primary" @click="nextStep" large>
              Nächster
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Step2",
  data: () => ({
    formData: {
      role_in_company: ""
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

<style scoped lang="scss"></style>
