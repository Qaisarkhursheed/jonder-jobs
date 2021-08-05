<template>
  <div class="public-profile-viewas">
    <div class="d-flex mb-6">
      <div>
        <v-avatar
            color="#f1f1f1"
            size="80"
            class="user-avatar"
          >
            <template v-if="avatar">
              <img
                :src="avatar"
              >
            </template>
            <template v-else>
              <v-icon class="camera-icon"
                size="60px">
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
            <div class="value">{{ user.company_email }}</div>
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
            <div class="value">{{ user.company_phone }}</div>
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
            <div class="value">{{ user.city }}, {{ user.address }}</div>
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
            <div class="value">{{ user.web_url }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'PublicProfileViewAs',
  
  props: {
    user: {
      type: Object,
    }
  },

  computed: {
    avatar() {
      return `${this.user.profile_img}`;
    }
  }
}
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
  color: #0253B3;
  text-transform: uppercase;
}
.contact-section {
  .icon-wrap {
    width: 43px;
    height: 43px;
    background: #0253B3;;
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
  }
}
</style>