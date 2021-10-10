<template>
  <div class="employer-profile">
    <AddNewCard
      v-if="modals.AddNewCard.active"
      :active="modals.AddNewCard.active"
      :edit="modals.AddNewCard.edit"
      @close="toggleModal('AddNewCard')"
    />

    <!-- Main -->
    <v-row class="main ma-0">
      <!-- Left nav -->
      <v-col sm="12" md="4" lg="3">
        <v-card flat class="sidebar-nav" tag="nav">
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
            <!-- <div @click="scrollToSection('payment')" class="nav-item">
              {{ $t("billing") }}
            </div> -->
            <div @click="scrollToSection('changePassword')" class="nav-item">
              {{ $t("changePassword") }}
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Right side -->
      <v-col cols="col">
        <!-- Response alert -->
        <response-alert :response="formResponse"></response-alert>

        <!-- Personal info -->
        <v-card flat id="personalInfo" class="profile-section mb-10">
          <p class="profile-title">
            {{ $t("changePersonalInfo") }}
          </p>
          <p class="profile-subtitle">
            <!-- Explanation goes here
            </p> -->
          </p>

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
          <p class="profile-title">
            {{ $t("billingInvoices") }}
          </p>
          <!-- <p class="profile-subtitle">
              Explanation goes here
            </p> -->

          <InvoicesListing :invoices="invoices || []" />
        </v-card>

        <!-- Payment -->
        <!-- <v-card flat id="payment" class="profile-section mb-10">
            <p class="profile-title">
              {{ $t("editPaymentMethod") }}
            </p>
            <p class="profile-subtitle">
              Explanation goes here
            </p>

            <v-row class="payment-card pa-3 ma-0">
              <v-col>
                <div class="card-name">Master card ****3660</div>
                <div class="card-expiration">{{ $t("expires") }} 02/24</div>
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
          </v-card> -->

        <!-- Password -->
        <v-card flat id="changePassword" class="profile-section mb-10">
          <p class="profile-title">
            {{ $t("changePassword") }}
          </p>
          <!-- <p class="profile-subtitle">
              Explanation goes here
            </p> -->

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
      </v-col>
    </v-row>

    <!-- Footer hardcoded -->
    <div class="footer text-center py-4" style="border-top: 1px solid #E3E3E4;">
      <a href="#">Impressum</a>
      <a href="#">Datenschutz</a>
      <a href="#">AGB</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddNewCard from "@/views/dashboard/AddNewCard";
import UserPlan from "../../components/user/UserPlan";
import LanguageDropdown from "@/components/LanguageDropdown";
import InvoicesListing from "@/components/InvoicesListing";

export default {
  components: {
    UserPlan,
    AddNewCard,
    LanguageDropdown,
    InvoicesListing
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
.employer-profile {
  .sidebar-nav {
    position: sticky;
    top: 13px;

    .nav-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 0.5px solid #cacaca;
      font-weight: 500;
      font-size: 18px;
      height: auto;
      max-height: 90px;
      padding: 15px 0;
      cursor: pointer;
      color: #000;
      transition: 0.3s color, 0.3s border-color;

      &:hover {
        color: #0253b3;
        border-color: #0253b3;

        .v-icon {
          color: #0253b3 !important;
        }
      }
    }
  }

  .main,
  .footer {
    background-color: $lighter-grey;
  }

  .footer {
    a {
      color: black !important;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      display: inline-block;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .settings-title {
    font-size: 32px;
    font-weight: 600;
    width: 100%;
    line-height: 38px;
    margin-bottom: 26px;
    color: #222;
    word-break: break-all;
  }

  .payment-card {
    border: 1px solid #e9e9e9;
    border-radius: 10px !important;

    .card-name {
      font-weight: bold;
      font-size: 16px;
      color: #252525;
    }

    .card-expiration {
      font-weight: normal;
      font-size: 11px;
      color: #252525;
    }
  }
}
</style>
