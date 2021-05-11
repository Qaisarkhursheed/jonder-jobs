<template>
  <v-container>
    <v-row class="heading ma-0 mb-10 flex-column">
      <div>Hello,</div>
      <div class="text-color-primary-blue-dark font-weight-bold">
        John Doe
      </div>
    </v-row>
    <v-row class="mb-16">
      <v-col cols="4">
        <div class="hd pb-7">Profile Views</div>
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
        <div class="hd pb-7">People Reach</div>
        <v-card class="rounded-lg pa-2"
                flat 
                height="240px">
          <jonder-chart
              :options="options"
              :data="profileViewsData"
              :type="'line'"
              :uid="'peopleReach'"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-16">
      <v-col cols="5">
        <div class="hd pb-7">Anwendungen</div>
        <v-card class="rounded-lg pa-2"
                flat
                height="240px">
          <jonder-chart
              :options="pieOptions"
              :data="pieData"
              :type="'pie'"
              :uid="'Anwendungen'"
          />
        </v-card>
      </v-col>
      <v-col cols="7">
        <div class="hd pb-7">Jährliche Aktivität</div>
        <v-card class="rounded-lg pa-2"
                flat 
                height="240px">
          <jonder-chart
              :options="options"
              :data="barChartData"
              :type="'bar'"
              :uid="'jahrlicheAktivitat'"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(list, i) in candidates" :key="i">
        <CandidateList :list="list"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CandidateList from "@/components/company/CandidateList";
import JonderChart from "@/components/parts/JonderChart";

export default {
  name: "CompanyDashboard",

  components: {
    JonderChart,
    CandidateList
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
      profileViewsData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June"
        ],
        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },
      pieData: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      barChartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June"
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }],
      },
      candidates: {
        0: {
          type: 'request',
          items: [
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: true,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
          ]
        },
        1: {
          type: 'negotiation',
          items: [
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: true,
            },
          ]
        },
        2: {
          type: 'call',
          items: [
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: true,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
          ]
        }
      }
    }
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