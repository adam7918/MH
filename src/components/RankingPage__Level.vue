<template>
    <div class="content">
        <div class="ranking-container">
            <div class="ranking-table-top">
                Level
            </div>
            <div class="ranking-table-header">
                <p></p>
                <p>Player</p>
                <p>Level</p>
                <p>Last Active</p>
            </div>
           <div v-for="(user,index) in rankedUsers" :key="user.username" class="ranking-table-row">
               <p>#{{index}}</p>
               <div class="ranking-table-user">
                   <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg" />  
                   <div class="ranking-table-user-info">
                        <p class="ranking-table-user-level">Lvl {{user.level}}</p>
                        <h2>{{user.username}}</h2>
                   </div>
               </div>
               <p class="ranking-table-level">{{user.level}}</p>
               <p>{{parseDate(user.last_online)}}</p>
           </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            rankedUsers: [],
        }
    },
    created(){
        this.getRankings()
    },
 
    methods: {
        getRankings: function(){
            axios.get(this.$apiUrl + '/playerstats/rankings/level', this.$auth.getTokenHeader())
            .then(response =>{
                this.rankedUsers = response.data
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
        
    }
}
</script>
