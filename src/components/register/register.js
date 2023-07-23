class Register extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = ` 
            <div class="register__container">
                <h2 class="register__title">Registrar nuevo usuario</h2>
                <div class="register__form__container">
                    <form method="get" class="register__form">
                        <div class="register__inputs__container">
                            <input class="register__input" type="text" placeholder="Escriba su correo electronico">
                            <input class="register__input" type="text" placeholder="Escriba su nombre de usuario">
                            <input class="register__input" type="password" placeholder="Escriba su contraseña">   
                        </div>
                        <div class="register__btn__container">
                            <button class="register__btn" type="submit">Registrar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        `
    }

}

customElements.define("register-form", Register)