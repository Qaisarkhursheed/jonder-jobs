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
        <label>Wo arbeitest du aktuell?</label>
        <v-text-field
          dense
          label="Wo arbeitest du aktuell"
          :rules="rules"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.working_in"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>Was ist deine aktuelle Position?</label>
        <v-text-field
          dense
          label="Was ist deine aktuelle Position?"
          :rules="rules"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.current_position"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>In welchen Branchen arbeitest du?</label>
        <v-text-field
          dense
          label="In welchen Branchen arbeitest du"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.branche"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>Arbeitsumgebung</label>
        <v-text-field
          dense
          label="Arbeitsumgebung"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.department"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>Was beschreibt dich am besten?</label>

        <v-row>
          <v-col>
            <div class="text-center">
              <v-btn
                  @click="formData.describe_yourself = 'Beginner'"
                  v-bind="{ outlined: formData.describe_yourself !== 'Beginner' }"
                  color="primary"
                  class="stars-btn"
              >
                <v-icon>
                  mdi-star
                </v-icon>
              </v-btn>
            </div>

            <p class="text-center caption mt-1">Beginner</p>
          </v-col>

          <v-col>
            <div class="text-center">
              <v-btn
                  @click="formData.describe_yourself = 'Junior'"
                  v-bind="{ outlined: formData.describe_yourself !== 'Junior' }"
                  color="primary"
                  class="stars-btn"
              >
                <v-icon>
                  mdi-star
                </v-icon>
                <v-icon>
                  mdi-star
                </v-icon>
              </v-btn>
            </div>

            <p class="text-center caption mt-1">Junior</p>
          </v-col>

          <v-col>
            <div class="text-center">
              <v-btn
                  @click="formData.describe_yourself = 'Senior'"
                  v-bind="{ outlined: formData.describe_yourself !== 'Senior' }"
                  color="primary"
                  class="stars-btn senior"
              >
                <v-icon>
                  mdi-star
                </v-icon>
                <v-icon>
                  mdi-star
                </v-icon>
                <v-icon>
                  mdi-star
                </v-icon>
              </v-btn>
            </div>

            <p class="text-center caption mt-1">Senior</p>
          </v-col>

          <v-col>
            <div class="text-center">
              <v-btn
                  @click="formData.describe_yourself = 'Advanced'"
                  v-bind="{ outlined: formData.describe_yourself !== 'Advanced' }"
                  color="primary"
                  class="stars-btn advanced"
              >
                <v-icon>
                  mdi-star
                </v-icon>
                <v-icon>
                  mdi-star
                </v-icon>
                <v-icon>
                  mdi-star
                </v-icon>
                <v-icon>
                  mdi-star
                </v-icon>
              </v-btn>
            </div>

            <p class="text-center caption mt-1">Advanced</p>
          </v-col>
        </v-row>
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
      working_in: "",
      current_position: "",
      branche: "",
      address: "",
      department: "",
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
      this.formData.working_in = user.working_in;
      this.formData.current_position = user.current_position;
      this.formData.branche = user.branche;
      this.formData.address = user.address;
      this.formData.department = user.department;
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
