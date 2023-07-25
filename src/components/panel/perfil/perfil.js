import { state } from "../../../state/state.js"
import { user } from "../../../observables/users.js"


export class Perfil extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        const {email, id, role, user} = state.user

        this.innerHTML = `
            <div class="perfil__container">
                <div class="perfil__data">
                    <p class="data__name">User ID</p>
                    <span class="data__output" id="user-id">${id}</span>
                </div>
                <div class="perfil__data">
                    <p class="data__name">Username</p>
                    <span class="data__output" id="username">${user}</span>
                </div>
                <div class="perfil__data">
                    <p class="data__name">Role</p>
                    <span class="data__output" id="role">${role}</span>
                </div>
                <div class="perfil__data">
                    <p class="data__name">Email</p>
                    <span class="data__output" id="email">${email}</span>
                </div>

            </div>
        `
    }

}

customElements.define("perfil-panel", Perfil)