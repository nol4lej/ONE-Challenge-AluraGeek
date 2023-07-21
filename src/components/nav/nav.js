import logo from '../../img/logo.png';

export class NavBar extends HTMLElement{

    constructor(){
        super();
    };

    connectedCallback(){
        this.render();
    };

    render(){
        this.innerHTML = `
            <nav class="nav">
                <div class="nav__logo__search">
                    <div class="nav__logo">
                    <a href="#"><img src="${logo}" alt="Logo" class="nav__img"></a>
                        
                    </div>
                    <div class="nav__search">
                        <input class="search__input" type="text" placeholder="¿Qué deseas buscar?">
                        <button class="material-icons search__button">search</button>
                    </div>
                </div>
                <div class="nav__buttons">
                    <ul class="buttons__list">
                        <li><a href="#/login" class="buttons__item">Login</a></li>
                        <li><a href="#/register" class="buttons__item">Register</a></li>
                    </ul>
                </div>

            </nav>
        `;
    };

};

customElements.define("nav-component", NavBar);