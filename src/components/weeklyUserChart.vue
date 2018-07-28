<script>
import { Line } from 'vue-chartjs'

Chart.defaults.global.defaultFontColor = '#9195d6'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        defaultFontColor: 'white',
      datasets: [
        {
          label: 'New Players',
          backgroundColor: [
              'rgba(202, 69, 47, 0.2)',
          ],
          borderColor: [
              'rgba(202,69,47,1)',
          ],
          borderWidth: 1,
          data: [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0]
        },
        {
          label: 'Active Players',
          backgroundColor: [
              'rgba(86, 79, 255, 0.2)',
          ],
          borderColor: [
              'rgba(86,79,255,1)',
          ],
          borderWidth: 1,
          data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
        }
      ]
    })
  }
}
</script>