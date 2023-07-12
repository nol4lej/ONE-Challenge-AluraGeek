import { products } from "../../controllers/products-manage.js";
import { OptimizedUrl } from "../../helpers/optimized-url.js";
import { ContactFooter } from "../contactfooter.js";
import { Error } from "../error.js";


function FindProduct(route){
    const completeUrl = new URL(`http://127.0.0.1:8080/${route}`).href
    const hashParams = completeUrl.split('#/')[1]; // Obtiene la parte de la fragmentación de la URL
    const params = new URLSearchParams(hashParams);
    const currentId = params.get('id');
    
    const foundProduct = products.getProduct(currentId)
    return foundProduct
}

function RandomProducts(category, currentProduct){
    const productos = products.RandomProductsByCategory(category, currentProduct)

    const container = document.getElementById("random-products")
    const productsContainer = document.createElement("div")

    productos.forEach(product => {
        const { name, imageUrl, price, id} = product

        const nameUrl = OptimizedUrl(name)
        
        const divProduct = document.createElement("div")
        divProduct.innerHTML = `
            <div class="bycategory__img__container">
                <img class="bycategory__img" src="${imageUrl}" alt="">
            </div>
            <div class="bycategory__info">
                <h3 class="bycategory__title">${name}</h3>
                <p class="bycategory__price">${price}</p>
                <a class="bycategory__link" href="#/?id=${id}&name=${nameUrl}">Ver Producto</a>
            </div>
        `
        productsContainer.appendChild(divProduct)
    })

    container.appendChild(productsContainer)

}

export function ViewProduct(route){
    const product = FindProduct(route)
    const { name, imageUrl, price, description, id, category} = product

    const root = document.getElementById("root")
    root.innerHTML = `
        <section class="product__container">
            <div class="single__product">
                <div class="single__img__container">
                    <img class="single__img" src="${imageUrl}" alt="">
                </div>
                <div class="single__info">
                    <h2 class="single__title">${name}</h2>
                    <p class="single__price">${price}</p>
                    <p class="single__description">${description}</p>
                </div>
            </div>
            <div class="random__product">
                <h2 class="random__title">Productos similares</h2>
                <div class="random__products" id="random-products"></div>
            </div>
        </section>
    `
    RandomProducts(category, product)
    ContactFooter()
}