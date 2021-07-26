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
        @click="$router.push('/company-dashboard')"
      >
        Back to homepage
      </v-btn>

      
    </div>

    <!-- Main -->
    <v-row class="main ma-0">
      <!-- Left nav -->
      <v-col class="col-12 col-sm-3 col-xl-3">
        <nav class="dashboard-navigation">
          <div class="settings-nav">
            <div class="settings-title">
              Settings
            </div>
            <div class="submenu">
              <div @click="scrollToSection('personalInfo')" class="nav-item">
                Personal info
              </div>
              <div @click="scrollToSection('invoices')" class="nav-item">
                Billing &amp; Invoices
              </div>
              <div @click="scrollToSection('payment')" class="nav-item">
                Payment
              </div>
              <div @click="scrollToSection('changePassword')" class="nav-item">
                Change Password
              </div>
            </div>
          </div>
        </nav>
      </v-col>

      <!-- Right side -->
      <v-col class="col-12 col-sm-9 col-xl-9">
        <v-container fluid class="d-flex flex-column">
          <!-- Personal info -->
          <v-card flat id="personalInfo" class="profile-section mb-10">
            <v-row>
              <p class="profile-title">
                Change personal info
              </p>
              <p class="profile-subtitle">
                Explanation goes here
              </p>
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
                <label class="profile-label">{{
                  $t("user.profile.lastName")
                }}</label>
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
                <small style="opacity: 60%">Email is not verified yet</small>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                 <v-btn
            depressed
            color="primary"
            class="pl-8 pr-8"
            @click="handleUpdate"
            >{{ $t("general.save") }}
          </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <!-- Billing & Invoices -->
          <v-card flat id="invoices" class="profile-section mb-10">
            <v-row>
              <p class="profile-title">
                Billing &amp; Invoices
              </p>
              <p class="profile-subtitle">
                Explanation goes here
              </p>
            </v-row>

            <v-row
              v-for="item in [1, 2, 3, 4]"
              :key="item"
              class="invoice-row py-1"
            >
              <v-col>
                <div class="invoice-number">Number of invoice: {{ item }}</div>
                <div class="invoice-date">
                  Date of invoice: 02.10.21 / 12:23
                </div>
              </v-col>
              <v-col cols="auto d-flex align-center">
                <v-img
                  :src="require('@/assets/icons/download.svg')"
                  @click="downloadInvoice(item)"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>

          <!-- Payment -->
          <v-card flat id="payment" class="profile-section mb-10">
            <v-row>
              <p class="profile-title">
                Edit payment method
              </p>
              <p class="profile-subtitle">
                Explanation goes here
              </p>
            </v-row>

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
                Add new card
              </v-btn>
            </div>
          </v-card>

          <!-- Password -->
          <v-card flat id="changePassword" class="profile-section mb-10">
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
        </v-container>
      </v-col>
    </v-row>

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
import store from "@/store";
import { mapGetters } from "vuex";
import Header from "@/components/company/Header";
import AddNewCard from "@/views/dashboard/AddNewCard";

export default {
  components: {
    Header,
    AddNewCard
  },
  data() {
    return {
      formData: {},
      rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
      ],
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
  },
  methods: {
    updateCompanyUser(input) {
      store.dispatch("user/updateCompanyUser", {
        id: this.user.id,
        data: {
          ...input,
          _method: "PATCH"
        }
      });
    },
    fillData() {
      const user = this.user;
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
      this.updateCompanyUser(formDataCopy);
    },
    downloadInvoice() {
      // TODO
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
.v-application .dashboard-navigation {
  padding: 0 0 0 32px;
  position: sticky;
  top: 2rem;

  a {
    display: block;
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    text-align: left;
    clear: both;
    color: black;
    text-decoration: none;
    @include clearfix;

    &.with-submenu {
      margin-bottom: 10px;
      border: none !important;

      & i,
      span {
        border: none !important;
      }
    }

    span,
    .v-icon {
      //float: left;
      display: inline-block;
      height: 20px;
      line-height: 22px;
      border: none !important;
    }

    .v-icon {
      margin-right: 10px;
      line-height: 20px;
    }

    &:hover,
    &.router-link-exact-active {
      &,
      span,
      .v-icon {
        color: $primary-blue-dark;
        text-decoration: none;
        border-bottom: 1px solid $primary-blue-dark;
      }
    }

    &.router-link-exact-active {
      span {
        font-weight: bold;
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

.settings-nav {
  background-color: white;
  padding: 32px;
  border-radius: 10px;
  margin-top: 12px;
}

.settings-title {
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  line-height: 38px;
  margin-bottom: 26px;
  color: #222;
}

.profile-section {
  border-radius: 10px !important;
}

.invoice-row {
  border-top: 1px solid #dedede;

  .invoice-number {
    font-weight: 500;
    font-size: 13px;
    color: #000000;
    opacity: 0.7;
  }

  .invoice-date {
    font-weight: 500;
    font-size: 16px;
    color: #101010;
  }
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
</style>
