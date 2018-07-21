<template>
        <header class="nav">
            <div class="nav__left">
                <router-link to="/overview" tag="h1" class="nav__title">Medieval<span>Havoc</span> </router-link>
                <input type="text" placeholder="Enter a username...">
                <i class="fas fa-search"></i>
            </div>
            <div class="nav__right">
                <router-link to="/users" tag="a">{{playersOnline}} Online</router-link>
                <router-link to="/rankings" tag="a">Rankings</router-link>
                <a @click='logout()'>Logout</a>
                <router-link to="/explore" tag="button" class="nav__button">Explore</router-link>
            </div>
        </header>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            playersOnline: 0
        }
    },
    created(){
        this.getOnlinePlayerCount()
        //this.updateLastOnline()
    },
        // WATCH THESE VARIABLES FOR CHANGES
    watch: {
      // ON ROUTE CHANGE HIDE MENUS
      '$route': function () {
        this.getOnlinePlayerCount()
       // this.updateLastOnline()
      },
    },
    methods: {
        logout: function(){
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            this.$router.push('/')
        },
        getOnlinePlayerCount(){
            axios.get(this.$apiUrl + '/account/online/all', this.$auth.getTokenHeader())
            .then(response =>{
                this.playersOnline = response.data["COUNT(*)"]
            })
            .catch(e => {
                
            })
        },
        updateLastOnline(){
            axios.put(this.$apiUrl + '/account/online',{}, this.$auth.getTokenHeader())
            .then(response =>{
                
            })
            .catch(e => {
                if(e.response.status == 403 || e.response.status == 401){
                    this.logout()
                }
            })
        }
    },

}
</script>