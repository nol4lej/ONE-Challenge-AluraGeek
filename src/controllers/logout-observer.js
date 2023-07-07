import { userStateManage } from "./users-manage.js"

class AuthStateLogoutObserver{
    notify(){
        const nav_logout = document.getElementById("btn-logout")
        nav_logout.addEventListener("click", async (event) => {
            event.preventDefault()
            try {
                userStateManage.Logout()
                window.location.href = "#";
            } catch (error) {
                console.log(error)
            }
            
        })
    }
}

const authStateLogoutObserver = new AuthStateLogoutObserver()
userStateManage.suscribe(authStateLogoutObserver)