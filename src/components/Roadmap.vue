<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li :class="{'navbar-items--active': activeTab === 1 }" @click="activeTab = 1">
                        <p>Roadmap</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 2 }" @click="activeTab = 2">
                        <p>Vote</p>
                    </li>
                </ul>
            </div>
        </div>
        <roadmap v-if="activeTab === 1"></roadmap>
        <vote v-if="activeTab === 2"></vote>
    </main>
</template>
<script>
import axios from 'axios'
import Roadmap__roadmap from './Roadmap__roadmap'
import Roadmap__vote from './Roadmap__vote'

export default {
    components: {
      'roadmap': Roadmap__roadmap,
      'vote': Roadmap__vote
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