import Router from '../router'

export default {

// CHECK IF JWT TOKEN EXISTS (IS LOGGED IN)
checkAuth(){
    var authorized = true;
    if (!localStorage.getItem('token')){
        authorized = false
    } else if (!localStorage.getItem('username'))
    return authorized
},
}
