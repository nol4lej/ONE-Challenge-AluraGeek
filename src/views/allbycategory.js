import { ClienteServices } from "../controllers/crud-controller.js";
import { ContactFooter } from "./contactfooter.js";

function RenderProductByCategory(name, imageUrl, price, category){
    const father = document.getElementById("bycategory")
    const article = document.createElement("article")
    article.classList.add("bycategory__item")
    article.innerHTML = `
        <img class="bycategory__img" src="${imageUrl}" alt="">
        <h3 class="bycategory__title">${name}</h3>
        <p class="bycategory__price">${price}</p>
        <p class="bycategory__price">${category}</p>
        <a class="bycategory__link" href="#">Ver Producto</a>
    `
    father.appendChild(article)
}

export function ProductsByCategory(category){
    const currentCategory = category.substring(2) // Obtener desde la tercera posición en adelante, asi eliminar "#/" del string
    ClienteServices.GetProducts()
    .then(data => {
        data.reverse().forEach(product => { 
            const categoryInData = product.category
            if(currentCategory === categoryInData){
                const { name, imageUrl, price, description, id, category } = product
                RenderProductByCategory(name, imageUrl, price, category)
            }
        });
    })

    const root = document.getElementById("root")
    root.innerHTML = `
    
    <section class="bycategory">
        <div class="bycategory__header">
            <h2 class="bycategory__title__category">Todos los productos</h2>
        </div>
        <div class="bycategory__container" id="bycategory"></div>
    </section>
    
    `
    ContactFooter()
}