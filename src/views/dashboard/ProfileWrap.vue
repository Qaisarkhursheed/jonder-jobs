<template>
  <v-row class="layout-content mt-4 flex-shrink-1 flex-grow-1" v-if="user">
    <v-col cols="12">
      <v-card class="profile-holder">
        <router-view />
      </v-card>
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

<style lang="scss">
.profile-holder {
  box-shadow: 8px 0 34px rgba(0, 0, 0, 0.03) !important;
  background-color: #fdfeff !important;
  border-radius: 10px  !important;

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
