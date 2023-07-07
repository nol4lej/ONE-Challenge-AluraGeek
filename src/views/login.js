import { userStateManage } from "../controllers/users-manage.js"
import { ContactFooter } from "./contactfooter.js"


function loginEvent(){
    const btn = document.getElementById("login-form")
    btn.addEventListener("submit", (event) => {
        event.preventDefault()
        const email = document.getElementById("login-email").value
        const password = document.getElementById("login-password").value
        try {
            userStateManage.Login(email, password)
            setTimeout(() => {
                window.location.href = "#";
            }, 1000);
            
        } catch (error) {
            console.log(error)
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
                    <input id="login-email" class="login__email" type="email" placeholder="Escriba su correo electrónico">
                </div>
                <div class="password__container">
                    <input id="login-password" class="login__password" type="password" placeholder="Escriba su contraseña">
                </div>
                <button type="submit" class="button__form">Entrar</button>
            </form>
        </div>
    `
    loginEvent()
    ContactFooter();
}