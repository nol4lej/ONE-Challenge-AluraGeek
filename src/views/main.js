import { products } from "../controllers/products-manage.js";
import { OptimizedUrl } from "../helpers/optimized-url.js";
import { ContactFooter } from "./contactfooter.js";

class MainProducts{

    constructor(){
        this.contadores = {}
        this.currentProducts = []
    }

    notify(subject){
        this.orderedProducts(subject)
    }

    orderedProducts(subject){
        const { name, imageUrl, price, description, id, category} = subject
        try {
            // si la categoria no existe en contadores entonces la agrega como clave con valor 1.
            if(!this.contadores.hasOwnProperty(category)){
                this.contadores[category] = 1
                this.currentProducts.push({ name, imageUrl, price, category, id });
            } else if(this.contadores[category] < 6) {
                this.contadores[category]++
                this.currentProducts.push({ name, imageUrl, price, category, id });
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const mainProducts = new MainProducts()
products.suscribe(mainProducts)

function RenderItems(props){
    props.currentProducts.forEach(product => {
        const { name, imageUrl, price, description, id, category} = product
        const nameUrl = OptimizedUrl(name)
        const father = document.getElementById(`${category}`);
        if(father){ // comprobamos el contenedor padre de la categoria actual existe.
            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
                <div class="item__img__container">
                    <img class="item__img" src="${imageUrl}" alt="">
                </div>
                <div class="item__info">
                    <h3 class="item__title">${name}</h3>
                    <p class="item__price">${price}</p>
                    <a class="item__link" href="#/?id=${id}&name=${nameUrl}">Ver Producto</a>
                </div>
            `
            father.appendChild(div);
        }
    });

}

export function Main(){
    const root = document.getElementById("root");
    
    root.innerHTML =`
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
                <div class="items" id="starwars"></div>
            </article>

            <article class="products">
                <div class="products__header">
                    <h2 class="products__title">Consolas</h2>
                    <a href="#/consola" class="products__link">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="items" id="consola"></div>
            </article>

            <article class="products">
                <div class="products__header">
                    <h2 class="products__title">Otros</h2>
                    <a href="#/otros" class="products__link">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="items" id="otros"></div>
            </article>
        </section>


    `;
    RenderItems(mainProducts)
    ContactFooter();

}