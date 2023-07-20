import { user } from "../helpers/users/users-handle.js"

class UsersObserver{
    notify(subject){
        if(subject.user){
            document.getElementById("btn-login").style.display = "none"
            document.getElementById("btn-reg").style.display = "none"
            document.getElementById("btn-logout").style.display = "flex"
            document.getElementById("btn-panel").style.display = "flex"
        } else {
            document.getElementById("btn-login").style.display = "flex"
            document.getElementById("btn-reg").style.display = "flex"
            document.getElementById("btn-logout").style.display = "none"
            document.getElementById("btn-panel").style.display = "none"
        }
    }
}

const userObserver = new UsersObserver()
user.suscribe(userObserver)