import { ClienteServices } from "../controllers/crud-controller.js"


function FetchProducts(){
    ClienteServices.GetProducts()
    .then((data) => {
        data.reverse().forEach((element, index) => {
            if(index < 6){
                const { name, imageUrl, price, description, id} = element
                AddProduct(name, imageUrl, price)
            } 
        });
    })
    .catch((error) => console.error(error));
}

function AddProduct(name, imageUrl, price){
    const father = document.getElementById("items")
    const div = document.createElement("div")
    div.classList.add("item")
    div.innerHTML = `
        <img class="item__img" src="${imageUrl}" alt="">
        <h3 class="item__title">${name}</h3>
        <p class="item__price">${price}</p>
        <a class="item__link" href="#">Ver Producto</a>
    `
    father.appendChild(div)
}

export function Main(){
    const root = document.getElementById("root")
    root.innerHTML =`
        <header class="header">
            <div class="header__content">
                <h1 class="header__title">Febrero Promocional</h1>
                <p class="header__info">Productos seleccionados con 33% de descuento</p>
                <a class="header__button">Ver Consolas</a>
            </div>
        </header>

        <section class="products">
            <div class="products__header">
                <h2 class="products__title">Star Wars</h2>
                <a href="" class="products__link">Ver todo <i class="material-icons">arrow_forward</i></a>
            </div>
            <div class="items" id="items"></div>
        </section>

    `
    FetchProducts()
}