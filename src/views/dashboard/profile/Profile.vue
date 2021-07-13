<template>
  <div>
    <UpgradePlanModal v-if="modals.UpgradePlan.active" :active="modals.UpgradePlan.active"
      :edit="modals.UpgradePlan.edit"
      @close="toggleModal('UpgradePlan')" />
    <AddNewCard v-if="modals.AddNewCard.active" :active="modals.AddNewCard.active"
      :edit="modals.AddNewCard.edit"
      @close="toggleModal('AddNewCard')" />


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
          <v-select
            outlined
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
            :items="lookingForRole"
            background-color="white"
            v-model="formData.looking_for"
          ></v-select>
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
          <v-select
            outlined
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
          <Calendar @setDate="formData.ready_for_work = $event"
            :value="formData.ready_for_work" />
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
    </v-card>

    <v-card flat id="experienceAndEducation" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
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
          <!-- todo actions and popup -->
          <CardActionableList type="Experience" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">Your education</label>
           <CardActionableList type="Education" />
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
          <CardActionableList type="AddNewCard"
              @edit="activateEdit('AddNewCard', $event)" />
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

    <v-card flat id="changePassword"  class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
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
          <CardActionableList type="UpgradePlan"
              @edit="activateEdit('UpgradePlan', $event)" />
          <div class="upgrade" @click="toggleModal('UpgradePlan')">
            <v-img class="upgrade-icon"
            :src="require('@/assets/icons/top-rated.svg')"></v-img>

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
          <CardActionableList type="UpgradePlan"
              @edit="activateEdit('UpgradePlan', $event)" />
          <div class="upgrade" @click="toggleModal('UpgradePlan')">
            <v-img class="upgrade-icon"
            :src="require('@/assets/icons/medal.svg')"></v-img>

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

import CardActionableList from '@/components/user/JobseekerCardActionableList';
import UpgradePlanModal from '@/views/dashboard/UpgradePlanModal';
import Calendar from '@/components/Calendar';
import AddNewCard from '@/views/dashboard/AddNewCard';

export default {
  name: "Profile",

  components: {
    UpgradePlanModal,
    CardActionableList,
    Calendar,
    AddNewCard
  },

  data: () => ({
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
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ],
    branche: [
      "Medicine",
      "Automotive industry",
      "Mechanical engineering",
      "Chemical-pharmaceutical industry",
      "Food industry",
      "Electrical engineering industry",
    ],
    lookingForRole: [      
     "Developer",
     "Project Manager",
     "Construction manager",
     "Intern",
     "Apprentice",
     "Manager",
    ],
    lookingForBranches: [      
     "Developer",
     "Project Manager",
     "Construction manager",
     "Intern",
     "Apprentice",
     "Manager",
    ],
    employment: [
      "Trainee",
      "Fulltime",
      "Parttime",
    ],
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
    },
    fileActions: {
      UpgradePlan: ['edit', 'delete'],
      AddNewCard: ['edit', 'delete'],
    },
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
        .catch(err => {
          alert(err.data.message);
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
  padding: 25px 0;
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
