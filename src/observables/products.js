import { fetchGet } from "../helpers/fetch/fetch.get.js";
import { fetchPost } from "../helpers/fetch/fetch.post.js"
import { fetchPut } from "../helpers/fetch/fetch.put.js"
import { fetchDelete } from "../helpers/fetch/fetch.delete.js"
import { Subject } from "../helpers/subject.js"
import { state } from "../state/state.js"
const { v4: uuidv4 } = require('uuid');

class ProductsSubject extends Subject{

    constructor(){
        super();
        // this.products;
        // this.productsByCategory;
    };

    notify(products){
        // this.products = prods
        // this.productsByCategory = resultProductsByCategory
        this.orderByCategory(products)
        super.notify(products)
    }

    async fetchProducts(){
        const products = await fetchGet('https://json-server-k3m3.onrender.com/productos')
        state.products = products  // Actualizamos el estado global con los productos
        // this.orderByCategory(products)
        this.notify(products)
    }

    orderByCategory(products){
        try {
            // compruebo si products contiene tamaño, si no lo tiene es porque es un producto individual y se agrega a su categoría.
            if(!products.length){
                const category = products.category
                state.productsByCategory[category].push(products)
                return
            }

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
            const res = await fetchGet(`https://json-server-k3m3.onrender.com/${currentId}`)
            return res;
        } catch (error) {
            console.error("No se puede traer el producto:", error)
        }
    }

    async addProduct(img, name, category, price, description){

        const newProduct = {
            imageUrl: img,
            name: name,
            category: category,
            price: price,
            description: description,
            id: uuidv4()
        }

        try {
            const res = await fetchPost("https://json-server-k3m3.onrender.com/", newProduct)
            state.products.push(newProduct)
            this.notify(newProduct)
            return "Producto agregado correctamente."
        } catch (error) {
            return "No se pudo agregar el nuevo producto."
        }
    }

    async updateProduct(img, name, category, price, description, id){

        const updateProd = {
            imageUrl: img,
            name: name,
            category: category,
            price: price,
            description: description,
        }

        try {
            const res = await fetchPut(`https://json-server-k3m3.onrender.com/${id}`, updateProd)
            this.fetchProducts() // hago nuevamente un fetch para actualizar todos los productos
            return "Producto actualizado correctamente."
        } catch (error) {
            return "No se pudo actualizar el producto."
        }
    }

    async deleteProduct(id){
        try {
            const res = await fetchDelete(`https://json-server-k3m3.onrender.com/${id}`)
            console.log(res)
            this.fetchProducts() // hago nuevamente un fetch para actualizar todos los productos
            return "Producto eliminado correctamente."
        } catch (error) {
            console.log(error)
            return "No se pudo eliminar el producto."
        }

    }

}

export const productsSubject = new ProductsSubject()