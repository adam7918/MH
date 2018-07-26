<template>
    <main>
        <section class="login-background-top"></section>
        <div class="container">
            <h1 id="login-title">Medieval<span>Havoc</span> </h1>
            <!-- Login Form -->
            <div class="login-panel" v-if="!registerMode">
                <p v-if="registrationSuccessMessage" class="login-panel__success">{{registrationSuccessMessage}}</p>
                <p v-if="formErrorMessage" class="login-panel__error">{{formErrorMessage}}</p>
                <form v-on:submit.prevent=" registrationSuccessMessage=''; submitLoginForm();">
                    <input v-model="loginUsername" type="text" placeholder="username" required>
                    <input v-model="loginPassword" type="password" placeholder="password" required>
                    <input type="submit" value="LOGIN">
                    <span class="login-panel__register">No account yet? Click <a @click="/* registerMode = !registerMode; clearMessagesAndForms() */ closedRegistration()">here</a> to register.</span> 
                </form>
            </div>
            <!-- Registration Form -->
            <div class="login-panel" v-if="registerMode">
                <p v-if="formErrorMessage" class="login-panel__error">{{formErrorMessage}}</p>
                <form v-on:submit.prevent="submitRegistrationForm()">
                    <input v-model="registerUsername" type="text" placeholder="username" required>
                    <input v-model="registerEmail" type="email" placeholder="email address" required>
                    <input v-model="registerPassword" type="password" placeholder="password" required>
                    <input type="submit" value="REGISTER">
                    <span class="login-panel__register">Already got an account? Click <a @click="registerMode = !registerMode; clearMessagesAndForms()">here</a> to login.</span> 
                </form>
            </div>
            <router-link tag="p" to="/" class="login-return">Return</router-link>
            
        </div>
    </main>
</template>
<script>
import axios from 'axios'

export default {
    data() {
      return {
        // User login details
        loginUsername: '',
        loginPassword: '',

        // User registration details
        registerUsername: '',
        registerEmail: '',
        registerPassword: '',

        // Contains error message regarded login/registration status
        formErrorMessage: '',

        registrationSuccessMessage: '',

        // False = Login, True = Registering
        registerMode: false,
      }
    },
    created() {
        if(this.$auth.checkAuth()){
            this.$router.push('/overview')
        }

    },
    methods: {
        /** 
         * Called when a user submits registration form
         * 
         * registerUsername - user's desired username
         * registerEmail - user's email address
         * registerPassword - user's desired password
         */
        submitRegistrationForm: function(){
            axios.post(this.$apiUrl + '/account', {
                username    : this.registerUsername,
                email       : this.registerEmail,
                password    : this.registerPassword
            })
            .then(response =>{
                this.registerMode = false
                this.registrationSuccessMessage = "Registration successful."
            })
            .catch(e => {
                this.formErrorMessage = "Something went wrong. Please try again."
                alert(e)
            })
        },

        /** 
         * Called when a user submits login form
         * 
         * loginUsername - user's existing username
         * loginPassword - user's password for account
         */
        submitLoginForm: function(){
            axios.post(this.$apiUrl + '/account/login', {
                username    : this.loginUsername,
                password    : this.loginPassword
            })
            .then(response =>{
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', this.loginUsername)
                this.$router.push('/overview')
            })
            .catch(e => {
                this.formErrorMessage = "Incorrect username or password"
            })
        },

        /**
         * Clears all error/success messages and form data when a user switches between login and register
         */
        clearMessagesAndForms: function(){
            this.formErrorMessage = ''
            this.registrationSuccessMessage = ''
            this.loginUsername = ''
            this.loginPassword = ''
            this.registerUsername = ''
            this.registerEmail = ''
            this.registerPassword = ''
        },

        /** TEMPORARY TO CLOSE ACCOUNT REGISTRATION */
        closedRegistration: function(){
            alert('Account registration is not yet open to the public.')
        }
    }
}
</script>
