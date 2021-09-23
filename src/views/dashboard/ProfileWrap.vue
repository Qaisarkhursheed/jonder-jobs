<template>
  <v-row class="layout-content flex-shrink-1 flex-grow-1" v-if="user">
    <v-col cols="12">
      <div class="profile-holder">
        <router-view />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileWrap",
  computed: {
    ...mapGetters("user", ["user"])
  }
};
</script>
