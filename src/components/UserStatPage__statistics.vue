<template>
    <div class="content">
        <div class="content-introduction">
            <p>Playerbase Statistics</p>
        </div>
        <weekly-chart :height="150"/>
    </div>
</template>
<script>
import weeklyUserChart from './weeklyUserChart'

export default {
    components: {
        'weekly-chart': weeklyUserChart
    }
}
</script>