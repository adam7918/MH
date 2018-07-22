<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li :class="{'navbar-items--active': activeTab === 1 }" @click="activeTab = 1">
                        <p>Level</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 2 }" @click="activeTab = 2">
                        <p>Wealth</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 3 }" @click="activeTab = 3">
                        <p>Tower of Havoc</p>
                    </li>
                </ul>
            </div>
        </div>
        <level v-if="activeTab === 1"></level>
        <wealth v-if="activeTab === 2"></wealth>
        <towerofhavoc v-if="activeTab === 3"></towerofhavoc>
        
    </main>
</template>
<script>
import axios from 'axios'
import RankingPage__Level from './RankingPage__Level'
import RankingPage__Wealth from './RankingPage__Wealth'
import RankingPage__TowerOfHavoc from './RankingPage__TowerOfHavoc'

export default {
    components: {
        'level': RankingPage__Level,
        'wealth': RankingPage__Wealth,
        'towerofhavoc': RankingPage__TowerOfHavoc,
    },
    data() {
      return {
          activeTab: 1
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/')
        }
    },
}
</script>