<template>
  <div class="pa-8" v-if="userDetails">
    <v-row>
      <v-col cols="6">
        <div class="d-flex align-center">
          <v-avatar color="primary" size="58" class="flex-grow-0 flex-shrink-0">
            <v-img :src="userDetails.profile_img" v-if="userDetails.profile_img"></v-img>
            <span class="white--text headline" v-else>{{
                userDetailsInitials
              }}</span>
          </v-avatar>
          <div class="flex-grow-1 flex-shrink-1 pl-2">
            <div class="heading text-color-primary-blue-dark">
              {{ userDetailsFullName }}
            </div>
            <div v-if="userDetails.address">
              <v-icon>mdi-map-marker</v-icon>
              <span>{{ userDetails.address }}</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>Job title</label>
        <strong>{{ userDetails.current_position }}</strong>
      </v-col>
      <v-col cols="6">
        <label>Work experience</label>
        <strong>{{ userDetails.work_radius }}</strong>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>Looking for</label>
        <strong>{{ userDetails.looking_for }}</strong>
      </v-col>
      <v-col cols="6">
        <label>Education</label>
        <strong>{{ userDetails.your_qualification }}</strong>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>About me</label>
        <strong>{{ userDetails.describe_yourself }}</strong>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileView",
  created() {
    this.init();
  },
  computed: mapGetters("user", [
    "userDetails",
    "userDetailsFullName",
    "userDetailsInitials"
  ]),
  methods: {
    init() {
      if (this.$route.params.id) {
        const userId = parseInt(this.$route.params.id);
        this.$store.dispatch("user/getUser", userId);
        this.$store.dispatch("stats/updateProfileView", userId);
      } else this.$router.push("/dashboard");
    }
  },
  watch: {
    $route() {
      this.init();
    }
  }
};
</script>
