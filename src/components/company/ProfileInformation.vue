<template>
  <v-card class="profile-info rounded-lg pl-10 pr-10 pt-10 pb-10" flat>
    <v-row class="d-flex no-gutters">
      <v-col cols="6 pr-3">
        <v-card-text class="d-flex pa-0 pb-6 align-center">
          <v-img
            :lazy-src="require('@/assets/candidate.png')"
            height="100px"
            width="100px"
            max-width="100px"
            :src="require('@/assets/candidate.png')"
            class="image">
          </v-img>
          <div class="pl-6">
            <div class="name font-weight-bold pb-2">
              {{profile.fullname.value}}
            </div>
            <div class="job pb-1">
              <span class="text-color-primary-blue-dark">
                {{profile.profession.value}}
              </span>
            </div>
          </div>
        </v-card-text>
        <v-card-text class="about pa-0 pb-9">
          {{profile.about.value}}
        </v-card-text>
        <v-card-actions class="no-gutters pa-0 ma-0">
          <v-btn class="font-weight-bold text-color-primary-blue-dark"
                 height="54px"
                 style="border-radius: 10px;"
                 elevation="0"
                 color="#E3F2FB"
                 width="40%"
                 dark>
            Message
          </v-btn>
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
        </v-card-actions>
      </v-col>
      <v-col cols="6">
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
        
        <div class="field-wrap d-flex mb-3 align-center">
          <div class="icon-wrap">
            <v-icon color="#0253B3">
              mdi-star-outline
            </v-icon>
          </div>
          <div class="pl-4">
            <div class="profile-info-label">{{profile.profesionsim.label}}</div>
            <div class="profile-info-value">{{profile.profesionsim.value}}</div>
          </div>
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
        }
      }
    }
  }
};

</script>

<style lang="scss" scoped>
  .name {
    font-size: 24px;
  }
  .job {
    font-size: 20px;
  }
  .about {
    font-weight: 400;
    font-size: 16px;
    color: #3E3E47;
  }
  .icon-wrap {
    width: 43px;
    height: 43px;
    background: #E3F2FB;
    line-height: 43px;
    text-align: center;
    border-radius: 7px;
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