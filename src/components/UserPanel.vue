<template>
    <div>
        <article class="user-panel-background">
        </article>
        <article v-if="loggedIn" class="user-panel">
            <div class="user-panel__left">
                <router-link to="/profile" tag="img" src="https://res-5.cloudinary.com/hireclub/image/upload/default_avatar.png"></router-link>
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
                <div class="user-panel__currencies">
                    <div class="user-panel__currency">
                        <p class="">{{gold}}</p>
                        <i class="fas fa-coins color--gold"></i>
                    </div>
                    <div class="user-panel__currency">
                        <p class="">{{rubies}}</p>
                        <i class="far fa-gem color--red"></i>
                    </div>
                </div>
                <div class="user-panel__stat">
                    <div class="outer">
                        <div class="inner" id="hp-bar" data-progress="10%">
                            <div></div>
                        </div>        
                    </div>
                    <p>Health {{hpPercent}}%</p>
                </div>
                <div class="user-panel__stat">
                    <div class="outer">
                        <div class="inner" id="energy-bar" data-progress="10%">
                            <div></div>
                        </div>        
                    </div>
                    <p>Energy {{energyPercent}}%</p>
                </div>
                <div class="user-panel__stat">
                    <div class="outer">
                        <div class="inner" id="xp-bar" data-progress="10%">
                            <div></div>
                        </div>        
                    </div>
                    <p>XP<br> {{xpPercent}}%</p>
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
import jquery from 'jquery'

let $ = jquery;

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

            currentHp: 100,
            maxHp: 100,

            currentEnergy: 5,
            maxEnergy: 5,

            currentXp: 0,
            maxXp: 5,
        }
    },
    computed: {
        xpPercent: function(){
            return (this.currentXp / this.maxXp)*100
        },
        hpPercent: function(){
            return (this.currentHp / this.maxHp)*100
        },
        energyPercent: function(){
            return (this.currentEnergy / this.maxEnergy)*100
        }
    },
    created(){
        this.getUserStats()
        this.loggedIn = (localStorage.getItem('token'))
        this.updatePanel()
        this.$nextTick(() => {
            this.updateStatBars()
        });

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
            title: 'Daily Gift',
            type: 'success',
            text: '+50 Gold<br>+3 Rubies'
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
        },
        updateStatBars: function(){
            document.getElementById('hp-bar').style.height = this.hpPercent + '%'
            document.getElementById('xp-bar').style.height = this.xpPercent + '%'
            document.getElementById('energy-bar').style.height = this.energyPercent + '%'
        }
    }
}
</script>