<template>
  <div>
    <UpgradePlanModal
      v-if="modals.UpgradePlan.active"
      :active="modals.UpgradePlan.active"
      :edit="modals.UpgradePlan.edit"
      @close="toggleModal('UpgradePlan')"
    />
    <AddNewCard
      v-if="modals.AddNewCard.active"
      :active="modals.AddNewCard.active"
      :edit="modals.AddNewCard.edit"
      @close="toggleModal('AddNewCard')"
    />

    <!-- Response alert -->
    <response-alert :response="formResponse"></response-alert>

    <v-card flat id="personalInfo" class="profile-section mb-10">
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
              size="80"
              class="flex-grow-0 flex-shrink-0"
            >
              <input
                type="file"
                ref="uploadAvatarInput"
                style="display: none"
                @change="newImage = $event.target.files[0]"
              />
              <v-img v-if="profile_img" :src="profile_img"></v-img>
              <v-img
                :src="require('@/assets/icons/profile-placeholder.png')"
                v-else
              ></v-img>
            </v-avatar>
            <v-icon
              @click="$refs.uploadAvatarInput.click()"
              color="white"
              size="20"
              style="position: relative; bottom: -30px; right: 30px; background-color: #0253B3; padding: 7px; border-radius: 50%"
            >
              mdi-camera
            </v-icon>
          </div>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn
            :loading="formLoading"
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
            :rules="[validations.required]"
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
            :rules="[validations.required]"
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
    </v-card>

    <v-card flat id="roleAndBranche" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          Rolle & Branche
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="12">
          <label class="profile-label">In which branches do you work?</label>
          <!-- <v-select
            outlined
            :items="types.JOB_BRANCHE"
            background-color="white"
            v-model="formData.branche"
          ></v-select> -->
          <v-autocomplete
            v-model="formData.branche"
            :items="types.JOB_BRANCHE"
            cache
            outlined
            flat
            hide-no-data
            :hide-details="true"
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label"
            >What type of role are you looking for?</label
          >
           <v-autocomplete
            v-model="formData.looking_for"
            :items="types.JOB_POSITION"
            multiple
            outlined
            flat
            hide-no-data
            :hide-details="true"
          ></v-autocomplete>
          <!-- <v-select
            outlined
            multiple
            :items="lookingForRole"
            background-color="white"
            v-model="formData.looking_for"
          ></v-select> -->
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="lookingFor" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          What are you looking for
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="12">
          <label class="profile-label"
            >What type of branches are you looking for?</label
          >
          <!-- <v-select
            outlined
            :items="lookingForBranches"
            background-color="white"
            v-model="formData.looking_for_branche"
          ></v-select> -->
          <v-autocomplete
            v-model="formData.looking_for_branche"
            :items="types.JOB_BRANCHE"
            cache
            outlined
            flat
            hide-no-data
            :hide-details="true"
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label"
            >What type of employment are you looking for?</label
          >
          <v-select
            outlined
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
            v-model="formData.address_to_work"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label">When can you start?</label>
          <Calendar
            @setDate="formData.ready_for_work = $event"
            :value="formData.ready_for_work"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="10">
          <label class="profile-label"
            >Monatliche Netto Gehaltsvorstellung? (€)
          </label>
          <v-row>
            <v-col cols="auto">
              <div class="monthly-salary">{{ formData.monthly_salary }}k</div>
            </v-col>
            <v-col cols="col" class="d-flex my-auto">
              <v-slider
                v-model="formData.monthly_salary"
                hide-details
                track-color="grey"
                color="primary"
                always-dirty
                min="1"
                max="20"
                step="0.5"
              ></v-slider>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="experienceAndEducation" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          Your experience and education
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="10">
          <label class="profile-label"
            >Professional experience in years?
          </label>
          <v-row>
            <v-col cols="auto">
              <div class="monthly-salary">
                {{ formData.work_experience }}
              </div>
            </v-col>
            <v-col class="d-flex my-auto">
              <v-slider
                v-model="formData.work_experience"
                track-color="grey"
                color="primary"
                always-dirty
                hide-details
                step="0.5"
                min="0"
                max="40"
              ></v-slider>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <ModalEducation
          v-if="modals.education.active"
          :active="modals.education.active"
          :edit="modals.education.edit"
          @close="toggleModal('education')"
        />
        <ModalExperience
          v-if="modals.experience.active"
          :active="modals.experience.active"
          :edit="modals.experience.edit"
          @close="toggleModal('experience')"
        />

        <v-col cols="12">
          <label class="profile-label">Your professional experience</label>
          <CardActionableList
            type="Experience"
            @edit="activateEdit('experience', $event)"
          />
          <v-btn
            @click="toggleModal('experience')"
            outlined
            rounded
            color="#0253B3"
          >
            <v-icon>mdi-plus</v-icon>
            Add
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">Your education</label>
          <CardActionableList
            type="Education"
            @edit="activateEdit('education', $event)"
          />
          <v-btn
            @click="toggleModal('education')"
            outlined
            rounded
            color="#0253B3"
          >
            <v-icon>mdi-plus</v-icon>
            Add
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="documents" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          Documents
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
        <v-col cols="12">
          <div class="mt-6">
            <div style="width: 70%">
              <DocumentUploadSection 
                @change="e => formData.cv = e" 
                type="Cv" 
                :value="formData.cv" 
              /> 
            </div>
            <div style="width: 70%">
              <DocumentUploadSection 
                @change="e => formData.qualifications = e" 
                type="Qualifications"
                :value="formData.qualifications" 
              />
            </div>
            <div style="width: 70%">
              <DocumentUploadSection 
                @change="e => formData.resume = e" 
                type="Resume"
                :value="formData.resume"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="invoices" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          Billing & Invoices
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
      </v-row>
    </v-card>

    <v-card flat id="paymentMethod" class="profile-section mb-10">
      <v-row>
        <CardActionableList
          type="AddNewCard"
          @edit="activateEdit('AddNewCard', $event)"
        />
        <p class="profile-title">
          Edit payment method
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>

        <v-btn
          @click="toggleModal('AddNewCard')"
          outlined
          rounded
          small
          fab
          color="#0253B3"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        Add
      </v-row>
    </v-card>

    <v-card flat id="changePassword" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          Change password
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
      </v-row>

      <v-form ref="passwordForm" v-model="passwordFormValid">
        <label class="profile-label">Enter old password</label>
        <v-text-field
          v-model="passwordFormData.current_password"
          dense
          type="password"
          outlined
          :rules="[validations.required]"
          background-color="white"
        ></v-text-field>

        <label class="profile-label">Enter new password</label>
        <v-text-field
          v-model="passwordFormData.new_password"
          dense
          type="password"
          outlined
          :rules="[validations.required, validations.min.string(6)]"
          background-color="white"
        ></v-text-field>

        <label class="profile-label">Repeat new password</label>
        <v-text-field
          v-model="passwordFormData.new_confirm_password"
          dense
          type="password"
          outlined
          :rules="[validations.required]"
          background-color="white"
        ></v-text-field>

        <!-- Response alert -->
        <response-alert :response="passwordFormResponse"></response-alert>

        <v-row>
          <v-col cols="6">
            <v-btn
              :loading="passwordFormLoading"
              :disabled="!passwordFormValid"
              depressed
              large
              color="primary"
              class="pl-8 pr-8"
              @click="handleChangePassword"
              >Change Password
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>

    <v-card flat id="upgradeAccount" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          Upgrade account
        </p>
        <p class="profile-subtitle">
          Explanation goes here
        </p>
      </v-row>
      <v-row>
        <v-col cols="6">
          <CardActionableList
            type="UpgradePlan"
            @edit="activateEdit('UpgradePlan', $event)"
          />
          <div class="upgrade" @click="toggleModal('UpgradePlan')">
            <v-img
              class="upgrade-icon"
              :src="require('@/assets/icons/top-rated.svg')"
            ></v-img>

            <div>
              <span class="upgrade-title">
                Your account is higlighted in company search
              </span>
              <p>3 days active</p>
              <span class="updgrade-price upgrade-title">10€</span>
            </div>
          </div>
        </v-col>

        <v-col cols="6">
          <CardActionableList
            type="UpgradePlan"
            @edit="activateEdit('UpgradePlan', $event)"
          />
          <div class="upgrade" @click="toggleModal('UpgradePlan')">
            <v-img
              class="upgrade-icon"
              :src="require('@/assets/icons/medal.svg')"
            ></v-img>

            <div>
              <span class="upgrade-title">
                Your account is higlighted in company search
              </span>
              <p>3 days active</p>
              <span class="updgrade-price upgrade-title">10€</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import types from '@/types';

import CardActionableList from "@/components/user/JobseekerCardActionableList";
import UpgradePlanModal from "@/views/dashboard/UpgradePlanModal";
import Calendar from "@/components/Calendar";
import AddNewCard from "@/views/dashboard/AddNewCard";
import ResponseAlert from "@/components/ResponseAlert";
import ModalEducation from "@/components/auth/manualOnboardingSteps/ModalEducation";
import ModalExperience from "@/components/auth/manualOnboardingSteps/ModalExperience";
import DocumentUploadSection from '@/components/DocumentUploadSection.vue';

export default {
  name: "Profile",

  components: {
    UpgradePlanModal,
    CardActionableList,
    Calendar,
    AddNewCard,
    ResponseAlert,
    ModalEducation,
    ModalExperience,
    DocumentUploadSection
  },

  data: () => ({
    newImage: null,
    formData: {
      first_name: "",
      last_name: "",
      branche: "",
      looking_for: [],
      looking_for_branche: [],
      looking_for_employment_type: "",
      address_to_work: "",
      ready_for_work: "",
      monthly_salary: "",
      work_experience: "",
      cv: null,
      qualifications: null,
      resume: null
    },
    formResponse: {},
    formLoading: false,
    passwordFormData: {},
    passwordFormValid: false,
    passwordFormLoading: false,
    passwordFormResponse: {},
    branche: [
      "Medicine",
      "Automotive industry",
      "Mechanical engineering",
      "Chemical-pharmaceutical industry",
      "Food industry",
      "Electrical engineering industry"
    ],
    lookingForRole: [
      "Developer",
      "Project Manager",
      "Construction manager",
      "Intern",
      "Apprentice",
      "Manager"
    ],
    lookingForBranches: [
      "Developer",
      "Project Manager",
      "Construction manager",
      "Intern",
      "Apprentice",
      "Manager"
    ],
    employment: ["Trainee", "Fulltime", "Parttime"],
    modals: {
      UpgradePlan: {
        active: false,
        edit: false,
        component: UpgradePlanModal
      },
      AddNewCard: {
        active: false,
        edit: false,
        component: AddNewCard
      },
      education: {
        active: false,
        edit: false,
        component: ModalEducation
      },
      experience: {
        active: false,
        edit: false,
        component: ModalExperience
      }
    },
    fileActions: {
      UpgradePlan: ["edit", "delete"],
      AddNewCard: ["edit", "delete"],
      experience: ["edit", "delete"],
      education: ["edit", "delete"]
    }
  }),
  created() {
    this.resetFormData(this.user);
  },
  computed: {
    ...mapGetters("user", ["user", "getUserFullName", "getUserInitials"]),
    profile_img() {
      if (this.newImage) {
        return URL.createObjectURL(this.newImage);
      }

      return this.user.profile_img;
    },
    types() {
      return types;
    }
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
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
      this.formData.address_to_work = user.address_to_work;
      this.formData.ready_for_work = user.ready_for_work;
      this.formData.monthly_salary = user.monthly_salary;
      this.formData.work_experience = user.work_experience;
      this.formData.cv = user.cv;
      this.formData.qualifications = user.qualifications;
      this.formData.resume = user.resume;
    },
    handleUpdate() {
      this.formResponse = {};
      const formDataCopy = Object.assign({}, this.formData);

      if (this.newImage) {
        formDataCopy.profile_img = this.newImage;
      }

      if (!(this.formData.cv instanceof File)) {
        delete formDataCopy.cv;
      }

      if (!(this.formData.resume instanceof File)) {
        delete formDataCopy.resume;
      }

      if (!(this.formData.qualifications instanceof File)) {
        delete formDataCopy.qualifications;
      }

      this.formLoading = true;
      this.updateUser(formDataCopy)
        .then(resp => {
          this.formResponse = resp.data;
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
    },
    handleChangePassword() {
      const formDataCopy = Object.assign({}, this.passwordFormData);
      this.passwordFormResponse = {};
      this.passwordFormLoading = true;

      this.$store
        .dispatch("user/changePassword", formDataCopy)
        .then(resp => {
          this.passwordFormResponse = resp.data;
          this.$refs.passwordForm.reset();
        })
        .catch(err => {
          this.passwordFormResponse = err.data;
        })
        .finally(() => {
          this.passwordFormLoading = false;
        });
    },
    toggleModal(type) {
      this.modals[type].edit = false;
      this.modals[type].active = !this.modals[type].active;
    },
    activateEdit(type, item) {
      this.toggleModal(type);
      this.modals[type].edit = item;
    }
  },
  watch: {
    user(newVal) {
      this.resetFormData(newVal);
    }
  }
};
</script>

<style lang="scss">
.profile-title {
  font-size: 20px;
  width: 100%;
  line-height: 24px;
  font-weight: 600;
  margin: 15px 0 0 15px;
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
  padding: 15px 0;
  color: $primary-blue-dark;
}

.upgrade {
  border: 1px solid $light-grey;
  border-radius: 10px;
  padding: 25px;
  cursor: pointer;
  display: flex;

  .upgrade-title {
    font-size: 16px;
    font-weight: 700;
  }
  .updgrade-price {
    float: right;
    color: $primary-blue-dark;
  }
}
.profile-section {
  padding: 40px;
  border-radius: 10px;
}

.upgrade-icon {
  width: 30px;
  height: 50px;
  margin-right: 18px;
  max-width: 30px;
}
</style>
