import { fetchGet } from "../helpers/fetch/fetch.get.js";
import { Subject } from "../helpers/subject.js"
import { state } from "../state/state.js"

class ProductsSubject extends Subject{

    constructor(){
        super();
        this.products;
        this.productsByCategory;
    };

    notify(prods, resultProductsByCategory){
        this.products = prods
        this.productsByCategory = resultProductsByCategory
        super.notify(this.products, this.productsByCategory)
    }

    async fetchProducts(){
        const products = await fetchGet('https://json-server-k3m3.onrender.com/productos')
        state.products = products  // Actualizamos el estado global con los productos
        const resultProductsByCategory = this.orderByCategory(products)
        this.notify([products, resultProductsByCategory])
    }

    orderByCategory(products){
        try {
            products.forEach(product => {
                const category = product.category
                // verifico si "state.productsByCategory" contiene la categoria del producto actual
                if(!state.productsByCategory.hasOwnProperty(category)){
                    // si no tiene la categoria crea un array vacio
                    state.productsByCategory[category] = []
                    // agrega el producto actual al array de la categoria
                    state.productsByCategory[category].push(product)
                } else {
                    // si la categoria ya existe, agrega el producto actual
                    state.productsByCategory[category].push(product)
                }
            })
            return state.productsByCategory
        } catch (error) {
            console.error("Error en orderByCategory:", error)
        }
    }

    async getProduct(currentId) {
        try {
            const res = await fetchGet(`https://json-server-k3m3.onrender.com/productos/${currentId}`)
            return res;
        } catch (error) {
            console.error("No se puede traer el producto:", error)
        }
    }

}

export const productsSubject = new ProductsSubject()