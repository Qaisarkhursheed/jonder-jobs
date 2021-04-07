<template>
  <dashboard-layout v-if="user">
    <v-card
      class="profile-holder"
    >
      <div class="pa-8">
        <v-row>
          <v-col cols="6">
            <div class="d-flex align-center">
              <v-avatar
                color="primary"
                size="58"
                class="flex-grow-0 flex-shrink-0"
              >
                <v-img :src="user.profile_img" v-if="user.profile_img"></v-img>
                <span class="white--text headline" v-else>{{ getUserInitials }}</span>
              </v-avatar>
              <div class="flex-grow-1 flex-shrink-1 pl-2">
                <div class="heading text-color-primary-blue-dark">{{ getUserFullName }}</div>
                <div>
                  <v-icon>mdi-map-marker</v-icon>
                  <span>Berlin</span>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn depressed color="primary" class="pl-8 pr-8" @click="handleUpdate">Save</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <label>First name</label>
            <v-text-field
              dense
              label="First name"
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
            <label>Last name</label>
            <v-text-field
              dense
              label="Last name"
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
            <label>Job title</label>
            <v-text-field
              dense
              label="Job title"
              type="text"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="formData.job_title"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <label>Work experience</label>
            <v-text-field
              dense
              label="Work experience"
              type="text"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="formData.work_experience"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <label>Looking for</label>
            <v-text-field
              dense
              label="Looking for"
              type="text"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="formData.looking_for"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <label>Education</label>
            <v-text-field
              dense
              label="Education"
              type="text"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="formData.education"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <label>About me</label>
            <v-textarea
              dense
              label="About me"
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="formData.about_me"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card
              outlined
              flat
              class="border-blue-dark card-link"
            >
              <a class="card-link-btn">
                <v-icon>mdi-link</v-icon>
              </a>
              <v-card-title class="pb-0">Lorem ipsum</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet</v-card-text>
              <v-card-actions class="border-top-blue-dark pa-4 pt-1 pb-1">
                <strong class="text-color-primary-blue-dark">$9.99</strong>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  components: { DashboardLayout },
  data: () => ({
    formData: {
      first_name: "",
      last_name: "",
      job_title: "",
      work_experience: "",
      looking_for: "",
      education: "",
      about_me: ""
    },
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ]
  }),
  computed: {
    ...mapGetters("auth", ["user", "getUserFullName", "getUserInitials"])
  },
  methods: {
    resetFormData(user) {
      console.log("resetFormData", user);
      this.formData.first_name = user.first_name;
      this.formData.last_name = user.last_name;
    },
    handleUpdate() {
      console.log("Update", this.formData);
    }
  },
  watch: {
    user(newVal) {
      this.resetFormData(newVal);
    }
  }
};
</script>

<style lang="scss">
.profile-holder {
  box-shadow: 8px 0px 34px rgba(0, 0, 0, 0.03) !important;

  .card-link {
    overflow: hidden;
  }

  .card-link-btn {
    display: inline-block;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: rgba(2, 83, 179, 0.1);
    border-radius: 50% !important;
    transform: rotate(43deg);
    overflow: hidden;
  }
}
</style>