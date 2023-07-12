import { user } from "./users-handle.js"

class LogoutObserver{
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

const logoutObserver = new LogoutObserver()
user.suscribe(logoutObserver)