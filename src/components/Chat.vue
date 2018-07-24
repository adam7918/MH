<template>
    <div class="chat-tab">
        <div class="chat-tab-header" @click="chatOpen = !chatOpen; chatTabTitle = 'World Chat'; unreadMessages = 0">
            <p>{{chatTabTitle}}</p>
            <p>{{$root.onlineUserCount}} Online</p>
        </div>
        <div v-if="chatOpen" class="chat-message-panel">
            <div class="chat-messages-container" id="chat-message-id">
                <div class="chat-message" v-for="(msg, index) in messages" :key="index">
                    <span class="chat-user">
                        <router-link tag="h2" :to="{ name: 'Profile', params: { username: msg.user}}">{{msg.user}}</router-link>
                        <h2>{{msg.timestamp}}</h2>
                    </span>
                    <p>{{ msg.message }}</p>
                </div>
            </div>
            <form @submit.prevent="sendMessage">
                    <div class="chat-input">
                        <input type="text" v-model="message" placeholder="Type a message...">
                    </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: '',
            message: '',
            messages: [],
            chatOpen:false,
            chatTabTitle:'World Chat',
            unreadMessages:0,
        }
    },
    created(){
        this.messages = this.$root.chatHistory
    },
    methods: {
        sendMessage(e) {
            var d = new Date()
            var timestamp = d.getHours() + ':' + (d.getMinutes()< 10 ? ('0' + d.getMinutes()) : d.getMinutes())
            e.preventDefault()
            
            this.$socket.emit('SEND_MESSAGE', {
                user: localStorage.getItem('username'),
                message: this.message,
                timestamp: timestamp
            });
            this.message = ''
        }
    },
    mounted() {
        this.$socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data]
            // you can also do this.messages.push(data)
            if(!this.chatOpen){
                this.unreadMessages++
                this.chatTabTitle = this.unreadMessages + ' unread'
            }
        });
    }
}
</script>
