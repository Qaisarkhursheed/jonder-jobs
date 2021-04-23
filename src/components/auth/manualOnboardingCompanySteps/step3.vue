<template>
  <div class="moc-step-1">
    <v-form ref="form" @submit.prevent="nextStep">
      <v-row>
        <v-col cols="12">
          <p class="body-1 font-weight-medium">
            How many employees does your company have?
          </p>
          <v-radio-group
            v-model="formData.company_employees"
            :rules="rules"
            column
            dense
            hide-details
          >
            <v-radio label="It's just me" value="1"></v-radio>
            <v-radio label="2-9 employees" value="2-9"></v-radio>
            <v-radio label="10-99 employees" value="10-99"></v-radio>
            <v-radio label="100-500 employees" value="100-500"></v-radio>
            <v-radio label="1000+ employees" value="1000+"></v-radio>
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
  name: "Step3",
  data: () => ({
    formData: {
      company_employees: ""
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
