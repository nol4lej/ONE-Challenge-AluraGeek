import { user } from "../../controllers/users-handle.js"
import { ContactFooter } from "../contactfooter.js"


function loginEvent(){
    const btn = document.getElementById("login-form")
    btn.addEventListener("submit", async (event) => {
        event.preventDefault()
        const username = document.getElementById("login-username").value
        // const email = document.getElementById("login-email").value
        const password = document.getElementById("login-password").value
        const info = document.getElementById("user-info")
        try {
            await user.login(username, password)
            setTimeout(() => {
                window.location.href = "#";
            }, 2000);
            
        } catch (error) {
            info.innerHTML = `
                ${error}
            `
        }
    })
}

export function Login(){
    const root = document.getElementById("root")
    root.innerHTML = `
        <div class="login">
            <h2 class="login__title">Iniciar Sesión</h2>
            <form class="login__form" id="login-form">
                <div class="email__container">
                    <input id="login-username" class="login__email" type="text" placeholder="Escriba su correo electrónico">
                </div>
                <div class="password__container">
                    <input id="login-password" class="login__password" type="password" placeholder="Escriba su contraseña">
                </div>
                <button type="submit" class="button__form">Entrar</button>
            </form>
            <span id="user-info"></span>
        </div>
    `
    loginEvent()
    ContactFooter();
}