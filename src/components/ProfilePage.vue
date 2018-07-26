<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li class="navbar-items--active">
                        <p>{{profileUsername}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="ranking-filters-container">
                <p>Actions</p>
                <div class="ranking-filters-buttons">
                    <p class="ranking-filters-buttons-active">Mail</p>
                    <p class="ranking-filters-buttons-active">Add Friend</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios'
import jquery from 'jquery'

let $ = jquery;

export default {
    data() {
      return {
          profileUsername: ''
          
      }
    },
    watch: {
      '$route': function () {
        this.getProfile()
      },
    },
    created() {
        
        if(!this.$auth.checkAuth()){
            this.$router.push('/login')
        }

        this.getProfile()
    },
    methods: {
        getProfile: function(){
        this.profileUsername = this.$route.params.username;

        if(!this.profileUsername){
            this.profileUsername = localStorage.getItem('username')
        }
        }
    }
    
    
  
  
}
</script>