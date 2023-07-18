import { products } from "../../controllers/products-manage.js";
import { ContactFooter } from "../../components/contactfooter.js";
import { OptimizedUrl } from "../../helpers/optimized-url.js"

function RenderProductByCategory(category){
    const productosByCategory = products.getAllProductsByCategory()
    const currentCategory = category.substring(2) // Obtener desde la tercera posición en adelante, asi eliminar "#/" del string

    if(productosByCategory.hasOwnProperty(currentCategory)){
        const arrayWithProducts = productosByCategory[currentCategory]
        arrayWithProducts.forEach(product => {
            const { name, imageUrl, price, description, id, category} = product

            const nameUrl = OptimizedUrl(name)
            
            const father = document.getElementById("bycategory")
            const article = document.createElement("article")
            article.classList.add("bycategory__item")
            article.innerHTML = `
                <div class="bycategory__img__container">
                    <img class="bycategory__img" src="${imageUrl}" alt="">
                </div>
                <div class="bycategory__info">
                    <h3 class="bycategory__title">${name}</h3>
                    <p class="bycategory__price">${price}</p>
                    <a class="bycategory__link" href="#/?id=${id}&name=${nameUrl}">Ver Producto</a>
                </div>
            `
            father.appendChild(article)

        });
    }
}

export function ProductsByCategory(category){
    const root = document.getElementById("root")
    root.innerHTML = `
    
    <section class="bycategory">
        <div class="bycategory__header">
            <h2 class="bycategory__title__category">Todos los productos</h2>
        </div>
        <div class="bycategory__container" id="bycategory"></div>
    </section>
    
    `
    RenderProductByCategory(category)
    ContactFooter()
}