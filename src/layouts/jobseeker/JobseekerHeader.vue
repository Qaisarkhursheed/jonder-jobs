<template>
  <div class="jobseeker-header">
    <v-row class="main-header">
      <v-col cols="auto">
        <router-link to="/" class="logo">
          <v-img
            :src="require('@/assets/jonder-logo.svg')"
            width="128"
            height="42"
          />
        </router-link>
      </v-col>

      <v-col cols="col">
        <!-- Search TODO -->
      </v-col>

      <v-col cols="auto" class="text-right">
        <div>
          <span class="d-none d-md-inline"> {{ $t("hello") }}, </span>
          <span class="name d-none d-md-inline primary--text">
            {{ user | fullname }}
          </span>

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-avatar
                color="primary"
                size="38"
                v-on="on"
                class="ml-3 hover-pointer"
              >
                <v-img v-if="user.profile_img" :src="user.profile_img"></v-img>
                <span v-else class="white--text">
                  {{ user | initials }}
                </span>
              </v-avatar>
            </template>

            <v-list class="nav">
              <v-list-item @click="$router.push({ name: 'JobseekerProfile' })">
                {{ $t("profile") }}
              </v-list-item>
              <v-list-item @click="$router.push({ name: 'Logout' })">
                {{ $t("logout") }}
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>

    <v-row
      v-if="showBackButton"
      justify="center"
      style="border-top: 1px solid #e5e5e5"
    >
      <v-col cols="auto" class="pb-1">
        <v-btn color="primary" height="48" @click="routeTo">
        <template v-if="this.$route.meta.backButtonAction">
          {{ $t("back") }}
        </template>
        <template v-else>
          {{ $t("backToHome") }}
        </template>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

  methods: {
    routeTo() {
      if(this.$route.meta.backButtonAction) {
        this.$router.push({ name: this.$route.meta.backButtonAction });
      } else {
        this.$router.push('/jobseeker');
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    showBackButton() {
      return this.$route.meta.showBackButton;
    }
  }
};
</script>

<style lang="scss"></style>
