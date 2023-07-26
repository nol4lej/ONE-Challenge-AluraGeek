import { state } from "../../../state/state.js"
import {productsSubject} from "../../../observables/products.js"

export class AdminProds extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleProducts()
        this.suscribeToProducts()
    }

    render(){
        this.innerHTML = `
        <section class="admin__container">
            <div class="admin__header">
                <h2 class="admin__title">Administrar Productos</h2>
                <a class="admin__link" href="#/panel/product?add">Agregar Producto</a>
            </div>
            <div class="admin__products" id="all-products"></div>
        </section>
    `
    }

    handleProducts(){
        const container = this.querySelector("#all-products")
        const allproducts = state.products
        const arrayProductsHTML = [];
        allproducts.forEach(product => {
            const { imageUrl, category, description, name, price, id} = product

            const html = `
                <product-card src="${imageUrl}" title="${name}" price="${price}" link="${id}" toManage="yes"></product-card>
            `;
            arrayProductsHTML.push(html);

        })
        const arrayWithoutCommas = arrayProductsHTML.join("");
        container.innerHTML = arrayWithoutCommas;
        return
    }

    suscribeToProducts(){
        productsSubject.subscribe((data) => {
            this.render()
            this.handleProducts()
        })
    }


}

customElements.define("admin-products", AdminProds)