<template>
        <header class="nav">
            <div class="nav__left">
                <router-link to="/overview" tag="h1" class="nav__title">Medieval<span>Havoc</span> </router-link>
                <input v-model="searchQuery" type="text" placeholder="Enter a username..." v-on:keydown="search">
                <i class="fas fa-search" @click="search({key: 'Enter'})"></i>
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
            playersOnline: 0,
            searchQuery: ''
        }
    },
    created(){
        this.getOnlinePlayerCount()
        this.updateLastOnline()
    },
    watch: {
      '$route': function () {
        this.getOnlinePlayerCount()
        this.updateLastOnline()
      },
    },
    methods: {
        logout: function(){
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            this.$router.push('/')
        },
        getOnlinePlayerCount: function(){
            axios.get(this.$apiUrl + '/account/online/all', this.$auth.getTokenHeader())
            .then(response =>{
                this.playersOnline = response.data["COUNT(*)"]
            })
            .catch(e => {
                
            })
        },
        updateLastOnline: function(){
            axios.put(this.$apiUrl + '/account/online',{}, this.$auth.getTokenHeader())
            .then(response =>{
                
            })
            .catch(e => {
                if(e.response.status == 403 || e.response.status == 401 || e.response.status == 429 ){
                    this.logout()
                }

            }) 
        },    
        search: function (e){
             if (e.key == "Enter") {
                var profileToGo = this.searchQuery.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
                this.$router.push('/profile/' + profileToGo)
                this.searchQuery = ''
                e.preventDefault()
            }
        },
    },

}
</script>