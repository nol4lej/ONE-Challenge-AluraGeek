export class SearchComponent extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <div class="nav__search">
                <input class="search__input" type="text" placeholder="¿Qué deseas buscar?">
                <button class="material-icons search__button">search</button>
            </div>
        `
    }

}

customElements.define("search-products", SearchComponent)