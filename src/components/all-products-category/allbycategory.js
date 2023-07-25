import { productsSubject } from "../../observables/products.js"
import {state} from "../../state/state.js"

export class allByCategory extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.renderProducts()
        this.suscribeToProducts()
    }

    render(){
        this.innerHTML = `
            <div class="">
                <h2 class="bycategory__title">Todos los productos</h2>
            </div>
            <div class="bycategory__container" id="bycategory-container"></div>
        `
    }

    get category(){
        return this.getAttribute("category")
    }
    set category(value){
        this.setAttribute("category", value)
    }

    renderProducts(){
        const category = this.getAttribute("category")
        const container = this.querySelector("#bycategory-container")

        if(state.productsByCategory.hasOwnProperty(category)){
            const arrayProductsHTML = [];
            const currentCategory = state.productsByCategory[category]
            currentCategory.forEach(product => {
                const { imageUrl, name, price, id } = product
                const html = `
                    <product-card src="${imageUrl}" title="${name}" price="${price}" link="${id}"></product-card>
                `
                arrayProductsHTML.push(html)
            })
            const arrayWithoutCommas = arrayProductsHTML.join("");
            container.innerHTML = arrayWithoutCommas;   
        } else {
            container.innerHTML = "<loader-component></loader-component>"
        }

    }

    suscribeToProducts(){
    productsSubject.subscribe((data) => {
            this.render()
            this.renderProducts()   
        })
    }

}

customElements.define("products-by-category", allByCategory)