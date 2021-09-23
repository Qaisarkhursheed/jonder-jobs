<template>
  <div class="pa-8">
    <v-row>
      <v-col cols="6">
        <h4>{{ $t("editProfileHeading") }}</h4>
      </v-col>
      <!-- <v-col cols="6" class="text-right">
        <v-btn depressed color="primary" class="pl-8 pr-8" @click="handleUpdate"
          >{{ $t('save') }}
        </v-btn>
      </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>{{ $t("currentWork") }}</label>
        <v-text-field
          dense
          :label="$t('currentWork')"
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
        <label>{{ $t("currentPosition") }}</label>
        <v-select
          outlined
          dense
          :label="$t('currentPosition')"
          :rules="rules"
          :items="currentPosition"
          background-color="white"
          v-model="formData.current_position"
          append-icon="mdi-chevron-down"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>{{ $t("whichBranch") }}</label>
        <v-select
          outlined
          dense
          :rules="rules"
          :label="$t('whichBranch')"
          :items="branches"
          v-model="formData.branche"
          append-icon="mdi-chevron-down"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>{{ $t("workingEnvironment") }}</label>
        <v-text-field
          dense
          :label="$t('workingEnvironment')"
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
        <label>{{ $t("whatDescribesYou") }}</label>

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

            <p class="text-center caption font-weight-bold mt-1">{{ $t("junior") }}</p>
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

            <p class="text-center caption mt-1 font-weight-bold">{{ $t("senior") }}</p>
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

            <p class="text-center caption mt-1 font-weight-bold">{{ $t("advanced") }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <v-card>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="310"
            overlay-color="#0253B3"
            overlay-opacity="0.3"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" outlined v-bind="attrs" v-on="on" block>
                {{ $t("cancel") }}
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
                      {{ $t("cancel") }}
                    </v-btn></v-col
                  >
                  <v-col md="6" class="text-center">
                    <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                      class="font-weight-bold"
                    >
                      {{ $t("save") }}
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
          <v-btn block color="primary" @click="handleUpdate">{{
            $t("confirm")
          }}</v-btn></v-card
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
    ],
    branches: [
      "Medizin",
      "Automobilindustrie",
      "Maschinenbau",
      "Chemisch-pharmazeutische Industrie",
      "Ernährungsindustrie",
      "Elektrotechnikbranche"
    ],
    currentPosition: [
      "Entwickler/in",
      "Projektmanager/in",
      "Bauleiter/in",
      "Praktikant/in",
      "Auszubildende/r",
      "Geschäftsführer/in"
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
