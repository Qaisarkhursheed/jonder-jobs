<template>
  <v-row class="jobseeker-profile">
    <v-col sm="12" md="4" lg="3">
      <NavigationSidebar />
    </v-col>

    <v-col cols="col">
      <div class="user-profile">
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
          <h2 class="profile-title">
            {{ $t("changePersonalData") }}
          </h2>
          <p class="profile-subtitle">{{ $t("personalInfo") }}</p>

          <v-row>
            <!-- Avatar -->
            <v-col cols="6">
              <AvatarInput
                v-model="formData.profile_img"
                size="80"
                with-icon
                :user="$store.getters['user/user']"
              />
            </v-col>

            <!-- Save button -->
            <v-col cols="6" class="text-right">
              <v-btn
                :loading="formLoading"
                depressed
                color="primary"
                class="px-10"
                height="48"
                @click="handleUpdate"
                >{{ $t("save") }}
              </v-btn>
            </v-col>

            <!-- First name -->
            <v-col cols="12" sm="6">
              <label class="profile-label">
                {{ $t("firstName") }}
                <span style="color: red;">*</span>
              </label>
              <v-text-field
                v-model="formData.first_name"
                :rules="[validations.required]"
                outlined
                solo
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <!-- Last name -->
            <v-col cols="12" sm="6">
              <label class="profile-label">
                {{ $t("lastName") }}
                <span style="color: red;">*</span>
              </label>
              <v-text-field
                v-model="formData.last_name"
                :rules="[validations.required]"
                outlined
                solo
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <!-- Email -->
            <v-col cols="12" sm="6">
              <label class="profile-label">
                {{ $t("email") }}
                <span style="color: red;">*</span>
              </label>
              <v-text-field
                v-model="user.email"
                :rules="[validations.required]"
                disabled
                solo
                outlined
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <!-- Language picker -->
            <v-col cols="6">
              <label class="profile-label">{{ $t("language") }}</label>
              <LanguageDropdown />
            </v-col>

            <!-- City -->
            <v-col cols="12" sm="6">
              <label class="profile-label">
                {{ $t("city") }}
                <span style="color: red;">*</span>
              </label>
              <GooglePlacesInput
                v-model="formData.city"
                :types="['(cities)']"
                :rules="[validations.required]"
                hide-details="auto"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <label class="profile-label">
                <span style="visibility: hidden">.</span>
              </label>
              <v-checkbox
                class="mb-0 mt-2"
                :label="$t('showLocation')"
                hide-details="auto"
                v-model="formData.location_show"
              ></v-checkbox>
            </v-col>

            <v-col cols="12">
              <label class="profile-label">
                {{ $t("aboutMe") }}
              </label>
              <v-textarea
                v-model="formData.about_me"
                dense
                outlined
                rows="4"
                hide-details="auto"
                counter="250"
                maxlength="250"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat id="roleAndBranche" class="profile-section mb-10">
          <h2 class="profile-title mb-3">
            {{ $t("position") }} &amp; {{ $t("industry") }}
          </h2>

          <!-- <p class="profile-subtitle">
              Explanation goes here
            </p> -->

          <v-row>
            <!-- current_position -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("detailsAboutYouPosition") }}
                <span style="color: red;">*</span>
              </label>
              <v-autocomplete
                :attach="true"
                v-model="formData.current_position"
                :items="types.JOB_POSITION"
                item-value="id"
                :item-text="$i18n.locale"
                :rules="[validations.required]"
                outlined
                hide-details="auto"
                append-icon="mdi-chevron-down"
              >
              </v-autocomplete>
            </v-col>

            <!-- Branche -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("yourBranch") }}
                <span style="color: red;">*</span>
              </label>
              <v-autocomplete
                :attach="true"
                v-clearable-autocomplete
                v-model="formData.branche"
                item-value="id"
                :item-text="$i18n.locale"
                :items="types.JOB_BRANCHE"
                :rules="[
                  validations.min.selection(1),
                  validations.max.selection(3)
                ]"
                cache
                outlined
                multiple
                small-chips
                deletable-chips
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>

            <!-- looking_for_position -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("whatPosition") }}
                <span style="color: red;">*</span>
              </label>
              <v-autocomplete
                :attach="true"
                v-model="formData.looking_for_position"
                v-clearable-autocomplete
                :items="types.JOB_POSITION"
                item-value="id"
                :item-text="$i18n.locale"
                :rules="[
                  validations.min.selection(1),
                  validations.max.selection(5)
                ]"
                multiple
                outlined
                small-chips
                deletable-chips
                hide-details="auto"
                append-icon="mdi-chevron-down"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat id="status" class="profile-section mb-10">
          <h2 class="profile-title">
            {{ $t("yourStatus") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("yourStatusDescription") }}
          </p>

          <v-row>
            <!-- Status (job_search_status) -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("yourStatusSelect") }}
                <span style="color: red;">*</span>
              </label>
              <v-select
                :attach="true"
                v-model="formData.job_search_status"
                :rules="[validations.required]"
                :item-text="i => $t(i.text)"
                :items="types.JOB_SEARCH_STATUS"
                outlined
                cache-items
                hide-details="auto"
                append-icon="mdi-chevron-down"
              ></v-select>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat id="lookingFor" class="profile-section mb-10">
          <h2 class="profile-title">
            {{ $t("searchingFor") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("lookingForDesc") }}
          </p>

          <v-row>
            <!-- looking_for_employment_type -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("lookingForType") }}
                <span style="color: red;">*</span>
              </label>
              <v-select
                :attach="true"
                v-model="formData.looking_for_employment_type"
                :items="types.EMPLOYEMENT_TYPE"
                :rules="[validations.min.selection(1)]"
                :item-text="$i18n.locale"
                item-value="id"
                outlined
                multiple
                small-chips
                deletable-chips
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>

            <!-- address_to_work -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("likeToWork") }}
                <span style="color: red;">*</span>
              </label>
              <GooglePlacesInput
                v-model="formData.address_to_work"
                :types="['(cities)']"
                :rules="[
                  validations.min.selection(1),
                  validations.max.selection(5)
                ]"
                hide-details="auto"
                multiple
              />
              <v-checkbox
                :label="$t('remoteWork')"
                hide-details="auto"
                v-model="formData.work_remotely"
              ></v-checkbox>
            </v-col>

            <!-- ready_for_work -->
            <v-col cols="12" md="5">
              <label class="profile-label">
                {{ $t("whenCanYouStart") }}
              </label>
              <DatePicker
                v-model="formData.ready_for_work"
                :rules="
                  dontKnowWhenToStart || formData.ready_for_work_now
                    ? []
                    : [validations.required]
                "
                :disabled="dontKnowWhenToStart"
                min-this-month
                type="month"
                hide-details="auto"
              />
            </v-col>

            <!-- ready_for_work checkbox -->
            <v-col cols="12" md="7">
              <div class="d-flex">
                <v-checkbox
                  v-model="dontKnowWhenToStart"
                  :label="$t('iDontKnow')"
                  :disabled="!!formData.ready_for_work_now"
                  hide-details="auto"
                  class="mr-5 mt-0 mt-md-9"
                ></v-checkbox>
                <v-checkbox
                  v-model="formData.ready_for_work_now"
                  :label="$t('imAlreadyAvailable')"
                  :disabled="dontKnowWhenToStart"
                  hide-details="auto"
                  class="mt-0 mt-md-9"
                ></v-checkbox>
              </div>
            </v-col>

            <!-- Monthly salary slider -->
            <v-col cols="12">
              <div class="profile-label mb-2">
                {{ $t("salaryRequirement") }} (&euro;)
              </div>
              <SliderRangeInput
                :value="getMonthlySalary"
                min="1000"
                max="20000"
                step="500"
                @change="changeMonthlySalary"
              />
            </v-col>
          </v-row>
        </v-card>

        <v-card flat id="experienceAndEducation" class="profile-section mb-10">
          <h2 class="profile-title">
            {{ $t("experienceAndEducation") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("experienceAndEducationDesc") }}
          </p>

          <v-row>
            <!-- Working experience slider -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("workExperienceInYear") }}
              </label>
              <SliderInput
                :value="formData.working_experience"
                min="0"
                max="40"
                step="0.5"
                @change="value => (formData.working_experience = value)"
              />
            </v-col>

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

            <!-- Experience -->
            <v-col cols="12">
              <label class="profile-label">
                {{ $t("yourWorkExperience") }}
              </label>
              <CardActionableList
                type="Experience"
                @edit="activateEdit('experience', $event)"
              />
              <div @click="toggleModal('experience')" class="d-flex mt-4">
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
                  {{ $t("add") }}
                </div>
              </div>
            </v-col>

            <!-- Education -->
            <v-col cols="12">
              <label class="profile-label">{{ $t("yourEducation") }}</label>
              <CardActionableList
                type="Education"
                @edit="activateEdit('education', $event)"
              />
              <div @click="toggleModal('education')" class="d-flex mt-4">
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
                  {{ $t("add") }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat id="documents" class="profile-section mb-10">
          <h2 class="profile-title">
            {{ $t("documents") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("editDocuments") }}
          </p>

          <v-row>
            <!-- Documents -->
            <v-col cols="12">
              <div class="document-wrap">
                <v-alert dense text type="success">
                  {{ $t("supportedFileTypes") }}:
                  <strong>.pdf, .png, .jpg, .jpeg</strong> (10 MB max)
                </v-alert>
                <template v-if="formData.cvmaker_file">
                  <DocumentUploadSection
                    @change="e => (formData.cvmaker_file = e[0])"
                    @delete="removeDocument('cvmaker_file')"
                    type="Cv"
                    :value="formData.cvmaker_file"
                  />
                </template>
                <template v-else>
                  <DocumentUploadSection
                    @change="e => (formData.cv = e[0])"
                    @delete="removeDocument('cv')"
                    type="Cv"
                    :value="formData.cv"
                  />
                </template>
              </div>
              <div class="document-wrap">
                <DocumentUploadSection
                  @change="e => (formData.qualifications = e[0])"
                  @delete="removeDocument('qualifications')"
                  type="Qualifications"
                  :value="formData.qualifications"
                />
              </div>
              <div class="document-wrap">
                <DocumentUploadSection
                  @change="e => (formData.resume = e[0])"
                  @delete="removeDocument('resume')"
                  type="Resume"
                  :value="formData.resume"
                />
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat id="personalityTest" class="profile-section mb-10">
          <h2 class="profile-title">
            {{ $t("personalityTest.title") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("personalityTest.description") }}
          </p>
          <div class="psy-img">
            <v-img
              :src="require('@/assets/psychology.png')"
              max-height="55px"
              max-width="55px"
            />
          </div>
          <v-row>
            <v-col cols="12">
              <div>
                <div
                  v-if="user.personality_test && user.personality_test.id"
                  @click="goToPersonalityTestResult(user.personality_test.id)"
                >
                  <v-chip class="pointer" color="#0253B3" label outlined>
                    {{ $t("test") }} |
                    {{
                      user.personality_test.created_at
                        | moment("DD.MM.YYYY / HH:mm")
                    }}
                  </v-chip>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div
                @click="
                  $router.push({
                    name: 'PersonalityTestJobseeker'
                  })
                "
                class="d-flex"
              >
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
                  {{ $t("personalityTest.start") }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat id="invoices" class="profile-section mb-10">
          <h2 class="profile-title">
            {{ $t("billingInvoices") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("invoicesDesc") }}
          </p>

          <InvoicesListing :invoices="invoices || []" />
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
          <h2 class="profile-title">
            {{ $t("changePassword") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("passwordDesc") }}
          </p>

          <!-- Password change -->
          <v-form ref="passwordForm" v-model="passwordFormValid">
            <label class="profile-label">{{ $t("enterNewPassword") }}</label>
            <v-text-field
              v-model="passwordFormData.new_password"
              :rules="[validations.required, validations.password]"
              type="password"
              outlined
              solo
            ></v-text-field>

            <label class="profile-label">{{ $t("reEnterPassword") }}</label>
            <v-text-field
              v-model="passwordFormData.new_confirm_password"
              :rules="[validations.required]"
              type="password"
              solo
              outlined
            ></v-text-field>

            <label class="profile-label">{{ $t("enterOldPassword") }}</label>
            <v-text-field
              v-model="passwordFormData.current_password"
              :rules="[validations.required]"
              type="password"
              outlined
              solo
            ></v-text-field>

            <!-- Response alert -->
            <response-alert :response="passwordFormResponse"></response-alert>

            <v-btn
              :loading="passwordFormLoading"
              :disabled="!passwordFormValid"
              depressed
              large
              color="primary"
              class="pl-8 pr-8"
              @click="handleChangePassword"
              >{{ $t("changePassword") }}
            </v-btn>
          </v-form>
        </v-card>

        <v-card flat id="upgradeAccount" class="profile-section mb-10">
          <h2 class="profile-title">
            {{ $t("upgradeAccount") }}
          </h2>
          <p class="profile-subtitle">
            {{ $t("upgradeDesc") }}
          </p>

          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(plan, index) in plansData"
              :key="index"
            >
              <CardActionableList
                type="UpgradePlan"
                @edit="activateEdit('UpgradePlan', $event)"
              />
              <div
                class="upgrade px-3"
                :class="{ deactive: userPlan.length && isPlanActive(plan.id) }"
                @click="
                  !userPlan.length || !isPlanActive(plan.id)
                    ? activateEdit('UpgradePlan', { active_plan: plan.id })
                    : null
                "
              >
                <span
                  class="updgrade-price upgrade-title"
                  v-if="!isPlanActive(plan.id)"
                >
                  {{ plan.price }}&euro;
                </span>
                <div class="plan-content">
                  <v-img
                    max-width="50"
                    class="upgrade-icon ma-0"
                    :style="{
                      order:
                        userPlan && getUserPlanId(plan.id, 'id') === plan.id
                          ? 2
                          : 1
                    }"
                    :src="require(`@/assets/plan-icons/${plan.plan_slug}.svg`)"
                  ></v-img>

                  <div
                    class="upgrade-default"
                    v-if="!userPlan.length || !isPlanActive(plan.id)"
                  >
                    <span class="upgrade-title">
                      {{ plan.name }}
                    </span>
                    <p>{{ $t("nDaysActive", { n: plan.days_valid }) }}</p>
                  </div>
                  <UserPlanDescription
                    :plan="getUserPlan(plan.id)[0]"
                    :payment-info="false"
                    :payment-actions="false"
                    v-else
                  />
                </div>
                <CancelSubscription
                  v-if="
                    userPlan.length &&
                      isPlanActive(plan.id) &&
                      getUserPlanId(plan.id, 'renewal')
                  "
                  :id="plan.id"
                />
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!-- Response alert -->
        <response-alert :response="formResponse"></response-alert>

        <div class="text-right">
          <v-btn
            :loading="formLoading"
            depressed
            color="primary"
            class="px-10"
            height="48"
            @click="handleUpdate"
            >{{ $t("save") }}
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import types from "@/types";
import CardActionableList from "@/components/user/JobseekerCardActionableList";
import UpgradePlanModal from "@/views/dashboard/UpgradePlanModal";
// import Calendar from "@/components/Calendar";
import AddNewCard from "@/views/dashboard/AddNewCard";
import ResponseAlert from "@/components/ResponseAlert";
import ModalEducation from "@/components/auth/manualOnboardingSteps/ModalEducation";
import ModalExperience from "@/components/auth/manualOnboardingSteps/ModalExperience";
import DocumentUploadSection from "@/components/DocumentUploadSection.vue";
import UserPlanDescription from "@/components/user/UserPlanDescription";
import SliderInput from "@/components/SliderInput.vue";
import SliderRangeInput from "@/components/SliderRangeInput";
import LanguageDropdown from "@/components/LanguageDropdown";
import CancelSubscription from "@/components/plans/CancelSubscription";
import AvatarInput from "@/components/controls/AvatarInput";
import InvoicesListing from "@/components/InvoicesListing";
import GooglePlacesInput from "@/components/controls/GooglePlacesInput";
import NavigationSidebar from "@/components/jobseeker/NavigationSidebar";
import DatePicker from "@/components/controls/DatePicker";

export default {
  components: {
    CancelSubscription,
    SliderRangeInput,
    UserPlanDescription,
    UpgradePlanModal,
    CardActionableList,
    // Calendar,
    AddNewCard,
    ResponseAlert,
    ModalEducation,
    ModalExperience,
    DocumentUploadSection,
    SliderInput,
    LanguageDropdown,
    AvatarInput,
    InvoicesListing,
    GooglePlacesInput,
    NavigationSidebar,
    DatePicker
  },

  data: () => ({
    formData: {
      first_name: "",
      last_name: "",
      profile_img: null,
      about_me: "",
      city: "",
      current_position: "",
      branche: "",
      looking_for_position: [],
      // looking_for_branche: [],
      looking_for_employment_type: "",
      address_to_work: [],
      ready_for_work: "",
      ready_for_work_now: false,
      monthly_salary: null,
      working_experience: "",
      job_search_status: "",
      cv: null,
      cvmaker_file: null,
      qualifications: null,
      resume: null,
      location_show: false,
      work_remotely: false
    },
    formResponse: {},
    formLoading: false,
    passwordFormData: {},
    passwordFormValid: false,
    passwordFormLoading: false,
    passwordFormResponse: {},
    dontKnowWhenToStart: false,
    invoices: [],
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

  computed: {
    ...mapGetters("user", [
      "user",
      "getUserFullName",
      "getUserInitials",
      "userPlan",
      "plans",
      "isPlanActive",
      "getUserPlan"
    ]),
    types() {
      return types;
    },
    plansData() {
      return this.plans("jobseeker_plan");
    },
    getMonthlySalary() {
      const monthly_salary = this.formData.monthly_salary;
      const min = monthly_salary.min;
      const max = monthly_salary.max;
      return [min, max];
    }
  },
  watch: {
    user(newVal) {
      this.resetFormData(newVal);
    }
  },

  created() {
    this.resetFormData(this.user);
    // this.$store.dispatch("personalityTest/FETCH_USER_TESTS", this.user.id);
    this.$store.dispatch("invoices/fetchInvoices").then(resp => {
      this.invoices = resp.data.data;
      this.invoices = this.invoices.filter(i => i.status === "complete");
    });
    this.$store.dispatch("professions/fetch");
  },

  methods: {
    ...mapActions("user", ["updateUser"]),
    resetFormData(user) {
      if (!user) return;
      this.formData.first_name = user.first_name;
      this.formData.last_name = user.last_name;
      this.formData.profile_img = user.profile_img;
      this.formData.about_me = user.about_me;
      this.formData.current_position = parseInt(user.current_position);
      this.formData.city = user.city;
      this.formData.branche = user.branche;
      this.formData.looking_for_position = user.looking_for_position;
      //this.formData.looking_for_branche = user.looking_for_branche.split(",");
      this.formData.looking_for_employment_type =
        user.looking_for_employment_type;
      this.formData.address_to_work = user.address_to_work || [];
      this.formData.ready_for_work = user.ready_for_work;
      this.formData.ready_for_work_now = user.ready_for_work_now;
      this.formData.monthly_salary = user.monthly_salary;
      this.formData.working_experience = user.working_experience;
      this.formData.cv = user.cv;
      this.formData.cvmaker_file = user.cvmaker_file || null;
      this.formData.qualifications = user.qualifications;
      this.formData.resume = user.resume;
      this.formData.job_search_status = user.job_search_status;
      this.formData.location_show = user.location_show;
      this.formData.work_remotely = user.work_remotely;
      this.dontKnowWhenToStart =
        !user.ready_for_work && !user.ready_for_work_now;
    },
    handleUpdate() {
      this.formResponse = {};
      let formDataCopy = {
        ...this.formData
      };

      if (this.dontKnowWhenToStart) {
        formDataCopy.ready_for_work = null;
      }

      if (!(formDataCopy.profile_img instanceof File)) {
        delete formDataCopy.profile_img;
      }

      ["cv", "resume", "qualifications", "cvmaker_file"].forEach(key => {
        if ((!(this.formData[key] instanceof File))) {
          delete formDataCopy[key];
        }
      });

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
            this.$router.push({
              name: "Login",
              query: { changePassword: "1" }
            });
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
    changeMonthlySalary(event) {
      this.formData.monthly_salary = {
        min: parseInt(event[0].toString()),
        max: parseInt(event[1].toString())
      };
    },
    getUserPlanId(id, name) {
      const plan = this.getUserPlan(id)[0];
      return plan ? plan[name] : null;
    },
    goToPersonalityTestResult(id) {
      this.$router.push({
        name: "PersonalityTestJobseekerResult",
        params: {
          testid: id
        }
      });
    },
    removeDocument(type) {
      this.$store.dispatch('user/removeDocument', {
        user: this.user.id,
        documentType: type
      });
    }
  }
};
</script>

<style lang="scss">
.jobseeker-profile {
  .profile-title {
    font-size: 20px;
    width: 100%;
    line-height: 24px;
    font-weight: 600;
  }

  .profile-subtitle {
    width: 100%;
  }

  .profile-label {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  #personality-test {
    position: relative;
  }

  .psy-img {
    position: absolute;
    top: 28px;
    right: 28px;
  }
}
</style>
