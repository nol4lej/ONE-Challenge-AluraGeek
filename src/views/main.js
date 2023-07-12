import { products } from "../controllers/products-manage.js";
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
        const nameUrl = name
                        .normalize("NFD") // utilizamos la función normalize() con el parámetro "NFD" para descomponer los caracteres a su forma de combinación de caracteres diacríticos. Esto nos permite separar los caracteres con tilde en dos partes: el carácter base y el diacrítico.
                        .replace(/[\u0300-\u036f]/g, "") // Luego, utilizamos la expresión regular /[\u0300-\u036f]/g para coincidir con todos los caracteres diacríticos (que incluyen las tildes) y el método replace() para eliminarlos.
                        .split(/\W+/) // la expresión regular \W+ se utiliza como argumento para el método split(). Esta expresión regular coincide con cualquier carácter que no sea una letra minúscula, mayúscula o número. Al dividir la cadena name utilizando \W+, se eliminan todos los caracteres no deseados y se obtiene un array con las partes relevantes.
                        .join("-") // utilizamos el método join() para unir las partes del array con un guion (-) como delimitador,
                        .toLowerCase()
                        .replace(/^[^a-zA-Z0-9]+/, ''); // elimina cualquier secuencia de caracteres que no sean letras o números al comienzo de la cadena.
        
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