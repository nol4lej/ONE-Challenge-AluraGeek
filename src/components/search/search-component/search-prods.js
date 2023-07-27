import { state } from "../../../state/state.js"

export class SearchProducts extends HTMLElement{

    constructor(){
        super()
        this.searchProducts = ""
    }

    connectedCallback(){
        this.render()
        this.handleWidth()
        this.handleSearch()
        this.handleChanges()
    }

    render(){
        this.innerHTML = `
            <div class="nav__search__container">
                <ul class="nav__search" id="nav-search">
                    <input class="search__input" type="text" placeholder="¿Qué deseas buscar?" id="search-input">
                    <a class="material-icons search__button" id="search-btn">search</a>
                </ul>
                <ul class="search__items" >
                    <div class="search__items-inner" id="search-items"></div>
                </ul>
            </div>
        `
    }

    handleSearch(){
        const input = this.querySelector("#search-input")
        const view = this.querySelector("#search-items")
        const inputContainer = this.querySelector("#nav-search")
        const btnSearch = this.querySelector("#search-btn")

        input.addEventListener("input", (event) => {
            const query = event.target.value.toLowerCase()


            // condicion que limpia cuando no haya input y limpia la url
            if(query === ""){
                view.innerHTML = ""
                inputContainer.classList.remove("nav__search-active")
                
                return
            }

            // caputo los productos que su "name" comience con las letras que yo ingrese en el input.
            const results = state.products.filter(product => {
                return product.name.toLowerCase().startsWith(query)
            })
btnSearch.setAttribute("href", "") // limpio la url cada vez que hayan cambios en el input
            // hago un map de los productos capturados para envolverlos en un elemento "li" junto con el html que los estilisa
            const resultsFilter = results.map(product => {
                const item = document.createElement("li")
                item.innerHTML = `
                    <a href="#/id=${product.id}" class="search__item">
                        <img class="search__img" src="${product.imageUrl}" alt="${product.name}">
                        <p>${product.name.slice(0,20)}</p>
                    </a>
                `
                // capturo el id y creo la url para el boton search
                this.createUrl(product.id)
                return item
            })

            // Limpiar el contenido anterior del elemento 'view' y limpio la Url
            view.innerHTML = ""; 
            inputContainer.classList.remove("nav__search-active")
            this.searchProducts = ""

            // recorro el array con los productos listos para renderizar y los agrego a "view"
            resultsFilter.forEach(item => {
                inputContainer.classList.add("nav__search-active")
                view.appendChild(item);
            });

            
        })
    }

    resetSearch() {
        const inputContainer = this.querySelector("#nav-search");
        inputContainer.classList.remove("nav__search-active");

        const view = this.querySelector("#search-items");
        view.innerHTML = "";
        const input = this.querySelector("#search-input");
        input.value = "";
    }
      
    handleChanges() {
        window.addEventListener("resize", this.resetSearch.bind(this));
        window.addEventListener("hashchange", this.resetSearch.bind(this));
    }

    createUrl(id){
        const btnSearch = this.querySelector("#search-btn")
        if(this.searchProducts === ""){
            this.searchProducts = id.slice(0,8)
        } else {
            this.searchProducts = this.searchProducts+"+"+id.slice(0,8)
        }
        btnSearch.setAttribute("href", `#/?search=${this.searchProducts}`)
    }

    handleWidth(){
        const searchBtn = this.querySelector("#search-btn")
        const searchContainer = this.querySelector("#nav-search");
        const input = this.querySelector("#search-input")
        const view = this.querySelector("#search-items")

        if(window.innerWidth < 768){
            searchBtn.addEventListener("click", () => {

                view.innerHTML = ""
                input.value = ""
                
                searchContainer.classList.add("active");
                input.classList.add("active");

            })
        }

        window.addEventListener("resize", () => {
            if(window.innerWidth > 768){
                searchContainer.classList.remove("active")
                input.classList.remove("active")
            }
        })
    }

}

customElements.define("search-products", SearchProducts)