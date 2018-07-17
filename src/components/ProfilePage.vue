<template>
    <main>
        <div style="height: 890px">Hello!</div>

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
        alert("Testing")

    },
    
    
  
  
}
</script>