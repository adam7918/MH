<template>
    <main>
        <header class="nav">
            <div class="nav__left">
                <router-link to="/overview" tag="h1" class="nav__title">Medieval<span>Havoc</span> </router-link>
            </div>
            <div class="nav__right">
                <router-link to="/rankings" tag="a">Rankings</router-link>
                <router-link to="/users" tag="a">0 Online</router-link>
                <a @click='logout()'>Logout</a>
                <router-link to="/explore" tag="button" class="nav__button">Play</router-link>
            </div>
        </header>
    </main>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    created(){

    },
    methods: {
        logout: function(){
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            this.$router.push('/')
        }
    }
}
</script>