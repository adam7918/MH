<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li class="navbar-items--active">
                        <p>Error</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="placeholderdiv">404 Page Not Found.</div>
    </main>
</template>
<script>
import axios from 'axios'

export default {
    data() {
      return {
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/login')
        }
    },
}
</script>