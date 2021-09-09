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
          {{ $t("user.dashboard.changePersonalData") }}
        </p>
        <p class="profile-subtitle">{{ $t("user.dashboard.personalData") }}</p>
        <v-col cols="6">
          <div class="d-flex align-center">
            <v-avatar
              color="primary"
              size="80"
              class="flex-grow-0 flex-shrink-0"
            >
              <!-- <input
                type="file"
                ref="uploadAvatarInput"
                style="display: none"
                @change="newImage = $event.target.files[0]"
              /> -->
              <input
                type="file"
                ref="uploadAvatarInput"
                style="display: none"
                @change="cropper.image = $event.target.files"
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
            <ImageUploadCropper 
              :image="cropper.image"
              @save="(img) => { newImage = img; }"
            />
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn
            :loading="formLoading"
            depressed
            color="primary"
            class="pl-8 pr-8 dark-blue"
            @click="handleUpdate"
            >{{ $t("general.save") }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
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
        <v-col cols="12" sm="6">
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
        <v-col cols="12" sm="6">
          <label class="profile-label">E-mail</label>
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
      <v-row>
        <v-col cols="12" sm="6">
          <v-checkbox
            class="mb-0 mt-0"
            :label="$t('user.dashboard.showLocation')"
            hide-details="auto"
            v-model="formData.location_show"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="roleAndBranche" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          Position & Branche
        </p>
        <!-- <p class="profile-subtitle">
          Explanation goes here
        </p> -->
        <v-col cols="12">
          <label class="profile-label">{{
            $t("user.profile.yourBranch")
          }}</label>
          <v-autocomplete
            v-clearable-autocomplete
            v-model="formData.branche"
            :items="types.JOB_BRANCHE"
            cache
            outlined
            multiple
            flat
            hide-no-data
            :hide-details="true"
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label">{{
            $t("user.profile.whatPosition")
          }}</label>
          <v-autocomplete
            v-model="formData.looking_for"
            v-clearable-autocomplete
            :items="$store.getters['professions/items']"
            multiple
            outlined
            flat
            hide-no-data
            :hide-details="true"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="status" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          {{ $t("user.profile.yourStatus") }}
        </p>
        <p class="profile-subtitle">
          {{ $t("user.profile.yourStatusDescription") }}
        </p>
        <v-col cols="12">
          <label class="profile-label">
            {{ $t("user.profile.yourStatusSelect") }}
          </label>
          <v-select
            v-model="formData.why_jonder"
            :rules="[validations.required]"
            :items="jonderStatus"
            background-color="white"
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="lookingFor" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          {{ $t("user.profile.experienceAndEducation") }}
        </p>
        <p class="profile-subtitle">
          {{ $t("user.profile.experienceAndEducationDesc") }}
        </p>
        <!-- <v-col cols="12">
          <label class="profile-label"
            >Welche Art von Branchen suchen Sie?</label
          >
          <v-autocomplete
            v-model="formData.looking_for_branche"
            :items="types.JOB_BRANCHE"
            v-clearable-autocomplete
            multiple
            cache
            outlined
            flat
            hide-no-data
            :hide-details="true"
          ></v-autocomplete>
        </v-col> -->
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label">
            {{ $t("user.profile.lookingForType") }}</label
          >
          <v-select
            outlined
            :items="types.EMPLOYEMENT_TYPE"
            background-color="white"
            v-model="formData.looking_for_employment_type"
            multiple
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">
            {{ $t("user.profile.likeToWork") }}</label
          >
          <GooglePlacesAutocomplete
            :value="formData.address_to_work"
            @select="e => (formData.address_to_work = e)"
          />
          <v-checkbox
            class="mb-0 mt-0"
            :label="$t('user.profile.remoteWork')"
            hide-details="auto"
            v-model="formData.work_remotely"
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <label class="profile-label">{{
            $t("user.profile.whenCanYouStart")
          }}</label>
          <Calendar
            v-if="!dontKnowWhenToStart"
            @setDate="formData.ready_for_work = $event"
            :rules="[validations.required]"
            :value="formData.ready_for_work"
            hide-details="auto"
          />

          <v-checkbox
            v-model="dontKnowWhenToStart"
            :label="$t('user.profile.iDontKnow')"
            class="mt-2 mb-3"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="10">
          <div class="profile-label mb-2">
            {{ $t("user.profile.salaryRequirement") }} (€)
          </div>
          <SliderInput
            :value="formData.monthly_salary"
            suffix="k"
            min="1"
            max="20"
            step="0.5"
            @change="value => (formData.monthly_salary = value)"
          />
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="experienceAndEducation" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          {{ $t("user.profile.canStart") }}
        </p>
        <p class="profile-subtitle">
          {{ $t("user.profile.experienceAndEducationDesc") }}
        </p>
        <v-col cols="10">
          <label class="profile-label">Berufserfahrungen in Jahren </label>
          <SliderInput
            :value="formData.working_experience"
            min="0"
            max="40"
            step="0.5"
            @change="value => (formData.working_experience = value)"
          />
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
          <label class="profile-label">{{
            $t("user.profile.yourWorkExperience")
          }}</label>
          <CardActionableList
            type="Experience"
            @edit="activateEdit('experience', $event)"
          />
          <div @click="toggleModal('experience')" class="d-flex">
            <v-btn
              rounded
              outlined
              color="#0253B3"
              height="26"
              width="26"
              style="cursor: pointer;"
              fab
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <div
              class="ml-1"
              style="cursor: pointer; color: #0253B3; font-weight:600"
            >
              {{ $t("user.onboarding.add") }}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label class="profile-label">{{
            $t("user.profile.yourEducation")
          }}</label>
          <CardActionableList
            type="Education"
            @edit="activateEdit('education', $event)"
          />
          <div @click="toggleModal('education')" class="d-flex">
            <v-btn
              rounded
              outlined
              color="#0253B3"
              height="26"
              width="26"
              style="cursor: pointer;"
              fab
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <div
              class="ml-1"
              style="cursor: pointer; color: #0253B3; font-weight:600"
            >
              {{ $t("user.onboarding.add") }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat id="documents" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          {{ $t("user.profile.documents") }}
        </p>
        <p class="profile-subtitle">
          {{ $t("user.profile.editDocuments") }}
        </p>
        <v-col cols="12">
          <div class="mt-6">
            <div class="document-wrap">
              <DocumentUploadSection
                @change="e => (formData.cv = e[0])"
                type="Cv"
                :value="formData.cv"
              />
            </div>
            <div class="document-wrap">
              <DocumentUploadSection
                @change="e => (formData.qualifications = e[0])"
                type="Qualifications"
                :value="formData.qualifications"
              />
            </div>
            <div class="document-wrap">
              <DocumentUploadSection
                @change="e => (formData.resume = e[0])"
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
          {{ $t("user.profile.invoicing") }}
        </p>
        <p class="profile-subtitle">
          {{ $t("user.profile.invoicesDesc") }}
        </p>
      </v-row>

      <v-row v-for="item in invoices" :key="item.id" class="invoice-row py-1">
        <v-col>
          <div class="invoice-number">
            Nummer der Rechnung:: {{ item.invoice_number }}
          </div>
          <div class="invoice-date">
            Date of invoice:
            {{ item.transaction_completed_at | moment("DD.MM.YYYY / HH:mm") }}
          </div>
        </v-col>
        <v-col cols="auto d-flex align-center">
          <v-img
            class="hover-pointer"
            :src="require('@/assets/icons/download.svg')"
            @click="
              $store.dispatch('invoices/downloadInvoice', {
                id: item.id,
                number: item.invoice_number
              })
            "
          ></v-img>
        </v-col>
      </v-row>
    </v-card>

    <!-- <v-card flat id="paymentMethod" class="profile-section mb-10">
      <v-row>
        <CardActionableList
          type="AddNewCard"
          @edit="activateEdit('AddNewCard', $event)"
        />
        <p class="profile-title">
          Edit payment method
        </p> -->
    <!-- <p class="profile-subtitle">
          Explanation goes here
        </p> -->

    <!-- <v-btn
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
    </v-card> -->

    <v-card flat id="changePassword" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          {{ $t("user.profile.changePassword") }}
        </p>
        <p class="profile-subtitle">
          {{ $t("user.profile.passwordDesc") }}
        </p>
      </v-row>

      <v-form ref="passwordForm" v-model="passwordFormValid">
        <label class="profile-label">{{
          $t("user.profile.enterNewPassword")
        }}</label>
        <v-text-field
          v-model="passwordFormData.new_password"
          dense
          type="password"
          outlined
          :rules="[validations.required, validations.min.string(6)]"
          background-color="white"
        ></v-text-field>

        <label class="profile-label">{{
          $t("user.profile.reEnterPassword")
        }}</label>
        <v-text-field
          v-model="passwordFormData.new_confirm_password"
          dense
          type="password"
          outlined
          :rules="[validations.required]"
          background-color="white"
        ></v-text-field>

        <label class="profile-label">{{
          $t("user.profile.enterOldPassword")
        }}</label>
        <v-text-field
          v-model="passwordFormData.current_password"
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
              >Passwort ändern
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>

    <v-card flat id="upgradeAccount" class="profile-section mb-10">
      <v-row>
        <p class="profile-title">
          {{ $t("user.profile.upgradeAccount") }}
        </p>
        <p class="profile-subtitle">
          {{ $t("user.profile.upgradeDesc") }}
        </p>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" v-for="(plan, index) in plansData" :key="index">
          <CardActionableList
            type="UpgradePlan"
            @edit="activateEdit('UpgradePlan', $event)"
          />
          <div
            class="upgrade"
            :class="{ deactive: userPlan && userPlan.id === plan.id }"
            @click="
              !userPlan || userPlan.id !== plan.id
                ? toggleModal('UpgradePlan')
                : null
            "
          >
            <v-img
              class="upgrade-icon"
              :style="{ order: userPlan && userPlan.id === plan.id ? 2 : 1 }"
              :src="
                require(`@/assets/icons/${
                  index === 0 ? 'top-rated' : 'medal'
                }.svg`)
              "
            ></v-img>

            <div
              class="upgrade-default"
              v-if="!userPlan || userPlan.id !== plan.id"
            >
              <span class="upgrade-title">
                {{ plan.name }}
              </span>
              <p>{{ plan.days_valid }} days active</p>
              <span class="updgrade-price upgrade-title"
                >{{ plan.price }}&euro;</span
              >
            </div>
            <UserPlanDescription :payment-info="false" v-else />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import types from "@/types";
import CardActionableList from "@/components/user/JobseekerCardActionableList";
import UpgradePlanModal from "@/views/dashboard/UpgradePlanModal";
import Calendar from "@/components/Calendar";
import AddNewCard from "@/views/dashboard/AddNewCard";
import ResponseAlert from "@/components/ResponseAlert";
import ModalEducation from "@/components/auth/manualOnboardingSteps/ModalEducation";
import ModalExperience from "@/components/auth/manualOnboardingSteps/ModalExperience";
import DocumentUploadSection from "@/components/DocumentUploadSection.vue";
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete.vue";
import UserPlanDescription from "../../../components/user/UserPlanDescription";
import SliderInput from "@/components/SliderInput.vue";
import ImageUploadCropper from "@/components/ImageUploadCropper";

export default {
  name: "Profile",

  components: {
    UserPlanDescription,
    UpgradePlanModal,
    CardActionableList,
    Calendar,
    AddNewCard,
    ResponseAlert,
    ModalEducation,
    ModalExperience,
    DocumentUploadSection,
    GooglePlacesAutocomplete,
    SliderInput,
    ImageUploadCropper
  },

  data: () => ({
    newImage: null,
    formData: {
      first_name: "",
      last_name: "",
      branche: "",
      looking_for: [],
      // looking_for_branche: [],
      looking_for_employment_type: "",
      address_to_work: "",
      ready_for_work: "",
      monthly_salary: "",
      working_experience: "",
      why_jonder: "",
      cv: null,
      qualifications: null,
      resume: null,
      location_show: "",
      work_remotely: ""
    },
    formResponse: {},
    formLoading: false,
    passwordFormData: {},
    passwordFormValid: false,
    passwordFormLoading: false,
    passwordFormResponse: {},
    dontKnowWhenToStart: false,
    invoices: [],
    cropper: {
      active: false,
      image: null
    },
    jonderStatus: [
      "I am actively looking for a job",
      "I am open to an interesting offer",
      "I am just curious"
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
    this.$store.dispatch("invoices/fetchInvoices").then(resp => {
      this.invoices = resp.data.data;
      this.invoices = this.invoices.filter(i => i.status === "complete");
    });
    this.$store.dispatch("professions/fetch");
  },
  computed: {
    ...mapGetters("user", [
      "user",
      "getUserFullName",
      "getUserInitials",
      "userPlan",
      "plans"
    ]),
    profile_img() {
      if (this.newImage) {
        // return this.newImage.canvas.toDataURL("image/jpeg" );
        return URL.createObjectURL(this.newImage);
      }

      return this.user.profile_img;
    },
    types() {
      return types;
    },
    plansData() {
      return this.plans("jobseeker_paln");
    }
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    resetFormData(user) {
      if (!user) return;
      this.formData.first_name = user.first_name;
      this.formData.last_name = user.last_name;
      //this.formData.email = user.email;
      this.formData.branche = user.branche.split(",");
      this.formData.looking_for = user.looking_for;
      //this.formData.looking_for_branche = user.looking_for_branche.split(",");
      this.formData.looking_for_employment_type = user.looking_for_employment_type.split(
        ","
      );
      this.formData.address_to_work = user.address_to_work;
      this.formData.ready_for_work = user.ready_for_work;
      this.formData.monthly_salary = user.monthly_salary;
      this.formData.working_experience = user.working_experience;
      this.formData.cv = user.cv;
      this.formData.qualifications = user.qualifications;
      this.formData.resume = user.resume;
      this.formData.why_jonder = user.why_jonder;
      this.formData.location_show = user.location_show;
      this.formData.work_remotely = user.work_remotely;
      this.dontKnowWhenToStart = !user.ready_for_work;
    },
    handleUpdate() {
      this.formResponse = {};
      let formDataCopy = Object.assign({}, this.formData);
      formDataCopy.branche = formDataCopy.branche.join();
      //formDataCopy.looking_for_branche = formDataCopy.looking_for_branche.join();
      formDataCopy.looking_for_employment_type = this.formData.looking_for_employment_type.join();
      if (this.dontKnowWhenToStart) {
        this.formData.ready_for_work = null;
        formDataCopy.ready_for_work = "null";
      }

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

          this.$store.dispatch("auth/logout").then(() => {
            this.$router.push({ name: "Login", query: { changePassword: 1 } });
          });
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
    },
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
  position: relative;

  &.deactive {
    cursor: default;
  }
  .upgrade-title {
    font-size: 16px;
    font-weight: 700;
  }
  .updgrade-price {
    color: $primary-blue-dark;
    position: absolute;
    right: 25px;
    bottom: 23px;
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

.document-wrap {
  width: 70%;
}
.upgrade-default {
  order: 1;
  p {
    font-size: 11px;
  }
}
.plan-description {
  order: 1;
  h3 {
    font-size: 16px;
    font-weight: 700;
  }
  > div {
    color: #252525;
    font-size: 11px;
    b {
      color: #27aae1;
    }
    &.payment-info {
      color: #27aae1 !important;
      font-weight: 600;
      > span {
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 800px) {
  .document-wrap {
    width: 100%;
  }
}
</style>
