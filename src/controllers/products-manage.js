import { Subject } from "../helpers/subject.js"

class Products extends Subject{

    constructor(){
        super();
        this.products = []
        this.productsByCategory = {}
    }

    notify(product){
        this.products.push(product)
        super.notify(this)
    }

    FetchProducts(){
        fetch("http://localhost:3000/productos")
        .then(res => res.json())
        .then(productos => {
            productos.forEach(producto => {
                // console.log(producto)
                this.notify(producto)
                this.DistributedCategory(producto)
            });
        })
        .catch(error => console.log(error))
    }

    DistributedCategory(producto){
        const category = producto.category;
        if (!this.productsByCategory.hasOwnProperty(category)) {
            this.productsByCategory[category] = []; // Asigna un array vacío como valor para la nueva categoría
            this.productsByCategory[category].push(producto) // agrega el producto con el que estamos verificando la categoria
        } else {
            this.productsByCategory[category].push(producto) // agrega los productos en las categorias existentes
        }

        // Manera simplificada de realizar lo mismo:
        // this.productsByCategory[category] = this.productsByCategory[category] || [];
        // this.productsByCategory[category].push(producto);
    }

    RandomProductsByCategory(){
        
    }

    getAllProducts(){
        return this.products
    }

    getProduct(id) {
        const allProducts = this.getAllProducts();
        const product = allProducts.find(product => product.id === id);
        console.log(product)
        return product;
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
// console.log(products.productsByCategory)
console.log(products.getAllProducts())
console.log(products.getProduct("9eaa1a1e-8628-4cbf-a3a3-6d2d0b3e1c9e"))