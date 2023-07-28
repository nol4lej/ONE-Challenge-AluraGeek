import { state } from "../../../state/state.js"

export class SearchComponent extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleSearchInput()
        this.handleSearchWidth()
    }

    render(){
        this.innerHTML = `
            <div class="nav__search" id="nav-search-container">
                <input id="search-input" class="search__input" type="text" placeholder="¿Qué deseas buscar?">
                <a href="#" id="search-button" class="material-icons search__button">search</a>
            </div>
        `
    }

    handleSearchInput(){
        const input = this.querySelector("#search-input")

        input.addEventListener("input", (event) => {
            const inputValue = event.target.value.toLowerCase()

            // condicion que limpia cuando no haya input
            if(inputValue === ""){
                input.value = ""
                return
            }

            // caputo los productos que su "name" comience con las letras que yo ingrese en el input.
            const results = state.products.filter(product => {
                return product.name.toLowerCase().startsWith(inputValue) || product.name.toLowerCase().includes(inputValue)
            })
            console.log(results)


        })


    }

    // metodo que controla la activacion search en responsive
    handleSearchWidth(){
        const btn = this.querySelector("#search-button")
        const searchContainer = this.querySelector("#nav-search-container")
        const searchInput = this.querySelector("#search-input")
        
        let isListenerActive = false; // Variable para controlar si el listener está activo

        const toggleSearch = () => {
            searchContainer.classList.toggle("active");
            searchInput.classList.toggle("active");
        };
    
        const activateListener = () => {
            if (!isListenerActive && innerWidth < 768) {
                btn.addEventListener("click", toggleSearch);
                isListenerActive = true;
            } else if (isListenerActive && innerWidth >= 768) {
                searchContainer.classList.remove("active");
                searchInput.classList.remove("active");
                btn.removeEventListener("click", toggleSearch);
                isListenerActive = false;
            }
        };
    
        activateListener(); // Activar o desactivar el listener inicialmente
    
        window.addEventListener("resize", () => {
            activateListener(); // Activar o desactivar el listener cuando se redimensione la ventana
        });
    }

}

customElements.define("search-products", SearchComponent)