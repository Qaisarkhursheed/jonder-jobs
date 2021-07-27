<template>
  <div class="user-overview">
    <div class="heading d-flex mb-5" @click="back">
      <v-icon size="25">
        mdi-arrow-left
      </v-icon>
      <span class="pl-4">Back</span>
    </div>
    <div class="card-back"></div>
    <v-card class="profile-info rounded-lg" flat>
      <v-row class="card-header no-gutters pl-10 pr-10">
        <v-col cols="8" class="d-flex">
          <v-avatar color="primary" size="150" class="user-avatar">
            <img :src="profile.profile_img" />
          </v-avatar>
          <div class="user-header pl-8 pt-5">
            <div class="name">
              {{ profile.first_name }} {{ profile.last_name }}
            </div>
            <div class="position">
              {{ profile.current_position }}
            </div>
          </div>
        </v-col>
        <v-col cols="4" class="d-flex justify-end pt-7">
          <div class="star-btn mr-3" @click="handleStarIconClick">
            <v-icon
              size="25"
              :color="profile.selection_managment ? '#27AAE1' : '#000'"
            >
              {{
                profile.selection_managment ? "mdi-star" : "mdi-star-outline"
              }}
            </v-icon>
          </div>
          <v-btn
            color="primary"
            height="48"
            width="70%"
            class="font-weight-medium pl-4 pr-4"
            @click="
              $router.push({
                name: 'CompanyMessages',
                params: {
                  id: profile.id,
                  type: 'new',
                  company: true
                }
              })
            "
          >
            Message now
          </v-btn>
        </v-col>
      </v-row>
      <v-tabs v-model="tab" align-with-title slider-color="#0253B3">
        <v-tabs-slider color="#0253B3"></v-tabs-slider>

        <v-tab
          v-for="item in items"
          :key="item"
          style="text-transform: uppercase;"
          slider-color="#0253B3"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card flat>
            <keep-alive>
              <component :is="tabs[item]" :user="profile"></component>
            </keep-alive>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
  <!-- <v-card class="profile-info rounded-lg pl-10 pr-10 pt-10 pb-10" flat>
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
                 @click="startConversation"
                 height="54px"
                 style="border-radius: 10px;"
                 elevation="0"
                 color="#E3F2FB"
                 width="40%"
                 dark>
            Message
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
  </v-card> -->
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import UserOverviewGeneral from "@/components/company/UserOverviewGeneral";
import UserOverviewNotes from "@/components/company/UserOverviewNotes";

export default {
  name: "UserOverview",

  props: {
    id: {
      type: [String, Number]
    }
  },
  components: {
    UserOverviewGeneral,
    UserOverviewNotes
  },
  data() {
    return {
      profile: {
        fullname: {
          label: "",
          value: ""
        },
        email: {
          label: "E-mail address",
          value: ""
        },
        address: {
          label: "City and address",
          value: ""
        },
        about: {
          label: "",
          value:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"
        },
        profession: {
          label: "",
          value: "My Profession"
        },
        radius: {
          label: "Work Radius",
          value: "50km"
        },
        profesionsim: {
          label: "Profesionsim",
          value: "Junior"
        }
      },
      tab: null,
      items: ["general", "notes"],
      tabs: {
        general: UserOverviewGeneral,
        notes: UserOverviewNotes
      }
    };
  },
  mounted() {
    this.getUser();
    this.addUserProfileView({ user_id: this.$route.params.id });
  },
  methods: {
    ...mapActions("user", ["addUserProfileView"]),
    getUser() {
      axios
        .get(`/users/${this.$route.params.id}`)
        .then(res => {
          // this.populateData(res.data);
          this.profile = res.data.data;
        })
        .catch();
    },
    populateData(user) {
      this.profile.fullname.value = `${user.first_name} ${user.last_name}`;
      this.profile.email.value = user.email;
      this.profile.address.value = user.address;
      this.profile.radius.value = user.work_radius;
      this.profile.profesionsim.value = user.work_experience;
    },
    startConversation() {
      this.$router.push({
        name: "CompanyInbox",
        params: { id: this.$route.params.id, type: "new", company: true }
      });
    },
    handleStarIconClick() {
      if (this.profile.selection_managment) {
        this.$store
          .dispatch("company/slManagementDeleteCandidate", this.profile.id)
          .then(() => {
            this.profile.selection_managment = false;
          });
      } else {
        this.$store
          .dispatch("company/slManagementAddCandidate", {
            jobseeker_id: this.profile.id,
            managment_status: "Saved candidates"
          })
          .then(() => {
            this.profile.selection_managment = true;
          });
      }
    },
    back() {
      if (this.$route.params.type && this.$route.params.type === "selection") {
        this.$router.push({
          name: "CompanySelectionManagement"
        });
      } else {
        this.$router.push({
          name: "CompanySearch"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-header {
}
.heading {
  font-weight: 600;
  font-size: 17px;
  color: #222222;
  cursor: pointer;
}
.card-back {
  height: 156px;
  background: #27aae1;
  border-radius: 13px;
}
.profile-info {
  position: relative;
  top: -60px;
}
.user-header {
  .name {
    font-weight: bold;
    font-size: 32px;
    color: #222222;
  }
  .position {
    font-weight: 500;
    font-size: 14px;
    color: #222222;
  }
}
.user-avatar {
  position: relative;
  top: -50px;
}
.star-btn {
  width: 70px;
  min-width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #e3f2fb;
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
}
.tab {
}
.name {
  font-size: 24px;
}
.job {
  font-size: 20px;
}
.about {
  font-weight: 400;
  font-size: 16px;
  color: #3e3e47;
}
.icon-wrap {
  width: 43px;
  height: 43px;
  background: #e3f2fb;
  line-height: 43px;
  text-align: center;
  border-radius: 7px;
}

.field-wrap {
  .profile-info-label {
    font-size: 16px;
    font-weight: 600;
    color: #0253b3;
    padding-bottom: 7px;
  }
  .profile-info-value {
    font-weight: 600;
    font-size: 20px;
    color: #222222;
  }
}
</style>
