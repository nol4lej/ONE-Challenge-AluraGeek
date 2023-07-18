import { user } from "../controllers/users-handle.js"

export class LoginForm extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render()
        this.handleEvent()
    }

    render(){
        this.innerHTML = `
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
    }

    handleEvent(){
        const form = this.querySelector("#login-form")

        form.addEventListener("submit", this.onSubmit.bind(this))
    }
    
    async onSubmit(event){
        event.preventDefault()
        const username = document.getElementById("login-username").value
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
    }

}

customElements.define("login-form", LoginForm)