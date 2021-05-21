<template>
  <div class="dashboard-statistics" v-if="loaded">
    <v-row class="mb-16">
      <v-col cols="4">
        <div class="heading pb-7">Profile Views</div>
        <v-card class="rounded-lg pa-2"
                flat
                height="240px">
          <jonder-chart
              :options="options"
              :data="profileViewsData"
              :type="'line'"
              :uid="'profileViews'"
          />
        </v-card>
      </v-col>
      <v-col cols="8">
        <div class="heading pb-7">People Reach</div>
        <v-card class="rounded-lg pa-2"
                flat 
                height="240px">
          <jonder-chart
              :options="options"
              :data="peopleReachData"
              :type="'line'"
              :uid="'peopleReach'"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-16">
      <v-col cols="5">
        <div class="heading pb-7">Anwendungen</div>
        <v-card class="rounded-lg pa-2"
                flat
                height="240px">
          <jonder-chart
              :options="pieOptions"
              :data="companyInteractionsData"
              :type="'pie'"
              :uid="'Anwendungen'"
          />
        </v-card>
      </v-col>
      <v-col cols="7">
        <div class="heading pb-7">Jährliche Aktivität</div>
        <v-card class="rounded-lg pa-2"
                flat 
                height="240px">
          <jonder-chart
              :options="options"
              :data="companyInteractionsYearlyData"
              :type="'bar'"
              :uid="'jahrlicheAktivitat'"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import JonderChart from "@/components/parts/JonderChart";

export default {
  name: 'DashboardStats',

  components: {
    JonderChart
  },

  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      pieOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },
  created() {
    this.fetchPeopleReach();
    this.fetchProfileViews();
    this.fetchCompanyInteractions();
    this.fetchUserInteractions();
  },

  methods: {
    ...mapActions('company', ['fetchUserInteractions',
                              'fetchPeopleReach',
                              'fetchProfileViews',
                              'fetchCompanyInteractions']),
    formatForCharts(data, prop) {
      let obj = {
        labels: [],
        datasets: [{
          backgroundColor: "rgb(166, 206, 227)",
          borderColor: "rgb(166, 206, 227)",
          data: []
        }]
      };
      data.forEach(element => {
        obj.labels.push(element[prop]);
        obj.datasets[0].data.push(element.count);
      });

      return obj;
    }
  },

  computed: {
    ...mapGetters('company', ['userInteractions',
                              'peopleReach',
                              'profileViews',
                              'companyInteractions',
                              'companyInteractionsYearly']),
    ...mapGetters('user', ['getUserFullName']),
    peopleReachData() {
      return this.formatForCharts(this.peopleReach, 'dayname');
    },
    profileViewsData() {
      return this.formatForCharts(this.profileViews, 'monthname');
    },
    companyInteractionsYearlyData() {
      return this.formatForCharts(this.companyInteractionsYearly, 'monthname');
    },
    companyInteractionsData() {
      return {
        labels: [
          'Requests',
          'Negotiations',
          'Call'
        ],
        datasets: [{
          data: [
            this.companyInteractions['requests'],
            this.companyInteractions['negotiations'],
            this.companyInteractions['calls'],
          ],
          backgroundColor: [
            'rgb(103, 164, 255)',
            'rgb(42, 86, 243)',
            'rgb(0, 65, 142)'
          ],
          hoverOffset: 4
        }]
      }
    },
    loaded() {
      return this.peopleReach && this.profileViews && 
             this.companyInteractions && this.companyInteractionsYearly;
    }
  }
}
</script>

<style lang="scss" scoped>
  .heading {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #82858C;
  }
</style>