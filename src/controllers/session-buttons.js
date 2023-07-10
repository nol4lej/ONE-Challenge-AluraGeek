import { userStateManage } from "./users-manage.js"

class AuthStateObserver{
    notify(subject){
        if(subject.users){
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
const authStateObserver = new AuthStateObserver()
userStateManage.suscribe(authStateObserver)