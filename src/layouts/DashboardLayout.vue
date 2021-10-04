<template>
  <v-container fluid class="pa-0" v-if="user">
    <v-row class="flex-shrink-0 flex-grow-0 search-holder">
      <v-col cols="4">
        <router-link to="/dashboard" class="logo">
          <v-img
            :src="require('@/assets/jonder-logo.svg')"
            max-width="128px"
            max-height="42px"
          />
        </router-link>
      </v-col>
      <v-col cols="4">
        <!-- <v-autocomplete
        :attach="true"
          v-if="!profile"
          v-model="searchString"
          :loading="searchLoading"
          :items="searchItems"
          :search-input.sync="search"
          cache-items
          flat
          dense
          outlined
          hide-no-data
          hide-details
          label="Suche"
          append-icon="mdi-magnify"
          item-text="name"
          item-value="id"
        ></v-autocomplete> -->
      </v-col>
      <v-col cols="4" class="text-right">
        <div class="dashboard-avatar">
          <span class="d-none d-md-inline"> {{ $t("hello") }}, </span>
          <span class="name d-none d-md-inline">{{ getUserFullName }}</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-avatar color="primary" size="38" v-on="on">
                <v-img v-if="user.profile_img" :src="user.profile_img"></v-img>
                <span v-else class="white--text">
                  {{ $store.getters["user/getUserInitials"] }}
                </span>
              </v-avatar>
            </template>
            <v-list class="nav">
              <v-list-item @click="$router.push({ name: 'Profile' })">
                {{ $t("profile") }}
              </v-list-item>
              <v-list-item @click="$router.push({ name: 'Logout' })">
                {{ $t("logout") }}
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="profile">
      <v-col cols="12">
        <v-btn
          color="primary"
          class="back-btn dark-blue"
          @click="navigateTo('/dashboard')"
        >
          {{ $t("backToHome") }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="full-h ma-0">
      <v-col
        class="navigation col-12 col-md-4 col-xl-3"
        v-if="!($route.name === 'PersonalityTestJobseeker')"
      >
        <nav class="dashboard-navigation pl-0 pl-md-8" v-if="profile">
          <v-card flat class="settings-nav" style="margin-top: 12px;">
            <div class="settings-title">
              {{ $t("profileSettings") }}
            </div>

            <div class="submenu">
              <div @click="scrollToSection('personalInfo')" class="nav-item">
                {{ $t("personalInformation") }}
                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <div @click="scrollToSection('roleAndBranche')" class="nav-item">
                {{ $t("positionAndIndustry") }}

                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <div @click="scrollToSection('status')" class="nav-item">
                {{ $t("yourStatus") }}

                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <div @click="scrollToSection('lookingFor')" class="nav-item">
                {{ $t("searchingFor") }}
                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <div
                @click="scrollToSection('experienceAndEducation')"
                class="nav-item"
              >
                {{ $t("experienceAndEducation") }}

                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <div @click="scrollToSection('documents')" class="nav-item">
                {{ $t("documents") }}
                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <!-- <div @click="scrollToSection('paymentMethod')" class="nav-item">
                {{ $t("billing") }}

                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div> -->
              <div @click="scrollToSection('invoices')" class="nav-item">
                {{ $t("billingInvoices") }}

                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <div @click="scrollToSection('changePassword')" class="nav-item">
                {{ $t("changePassword") }}

                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
              <div @click="scrollToSection('upgradeAccount')" class="nav-item">
                {{ $t("upgradeAccount") }}

                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </div>
            </div>
          </v-card>
        </nav>

        <v-card
          flat
          class="dashboard-about"
          v-if="dashboard"
          style="padding: 20px; margin-top: 40px"
        >
          <v-row class="full-h ma-0">
            <div class="top-info pb-0" style="border-bottom: 1px solid #E9E9E9">
              <div class="profile-image">
                <v-img
                  class="profile-image-user"
                  :src="user.profile_img"
                  v-if="user.profile_img"
                ></v-img>
                <v-img
                  class="profile-image-user"
                  :src="require('@/assets/icons/profile-placeholder.png')"
                  v-else
                ></v-img>
                <div class="profile-image-badge-icons" v-if="userPlan.length">
                  <v-img
                    v-for="(plan, index) in userPlan"
                    :key="index"
                    class="profile-image-badge-icon"
                    :style="[userPlan.length > 1 ? { margin: '0 -5px' } : null]"
                    :src="
                      require(`@/assets/icons/${
                        plan.id === 11 ? 'top-rated' : 'medal'
                      }.svg`)
                    "
                  ></v-img>
                </div>
              </div>

              <span class="dash-name">{{ getUserFullName }}</span>
              <router-link to="/dashboard/profile" class="settings-link">
                {{ $t("profileSettings") }}
              </router-link>
              <template v-if="userPlan.length">
                <DashboardActivePlan
                  v-for="(plan, index) in userPlan"
                  :key="index"
                  :user-plan="plan"
                />
              </template>
            </div>

            <UpgradeAccountBox
              class="mt-7"
              v-if="messagesLoaded && conversations.length && !userPlan.length"
              small
            />

            <div class="top-info mt-7">
              <span class="about-info">Position</span>
              <p class="about-text">{{ userCurrentPosition }}</p>

              <span class="about-info">{{ $t("currentIndustry") }}</span>
              <div class="about-text">
                <v-chip
                  class="py-1 mr-1 mb-1"
                  v-for="(item, i) in getBranche"
                  :key="i"
                >
                  {{ item }}
                </v-chip>
              </div>

              <span class="about-info">{{ $t("whatPosition") }}</span>
              <div class="about-text">
                <v-chip
                  class="py-1 mr-1 mb-1"
                  v-for="(item, i) in getJobPositions"
                  :key="i"
                >
                  {{ item }}
                </v-chip>
              </div>

              <span class="about-info">{{ $t("searchStatus") }}</span>
              <p class="about-text">
                {{ user.job_search_status | jobSearchStatus }}
              </p>

              <span class="about-info">{{ $t("lookingForType") }}</span>
              <div class="about-text">
                <v-chip
                  class="py-1 mr-1 mb-1"
                  v-for="(item, i) in userEmploymentType"
                  :key="i"
                >
                  {{ item }}
                </v-chip>
              </div>

              <!-- <span class="about-info">{{ $t("cityAndAddress") }} </span>
              <p class="about-text">{{ user.city }}</p> -->

              <span class="about-info">{{ $t("experienceInYears") }}</span>
              <p class="about-text">
                {{ user.working_experience }} {{ $t("years") }}
              </p>

              <span class="about-info">
                {{ $t("experiences") }}
              </span>
              <CardActionableList type="Experience" view-only class="mb-5" />

              <span class="about-info">
                {{ $t("education") }}
              </span>
              <CardActionableList type="Education" view-only />
            </div>

            <div class="top-info">
              <span class="about-info">
                {{ $t("documents") }}
              </span>
              <div v-if="user.cv" class="row mt-1">
                <div class="col-auto">
                  <a :href="user.cv" target="_blank">
                    <img :src="require('@/assets/svg/pdf.svg')" />
                  </a>
                </div>
                <div class="col my-auto font-weight-bold">
                  CV
                </div>
              </div>
              <div v-if="user.qualifications" class="row mt-1">
                <div class="col-auto">
                  <a :href="`${user.qualifications}`" target="_blank">
                    <img :src="require('@/assets/svg/pdf.svg')" />
                  </a>
                </div>
                <div class="col my-auto font-weight-bold">
                  {{ $t("qualifications") }}
                </div>
              </div>

              <div v-if="user.resume" class="row mt-1">
                <div class="col-auto">
                  <a :href="user.resume" target="_blank">
                    <img :src="require('@/assets/svg/pdf.svg')" />
                  </a>
                </div>
                <div class="col my-auto font-weight-bold">
                  {{ $t("curriculumVitae") }}
                </div>
              </div>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        class="main col-12 col-md-8 col-xl-9"
        :class="{
          'col-md-12 col-xl-12': $route.name === 'PersonalityTestJobseeker'
        }"
      >
        <v-container fluid class="d-flex flex-column">
          <slot />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import types from "@/types";
import { debounce, map, find } from "lodash";
import { mapActions, mapGetters } from "vuex";
import CardActionableList from "@/components/user/JobseekerCardActionableList";
import UpgradeAccountBox from "@/components/user/UpgradeAccountBox";
import DashboardActivePlan from "../components/dashboard/DashboardActivePlan";

export default {
  components: {
    DashboardActivePlan,
    CardActionableList,
    UpgradeAccountBox
  },

  data: () => ({
    searchString: null,
    searchLoading: false,
    searchItems: [],
    search: null
  }),
  computed: {
    ...mapGetters("user", [
      "user",
      "getUserFullName",
      "getUserInitials",
      "userPlan"
    ]),
    ...mapGetters("chat", ["conversations", "messagesLoaded"]),
    profile() {
      return this.$route.name === "Profile";
    },
    dashboard() {
      return (
        this.$route.path === "/dashboard" || this.$route.path === "/dashboard/"
      );
    },
    userEmploymentType() {
      const stringToArray = map(this.user.looking_for_employment_type, item => {
        let el = find(types.EMPLOYEMENT_TYPE, { id: parseInt(item) });
        return el[this.$i18n.locale];
      });
      return stringToArray;
      // return stringToArray.join();
    },
    getBranche() {
      const stringToArray = map(this.user.branche, item => {
        let el = find(types.JOB_BRANCHE, { id: parseInt(item) });
        return el[this.$i18n.locale];
      });
      return stringToArray;
      // return stringToArray.join();
    },
    getJobPositions() {
      const stringToArray = map(this.user.looking_for_position, item => {
        let el = find(types.JOB_POSITION, { id: parseInt(item) });
        return el[this.$i18n.locale];
      });
      return stringToArray;
      // return stringToArray.join();
    },
    userCurrentPosition() {
      let obj = find(types.JOB_POSITION, el => {
        return el.id == parseInt(this.user.current_position);
      });

      return obj ? obj[this.$i18n.locale] : null;
    }
  },
  methods: {
    ...mapActions("user", ["searchUsers"]),
    handleSearch: debounce(async function(val) {
      this.searchItems = await this.searchUsers(val);
      this.searchLoading = false;
    }, 2000),
    scrollToSection(profileSection) {
      document
        .getElementById(profileSection)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    },
    navigateTo(url) {
      this.$router.push(url);
    }
  },
  watch: {
    search(val) {
      this.searchLoading = true;
      if (val && val.trim().length > 0 && val !== this.searchString)
        this.handleSearch(val);
    },
    searchString(val) {
      if (val) {
        this.$router.push("/dashboard/profile/view/" + val);
        setTimeout(() => {
          this.search = null;
          this.searchString = null;
        });
      }
    }
  },
  beforeMount() {
    console.log(this.user);
  }
};
</script>
