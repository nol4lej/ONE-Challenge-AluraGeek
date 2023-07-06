import { ClienteServices } from "../controllers/crud-controller.js";
import { ContactFooter } from "./contactfooter.js";

function FetchProducts(){
    ClienteServices.GetProducts()
    .then(data => {
        const contadores = {
            starwars: 0,
            consola: 0,
            otros: 0
        };
        data.reverse().forEach(element => {
            const verifyCategory = element.category;
            switch (verifyCategory) {
                case "starwars":
                    if(contadores.starwars < 6){
                        contadores.starwars++
                        const { name, imageUrl, price, description, id, category} = element
                        RenderItems(name, imageUrl, price, category)
                    }
                    break;
                case "consola":
                    if(contadores.consola < 6){
                        contadores.consola++
                        const { name, imageUrl, price, description, id, category} = element
                        RenderItems(name, imageUrl, price, category)
                        
                    }
                    break;
                case "otros":
                    if(contadores.otros < 6){
                        contadores.otros++
                        const { name, imageUrl, price, description, id, category} = element
                        RenderItems(name, imageUrl, price, category)
                    }
                    break;
                default:
                    break;
            }
        });
    })
    .catch((error) => console.error(error));
}

function RenderItems(name, imageUrl, price, category){
    const father = document.getElementById(`${category}`);
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
        <img class="item__img" src="${imageUrl}" alt="">
        <h3 class="item__title">${name}</h3>
        <p class="item__price">${price}</p>
        <p class="item__price">${category}</p>
        <a class="item__link" href="#">Ver Producto</a>
    `
    father.appendChild(div);
}

export function Main(){
    const root = document.getElementById("root");
    root.innerHTML =`
        <header class="header">
            <div class="header__content">
                <h1 class="header__title">Febrero Promocional</h1>
                <p class="header__info">Productos seleccionados con 33% de descuento</p>
                <a class="header__button">Ver Consolas</a>
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
    FetchProducts();
    ContactFooter();
}