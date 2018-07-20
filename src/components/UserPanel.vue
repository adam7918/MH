<template>
    <main>
        <article class="user-panel-background">
        </article>
        <article class="user-panel">
            <div class="user-panel__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
                <div class="user-panel__user">
                    <div class="user-panel__username">
                        <p>Droopy</p>
                    </div>
                    <div class="user-panel__buttons">
                        <button><i class="fas fa-user"></i> Profile</button>
                        <button><i class="fas fa-box-open"></i> Inventory</button>
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
                    <p>30,000</p>
                    <p>Gold</p>
                </div>
            </div>
        </article>
    </main>
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