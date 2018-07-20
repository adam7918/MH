<template>
    <main>
        <header class="nav">
            <div class="nav__left">
                <h1 class="nav__title">Medieval<span>Havoc</span> </h1>
            </div>
            <div class="nav__right">
                <a>Rankings</a>
                <a>0 Online</a>
                <a @click='logout()'>Logout</a>
                <button class="nav__button">Play</button>
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