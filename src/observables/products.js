import { fetchGet } from "../helpers/fetch/fetch.get.js";
import { Subject } from "../helpers/subject.js"
import { state } from "../state/state.js"

class ProductsSubject extends Subject{

    constructor(){
        super();
    };

    notify(data){
        super.notify(data)
    }

    async fetchProducts(){
        const products = await fetchGet('http://localhost:3000/productos')
        state.products = products  // Actualizamos el estado global con los productos
        this.orderByCategory(products)
        this.notify(products)
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
        } catch (error) {
            console.log("Error en orderByCategory:", error)
        }
    }

    async getProduct(currentId) {
        try {
            const res = await fetchGet(`http://localhost:3000/productos/${currentId}`)
            return res;
        } catch (error) {
            console.error("No se puede traer el producto:", error)
        }
    }

}

export const productsSubject = new ProductsSubject()

class Observer{
    notify(subject){
        // console.log(subject)
    }
}

const observer = new Observer()
productsSubject.subscribe(observer)