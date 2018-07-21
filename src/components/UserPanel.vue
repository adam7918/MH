<template>
    <div>
        <article class="user-panel-background">
        </article>
        <article class="user-panel">
            <div class="user-panel__left">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,e_brightness:15,w_200,h_200,c_fill,q_92/v1/fdc/img/placeholder/fdc-generic-avatar.jpg" />
                <div class="user-panel__user">
                    <div class="user-panel__username">
                        <router-link to="/profile" tag="p">Lvl 3. {{username}}</router-link>
                    </div>
                    <div class="user-panel__buttons">
                        <router-link to="/mail" tag="button" class="user-panel--notification">
                            <i class="fas fa-envelope user-panel--notification"></i> Mail (1)
                        </router-link>
                        <router-link to="/inventory" tag="button">
                            <i class="fas fa-box-open"></i> Inventory
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="user-panel__right">
                <div class="user-panel__stat">
                    <p>100%</p>
                    <p>Health</p>
                </div>
                <div class="user-panel__stat">
                    <p>100%</p>
                    <p>Energy</p>
                </div>
                <div class="user-panel__stat">
                    <p>0%</p>
                    <p>XP</p>
                </div>
                <div class="user-panel__stat">
                    <p class="user-panel--gold">30,000</p>
                    <p>Gold</p>
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
        }
    },
    created(){
        this.updatePanel()
    },
      watch: {
      // ON ROUTE CHANGE HIDE MENUS
      '$route': function () {
        this.updatePanel()
      },
    },
    methods: {
        updatePanel: function(){
            this.username = localStorage.getItem('username')
        }
        
    }
}
</script>