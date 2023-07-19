import { products } from "../../controllers/products-manage.js";
import { RandomProducts } from "../../helpers/products/random-products.js";

export function ViewProduct(id){
    const product = products.getProduct(id)
    const { name, imageUrl, price, description, category} = product

    const arrayProducts = RandomProducts(category, product)

    const container = `
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
                <div class="random__products" id="random-products">${arrayProducts}</div>
            </div>  
        </section>
        <contact-footer></contact-footer>
    `
    return container
}