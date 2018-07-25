<template>
    <div class="content">
        <div class="content-introduction">
            <p><span class="color--white">{{$root.onlineUserCount}}</span> online | <span class="color--white">{{onlineUserCount}}</span> active in the last 30 minutes</p>
            <p></p>

        </div>
        <div class="online-users">
           <router-link :to="{ name: 'Profile', params: { username: user.username}}" v-for="user in onlineUsers" :key="user.username" class="online-users-panel">
               
               <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"/>
               <div class="online-users-panel__text">
                   <h2><span class="online-users-panel--level">Lvl {{user.level}}.</span> {{user.username}}</h2>
                   <p>{{parseDate(user.last_online)}}</p>
               </div>
           </router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            onlineUsers: [],
            onlineUserCount:0,
        }
    },
    created(){
        this.getOnlineUsers()
    },
 
    methods: {
        getOnlineUsers: function(){
            axios.get(this.$apiUrl + '/account/online/all/detailed', this.$auth.getTokenHeader())
            .then(response =>{
                this.onlineUserCount = response.data.length
                this.onlineUsers = response.data
            })
            .catch(e => {

            })
            
        },
        parseDate: function(last_online){
            const start = new Date(last_online),
            end   = new Date(),
            diff  = new Date(end - start),
            mins  = Math.round(diff/60/60/24);
            if(mins < 2){
                return "Last active now"
            } else {
                return "Last active " + mins + " minutes ago" 
            }
          
        }
        
    },
}
</script>