<template>
  <v-container fluid class="company-settings pa-0">
    <AddNewCard
      v-if="modals.AddNewCard.active"
      :active="modals.AddNewCard.active"
      :edit="modals.AddNewCard.edit"
      @close="toggleModal('AddNewCard')"
    />

    <!-- Header -->
    <Header></Header>

    <!-- Back to home button -->
    <div class="text-center py-3" style="border-top: 1px solid #E3E3E4;">
      <v-btn
        color="primary"
        depressed
        large
        @click="$router.push('/company-dashboard')"
      >
        {{ $t("backToHome") }}
      </v-btn>
    </div>

    <!-- Main -->
    <v-row class="main ma-0">
      <!-- Left nav -->
      <v-col class="col-12 col-sm-4 col-xl-3">
        <nav class="dashboard-navigation">
          <v-card flat class="settings-nav" style="margin-top: 12px">
            <div class="settings-title">
              {{ $t("profileSettings") }}
            </div>
            <div class="submenu">
              <div @click="scrollToSection('personalInfo')" class="nav-item">
                {{ $t("personalInformation") }}
              </div>
              <div @click="scrollToSection('invoices')" class="nav-item">
                {{ $t("billingInvoices") }}
              </div>
              <div @click="scrollToSection('payment')" class="nav-item">
                {{ $t("billing") }}
              </div>
              <div @click="scrollToSection('changePassword')" class="nav-item">
                {{ $t("changePassword") }}
              </div>
            </div>
          </v-card>
        </nav>
      </v-col>

      <!-- Right side -->
      <v-col class="col-12 col-sm-8 col-xl-9">
        <v-container fluid class="d-flex flex-column">
          <!-- Response alert -->
          <response-alert :response="formResponse"></response-alert>

          <!-- Personal info -->
          <v-card flat id="personalInfo" class="profile-section mb-10">
            <v-row>
              <p class="profile-title">
                {{ $t("changePersonalInfo") }}
              </p>
              <p class="profile-subtitle">
                <!-- Explanation goes here
              </p> -->
              </p>
            </v-row>

            <v-form v-model="formValid">
              <v-row>
                <v-col cols="6">
                  <label class="profile-label">{{ $t("firstName") }}</label>
                  <v-text-field
                    dense
                    :label="$t('firstName')"
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
                  <label class="profile-label">{{ $t("lastName") }}</label>
                  <v-text-field
                    dense
                    :label="$t('lastName')"
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
                  <label class="profile-label">{{ $t("email") }}</label>
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
                <v-col cols="6">
                  <label class="profile-label">{{ $t("language") }}</label>
                  <LanguageDropdown />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-btn
                    :disabled="!formValid"
                    depressed
                    large
                    color="primary"
                    class="px-8"
                    @click="handleUpdate"
                    >{{ $t("save") }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <!-- Billing & Invoices -->
          <v-card flat id="invoices" class="profile-section mb-10">
            <v-row>
              <p class="profile-title">
                {{ $t("billingInvoices") }}
              </p>
              <!-- <p class="profile-subtitle">
                Explanation goes here
              </p> -->
            </v-row>

            <v-row
              v-for="item in invoices"
              :key="item.id"
              class="invoice-row py-1"
            >
              <v-col>
                <div class="invoice-number">
                  {{ $t("numberOfInvoice") }}: {{ item.invoice_number }}
                </div>
                <div class="invoice-date">
                  Date of invoice:
                  {{
                    item.transaction_completed_at | moment("DD.MM.YYYY / HH:mm")
                  }}
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

          <!-- Payment -->
          <v-card flat id="payment" class="profile-section mb-10">
            <v-row>
              <p class="profile-title">
                {{ $t("editPaymentMethod") }}
              </p>
              <!-- <p class="profile-subtitle">
                Explanation goes here
              </p> -->
            </v-row>
            <!-- left hardcoded -->
            <v-row class="payment-card pa-3">
              <v-col>
                <div class="card-name">Master card ****3660</div>
                <div class="card-expiration">Expires 02/24</div>
              </v-col>
              <v-col cols="auto">
                <v-img :src="require('@/assets/icons/three-dots.svg')"></v-img>
              </v-col>
            </v-row>

            <div class="mt-7">
              <v-btn
                @click="toggleModal('AddNewCard')"
                outlined
                rounded
                color="#0253B3"
              >
                <v-icon left>mdi-plus</v-icon>
                {{ $t("addNewCard") }}
              </v-btn>
            </div>
          </v-card>

          <!-- Password -->
          <v-card flat id="changePassword" class="profile-section mb-10">
            <v-row class="mb-0">
              <p class="profile-title">
                {{ $t("changePassword") }}
              </p>
              <!-- <p class="profile-subtitle">
                Explanation goes here
              </p> -->
            </v-row>

            <v-form ref="passwordForm" v-model="passwordFormValid">
              <label class="profile-label">{{ $t("enterNewPassword") }}</label>
              <v-text-field
                v-model="passwordFormData.new_password"
                dense
                solo
                type="password"
                outlined
                :rules="[validations.required, validations.password]"
                background-color="white"
              ></v-text-field>

              <label class="profile-label">{{ $t("reEnterPassword") }}</label>
              <v-text-field
                v-model="passwordFormData.new_confirm_password"
                dense
                solo
                type="password"
                outlined
                :rules="[validations.required]"
                background-color="white"
              ></v-text-field>

              <label class="profile-label">{{ $t("enterOldPassword") }}</label>
              <v-text-field
                v-model="passwordFormData.current_password"
                dense
                solo
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
                    :disabled="!passwordFormValid"
                    depressed
                    large
                    color="primary"
                    class="pl-8 pr-8"
                    @click="handleChangePassword"
                    >{{ $t("changePassword") }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <!-- Response alert -->
          <response-alert :response="formResponse"></response-alert>

          <div class="text-right mb-10">
            <v-btn
              :disabled="!formValid"
              depressed
              large
              color="primary"
              class="px-8"
              @click="handleUpdate"
              >{{ $t("save") }}
            </v-btn>
          </div>

          <UserPlan
            v-if="$store.getters['user/userPlan']"
            :payment-info="true"
            :border-plan="true"
          />
        </v-container>
      </v-col>
    </v-row>

    <!-- Footer hardcoded -->
    <div class="footer text-center py-4" style="border-top: 1px solid #E3E3E4;">
      <a href="#">Impressum</a>
      -
      <a href="#">Datenschutz</a>
      -
      <a href="#">AGB</a>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "@/components/company/Header";
import AddNewCard from "@/views/dashboard/AddNewCard";
import UserPlan from "../../components/user/UserPlan";
import LanguageDropdown from "@/components/LanguageDropdown";

export default {
  components: {
    UserPlan,
    Header,
    AddNewCard,
    LanguageDropdown
  },
  data() {
    return {
      formData: {},
      formValid: false,
      formResponse: {},
      passwordFormData: {},
      passwordFormValid: false,
      passwordFormResponse: {},
      invoices: [],
      modals: {
        AddNewCard: {
          active: false,
          edit: false,
          component: AddNewCard
        }
      },
      fileActions: {
        AddNewCard: ["edit", "delete"]
      }
    };
  },
  computed: {
    ...mapGetters("user", ["user"])
  },
  created() {
    this.fillData();
    this.$store.dispatch("invoices/fetchInvoices").then(resp => {
      this.invoices = resp.data.data;
      this.invoices = this.invoices.filter(i => i.status == "complete");
    });
  },
  methods: {
    ...mapActions("user", ["updateCompany"]),
    ...mapActions("user", ["changePassword"]),
    fillData() {
      const user = this.user;
      if (!user) return;
      this.passwordFormData.new_confirm_password = "";
      this.passwordFormData.new_password = "";
      this.passwordFormData.current_password = "";
      this.formData.first_name = user.first_name;
      this.formData.last_name = user.last_name;
      //this.formData.email = user.email;
      this.formData.branche = user.branche;
    },
    handleUpdate() {
      const formDataCopy = Object.assign({}, this.formData);
      this.formResponse = {};

      this.updateCompany(formDataCopy)
        .then(resp => {
          this.formResponse = resp.data;
        })
        .catch(err => {
          this.formResponse = err.data;
        });
    },
    handleChangePassword() {
      const formDataCopy = Object.assign({}, this.passwordFormData);
      this.passwordFormResponse = {};

      this.changePassword(formDataCopy)
        .then(resp => {
          this.passwordFormResponse = resp.data;
          this.$refs.passwordForm.reset();

          this.$store.dispatch("auth/logout").then(() => {
            this.$router.push({ name: "Login", query: { changePassword: 1 } });
          });
        })
        .catch(err => {
          this.passwordFormResponse = err.data;
        });
    },
    scrollToSection(profileSection) {
      document
        .getElementById(profileSection)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    },
    toggleModal(type) {
      this.modals[type].edit = false;
      this.modals[type].active = !this.modals[type].active;
    },
    activateEdit(type, item) {
      this.toggleModal(type);
      this.modals[type].edit = item;
    }
  }
};
</script>

<style lang="scss">
.company-settings {
  .profile-section {
    padding: 40px;
  }
}
</style>
