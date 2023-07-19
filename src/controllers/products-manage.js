import { fetchGet } from "../helpers/fetch-get.js";
import { fetchPost } from "../helpers/fetch-post.js";
import { Subject } from "../helpers/subject.js"

class Products extends Subject{

    constructor(){
        super();
        this.products = []
        // this.productsByCategory = {}
        this.randomProducts = []
    }

    notify(product){
        this.products.push(product)
        super.notify(product) // se notifica solo el producto agregado
    }

    async FetchProducts(){
        try {
            const respuesta = await fetchGet()
            this.products = [];
            this.productsByCategory = {}

            respuesta.forEach(product => {
                this.notify(product)
                this.DistributedCategory(product)
            });
        } catch (error) {
            throw new Error(error)
        }
    }

    DistributedCategory(product){
        const category = product.category;
        if (!this.productsByCategory.hasOwnProperty(category)) {
            this.productsByCategory[category] = []; // Asigna un array vacío como valor para la nueva categoría
            this.productsByCategory[category].push(product) // agrega el producto con el que estamos verificando la categoria
        } else {
            this.productsByCategory[category].push(product) // agrega los productos en las categorias existentes
        }
        // Manera simplificada de realizar lo mismo:
        // this.productsByCategory[category] = this.productsByCategory[category] || [];
        // this.productsByCategory[category].push(producto);
    }

    RandomProductsByCategory(category, currentProduct){
        this.randomProducts = [] // reinicio el array, sino se acumulan los random products de cada view
        let contador = 0
        let maxContador = 6
        const currentCategory = this.productsByCategory[category]
        if(currentCategory.length < 7){
            maxContador = currentCategory.length - 1 // agrego -1 para descontar el currentProduct
        }
        while(contador !== maxContador){
            const RandomIndex = Math.floor(Math.random() * currentCategory.length);
            const ProductSelect = currentCategory[RandomIndex]

            // compruebar que el producto random exista y que el pructo random no sea el mismo de la vista
            if(!this.randomProducts.includes(ProductSelect) && ProductSelect !== currentProduct){
                this.randomProducts.push(ProductSelect)
                contador++
            }
        }
        return this.randomProducts
    }

    getAllProductsByCategory(){
        return this.productsByCategory
    }

    getAllProducts(){
        return this.products
    }

    getProduct(currentId) {
        const productos = products.getAllProducts()
        const foundProduct = productos.find(element => element.id === currentId)
        return foundProduct
    }

    async addProduct(data){
        try {
            await fetchPost(data)
            this.FetchProducts() // actualiza los array de productos
        } catch (error) {
            throw new Error(error)
        }
        
    }

}

class ProductsObserver{
    notify(subject){
        // console.log(subject)
    }
}

const productsObserver = new ProductsObserver()
export const products = new Products();
products.suscribe(productsObserver)

products.FetchProducts()

