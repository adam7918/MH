<template>
    <div>
        <article class="user-panel-background">
        </article>
        <article class="user-panel">
            <div class="user-panel__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
                <div class="user-panel__user">
                    <div class="user-panel__username">
                        <router-link to="/profile" tag="p">Lvl 3. Droopy</router-link>
                    </div>
                    <div class="user-panel__buttons">
                        <router-link to="/profile" tag="button">
                            <i class="fas fa-user"></i> Profile
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

        }
    },
    created(){

    },
    methods: {
    }
}
</script>