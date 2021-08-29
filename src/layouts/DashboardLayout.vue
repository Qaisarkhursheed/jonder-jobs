<template>
  <v-container fluid class="full-h pa-0" v-if="user">
    <v-row class="flex-shrink-0 flex-grow-0 search-holder">
      <v-col cols="4">
        <router-link to="/dashboard" class="logo">
          <v-img :src="require('@/assets/jonder-logo.svg')" max-width="128px" />
        </router-link>
      </v-col>
      <v-col cols="4">
        <!-- <v-autocomplete
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
          <span> Hello, </span>
          <span class="name">{{ getUserFullName }}</span>
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
                {{ $t("general.profile") }}
              </v-list-item>
              <v-list-item @click="$router.push({ name: 'Logout' })">
                {{ $t("general.logout") }}
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
          class="back-btn"
          @click="navigateTo('/dashboard')"
        >
          Zurück zur Startseite
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="full-h ma-0">
      <v-col class="navigation col-12 col-md-4 col-xl-3">
        <nav class="dashboard-navigation pl-0 pl-md-8" v-if="profile">
          <div class="settings-nav">
            <div class="settings-title">
              Einstellungen
            </div>

            <div class="submenu">
              <div @click="scrollToSection('personalInfo')" class="nav-item">
                Persönliche Informationen
              </div>
              <div @click="scrollToSection('roleAndBranche')" class="nav-item">
                Position & Branche
              </div>
              <div @click="scrollToSection('lookingFor')" class="nav-item">
                Wonach suchen Sie?
              </div>
              <div
                @click="scrollToSection('experienceAndEducation')"
                class="nav-item"
              >
                Erfahrung & Ausbildung
              </div>
              <div @click="scrollToSection('documents')" class="nav-item">
                Dokumente
              </div>
              <div @click="scrollToSection('invoices')" class="nav-item">
                Rechnungen
              </div>
              <div @click="scrollToSection('paymentMethod')" class="nav-item">
                Rechnungsstellung
              </div>
              <div @click="scrollToSection('changePassword')" class="nav-item">
                Passwort ändern
              </div>
              <div @click="scrollToSection('upgradeAccount')" class="nav-item">
                Account Upgraden
              </div>
            </div>
          </div>
        </nav>

        <div class="dashboard-about" v-if="dashboard">
          <v-row class="full-h ma-0">
            <div class="top-info pb-0" style="border-bottom: 1px solid #E9E9E9">
              <div class="profile-image">
                <v-img :src="user.profile_img" v-if="user.profile_img"></v-img>
                <v-img
                  :src="require('@/assets/icons/profile-placeholder.png')"
                  v-else
                ></v-img>
              </div>

              <span class="dash-name">{{ getUserFullName }}</span>
              <router-link to="/dashboard/profile" class="settings-link">
                Profil Einstellungen
              </router-link>
            </div>

            <UpgradeAccountBox
              class="mt-7"
              v-if="messagesLoaded && conversations.length"
              small
            />

            <div class="top-info mt-7">
              <span class="about-info"> Über mich </span>
              <p class="about-text">{{ user.about_me }}</p>

              <span class="about-info">Status der arbeitssuche</span>
              <p class="about-text">{{ user.looking_for_employment_type }}</p>

              <span class="about-info">Position</span>
              <p class="about-text">{{ user.looking_for_branche }}</p>

              <span class="about-info">Aktuelle Branche</span>
              <p class="about-text">{{ user.branche }}</p>

              <span class="about-info"> Stadt & Adresse</span>
              <p class="about-text">{{ user.city }}</p>

              <span class="about-info"> Erfahrung </span>
              <CardActionableList type="Experience" view-only class="mb-5" />

              <span class="about-info"> Ausbildung </span>
              <CardActionableList type="Education" view-only />
            </div>

            <div class="top-info">
              <span class="about-info"> Dokumente </span>
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
                  Qualifications
                </div>
              </div>

              <div v-if="user.resume" class="row mt-1">
                <div class="col-auto">
                  <a :href="user.resume" target="_blank">
                    <img :src="require('@/assets/svg/pdf.svg')" />
                  </a>
                </div>
                <div class="col my-auto font-weight-bold">
                  Lebenslauf
                </div>
              </div>
            </div>
          </v-row>
        </div>
      </v-col>

      <v-col class="main col-12 col-md-8 col-xl-9">
        <v-container fluid class="d-flex flex-column">
          <slot />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";
import CardActionableList from "@/components/user/JobseekerCardActionableList";
import UpgradeAccountBox from "@/components/user/UpgradeAccountBox";

export default {
  components: {
    CardActionableList,
    UpgradeAccountBox,
  },

  data: () => ({
    searchString: null,
    searchLoading: false,
    searchItems: [],
    search: null,
  }),
  computed: {
    ...mapGetters("user", ["user", "getUserFullName", "getUserInitials"]),
    ...mapGetters("chat", ["conversations", "messagesLoaded"]),
    profile() {
      return this.$route.name === "Profile";
    },
    dashboard() {
      return (
        this.$route.path === "/dashboard" || this.$route.path === "/dashboard/"
      );
    },
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
    },
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
    },
  },
};
</script>

<style lang="scss">
.v-application--wrap {
  height: 100vh;
  overflow: auto;
}

.main,
.navigation {
  background-color: $lighter-grey;
}

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

.logo {
  margin-bottom: 20px;
  border: none !important;
}

.dashboard-search {
  position: relative;

  .dashboard-search-submit {
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    width: 20px;
  }
}

.dashboard-avatar {
  font-size: 16px;
  line-height: 38px;
  cursor: default;

  .name {
    margin-right: 10px;
    color: $primary-blue-dark;
  }

  .v-avatar {
    cursor: pointer;
  }
}

.nav {
  cursor: pointer;
  width: 150px;
}

.search-holder
  .v-select.v-select--is-menu-active
  .v-input__icon--append
  .v-icon {
  transform: rotate(0) !important;
}

.search-holder {
  padding: 20px;
  border-bottom: 1px solid $light-grey;
}

.nav-item {
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
  }
}

.settings-nav {
  background-color: white;
  padding: 32px;
  border-radius: 10px;
  margin-top: 40px;
}

.settings-title {
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  line-height: 38px;
  margin-bottom: 26px;
  color: #222;
}

button.back-btn.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.primary {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 15px;
  padding: 20px;
  height: 48px;
}

.dashboard-about {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
}

.top-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0px;
  word-break: break-all;
}

.dash-name {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  width: 100%;
  text-align: center;
}

.settings-link {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  text-underline-offset: 3px;
}

.about-info {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 14px;
  color: $primary-blue-dark;
  margin-bottom: 8px;
}
.about-text {
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 34px !important;
  color: $dark-grey;
}

.company-ed {
  font-size: 16px;
  font-weight: 600;
  line-height: 17px;
  color: $dark-grey;
  margin-bottom: 5px !important;
}

.profile-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  position: relative;
  top: -60px;
  margin: 0 auto -40px auto;

  .v-image {
    border-radius: 50px;
    max-width: 5rem;
    max-height: 5rem;
  }
}
</style>
