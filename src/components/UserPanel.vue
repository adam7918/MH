<template>
    <div>
        <article class="user-panel-background">
        </article>
        <article v-if="loggedIn" class="user-panel">
            <div class="user-panel__left">
                <router-link to="/profile" tag="img" src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"></router-link>
                <div class="user-panel__user">
                    <div class="user-panel__username">
                        <router-link to="/profile" tag="p"><span class="user-panel__username--small">Lvl {{level}}.</span> {{username}}</router-link>
                    </div>
                    <div class="user-panel__buttons">
                        <router-link to="/inventory" tag="button">
                            <i class="fas fa-box-open"></i> Inventory
                        </router-link>
                        <router-link to="/mail" tag="button">
                            <i class="fas fa-envelope "></i> Mail
                        </router-link>
                        <button class="user-panel--notification" v-if="dailyGift" @click="openGift()">
                            <i class="fas fa-gift"></i> Daily Gift
                        </button>
                    </div>
                </div>
            </div>
            <div class="user-panel__right">
                <div class="user-panel__stat">
                    <p>{{health}}</p>
                    <p>Health</p>
                </div>
                <div class="user-panel__stat">
                    <p>{{energy}}</p>
                    <p>Energy</p>
                </div>
                <div class="user-panel__stat">
                    <p>{{experience}}</p>
                    <p>Experience</p>
                </div>
                <div class="user-panel__stat">
                    <p class="user-panel--gold">{{gold}}</p>
                    <p>Gold</p>
                </div>
                <div class="user-panel__stat">
                    <p class="user-panel--red">{{rubies}}</p>
                    <p>Rubies</p>
                </div>
            </div>
        </article>
        <article v-else class="user-panel">
            <div class="user-panel__left">
                <div class="user-panel__user">
                </div>
            </div>
            <div class="user-panel__right">
                <div class="user-panel__stat">
                    <p>{{onlineUserCount}}</p>
                    <p>Online</p>
                </div>
                <div class="user-panel__stat">
                    <p>{{registeredUserCount}}</p>
                    <p>Registered</p>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            username: '',
            level: '',
            experience: '',
            gold: '',
            rubies: '',
            health: '',
            energy: '',
            dailyGift: false,
            loggedIn: false,
            registeredUserCount: 0,
            onlineUserCount: 0,
        }
    },
    created(){
        this.getUserStats()
        this.loggedIn = (localStorage.getItem('token'))
        this.updatePanel()
    },
      watch: {
      // ON ROUTE CHANGE HIDE MENUS
      '$route': function () {
        this.loggedIn = (localStorage.getItem('token'))
        this.updatePanel()
      },
    },
    methods: {
        updatePanel: function(){
            if(this.loggedIn){
                let self = this
                axios.get(this.$apiUrl + '/playerstat/', this.$auth.getTokenHeader())
                .then(response =>{
                    this.level = response.data[0].level
                    this.experience = response.data[0].experience
                    this.gold = response.data[0].gold
                    this.health = response.data[0].health
                    this.energy = response.data[0].energy
                    this.rubies = response.data[0].rubies
                    this.username = response.data[0].username
                    this.dailyGift = response.data[0].daily_gift
                    localStorage.setItem('username', this.username)
                })
                .catch(e => {
                    if(e.response.status == 401){
                        localStorage.removeItem('token')
                        localStorage.removeItem('username')
                    }
                })
            }
        },
        openGift: function(){
        this.$notify({
            group: 'notifications',
            title: 'Daily Gift Claimed!',
            type: 'success',
            text: 'You have received: '
        });
        },  
        getUserStats: function(){
            if(!this.loggedIn){
                axios.get(this.$apiUrl + '/account/registered', this.$auth.getTokenHeader())
                .then(response =>{
                    this.registeredUserCount = response.data["COUNT(*)"]
                })
                .catch(e => {
                })

                axios.get(this.$apiUrl + '/account/online/all', this.$auth.getTokenHeader())
                .then(response =>{
                    this.onlineUserCount = response.data["COUNT(*)"]
                })
                .catch(e => {
                })
            }
        } 
    }
}
</script>