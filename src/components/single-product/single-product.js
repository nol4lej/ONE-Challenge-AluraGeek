import { productsSubject } from "../../observables/products"

export class SingleProduct extends HTMLElement{

    constructor(){
        super()
    }

    async connectedCallback(){
        await this.render()
    }

    async render(){

        this.innerHTML = "<loader-component></loader-component>"

        const id = this.getAttribute('product-id');
        const product = await productsSubject.getProduct(id)
        const { imageUrl, name, price, description} = product

        

        if(JSON.stringify(product) === "{}"){
            this.innerHTML = `
                <h2 class="error__title">El producto no existe o no se ha podido acceder a él.</h2>
            `
        } else {
            this.innerHTML = `
                <div class="single__img__container">
                    <img src="${imageUrl}" alt="" class="single__img">
                </div>
                <div class="single__info">
                    <h2 class="single__name">${name}</h2>
                    <h3 class="single__price">${price}</h3>
                    <p class="single__description">${description}</p>
                </div>
            `
        }


    }

    get productId() {
        return this.getAttribute('product-id');
    }
    set productId(value) {
        this.setAttribute('product-id', value);
    }



}

customElements.define("view-product", SingleProduct)