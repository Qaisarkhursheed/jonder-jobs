<template>
  <Apexchart
    type="bar"
    :options="options"
    :series="series"
  />
</template>

<script>

import Apexchart from 'vue-apexcharts';

export default {
  name: 'BarChart',

  components: {
    Apexchart
  },
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    max: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      options: {
        legend: {
          show: false
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: this.data.map(({ title }) => title)
        },
        yaxis: {
          max: parseInt(this.max)
        },
        plotOptions: {
          bar: {
            distributed: true
          }
        },
        fill: {
          colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
        }
      },
      series: [
        {
          name: 'You',
          data: this.data.map(({ score }) => score)
        }
      ]
    }
  }
}
</script>