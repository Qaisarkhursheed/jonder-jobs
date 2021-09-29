<template>
  <v-row class="header">
    <v-col cols="auto">
      <router-link to="/dashboard" class="logo">
        <v-img
          :src="require('@/assets/jonder-logo.svg')"
          max-width="128px"
          max-height="42px"
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
            <v-list-item @click="$router.push({ name: 'Profile' })">
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
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  }
};
</script>

<style lang="scss"></style>
