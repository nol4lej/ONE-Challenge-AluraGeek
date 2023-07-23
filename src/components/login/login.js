import { user } from "../../observables/users.js"

class Login extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleUser()
    }

    render(){
        this.innerHTML = ` 
            <div class="login__container">
                <h2 class="login__title">Iniciar Sesión</h2>
                <div class="login__form__container">
                    <form method="get" class="login__form" id="login-form">
                        <div class="login__inputs__container">
                            <input id="login-user-email" class="login__input" type="text" placeholder="Escriba su nombre de usuario o correo electronico">
                            <input id="login-password" class="login__input" type="password" placeholder="Escriba su contraseña">
                        </div>
                        <div class="login__btn__container">
                            <button class="login__btn" type="submit">Entrar</button>
                        </div>
                        
                    </form>
                </div>
                <span id="user-info"></span>
            </div>
        `
    }

    async handleUser(){
        const form = document.getElementById("login-form")
        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const inputUser = document.getElementById("login-user-email").value
            const password = document.getElementById("login-password").value

            try {
                await user.login(inputUser, password)
                setTimeout(() => {
                    window.location.href = "#";
                }, 2000);
            } catch (error) {
                const info = document.getElementById("user-info")
                info.innerHTML = `
                    ${error}
                `
            }
        })
    }

}

customElements.define("login-form", Login)