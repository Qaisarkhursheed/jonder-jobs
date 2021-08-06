<template>
  <div class="pa-8">
    <div id="personalInfo">
      <v-row>
        <p class="profile-title">
          Change personal info
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="6">
          <div class="d-flex align-center">
            <v-avatar
              color="primary"
              size="58"
              class="flex-grow-0 flex-shrink-0"
            >
              <v-img :src="user.profile_img" v-if="user.profile_img"></v-img>
              <v-img
                :src="require('@/assets/icons/profile-placeholder.png')"
                v-else
              ></v-img>
            </v-avatar>
          </div>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn
            depressed
            color="primary"
            class="pl-8 pr-8"
            @click="handleUpdate"
            >{{ $t("general.save") }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <label class="profile-label">{{
            $t("user.profile.firstName")
          }}</label>
          <v-text-field
            dense
            :label="$t('user.profile.firstName')"
            :rules="rules"
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
            v-model="formData.first_name"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <label class="profile-label">{{ $t("user.profile.lastName") }}</label>
          <v-text-field
            dense
            :label="$t('user.profile.lastName')"
            :rules="rules"
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
            v-model="formData.last_name"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <label class="profile-label">Email</label>
          <v-text-field
            dense
            disabled
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
            v-model="user.email"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>

    <div id="roleAndBranche">
      <v-row>
        <p class="profile-title branche">
          Rolle & Branche
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="12">
          <label class="profile-label">In which branches do you work?</label>
          <v-select
            outlined
            dense
            :items="branche"
            background-color="white"
            v-model="formData.branche"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label"
            >What type of role are you looking for?</label
          >
          <v-select
            outlined
            multiple
            dense
            :items="lookingForRole"
            background-color="white"
            v-model="formData.looking_for"
          ></v-select>
        </v-col>
      </v-row>
    </div>

    <div id="lookingFor">
      <v-row>
        <p class="profile-title branche">
          What are you looking for
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="12">
          <label class="profile-label"
            >What type of branches are you looking for?</label
          >
          <v-select
            outlined
            dense
            :items="lookingForBranches"
            background-color="white"
            v-model="formData.looking_for_branche"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label"
            >What type of employment are you looking for?</label
          >
          <v-select
            outlined
            dense
            :items="employment"
            background-color="white"
            v-model="formData.looking_for_employment_type"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">Where would you like to work?</label>
          <v-text-field
            dense
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
            v-model="formData.hiring_location"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label">When can you start?</label>
          <v-text-field
            dense
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
            v-model="formData.ready_for_work"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="10">
          <label class="profile-label"
            >Monatliche Netto Gehaltsvorstellung? (€)
          </label>
          <v-col>
            <div class="monthly-salary">{{ formData.monthly_salary }}k</div>
          </v-col>
          <v-slider
            v-model="formData.monthly_salary"
            track-color="grey"
            color="primary"
            always-dirty
            min="0"
            max="100"
          ></v-slider>
        </v-col>
      </v-row>
    </div>

    <div id="experienceAndEducation">
      <v-row>
        <p class="profile-title branche">
          Your experience and education
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="6">
          <label class="profile-label"
            >Professional experience in years?
          </label>
          <v-col>
            <div class="monthly-salary">
              {{ formData.work_experience }}
            </div>
          </v-col>
          <v-slider
            v-model="formData.work_experience"
            track-color="grey"
            color="primary"
            always-dirty
            min="1"
            max="10"
          ></v-slider>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label">Your professional experience</label>
          <v-text-field
            dense
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">Your education</label>
          <v-text-field
            dense
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>

    <div id="documents">
      <v-row>
        <p class="profile-title branche">
          Documents
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="6">
          <div class="mt-6">
            <v-file-input
              v-model="formData.cv"
              placeholder="CV Document"
              dense
              outlined
              prepend-icon=""
              prepend-inner-icon="mdi-cloud-upload-outline"
              class="text-center"
              accept=".doc, .docx, .pdf, .jpg, .png, .txt"
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>

            <v-file-input
              v-model="formData.qualifications"
              placeholder="Qualifikationen document"
              multiple
              dense
              outlined
              prepend-icon=""
              prepend-inner-icon="mdi-cloud-upload-outline"
              class="text-center"
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>

            <v-file-input
              v-model="formData.resume"
              placeholder="Lebenslauf document"
              multiple
              dense
              outlined
              prepend-icon=""
              prepend-inner-icon="mdi-cloud-upload-outline"
              class="text-center "
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
          </div>
        </v-col>
      </v-row>
    </div>

    <div id="invoices">
      <v-row>
        <p class="profile-title branche">
          Billing & Invoices
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
      </v-row>
    </div>

    <div id="paymentMethod">
      <v-row>
        <p class="profile-title branche">
          Edit payment method
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
      </v-row>
    </div>

    <div id="changePassword">
      <v-row>
        <p class="profile-title branche">
          Change password
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">Enter old password</label>
          <v-text-field
            dense
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">Enter new password</label>
          <v-text-field
            dense
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">Repeat new password</label>
          <v-text-field
            dense
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>

    <div id="upgradeAccount">
      <v-row>
        <p class="profile-title branche">
          Upgrade account
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="upgrade">
            <span class="upgrade-title">
              Your account is higlighted in company search
            </span>
            <p>3 days active</p>
            <span class="updgrade-price upgrade-title">35€</span>
            <template>
              <div>
                <simple-modal
                  v-model="isShow"
                  title="Choose your payment method"
                >
                  <template slot="body">
                    <h2>
                      Pay with
                      <a href="https://buy.stripe.com/test_8wM6s04n502G76MeUV"
                        ><v-btn class="ma-2" color="primary" dark>
                          Stripe
                          <v-icon dark right>
                            mdi-card-bulleted
                          </v-icon>
                        </v-btn></a
                      >
                    </h2>
                  </template>
                </simple-modal>
                <button @click="isShow = !isShow" class="btn">Activate</button>
              </div>
            </template>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="upgrade">
            <span class="upgrade-title">
              Your account is higlighted in company search
            </span>
            <p>3 days active</p>
            <span class="updgrade-price upgrade-title">10€</span>

            <template>
              <div>
                <simple-modal
                  v-model="isModal"
                  title="Choose your payment method"
                >
                  <template slot="body">
                    <h2>
                      Pay with
                      <a href="https://buy.stripe.com/test_eVa03CdXF9DgfDi8ww"
                        ><v-btn class="ma-2" color="primary" dark>
                          Stripe
                          <v-icon dark right>
                            mdi-card-bulleted
                          </v-icon>
                        </v-btn></a
                      >
                    </h2>
                  </template>
                </simple-modal>
                <button @click="isModal = !isModal" class="btn">
                  Activate
                </button>
              </div>
            </template>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SimpleModal from "simple-modal-vue";

export default {
  components: {
    SimpleModal,
  },
  name: "Profile",

  data: () => ({
    stripe: null,
    isShow: false,
    isModal: false,
    modal: true,
    dialog: false,

    ccData: {
      ccNumber: "",
      ccOwner: "",
      exDate: "",
      cvc: "",
    },
    planSelected: {
      plan_id: null,
      selectedClass: false,
    },
    formData: {
      first_name: "",
      last_name: "",
      branche: "",
      looking_for: [],
      looking_for_branche: [],
      looking_for_employment_type: "",
      hiring_location: "",
      ready_for_work: "",
      monthly_salary: "",
      work_experience: "",
      cv: null,
      qualifications: null,
      resume: null,
    },
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    branche: [
      "Medizin",
      "Automobilindustrie",
      "Maschinenbau",
      "Chemisch-pharmazeutische Industrie",
      "Ernährungsindustrie",
      "Elektrotechnikbranche",
    ],
    lookingForRole: [
      "Entwickler",
      "Projektmanager",
      "Bauleiter",
      "Praktikant",
      "Auszubildende",
      "Geschäftsführer",
    ],
    lookingForBranches: [
      "Medizin",
      "Automobilindustrie",
      "Maschinenbau",
      "Chemisch-pharmazeutische Industrie",
      "Ernährungsindustrie",
      "Elektrotechnikbranche",
    ],
    employment: ["Part - time", "Full - time"],
  }),
  created() {
    this.resetFormData(this.user);
  },

  computed: {
    ...mapGetters("user", ["user", "getUserFullName", "getUserInitials"]),
  },
  methods: {
    ...mapActions("user", ["updateUser"]),

    alertUser() {
      alert("Processing your payment");
    },
    changeModal() {
      this.modal = !this.modal;
      console.log(this.ccData);
    },
    selectOption(option) {
      this.planSelected = option;
      this.selectedClass = !this.selectedClass;
      console.log(this.planSelected, this.selectedClass);
    },

    resetFormData(user) {
      if (!user) return;
      this.formData.first_name = user.first_name;
      this.formData.last_name = user.last_name;
      //this.formData.email = user.email;
      this.formData.branche = user.branche;
      this.formData.looking_for = user.looking_for;
      this.formData.looking_for_branche = user.looking_for_branche;
      this.formData.looking_for_employment_type =
        user.looking_for_employment_type;
      this.formData.hiring_location = user.hiring_location;
      this.formData.ready_for_work = user.ready_for_work;
      this.formData.monthly_salary = user.monthly_salary;
      this.formData.work_experience = user.work_experience;
      this.formData.cv = user.cv;
      this.formData.qualifications = user.qualifications;
      this.formData.resume = user.resume;
    },
    handleUpdate() {
      const formDataCopy = Object.assign({}, this.formData);

      if (!(this.formData.cv instanceof File)) {
        delete formDataCopy.cv;
      }

      if (!(this.formData.resume instanceof File)) {
        delete formDataCopy.resume;
      }

      if (!(this.formData.qualifications instanceof File)) {
        delete formDataCopy.qualifications;
      }

      this.updateUser(formDataCopy)
        .then(() => {
          alert("Success");
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  watch: {
    user(newVal) {
      this.resetFormData(newVal);
    },
  },
};
</script>

<style lang="scss">
.div-hover :hover {
  background-color: #27aae1;
  border-radius: 10px;
  opacity: 85%;
}
.header {
  display: inline-block;
  padding: 3rem 0 0 3rem;
  font-size: 28px;
  font-weight: 600;
}

.optionOfPayment {
  padding: 3rem;
}

.profile-title {
  font-size: 20px;
  width: 100%;
  line-height: 24px;
  font-weight: 600;
  margin: 15px 0 0 15px;
}

.btn {
  display: inline-block;
  background-color: #0253b3;
  color: white;
  padding: 0.7rem;
}

.selectedOptionDesign {
  background-color: #2592c0;
  border-radius: 10px;
  opacity: 85%;
}
.profile-subtitle {
  width: 100%;
  margin-left: 15px;
}

.profile-label {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.branche {
  margin-top: 70px;
}

.monthly-salary {
  border: 1px solid $primary-blue-dark;
  border-radius: 10px;
  width: 80px;
  text-align: center;
  padding: 25px 0;
  color: $primary-blue-dark;
}

.upgrade {
  border: 1px solid $light-grey;
  border-radius: 10px;
  padding: 25px;

  .upgrade-title {
    font-size: 16px;
    font-weight: 700;
  }
  .updgrade-price {
    float: right;
    color: $primary-blue-dark;
  }
}
</style>
