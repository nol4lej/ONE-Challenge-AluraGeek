import { filterProducts } from "../helpers/products/main-products.js"

export function Main(){
    const arrayProductos = filterProducts()

    const main =`
        <header class="header">
            <div class="header__content">
                <h1 class="header__title">Febrero Promocional</h1>
                <p class="header__info">Productos seleccionados con 33% de descuento</p>
                <a href="#/consola" class="header__button">Ver Consolas</a>
            </div>
        </header>

        <section class="products__container">
            <article class="products">
                <div class="products__header">
                    <h2 class="products__title">Star Wars</h2>
                    <a href="#/starwars" class="products__link">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="items" id="starwars">${arrayProductos?.length > 0 ? arrayProductos[0][1] : "No hay productos disponibles"}</div>
            </article>

            <article class="products">
                <div class="products__header">
                    <h2 class="products__title">Consolas</h2>
                    <a href="#/consola" class="products__link">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="items" id="consola">${arrayProductos?.length > 0 ? arrayProductos[1][1] : "No hay productos disponibles"}</div>
            </article>

            <article class="products">
                <div class="products__header">
                    <h2 class="products__title">Otros</h2>
                    <a href="#/otros" class="products__link">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="items" id="otros">${arrayProductos?.length > 0 ? arrayProductos[2][1] : "No hay productos disponibles"}</div>
            </article>
        </section>
        
        <contact-footer></contact-footer>

    `;
    return main;
}