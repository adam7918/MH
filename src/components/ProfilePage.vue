<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li class="navbar-items--active">
                        <p>Overview</p>
                    </li>
                    <li>
                        <p>PvP</p>
                    </li>
                </ul>
            </div>
        </div>
        <div style="height: 70vh"></div>
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
        if(!this.$auth.checkAuth()){
            this.$router.push('/')
        }
    },
    
    
  
  
}
</script>