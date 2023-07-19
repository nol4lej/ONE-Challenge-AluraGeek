import { productCard } from "../../components/product-card.js";
import { products } from "../../controllers/products-manage.js";
import { OptimizedUrl } from "../optimized-url.js"

export function RenderProductByCategory(category){

    if(!products.getAllProductsByCategory()){
        return
    }
    const productosByCategory = products.getAllProductsByCategory()
    const currentCategory = category.substring(2) // Obtener desde la tercera posición en adelante, asi eliminar "#/" del string

    if(productosByCategory.hasOwnProperty(currentCategory)){
        const arrayWithProducts = productosByCategory[currentCategory]
        const arrayProductsByCategory = arrayWithProducts.map(product => {
            const { name, imageUrl, price, id} = product
            const nameUrl = OptimizedUrl(name)
            const container = productCard(imageUrl, name, price, id, nameUrl)
            return container
        });
        return arrayProductsByCategory
    }
}