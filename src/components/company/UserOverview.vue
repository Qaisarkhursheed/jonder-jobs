<template>
  <div class="user-overview" v-if="profile">
    <div class="heading d-flex mb-5" v-if="!calledFromList" @click="back">
      <v-icon size="25">
        mdi-arrow-left
      </v-icon>
      <span class="pl-4">Zurück zu den Suchergebnissen</span>
    </div>
    <div class="card-back"></div>
    <v-card class="profile-info rounded-lg" flat>
      <v-row class="card-header no-gutters pl-10 pr-10">
        <v-col cols="12" md="8" class="d-flex">
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
        <v-col cols="12" md="4" class="d-flex justify-end pt-7">
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
            class="font-weight-medium pl-4 pr-4 dark-blue"
            @click="startConversation"
            :loading="startChatLoading"
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
</template>

<script>
import axios from "axios";
import UserOverviewGeneral from "@/components/company/UserOverviewGeneral";
import UserOverviewNotes from "@/components/company/UserOverviewNotes";

export default {
  name: "UserOverview",

  props: {
    id: {
      type: [String, Number]
    },
    calledFromList: {
      type: Boolean,
      default: false
    }
  },
  components: {
    UserOverviewGeneral,
    UserOverviewNotes
  },
  data() {
    return {
      profile: null,
      // profile: {
      //   fullname: {
      //     label: "",
      //     value: ""
      //   },
      //   email: {
      //     label: "E-mail address",
      //     value: ""
      //   },
      //   address: {
      //     label: "City and address",
      //     value: ""
      //   },
      //   about: {
      //     label: "",
      //     value:
      //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"
      //   },
      //   profession: {
      //     label: "",
      //     value: "My Profession"
      //   },
      //   radius: {
      //     label: "Work Radius",
      //     value: "50km"
      //   },
      //   profesionsim: {
      //     label: "Profesionsim",
      //     value: "Junior"
      //   }
      // },
      tab: null,
      items: ["general", "notes"],
      tabs: {
        general: UserOverviewGeneral,
        notes: UserOverviewNotes
      },
      startChatLoading: false
    };
  },
  mounted() {
    this.getUser();
    // this.addUserProfileView({ user_id: this.$route.params.id });
  },
  methods: {
    //  ...mapActions("user", ["addUserProfileView"]),
    getUser() {
      const id = this.calledFromList ? this.id : this.$route.params.id;
      console.log(id);
      axios
        .get(`/users/${id}`)
        .then(res => {
          // this.populateData(res.data);
          this.profile = res.data.data;
        })
        .catch(() => {
          this.$router.replace({ name: "CompanySearch" });
        });
    },
    populateData(user) {
      this.profile.fullname.value = `${user.first_name} ${user.last_name}`;
      this.profile.email.value = user.email;
      this.profile.address.value = user.address;
      this.profile.radius.value = user.work_radius;
      this.profile.profesionsim.value = user.work_experience;
    },
    startConversation() {
      this.startChatLoading = true;
      this.$store
        .dispatch("chat/startChat", this.profile.id)
        .then(() => {
          this.$router.push({
            name: "CompanyMessages",
            params: {
              company: true
            }
          });
        })
        .finally(() => {
          this.startChatLoading = false;
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
  },
  watch: {
    id() {
      if (this.calledFromList) {
        this.getUser();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
