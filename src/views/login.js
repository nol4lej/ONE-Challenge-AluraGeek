import { ContactFooter } from "./contactfooter.js"

export function Login(){
    const root = document.getElementById("root")
    root.innerHTML = `
        <div class="login">
            <h2 class="login__title">Iniciar Sesión</h2>
            <form action="" class="login__form">
                <div class="email__container">
                    <label for=""></label>
                    <input class="login__email" type="email" placeholder="Escriba su correo electrónico">
                </div>
                <div class="password__container">
                    <label for=""></label>
                    <input class="login__password" type="password" placeholder="Escriba su contraseña">
                </div>
                <button type="submit" class="button__form">Entrar</button>
            </form>
        </div>
    `
    ContactFooter();
}