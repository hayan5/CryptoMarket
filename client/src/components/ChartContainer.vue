<template>
  <div class="container">
    <vue-apex-charts type="line" :options="options" :series="series"></vue-apex-charts>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
// import LineChart from './LineChart.vue'
export default {
  name: 'ChartContainer',
  components: {VueApexCharts},
  data () {
    return {
      options: {
        chart: {
          id: 'line-chart'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
      // options: null,
      // series: null
    }
    
  },
  mounted() {
    // this.fillData(),
    console.log(this.series, "ssss")
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
.container {
  // max-height: 500px;
  // display: flex;
  width: 50%;
}
// #line-chart {
//   width: 75%;
// }
</style>