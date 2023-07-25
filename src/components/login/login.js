import { user } from "../../observables/users.js"

class Login extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleLogin()
    }

    render(){
        this.innerHTML = ` 
            <div class="login__container" id="login-container">
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
                    <span id="user-info" class="login__error"></span>
                </div>
            </div>
        `
    }

    async handleLogin(){
        const form = this.querySelector("#login-form")

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const inputUser = this.querySelector("#login-user-email").value
            const password = this.querySelector("#login-password").value

            try {
                const res = await user.login(inputUser, password)
                const container = this.querySelector("#login-container")
                container.innerHTML = `
                        <h2 class="login__title">${res}</h2>
                        <loader-component></loader-component>
                    `
                setTimeout(() => {
                    window.location.href = "#";
                }, 1000);
            } catch (error) {
                const info = this.querySelector("#user-info")
                info.innerHTML = `
                    <i class="material-icons">error</i> ${error}
                `
            }
        })
    }

}

customElements.define("login-form", Login)