export class HeaderComponent extends HTMLElement{

    constructor(){
        super();
    };

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <header class="header">
                <div class="header__content">
                    <h1 class="header__title">Febrero Promocional</h1>
                    <p class="header__info">Productos seleccionados con 33% de descuento</p>
                    <a href="#/category=consola" class="header__button">Ver Consolas</a>
                </div>
            </header>
        `;
    };

};

customElements.define("header-component", HeaderComponent)