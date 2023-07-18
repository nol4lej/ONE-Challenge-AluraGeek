import { products } from "../controllers/products-manage.js";
import { OptimizedUrl } from "../helpers/optimized-url.js"

export function RenderProductByCategory(category){
    const productosByCategory = products.getAllProductsByCategory()
    const currentCategory = category.substring(2) // Obtener desde la tercera posición en adelante, asi eliminar "#/" del string

    if(productosByCategory.hasOwnProperty(currentCategory)){
        const arrayWithProducts = productosByCategory[currentCategory]
        const arrayProductsByCategory = arrayWithProducts.map(product => {
            const { name, imageUrl, price, description, id, category} = product
            const nameUrl = OptimizedUrl(name)
            const container = `
                <div class="bycategory__item">
                    <div class="bycategory__img__container">
                        <img class="bycategory__img" src="${imageUrl}" alt="">
                    </div>
                    <div class="bycategory__info">
                        <h3 class="bycategory__title">${name}</h3>
                        <p class="bycategory__price">${price}</p>
                        <a class="bycategory__link" href="#/?id=${id}&name=${nameUrl}">Ver Producto</a>
                    </div>
                </div>
            `
            return container
        });
        return arrayProductsByCategory
    }
}