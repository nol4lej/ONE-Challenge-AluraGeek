import { state } from "../../../state/state.js"

export class SearchComponent extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleSearchInput()
    }

    render(){
        this.innerHTML = `
            <div class="nav__search">
                <input id="search-input" class="search__input" type="text" placeholder="¿Qué deseas buscar?">
                <button class="material-icons search__button">search</button>
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

}

customElements.define("search-products", SearchComponent)