<template>
        <header class="nav" v-if="loggedIn" >
            <div class="nav__left">
                <router-link to="/overview" tag="h1" class="nav__title">Medieval<span>Havoc</span> </router-link>
                <input v-model="searchQuery" type="text" placeholder="Enter a username..." v-on:keydown="search">
                <i class="fas fa-search" @click="search({key: 'Enter'})"></i>
            </div>
            <div class="nav__right">
                <router-link to="/users" tag="a">{{$root.onlineUserCount}} Online</router-link>
                <router-link to="/rankings" tag="a">Rankings</router-link>
                <a @click='logout()'>Logout</a>
                <router-link to="/explore" tag="button" class="nav__button">Explore</router-link>
            </div>
        </header>
        <header class="nav" v-else>
            <div class="nav__left">
                <router-link to="/" tag="h1" class="nav__title">Medieval<span>Havoc</span> </router-link>
            </div>
            <div class="nav__right">
                <router-link to="/rankings" tag="a">Rankings</router-link>
                <router-link to="/explore" tag="button" class="nav__button">Play</router-link>
            </div>
        </header>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            searchQuery: '',
            loggedIn:false,
        }
    },
    created(){
        this.loggedIn = (localStorage.getItem('token'))
        this.updateLastOnline()
    },
    watch: {
      '$route': function () {
        this.loggedIn = (localStorage.getItem('token'))
        this.updateLastOnline()
      },
    },
    methods: {
        logout: function(){
            
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            this.$route.name == 'Home' ? this.$router.push('/login') : this.$router.push('/')
        },
        updateLastOnline: function(){
            if(localStorage.getItem('token')){
                axios.put(this.$apiUrl + '/account/online',{}, this.$auth.getTokenHeader())
                .then(response =>{
                    
                })
                .catch(e => {
                }) 
            }
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
    mounted() {
    }

}
</script>