import { RenderProductByCategory } from "../../helpers/products/productsbycategory.js"

export function ProductsByCategory(category){
    const arrayProducts = RenderProductByCategory(category)
    const container = `
    <section class="bycategory">
        <div class="bycategory__header">
            <h2 class="bycategory__title__category">Todos los productos</h2>
        </div>
        <div class="bycategory__container" id="bycategory">${arrayProducts?.length > 0 ? arrayProducts : "No hay productos"}</div>
    </section>
    <contact-footer></contact-footer>
    `
    return container
}