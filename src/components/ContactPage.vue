<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li class="navbar-items--active">
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
        </div>
            <div class="content">
                <div class="content-introduction">
                    <p>Feel free to contact us at <a href="mailto:example@placeholder.com" target="_blank">example@placeholder.com</a></p>
                </div>
        </div>
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