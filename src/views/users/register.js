import { userStateManage } from "../../controllers/users-manage.js";
import { ContactFooter } from "../contactfooter.js"

function registerEvent(){
    const btn = document.getElementById("register-form")
    btn.addEventListener("submit", async (event) => {
        event.preventDefault()
        const email = document.getElementById("register-email").value
        const password = document.getElementById("register-password").value
        const username = document.getElementById("register-username").value
        try {
            userStateManage.registerUser(email, password, username)
            setTimeout(() => {
                window.location.href = "#";
            }, 1000);
        } catch (error) {
            console.log(error)
        }
    })
}

export function Register(){
    const root = document.getElementById("root")
    root.innerHTML = `
        <div class="register">
            <h2 class="register__title">Registrar Usuario</h2>
            <form class="register__form" id="register-form">
                <div class="register__username__container">
                    <label for=""></label>
                    <input id="register-username" class="username__email" type="text" placeholder="Escriba un nombre de usuario">
                </div>
                <div class="register__email__container">
                    <label for=""></label>
                    <input id="register-email" class="register__email" type="email" placeholder="Escriba su correo electrónico">
                </div>
                <div class="register__password__container">
                    <label for=""></label>
                    <input id="register-password" class="register__password" type="password" placeholder="Escriba su contraseña">
                </div>
                <button type="submit" class="register__button__form">Entrar</button>
            </form>
        </div>
    `
    registerEvent();
    ContactFooter();
}