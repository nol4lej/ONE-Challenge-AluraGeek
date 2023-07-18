import { OptimizedUrl } from "../helpers/optimized-url.js";
import { productCard } from "../components/product-card.js";
import { products } from "../controllers/products-manage.js";

export function RandomProducts(category, currentProduct){
    const productos = products.RandomProductsByCategory(category, currentProduct)
    const arrayProducts = productos.map(product => {
        const { name, imageUrl, price, id} = product
        const nameUrl = OptimizedUrl(name)
        const container = productCard(imageUrl, name, price, id, nameUrl)
        return container
    })
    const arrayWithoutComma = arrayProducts.join("")
    return arrayWithoutComma
}