<template>
  <div class="pa-8">
    <v-row>
      <v-col cols="6">
        <p class="text-h6 font-weight-bold">
          Was mochtest du an dienem profil bearbeiten?
        </p>
      </v-col>
      <!-- <v-col cols="6" class="text-right">
        <v-btn depressed color="primary" class="pl-8 pr-8" @click="handleUpdate"
          >Speichern
        </v-btn>
      </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="font-weight-bold">Wo arbeitest du aktuell?</label>
        <v-text-field
          dense
          placeholder="Text"
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
        <label class="font-weight-bold">Was ist deine aktuelle Position?</label>
        <v-text-field
          dense
          placeholder="Text"
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
        <label class="font-weight-bold"
          >In welchen Branchen arbeitest du?</label
        >
        <v-text-field
          dense
          placeholder="Text"
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
      <v-col cols="12">
        <label class="font-weight-bold">Wo wohnst du?</label>
        <v-text-field
          dense
          placeholder="Text"
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
        <label class="font-weight-bold">Work Radius</label>
        <v-text-field
          dense
          placeholder="Text"
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
        <label class="font-weight-bold ml-8"
          >Was beschreibt dich am besten?</label
        >

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

            <p class="text-center caption font-weight-bold mt-1">Beginner</p>
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

            <p class="text-center caption font-weight-bold mt-1">Junior</p>
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

            <p class="text-center caption mt-1 font-weight-bold">Senior</p>
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

            <p class="text-center caption mt-1 font-weight-bold">Advanced</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <v-card>
          <v-dialog v-model="dialog" persistent max-width="310">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" outlined v-bind="attrs" v-on="on" block>
                Cancel
              </v-btn>
            </template>
            <v-card height="280">
              <p class="pt-5 text-center">
                <v-icon color="red" size="100" class="border-special"
                  >mdi-alert-outline</v-icon
                >
              </p>
              <v-card-text
                class="pt-2 text-center text-subtitle-1 font-weight-bold black--text"
                >Are you sure you don't want to save changes?</v-card-text
              >
              <v-divider></v-divider>
              <v-card-actions>
                <v-row>
                  <v-col md="6" class="text-center">
                    <v-btn text @click="dialog = false">
                      Cancel
                    </v-btn></v-col
                  >
                  <v-col md="6" class="text-center">
                    <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                      class="font-weight-bold"
                    >
                      Save
                    </v-btn></v-col
                  >
                </v-row>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card>
          <v-btn block color="primary" @click="handleUpdate"
            >Confirm</v-btn
          ></v-card
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Qualifications",
  data: () => ({
    dialog: false,
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
