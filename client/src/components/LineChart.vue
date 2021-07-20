<script>
  import {Line} from 'vue-chartjs' // We specify what type of chart we want from vue-chartjs and the mixins module
  // const { reactiveProp } = mixins
  export default { //We are extending the base chart class as mentioned above
    // mixins: [reactiveProp],
    extends: Line,
    data () {
      return {
        options: { //Chart.js options
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      // this.chartData is created in the mixin
      this.renderChart(this.chartData, this.options)
    }
  }
</script>