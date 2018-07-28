<script>
import { Bar } from 'vue-chartjs'

Chart.defaults.global.defaultFontColor = '#9195d6'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['HP', 'Strength', 'Defense', 'Agility', 'Energy'],
        defaultFontColor: 'white',
      datasets: [
        {
          label: 'Average',
          backgroundColor: [
                'rgba(202, 69, 47, 0.2)',
                'rgba(202, 69, 47, 0.2)',
                'rgba(202, 69, 47, 0.2)',
                'rgba(202, 69, 47, 0.2)',
                'rgba(202, 69, 47, 0.2)',
          ],
          borderColor: [
                'rgba(202,69,47,1)',
                'rgba(202,69,47,1)',
                'rgba(202,69,47,1)',
                'rgba(202,69,47,1)',
                'rgba(202,69,47,1)',
          ],
          borderWidth: 1,
          data: [100, 32, 10, 5, 35]
        },
        {
          label: 'You',
          backgroundColor: [
              'rgba(86, 79, 255, 0.2)',
              'rgba(86, 79, 255, 0.2)',
              'rgba(86, 79, 255, 0.2)',
              'rgba(86, 79, 255, 0.2)',
              'rgba(86, 79, 255, 0.2)',
          ],
          borderColor: [
                'rgba(86,79,255,1)',
                'rgba(86,79,255,1)',
                'rgba(86,79,255,1)',
                'rgba(86,79,255,1)',
                'rgba(86,79,255,1)',
          ],
          borderWidth: 1,
          data: [90, 15, 20, 9, 30]
        }
      ]
    })
  }
}
</script>