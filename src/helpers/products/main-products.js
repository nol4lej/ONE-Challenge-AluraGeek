import { products } from "../../controllers/products-manage.js";
import { OptimizedUrl } from "../optimized-url.js";
import { productCard } from "../../components/product-card.js"

class ProductsObserver{
    notify(subject){
        console.log(subject.productsByCategory)
    }
}

const productsObserver = new ProductsObserver()
products.suscribe(productsObserver)

export const filterProducts = () => {

    // comprobar si hay productos 
    if(!products.getAllProductsByCategory()){
        return
    }
    
    // recibo un objeto con las categorias y sus productos
    const prods = products.getAllProductsByCategory()

    // convierto al objeto en un array con las clave y valor como un array.
    const prodsArray = Object.entries(prods)

    // recorro con map para crear un nuevo array con los productos convertidos en un string con HTML
    const prodsArrayHTML = prodsArray.map(category => {
        // recorro cada categoria para crear un nuevo array con los productos convertidos en un string con HTML
        const arrayProductos = category[1].map(producto => {
            const { name, imageUrl, price, id} = producto
            const nameUrl = OptimizedUrl(name)
            // creo mi "componente"
            const productContainer = productCard(imageUrl, name, price, id, nameUrl)
            return productContainer
        });
        // creo una constante que contiene la categoria y los productos convertidos en string con HTML.
        const CategoryWithProductsArray = [category[0], arrayProductos]
        // retorno la constante para que se agregue al nuevo array prodsArrayHTML
        return CategoryWithProductsArray
    })
    return prodsArrayHTML
}