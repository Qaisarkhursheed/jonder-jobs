<template>
  <v-row class="d-flex">
    <v-col cols="6">
      <v-card class="stats-card pa-2" flat>
        <jonder-chart
            :options="options"
            :data="data"
            :type="'line'"
            :uid="'chart1'"
        />
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="stats-card pa-2" flat>
        <jonder-chart
            :options="options"
            :data="data"
            :type="'line'"
            :uid="'chart2'"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

// Statistic component is also available on dashboard

import JonderChart from "@/components/parts/JonderChart";
export default {
  name: 'ProfileStatistic',
  components: { JonderChart },
  data: () => ({
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
    data: {
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
  })
};

</script>

<style lang="scss" scoped>
  .stats-card {
    height: 346px;
    width: 100%;
  }
</style>