<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li class="navbar-items--active">
                        <p>Inbox</p>
                    </li>
                    <li>
                        <p>Outbox</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="placeholderdiv">Coming soon.</div>
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
            this.$router.push('/')
        }
    },
}
</script>