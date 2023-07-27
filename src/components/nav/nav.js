import logo from '../../img/logo.png';
import { user } from '../../observables/users.js';
import { state } from '../../state/state.js';

export class NavBar extends HTMLElement{

    constructor(){
        super();
    };

    connectedCallback(){
        this.render();
        this.handleActiveUser()
    };

    render(){
        this.innerHTML = `
            <nav class="nav">
                <div class="nav__logo__search">
                    <div class="nav__logo">
                        <a href="#"><img src="${logo}" alt="Logo" class="nav__img"></a>  
                    </div>
                    <search-products></search-products>
                </div>
                <div class="nav__buttons">
                    <ul class="buttons__list" id="buttons">
                        <li><a href="#/login" class="buttons__item">Login</a></li>
                        <li><a href="#/register" class="buttons__item">Register</a></li>
                    </ul>
                </div>

            </nav>
        `;
    };

    handleActiveUser(){
        user.subscribe((data) => {
            const buttons = this.querySelector("#buttons")
            if(state.user.length === 0){
                buttons.innerHTML = `
                <li><a href="#/login" class="buttons__item">Login</a></li>
                <li><a href="#/register" class="buttons__item">Register</a></li>
            `
            } else {
                this.changeButtons(buttons)
            }
            
        })
    }

    changeButtons(buttons){
        buttons.innerHTML = `
            <li><a href="#/panel" class="buttons__item">Panel</a></li>
            <li><a href="#/" id="btn-logout" class="buttons__item">Logout</a></li>
        `
        this.handleLogout()
    }

    async handleLogout(){
        const nav_logout = this.querySelector("#btn-logout")
        nav_logout.addEventListener("click", async (event) => {
            event.preventDefault()
            try {
                await user.logout()
                window.location.href = "#";
            } catch (error) {
                console.log(error)
            }
            
        })
    }

};

customElements.define("nav-component", NavBar);