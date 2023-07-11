import { user } from "./users-handle.js"

class AuthStateLogoutObserver{
    notify(){
        const nav_logout = document.getElementById("btn-logout")
        nav_logout.addEventListener("click", async (event) => {
            event.preventDefault()
            try {
                user.logout()
                window.location.href = "#";
            } catch (error) {
                console.log(error)
            }
            
        })
    }
}

const authStateLogoutObserver = new AuthStateLogoutObserver()
user.suscribe(authStateLogoutObserver)