<template>
    <div class="content">
        <div class="ranking-filters-container">
            <p>Filters</p>
            <div class="ranking-filters-buttons">
                <p :class="{'ranking-filters-buttons-active': activeFilter === 1 }" @click="activeFilter = 1">Playerbase</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 2 }" @click="activeFilter = 2">Game</p>
            </div>
        </div>

        <div v-if="activeFilter === 1">
            <div class="content-introduction">
                <p>Playerbase Statistics</p>
            </div>
            <weekly-chart :height="150"/>
        </div>

        <div v-if="activeFilter === 2">
            <div class="content-introduction">
                <p>Average player statistics around your level</p>
            </div>
            <user-stat-average-chart :height="150"/>
        </div>
    </div>
</template>
<script>
import weeklyUserChart from './weeklyUserChart'
import userStatAverageChart from './userStatAverageChart'

export default {
    data() {
        return {
            activeFilter: 1
        }
    },
    components: {
        'weekly-chart': weeklyUserChart,
        'user-stat-average-chart': userStatAverageChart
    }
}
</script>