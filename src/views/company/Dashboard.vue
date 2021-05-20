<template>
  <v-container>
    <v-row class="heading ma-0 mb-10 flex-column">
      <div>Hello,</div>
      <div class="text-color-primary-blue-dark font-weight-bold">
        {{getUserFullName}}
      </div>
    </v-row>
    <DashboardStats/>
    <v-row>
      <v-col v-for="(list, i) in userInteractions" :key="i">
        <CandidateList :list="list"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CandidateList from "@/components/company/CandidateList";
import DashboardStats from "@/components/company/DashboardStats";

export default {
  name: "CompanyDashboard",

  components: {
    DashboardStats,
    CandidateList
  },

  created() {
    this.fetchUserInteractions();
  },
  methods: {
    ...mapActions('company', ['fetchUserInteractions']),
  },

  computed: {
    ...mapGetters('company', ['userInteractions']),
    ...mapGetters('user', ['getUserFullName']),
  }
}

</script>

<style scoped>
  .hd {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #82858C;
  }

  .heading {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 20px;
  }
</style>