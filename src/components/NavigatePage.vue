<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li :class="{'navbar-items--active': activeTab === 1 }" @click="activeTab = 1">
                        <p>Zone 1</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 2 }" @click="activeTab = 2">
                        <p>Zone 2</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 3 }" @click="activeTab = 3">
                        <p>Zone 3</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 4 }" @click="activeTab = 4">
                        <p>Tower of Havoc</p>
                    </li>
                </ul>
            </div>
        </div>
        <zone1 v-if="activeTab === 1"></zone1>
        <zone2 v-if="activeTab === 2"></zone2>
        <zone3 v-if="activeTab === 3"></zone3>
        <towerofhavoc v-if="activeTab === 4"></towerofhavoc>
    </main>
</template>
<script>
import axios from 'axios'
import NavigatePage__Zone_1 from './NavigatePage__Zone_1'
import NavigatePage__Zone_2 from './NavigatePage__Zone_2'
import NavigatePage__Zone_3 from './NavigatePage__Zone_3'
import NavigatePage__TowerOfHavoc from './NavigatePage__TowerOfHavoc'

export default {
    components: {
        'zone1': NavigatePage__Zone_1,
        'zone2': NavigatePage__Zone_2,
        'zone3': NavigatePage__Zone_3,
        'towerofhavoc': NavigatePage__TowerOfHavoc
    },
    data() {
      return {
          activeTab: 1,
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/')
        }
    },
}
</script>