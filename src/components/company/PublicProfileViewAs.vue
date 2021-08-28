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
      <div class="pl-4">
        <div class="heading-title">{{ user.company }}</div>
        <div class="heading-subtitle">{{ user.city }} {{ user.address }}</div>
      </div>
    </div>
    <div v-if="user.role === 'Employer'">
      <div class="section mb-8">
        <label class="section-label">
          About company
        </label>
        <div class="section-value">
          {{ user.about_company }}
        </div>
      </div>

      <v-row class="mb-8">
        <v-col cols="4">
          <label class="section-label">
            Employees
          </label>
          <div class="section-value">
            {{ user.company_employees }}
          </div>
        </v-col>
        <v-col cols="5">
          <label class="section-label">
            Industry
          </label>
          <div class="section-value">
            {{ user.branche }}
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <div class="section mb-8">
        <v-row class="mb-8">
          <v-col cols="4">
            <label class="section-label">
              Jobseeking Status
            </label>
            <div class="section-value">
              {{ user.job_status }}
            </div>
          </v-col>
          <v-col cols="5">
            <label class="section-label">
              Position
            </label>
            <div class="section-value">
              {{ user.current_position }}
            </div>
          </v-col>
        </v-row>
      </div>

      <v-row class="mb-8">
        <v-col cols="4">
          <label class="section-label">
            Current Industry
          </label>
          <div class="section-value">{{ user.branche }}</div>
        </v-col>
        <v-col cols="5">
          <label class="section-label">
            City and adress
          </label>
          <div class="section-value">
            {{ user.city }}
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="section">
      <label class="section-label">
        Contact
      </label>
      <div class="content pt-4">
        <div class="contact-section d-flex pb-5">
          <div class="icon-wrap">
            <v-icon color="#fff">
              mdi-email-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="label">Email address</div>
            <div class="value">
              <a :href="'mailto:' + user.company_email">
                {{ user.company_email }}
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
            <div class="label">Phone number</div>
            <div class="value">
              <a :href="'tel:' + user.company_phone">
                {{ user.company_phone }}
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
            <div class="label">City and address</div>
            <div class="value">
              <a :href="googleMapsLink" target="_blank">
                {{ address }}
              </a>
            </div>
          </div>
        </div>

        <div class="contact-section d-flex pb-5">
          <div class="icon-wrap">
            <v-icon color="#fff">
              mdi-web
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="label">Web</div>
            <div class="value">
              <a :href="user.web_url" target="_blank">
                {{ user.web_url }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicProfileViewAs",

  props: {
    user: {
      type: Object,
    },
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
      return `${this.user.city}, ${this.user.address}`;
    },

    googleMapsLink() {
      const address = encodeURIComponent(this.address);
      return `https://www.google.com/maps/search/${address}`;
    },
  },
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
