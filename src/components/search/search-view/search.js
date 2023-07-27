import { state } from "../../../state/state.js"

export class SearchView extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleIds()
    }

    render(){
        this.innerHTML = `
        <div class="">
            <h2 class="search__found-title">Resultados de la búsqueda</h2>
        </div>
        <div class="search__found-products" id="found-container"></div>
        `
    }

    set productsId(value){
        this.setAttribute("productsId", value)
    }
    get productsId(){
        return this.getAttribute("productsId")
    }

    handleIds(){
        const ids = this.getAttribute("productsId").split(" ")
        let arrayProducts = []

        // RECORRO LOS PRODUCTOS DEL STATE
        for(const product of state.products){
            // RECORRO LOS IDS QUE CAPTURE PARA RECORRERLOS Y COMPARO CADA UNO DE ELLOS CON EL ID DEL PRODUCTO
            ids.forEach(id => {
                // SI EL ID DEL PRODUCTO COMIENZA CON LA FRACCION DEL ID QUE TRAJE:
                if(product.id.startsWith(id)){
                    arrayProducts.push(product)
                }
            })
        }
        this.handleRenderProduct(arrayProducts)
    }

    handleRenderProduct(products){
        const container = this.querySelector("#found-container")
        container.innerHTML = "<loader-component></loader-component>"
        let arrayProductsHTML = []

        products.forEach(product => {
            const { imageUrl, name, price, id } = product
            const html = `
                <product-card src="${imageUrl}" title="${name}" price="${price}" link="${id}"></product-card>
            `
            arrayProductsHTML.push(html)
        })
        container.innerHTML = arrayProductsHTML
    }

}

customElements.define("search-view", SearchView)