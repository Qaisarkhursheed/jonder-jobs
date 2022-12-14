<template>
  <div class="public-profile-viewas">
    <div class="d-flex mb-6">
      <div>
        <v-avatar color="#f1f1f1" size="80" class="user-avatar">
          <template v-if="avatar">
            <img :src="avatar" />
          </template>
          <template v-else>
            <v-icon class="camera-icon" size="60px">
              mdi-camera-plus-outline
            </v-icon>
          </template>
        </v-avatar>
      </div>
      <div class="pl-4 mt-3">
        <div class="heading-title">{{ user | fullname(true) }}</div>
        <div class="heading-subtitle">{{ user.city }} {{ user.address }}</div>
      </div>
    </div>

    <div v-if="user.role === 'Employer'">
      <div class="section mb-8">
        <label class="section-label">
          {{ $t("aboutCompany") }}
        </label>
        <div class="section-value">
          {{ user.about_company }}
        </div>
      </div>

      <v-row class="mb-5">
        <v-col cols="col">
          <label class="section-label">
            {{ $t("employees") }}
          </label>
          <div class="section-value">
            {{ idToString("EMPLOYEE_NUMBER", user.company_employees) }}
          </div>
        </v-col>
        <v-col cols="col">
          <label class="section-label">
            {{ $t("branch") }}
          </label>
          <div class="section-value">
            {{ idToString("JOB_BRANCHE", user.branche) }}
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <div class="section-mb-8">
        <v-row class="mb-8">
          <v-col cols="col">
            <label class="section-label">
              {{ $t("aboutMe") }}
            </label>
            <div class="section-value">
              {{ user.about_me }}
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="section mb-8">
        <v-row class="mb-8">
          <v-col cols="col">
            <label class="section-label">
              {{ $t("jobseekingStatus") }}
            </label>
            <div class="section-value">
              {{ user.job_search_status | jobSearchStatus }}
            </div>
          </v-col>
          <v-col cols="col">
            <label class="section-label">
              {{ $t("position") }}
            </label>
            <div class="section-value">
              {{ idToString("JOB_POSITION", user.current_position) }}
            </div>
          </v-col>
        </v-row>
      </div>

      <v-row class="mb-8">
        <v-col cols="col">
          <label class="section-label">
            {{ $t("currentIndustry") }}
          </label>
          <div class="section-value">
            {{ idsToArray("JOB_BRANCHE", user.branche).join(", ") }}
          </div>
        </v-col>
        <!-- <v-col cols="col">
          <label class="section-label">
            {{ $t("city") }} and {{ $t("address") }}
          </label>
          <div class="section-value">
            {{ user.city }}
          </div>
        </v-col> -->
      </v-row>
    </div>

    <div class="section">
      <label class="section-label">
        {{ $t("contact") }}
      </label>
      <div class="content pt-4">
        <div class="contact-section d-flex pb-5">
          <div class="icon-wrap">
            <v-icon color="#fff">
              mdi-email-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="label">{{ $t("emailAddress") }}</div>
            <div class="value">
              <a :href="'mailto:' + user.company_email">
                {{ user.email }}
              </a>
            </div>
          </div>
        </div>

        <div class="contact-section d-flex pb-5">
          <div class="icon-wrap">
            <v-icon color="#fff">
              mdi-phone-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="label">{{ $t("phoneNumber") }}</div>
            <div class="value">
              <a :href="'tel:' + user.phone">
                {{ user.phone }}
              </a>
            </div>
          </div>
        </div>

        <div class="contact-section d-flex pb-5">
          <div class="icon-wrap">
            <v-icon color="#fff">
              mdi-map-marker-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="label">{{ $t("city") }} {{ $t("and") }} {{ $t("address") }}</div>
            <div class="value">
              <a :href="googleMapsLink" target="_blank">
                {{ address }}
              </a>
            </div>
          </div>
        </div>

        <div v-if="user.web_url" class="contact-section d-flex pb-5">
          <div class="icon-wrap">
            <v-icon color="#fff">
              mdi-web
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="label">{{ $t("web") }}</div>
            <div class="value">
              <a :href="user.web_url" target="_blank">
                {{ user.web_url }}
              </a>
            </div>
          </div>
        </div>

        <div class="contact-section d-flex justify-start pb-3">
          <template v-for="social in socialLinks">
            <v-btn
              v-if="social.value && social.value != 'null'"
              :key="social.name"
              icon
              class="icon-wrap mr-4"
              link
              target="_blank"
              :href="'//' + social.value"
            >
              <v-icon color="#fff"> mdi-{{ social.name }} </v-icon>
            </v-btn>
          </template>
        </div>
      </div>
    </div>

    <!-- Northdata widgets -->
    <div class="section mt-3" v-if="user.role == 'Employer'">
      <label class="section-label">
        North Data
      </label>

      <div class="content pt-3">
        <div class="row">
          <!-- History graph -->
          <div class="col">
            <v-dialog v-model="historyGraph">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  height="48"
                  v-bind="attrs"
                  v-on="on"
                  block
                >
                  {{ $t("northdataHistory") }}
                </v-btn>
              </template>
              <v-card>
                <NorthDataWidget :user="user" layout="history" />
              </v-card>
            </v-dialog>
          </div>

          <!-- Barchart -->
          <div class="col">
            <v-dialog v-model="barChart" width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  height="48"
                  v-bind="attrs"
                  v-on="on"
                  block
                >
                  {{ $t("northdataBarChart") }}
                </v-btn>
              </template>
              <v-card>
                <NorthDataWidget :user="user" layout="barChart" />
              </v-card>
            </v-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NorthDataWidget from "@/components/company/NorthDataWidget";

export default {
  name: "PublicProfileViewAs",

  components: { NorthDataWidget },

  props: {
    user: {
      type: Object
    }
  },

  data() {
    return {
      historyGraph: false,
      barChart: false
    };
  },

  computed: {
    avatar() {
      if (!this.user.profile_img) {
        return null;
      }

      try {
        const url = new URL(this.user.profile_img);
        return url;
      } catch (err) {
        const origin = new URL(process.env.VUE_APP_API_BASE).origin;
        return `${origin}/storage/avatars/${this.user.profile_img}`;
      }
    },

    address() {
      if (this.user.city && this.user.address) {
        return `${this.user.city}, ${this.user.address}`;
      }

      return this.user.city || this.user.address || "";
    },

    googleMapsLink() {
      const address = encodeURIComponent(this.address);
      return `https://www.google.com/maps/search/${address}`;
    },

    socialLinks() {
      return [
        { name: "facebook", value: this.user.facebook },
        { name: "instagram", value: this.user.instagram },
        { name: "linkedin", value: this.user.linkedin },
        { name: "twitter", value: this.user.twitter },
        { name: "youtube", value: this.user.youtube }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-weight: 600;
  font-size: 20px;
  color: #222222;
}
.heading-subtitle {
  font-weight: normal;
  font-size: 14px;
  color: #999999;
}
.section-label {
  font-weight: 600;
  font-size: 12px;
  color: #0253b3;
  text-transform: uppercase;
}
.contact-section {
  .icon-wrap {
    width: 43px;
    height: 43px;
    background: #0253b3;
    line-height: 43px;
    text-align: center;
    border-radius: 7px;
  }

  .label {
    color: rgba(34, 34, 34, 0.7);
    font-weight: normal;
    font-size: 12px;
  }
  .value {
    font-weight: 600;
    font-size: 16px;
    color: #222222;

    a {
      color: inherit !important;
      text-decoration: none !important;
    }
  }
}
</style>
