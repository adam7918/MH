<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li :class="{'navbar-items--active': activeTab === 1 }" @click="activeTab = 1">
                        <p>Inbox</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 2 }" @click="activeTab = 2">
                        <p>Outbox</p>
                    </li>
                </ul>
            </div>
        </div>
        <inbox v-if="activeTab==1"></inbox>
        <outbox v-if="activeTab==2"></outbox>
    </main>
</template>
<script>
import axios from 'axios'
import MailPage__inbox from './MailPage__inbox'
import MailPage__outbox from './MailPage__outbox'

export default {
    components: {
      'inbox': MailPage__inbox,
      'outbox': MailPage__outbox,
    },
    data() {
      return {
          activeTab: 1,
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/')
        }
    },
}
</script>