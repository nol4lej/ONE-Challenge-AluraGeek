import { Subject } from "../helpers/subject.js"

class Products extends Subject{

    constructor(){
        super();
        this.products = []
        this.productsByCategory = {}
    }

    notify(product){
        this.products.push(product)
        super.notify(product) // se notifica solo el producto agregado
    }

    FetchProducts(){
        fetch("http://localhost:3000/productos")
        .then(res => res.json())
        .then(productos => {
            productos.forEach(producto => {
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

    getAllProductsByCategory(){
        return this.productsByCategory
    }

    getAllProducts(){
        return this.products
    }

    getProduct(id) {
        const foundProduct = this.products.find((product) => product.id === id);
        console.log(foundProduct);
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

console.log(products.getProduct("e0ea324b-356a-4423-a619-09338941354b"))