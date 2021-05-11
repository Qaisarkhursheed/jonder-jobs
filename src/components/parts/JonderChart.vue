<template>
  <div class="chart-holder">
    <canvas :id="uid"></canvas>
  </div>
</template>

<script>
const Chart = require("chart.js/dist/chart.min");

export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "line"
    },
    uid: {
      type: String,
      required: true
    }
  },
  data: () => ({
    myChart: null
  }),
  mounted() {
    const config = {
      type: this.type,
      data: this.data,
      options: this.options
    };
    this.myChart = new Chart(document.getElementById(this.uid), config);
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.destroy();
      this.myChart = null;
    }
  }
};
</script>

<style>
.chart-holder {
  position: relative;
  height: 100%;
}
</style>