import { productsSubject } from "../../observables/products.js"
import { state } from "../../state/state.js"

export class RandomProducts extends HTMLElement{

    constructor(){
        super()
        this.randomProducts = []
    };

    async connectedCallback(){
        await this.render()
    }

    async render(){
        const productId = this.getAttribute("product-id")
        const product = await productsSubject.getProduct(productId)
        const { category } = product

        let arrayRandom;
        if(state.productsByCategory.hasOwnProperty(category)){
            arrayRandom = this.createRandomArray(category, product)
        } else {
            arrayRandom = "No hay más productos para esta categoría."
        }

        this.innerHTML = `
            <div class="">
                <h2 class="random__title">Productos similares</h2>
            </div>
            <div class="random__content" id="">${arrayRandom}</div>
        `
    }

    get id(){
        return this.getAttribute("product-id")
    }
    set id(value){
        this.setAttribute("product-id", value)
    }

    createRandomArray(category, currentProduct){
        this.randomProducts = [] // reinicio el array, sino se acumulan los random products de cada view
        let contador = 0
        let maxContador = 6
        const currentCategory = state.productsByCategory[category]
        if(currentCategory.length < 7){
            maxContador = currentCategory.length - 1 // agrego -1 para descontar el currentProduct
        }
        while(contador !== maxContador){
            const RandomIndex = Math.floor(Math.random() * currentCategory.length);
            const ProductSelect = currentCategory[RandomIndex]

            // compruebar que el producto random exista y que el pructo random no sea el mismo de la vista
            if(!this.randomProducts.includes(ProductSelect) && ProductSelect !== currentProduct){
                
                const productHTML = this.renderRandomProducts(ProductSelect)
                
                this.randomProducts.push(productHTML)
                contador++
            }
        }
        return this.randomProducts
    }

    renderRandomProducts(ProductSelect){
        const { imageUrl, name, price, id } = ProductSelect
        const html = `
            <product-card src="${imageUrl}" title="${name}" price="${price}" link="${id}"></product-card>
        `
        return html
    }

}

customElements.define("random-products", RandomProducts)