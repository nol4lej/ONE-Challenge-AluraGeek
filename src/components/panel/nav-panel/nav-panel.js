// import { user } from "../../../observables/users.js"
import { state } from "../../../state/state.js"

export class NavPanel extends HTMLElement{

    constructor(){
        super()
        this.userState = state.user
    }

    connectedCallback(){
        // primero verificar si existe un usuario
        this.handleUserState()
        // renderizar
        this.render()
        // verificar el rol del usuario, si es admin, agrega el boton de administrar
        this.handleRoleUser()
    }

    render(){
        this.innerHTML = `
            <nav class="nav__panel" id="nav-panel">
                <a href="#/panel" class="nav__panel__btn">Perfil</a>
            </nav>
            <div id="main-panel"></div>
        `
    }

    handleUserState(){
        if(this.userState.length < 1){
            window.location.href = "#";
        }
        return
    }

    handleAdmin(){
        const btnAdmin = this.querySelector("#admin-nav")
        const container = this.querySelector("#main-panel")
        btnAdmin.addEventListener("click", (event) => {
            container.innerHTML = `
                <admin-products></admin-products>
        `
        })
    }

    handleRoleUser(){
        if(this.userState.role === "admin"){
            const nav = this.querySelector("#nav-panel")
            const panelBtn = document.createElement("span")
            panelBtn.innerHTML = `
                <a href="#/panel/administrar" id="admin-nav" class="nav__panel__btn">Administrar productos</a>
            `
            nav.appendChild(panelBtn)
            this.handleAdmin()
        }
    }

}

customElements.define("nav-panel", NavPanel)