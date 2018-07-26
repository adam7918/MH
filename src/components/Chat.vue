<template>
    <div class="chat-tab">
        <div class="chat-tab-header" @click="toggleChat()">
            <p><i class="fas fa-comment"></i> {{chatTabTitle}}</p>
            <p>{{$root.onlineUserCount}} Online</p>
        </div>
          <transition name="fadeHeight" mode="out-in">
        <div v-if="chatOpen" class="chat-message-panel">
            <div class="chat-messages-container" id="chat-message-id">
                <div v-for="(msg, index) in $root.chatHistory" :key="index">
                    <span class="chat-user">
                        <router-link tag="h2" :to="{ name: 'Profile', params: { username: msg.user}}">{{msg.user}}</router-link>
                        <h2>{{msg.timestamp}}</h2>
                    </span>
                    <div class="chat-message">
                        <p>{{ msg.message }}</p>
                    </div>
                </div>
            </div>
            <form @submit.prevent="sendMessage">
                    <div class="chat-input">
                        <input v-if="loggedIn" type="text" v-model="message" placeholder="Type your message...">
                        <input v-else type="text" v-model="message" placeholder="Must be logged in to chat" disabled>
                    </div>
            </form>
        </div>
          </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: '',
            message: '',
            chatOpen:false,
            chatTabTitle:'World Chat',
            unreadMessages:0,
            loggedIn: false,
            chatLoggedIn: false,
        }
    },
    created(){
        this.loggedIn = (localStorage.getItem('token'))
        this.loginToChat()
    },
    watch: {
      '$route': function () {
            this.loggedIn = (localStorage.getItem('token'))
            this.loginToChat()
      }
    },
    mounted() {
        this.$socket.on('MESSAGE', (data) => {
            this.$root.chatHistory = [...this.$root.chatHistory, data]
            if(!this.chatOpen){
                if(!(data.user == localStorage.getItem('username'))){
                    this.unreadMessages++
                    this.chatTabTitle = this.unreadMessages + ' unread'
                }
            }
            this.$nextTick(() => {
                this.scrollToBottom()
            });

        });
    },
    methods: {
        loginToChat: function() {
            if((this.loggedIn && !this.chatLoggedIn) || (this.chatLoggedIn && (this.$root.onlineUserCount === 0))){
                this.$socket.emit('USER_LOGIN', localStorage.getItem('username'));
                this.chatLoggedIn = true
            }
        },
        sendMessage: function(e) {
                if(this.message){
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
        scrollToBottom: function(){
            var element = document.getElementById("chat-message-id");
            element.scrollTop = element.scrollHeight;
        },
        toggleChat: function(){
            this.chatOpen = !this.chatOpen
            this.chatTabTitle = 'World Chat'
            this.unreadMessages = 0;

            this.$nextTick(() => {
                this.scrollToBottom()
            });
        }

    },
}
</script>
