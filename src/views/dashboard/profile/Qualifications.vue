<template>
  <div class="pa-8">
    <v-row>
      <v-col cols="6">
        <h4>Was mochtest du an dienem profil bearbeiten?</h4>
      </v-col>
      <v-col cols="6" class="text-right">
        <v-btn depressed color="primary" class="pl-8 pr-8" @click="handleUpdate"
          >Speichern
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>Zeig uns was du kannst</label>
        <v-text-field
          dense
          label="Zeig uns was du kannst"
          :rules="rules"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.work_experience"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>Zeig uns deine Qualifikationen</label>
        <v-text-field
          dense
          label="Zeig uns deine Qualifikationen"
          :rules="rules"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.your_qualification"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>Zeig uns was du willst</label>
        <v-text-field
          dense
          label="Zeig uns was du willst"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.looking_for"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>Erzähl uns etwas über dich!</label>
        <v-textarea
          dense
          label="Erzähl uns etwas über dich!"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.describe_yourself"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card outlined flat class="border-blue-dark card-link">
          <a class="card-link-btn">
            <v-icon>mdi-link</v-icon>
          </a>
          <v-card-title class="pb-0">Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet</v-card-text>
          <v-card-actions class="border-top-blue-dark pa-4 pt-1 pb-1">
            <strong class="text-color-primary-blue-dark">$9.99</strong>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Qualifications",
  data: () => ({
    formData: {
      work_experience: "",
      your_qualification: "",
      looking_for: "",
      describe_yourself: ""
    },
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ]
  }),
  created() {
    this.resetFormData(this.user);
  },
  computed: {
    ...mapGetters("user", ["user", "getUserFullName", "getUserInitials"])
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    resetFormData(user) {
      if (!user) return;
      this.formData.work_experience = user.work_experience;
      this.formData.your_qualification = user.your_qualification;
      this.formData.looking_for = user.looking_for;
      this.formData.describe_yourself = user.describe_yourself;
    },
    handleUpdate() {
      this.updateUser(this.formData);
    }
  },
  watch: {
    user(newVal) {
      this.resetFormData(newVal);
    }
  }
};
</script>
