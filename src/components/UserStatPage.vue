<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li :class="{'navbar-items--active': activeTab === 1 }" @click="activeTab = 1">
                        <p>All</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 2 }" @click="activeTab = 2">
                        <p>Online</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 3 }" @click="activeTab = 3">
                        <p>Statistics</p>
                    </li>
                </ul>
            </div>
        </div>
        <all v-if="activeTab === 1"></all>
        <online v-if="activeTab === 2"></online>
        <statistics v-if="activeTab === 3"></statistics>
    </main>
</template>
<script>
import axios from 'axios'
import UserStatPage__all from './UserStatPage__all'
import UserStatPage__online from './UserStatPage__online'
import UserStatPage__statistics from './UserStatPage__statistics'

export default {
    components: {
        'all': UserStatPage__all,
        'online': UserStatPage__online,
        'statistics': UserStatPage__statistics,
    },
    data() {
      return {
          activeTab: 2,
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/')
        }
    },
}
</script>