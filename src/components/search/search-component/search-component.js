import { state } from "../../../state/state.js"

export class SearchComponent extends HTMLElement{

    constructor(){
        super()
        this.searchUrl = ""; // aqui se almacena la url que se crea para la busqueda
    }

    connectedCallback(){
        this.render()
        this.handleSearchInput()
        this.handleSearchWidth()
        this.handleClickButton()
        this.handleHashChange()
    }

    render(){
        this.innerHTML = `
            <div class="nav__search" id="nav-search-container">
                <input id="search-input" class="search__input" type="text" placeholder="¿Qué deseas buscar?" autocomplete="off">
                <a href="#" id="search-button" class="material-icons search__button">search</a>
            </div>
            <ul id="product-list" class="product__list"></ul>
        `
    }

    handleSearchInput(){
        const searchInput = this.querySelector("#search-input")
        const btnSearch = this.querySelector("#search-button")
        const list = this.querySelector("#product-list")
        const navContainer = this.querySelector("#nav-search-container")

        searchInput.addEventListener("input", (event) => {
            const inputValue = event.target.value.toLowerCase()

            // 1.- Limpio la url de los productos acumulados anteriormente y la mini vista
            btnSearch.setAttribute("href", `#`)
            this.searchUrl = ""
            list.innerHTML = ""
            navContainer.classList.remove("search")

            // 2.- Condicion que limpia la url y la minivista
            if(inputValue === ""){
                this.searchUrl = ""
                list.innerHTML = ""
                btnSearch.setAttribute("href", `#`)
                return
            }

            // 3.- caputo los productos que su "name" comience con las letras que yo ingrese en el input.
            const results = state.products.filter(product => {
                return product.name.toLowerCase().startsWith(inputValue) || product.name.toLowerCase().includes(inputValue)
            })

            // se agrega por efecto del nav containe
            navContainer.classList.add("search")

            // 4.- Si no hay resultados agrego la url "#/?search=" para renderizar que no hay resultados.
            if(results.length < 1){
                navContainer.classList.remove("search")
                btnSearch.setAttribute("href", `#/?search=`)
            }

            // 5.- preparo los productos para renderizar
            this.prepareProducts(results)

        })
    }

    prepareProducts(results){
        const resultsFilter = results.map(product => {
            const item = document.createElement("li")
            item.innerHTML = `
                <a href="#/id=${product.id}" class="search__item">
                    <img class="search__img" src="${product.imageUrl}" alt="${product.name}">
                    <p class="search__item__name">${product.name.slice(0,20)}</p>
                </a>
            `
            // capturo el id y creo la url para el boton search
            this.createUrl(product.id)
            return item
        })

        this.renderMiniView(resultsFilter)
    }

    renderMiniView(resultsFilter){
        const list = this.querySelector("#product-list")
        // recorro el array con los productos listos para renderizar y los agrego a "view"
        resultsFilter.forEach(item => {
            list.appendChild(item);
        });
    }

    createUrl(id){
        const btnSearch = this.querySelector("#search-button")
        if(this.searchUrl === ""){
            this.searchUrl = id.slice(0,8)
        } else {
            this.searchUrl = this.searchUrl+"+"+id.slice(0,8)
        }
        btnSearch.setAttribute("href", `#/?search=${this.searchUrl}`)
    }

    // metodo que controla que al hacer click en el boton search, se limpie el input y la url
    handleClickButton(){
        const btnSearch = this.querySelector("#search-button")
        const searchInput = this.querySelector("#search-input")
        btnSearch.addEventListener("click", (event) => {

            // si el input está vacio no recarga la pagina al hacer click en el search button
            if(searchInput.value === ""){
                return event.preventDefault()
            }

            setTimeout(() => {
                this.clearUrlAndDOM()
            }, 100);
            
        })
    }

    // metodo que controla la activacion search en responsive
    handleSearchWidth(){
        const btnSearch = this.querySelector("#search-button")
        const searchContainer = this.querySelector("#nav-search-container")
        const searchInput = this.querySelector("#search-input")
        
        let isListenerActive = false; // Variable para controlar si el listener está activo

        const toggleSearch = () => {
            searchContainer.classList.toggle("active");
            searchInput.classList.toggle("active");
        };
    
        const activateListener = () => {
            if (!isListenerActive && innerWidth < 768) {
                btnSearch.addEventListener("click", toggleSearch);
                isListenerActive = true;
            } else if (isListenerActive && innerWidth >= 768) {
                searchContainer.classList.remove("active");
                searchInput.classList.remove("active");
                btnSearch.removeEventListener("click", toggleSearch);
                isListenerActive = false;
            }
        };
    
        activateListener(); // Activar o desactivar el listener inicialmente
    
        window.addEventListener("resize", () => {
            this.clearUrlAndDOM()
            activateListener(); // Activar o desactivar el listener cuando se redimensione la ventana
        });
    }

    handleHashChange(){
        window.addEventListener("hashchange", () => {
            const list = this.querySelector("#product-list")
            this.clearUrlAndDOM()
        })
    }

    clearUrlAndDOM(){
        const btnSearch = this.querySelector("#search-button")
        const searchInput = this.querySelector("#search-input")
        const list = this.querySelector("#product-list")
        const navContainer = this.querySelector("#nav-search-container")

        btnSearch.setAttribute("href", `#`)
        this.searchUrl = ""
        list.innerHTML = ""
        searchInput.value = ""
        navContainer.classList.remove("search")
        searchInput.classList.remove("active");
    }

}

customElements.define("search-products", SearchComponent)