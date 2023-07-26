import { user } from "../../observables/users.js"

class Register extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleRegister()
    }

    render(){
        this.innerHTML = ` 
            <div class="register__container" id="register-container">
                <h2 class="register__title">Registrar nuevo usuario</h2>
                <div class="register__form__container">
                    <form class="register__form" id="register-form">
                        <div class="register__inputs__container">
                            <label for=""></label>
                            <input class="register__input" type="email" placeholder="Escriba su correo electronico" id="email-input" required>
                            <label for=""></label>
                            <input class="register__input" type="text" placeholder="Escriba su nombre de usuario" id="user-input" required>
                            <label for=""></label>
                            <input class="register__input" type="password" placeholder="Escriba su contraseña" id="password-input" required>   
                        </div>
                        <div class="register__btn__container">
                            <button class="register__btn" type="submit">Registrar</button>
                        </div>
                        <span id="register-info" class="register__info"></span>
                    </form>
                </div>
            </div>
        `
    }

    handleRegister(){
        const form = this.querySelector("#register-form")
        form.addEventListener("submit", this.onSubmit.bind(this))
    }

    async onSubmit(event){
        event.preventDefault()
        const email = this.querySelector("#email-input").value
        const username = this.querySelector("#user-input").value
        const password = this.querySelector("#password-input").value

        const info = this.querySelector("#register-info")

        try {
            const res = await user.register(email, username, password)
            const container = this.querySelector("#register-container")
            container.innerHTML = `
                <h2 class="register__title">${res}</h2>
                <loader-component></loader-component>
            `
            setTimeout(() => {
                window.location.href = "#";
            }, 1000);
        } catch (error) {
            info.innerHTML = error
        }

    }

}

customElements.define("register-form", Register)