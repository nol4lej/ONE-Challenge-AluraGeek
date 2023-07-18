import { RenderProductByCategory } from "../../helpers/productsbycategory.js"

export function ProductsByCategory(category){
    const arrayProducts = RenderProductByCategory(category)
    const container = `
    <section class="bycategory">
        <div class="bycategory__header">
            <h2 class="bycategory__title__category">Todos los productos</h2>
        </div>
        <div class="bycategory__container" id="bycategory">${arrayProducts}</div>
    </section>
    <contact-footer></contact-footer>
    `
    return container
}