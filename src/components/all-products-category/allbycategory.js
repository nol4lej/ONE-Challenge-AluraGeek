import { productsSubject } from "../../observables/products.js"
import {state} from "../../state/state.js"

export class allByCategory extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        const category = this.getAttribute("category")

        let arrayProducts
        if(state.productsByCategory.hasOwnProperty(category)){
            arrayProducts = this.renderProducts(category)
        }

        this.innerHTML = `
            <div class="">
                <h2 class="bycategory__title">Todos los productos ${category}</h2>
            </div>
            <div class="bycategory__container">${arrayProducts}</div>
        `
    }

    get category(){
        return this.getAttribute("category")
    }
    set category(value){
        this.setAttribute("category", value)
    }

    renderProducts(category){
        const currentCategory = state.productsByCategory[category]
        const arrayProducts = currentCategory.map(product => {
            const { imageUrl, name, price, id } = product
            const html = `
                <product-card src="${imageUrl}" title="${name}" price="${price}" link="${id}"></product-card>
            `
            return html
        })
        const fixedArray = arrayProducts.join("")
        return fixedArray
    }

    suscribeToProducts(){
        productsSubject.subscribe((data) => {
            this.render()
            this.renderProducts()
        })
    }

}

customElements.define("products-by-category", allByCategory)