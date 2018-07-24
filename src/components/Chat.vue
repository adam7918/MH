<template>
    <div class="chat-tab">
        <div class="chat-tab-header" @click="chatOpen = !chatOpen">
            <p>World Chat</p>
            <p>3 Online</p>
        </div>
        <div v-if="chatOpen" class="chat-message-panel">
            <div class="chat-messages-container" id="chat-message-id">
                <div class="chat-message" v-for="(msg, index) in messages" :key="index">
                    <span class="chat-user">
                        <router-link tag="h2" :to="{ name: 'Profile', params: { username: msg.user}}">{{msg.user}}</router-link>
                        <h2>12:00</h2>
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
import io from 'socket.io-client';
export default {
    data() {
        return {
            user: '',
            message: '',
            messages: [],
            socket : io('http://www.medievalhavoc.com:3000'),
            chatOpen:false,
        }
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
            
            this.socket.emit('SEND_MESSAGE', {
                user: localStorage.getItem('username'),
                message: this.message
            });
            this.message = ''
        }
    },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
            var d = $('#chat-message-id');
            d.scrollTop(d.prop("scrollHeight"));
        });
    }
}
</script>
