import { user } from "../controllers/users-handle.js";

export class RegisterForm extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render()
        this.handleEvent()
    }

    render(){
        this.innerHTML = `
            <div class="register">
                <h2 class="register__title">Registrar Usuario</h2>
                <form class="register__form" id="register-form-id">
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
                <span id="register-info"></span>
            </div>
        `;
    }

    handleEvent(){
        const form = this.querySelector("#register-form-id");

        // si no usara bind(this), el this dentro de onSubmitForm estaría indefinido o podría referirse al objeto que desencadenó el evento (en este caso, el botón). Al hacer bind(this), garantizas que this apunte a la instancia de RegisterForm, permitiéndote acceder a las propiedades y métodos de la clase correctamente dentro del evento.
        form.addEventListener("submit", this.onSubmit.bind(this))
    }

    async onSubmit(event){
        event.preventDefault()
        const username = document.getElementById("register-username").value
        const email = document.getElementById("register-email").value
        const password = document.getElementById("register-password").value
        const info = document.getElementById("register-info")
        try {
            await user.register(username, email, password)
            setTimeout(() => {
                window.location.href = "#";
            }, 1000);
        } catch (error) {
            // error devuelve un array con el usuario y/o email existente.
            if(error.length > 1){
                info.innerHTML = `
                ${error[0]} y ${error[1]} ya existen.
                `
            } else {
                info.innerHTML = `
                ${error[0]} ya existe.
                `
            }

        }
    }

}

customElements.define("register-form", RegisterForm)