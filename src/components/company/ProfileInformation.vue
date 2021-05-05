<template>
  <v-card class="profile rounded-lg pl-10 pr-10 pt-10 pb-10" flat>
    <v-row class="d-flex no-gutters">
      <v-col cols="6">
        <div class="d-flex pa-0 pb-5">
          <v-img
            :lazy-src="require('@/assets/company_placeholder.png')"
            height="100px"
            width="100px"
            max-width="100px"
            :src="require('@/assets/company_placeholder.png')"
            class="image">
          </v-img>
          <div class="pl-4 d-flex align-self-center">
            <div class="company-name pb-1 d-flex align-center">
              My Company
            </div>
          </div>
        </div>
        <div>
          <v-card-text class="about pa-0 pr-8 pb-9">
            {{profile.about.value}}
          </v-card-text>
        </div>
        <div>
          <div class="field-wrap d-flex mb-3 align-center">
          <div class="icon-wrap">
            <v-icon 
                    color="#0253B3">
              mdi-email-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="profile-info-label">{{profile.email.label}}</div>
            <div class="profile-info-value">{{profile.email.value}}</div>
          </div>
        </div>

        <div class="field-wrap d-flex mb-3 align-center">
          <div class="icon-wrap">
            <v-icon color="#0253B3">
              mdi-map-marker-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="profile-info-label">{{profile.address.label}}</div>
            <div class="profile-info-value">{{profile.address.value}}</div>
          </div>
        </div>

        <div class="field-wrap d-flex mb-3 align-center">
          <div class="icon-wrap">
            <v-icon color="#0253B3">
              mdi-map-marker-radius-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="profile-info-label">{{profile.radius.label}}</div>
            <div class="profile-info-value">{{profile.radius.value}}</div>
          </div>
        </div>
        
        <!-- <div class="field-wrap d-flex mb-3 align-center">
          <div class="icon-wrap">
            <v-icon color="#0253B3">
              mdi-star-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="profile-info-label">{{profile.profesionsim.label}}</div>
            <div class="profile-info-value">{{profile.profesionsim.value}}</div>
          </div>
        </div> -->
        </div>
      </v-col>
      <v-col cols="6">
        <div class="no-gutters pa-0 ma-0 mb-7">
          <label class="d-block">Looking for</label>
          <div class="button-box mr-3 font-weight-bold text-color-primary-blue-dark">
            Developers
          </div>
          <div class="button-box font-weight-bold text-color-primary-blue-dark">
            Designers
          </div>
        </div>
        <div class="pb-5">
          <label>{{profile.employees.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="profile.employees.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="profile.employees.value">
          </v-text-field>
        </div>
        <div class="pb-5">
          <label>{{profile.industry.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="profile.industry.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="profile.industry.value">
          </v-text-field>
        </div>
        <div class="d-flex justify-end pt-12">
          <v-btn class="font-weight-bold text-color-primary-blue-dark"
                 @click="() => this.$router.push({name: 'CompanyProfileEdit'})"
                 height="54px"
                 style="border-radius: 10px;"
                 elevation="0"
                 color="#E3F2FB"
                 width="40%"
                 dark>
            Edit
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ProfileInformation',
  data() {
    return {
      profile: {
        fullname: {
          label: '',
          value: 'Marko Kraemer'
        },
        profession: {
          label: '',
          value: 'My Profession'
        },
        about: {
          label: '',
          value: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
        },
        email: {
          label: 'E-mail address',
          value: 'onuryilmaz@hotmail.com'
        },
        address: {
          label: 'City and address',
          value: 'New York, Central Park'
        },
        radius: {
          label: 'Work Radius',
          value: '50km'
        },
        profesionsim: {
          label: 'Profesionsim',
          value: 'Junior'
        },
        employees: {
          label: 'How many employees your company have ?',
          value: '10-99 employees'
        },
        industry: {
          label: 'Which industry are you in?',
          value: 'Engeneering'
        },
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .icon-wrap {
    width: 43px;
    height: 43px;
    background: #E3F2FB;
    line-height: 43px;
    text-align: center;
    border-radius: 7px;
  }
  .about {
    font-size: 16px;
    color: #3E3E47;
  }
  label { 
    padding-bottom: 12px;
    color: #222222;
    font-weight: 600;
  }
  .button-box {
    height: 54px;
    width: 40%;
    background-color: rgb(227, 242, 251);
    border-color: rgb(227, 242, 251);
    border-radius: 10px;
    min-width: 64px;
    padding: 0 16px;
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    letter-spacing: 0.0892857143em;
    justify-content: center;
    outline: 0;
    position: relative;
    text-decoration: none;
    text-indent: 0.0892857143em;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }
  .field-wrap {
    .profile-info-label {
      font-size: 16px;
      font-weight: 600;
      color: #0253B3;
      padding-bottom: 7px;
    }
    .profile-info-value {
      font-weight: 600;
      font-size: 20px;
      color: #222222;
    }
  }
</style>