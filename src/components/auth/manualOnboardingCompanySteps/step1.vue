<template>
  <div class="moc-step-1">
    <v-form ref="form" @submit.prevent="nextStep">
      <v-row>
        <v-col cols="12">
          <label>Name der Firma</label>
          <v-text-field
            v-model="formData.company"
            :rules="rules"
            dense
            type="text"
            label="Name der Firma"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0">
          <label>Jobs</label>
          <v-text-field
            v-model="formData.jobs"
            :rules="rules"
            dense
            type="text"
            label="Jobs"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="about-company-textarea pt-0">
          <label>About company</label>
          <v-textarea
            v-model="formData.about_company"
            :rules="[
              !!formData.about_company || 'Required.',
              (formData.about_company && formData.about_company.length >= 6) ||
                'Min 6 characters'
            ]"
            dense
            label="About company"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center justify-center">
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
  name: "Step1",
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ],
    formData: {
      company: "",
      jobs: "",
      about_company: ""
    }
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
.about-company-textarea {
  .v-text-field.v-text-field--solo {
    .v-label {
      top: 10px !important;
    }
  }
}
</style>
