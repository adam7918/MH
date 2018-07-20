<template>
    <main>
        <div style="height: 50px; background: #333;"></div>
        <div style="height: 67vh;"></div>


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