<template>
    <div class="content">
        <div class="content-introduction">
            <p>There are <span class="color--white">{{onlineUserCount}}</span> players online.</p>
        </div>
        <div class="online-users">
           <div class="online-users-panel">
               <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"/>
               <div class="online-users-panel__text">
                   <h2><span class="online-users-panel--level">Lvl 23.</span> Azgard</h2>
                   <p>Last active 23 minutes ago</p>
               </div>
           </div><div class="online-users-panel">
               <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"/>
               <div class="online-users-panel__text">
                   <h2><span class="online-users-panel--level">Lvl 23.</span> Azgard</h2>
                   <p>Last active 23 minutes ago</p>
               </div>
           </div>
            <div class="online-users-panel">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"/>
                <div class="online-users-panel__text">
                    <h2><span class="online-users-panel--level">Lvl 23.</span> Azgard</h2>
                    <p>Last active 23 minutes ago</p>
                </div>
            </div>
        
            <div class="online-users-panel">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"/>
                <div class="online-users-panel__text">
                    <h2><span class="online-users-panel--level">Lvl 23.</span> Azgard</h2>
                    <p>Last active 23 minutes ago</p>
                </div>
            </div>
            <div class="online-users-panel">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"/>
                <div class="online-users-panel__text">
                    <h2><span class="online-users-panel--level">Lvl 23.</span> Azgard</h2>
                    <p>Last active 23 minutes ago</p>
                </div>
            </div>
            <div class="online-users-panel">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg"/>
                <div class="online-users-panel__text">
                    <h2><span class="online-users-panel--level">Lvl 23.</span> Azgard</h2>
                    <p>Last active 23 minutes ago</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            onlineUsers: [],
            onlineUserCount: 0,
        }
    },
    created(){
        this.getOnlineUsers()
    },
 
    methods: {
        getOnlineUsers: function(){
            axios.get(this.$apiUrl + '/account/online/all/detailed', this.$auth.getTokenHeader())
            .then(response =>{
                var test = response.data
                console.log(test)
                this.onlineUserCount = response.data.size()
            })
            .catch(e => {

            })
            
        }
        
    }
}
</script>