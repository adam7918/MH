import Router from '../router'

export default {

// CHECK IF JWT TOKEN EXISTS (IS LOGGED IN)
checkAuth(){
    var jwt = localStorage.getItem('token')
    return jwt
},
}
