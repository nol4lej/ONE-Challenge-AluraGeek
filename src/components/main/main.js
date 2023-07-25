import { productsSubject } from "../../observables/products.js"
import { state } from "../../state/state.js";

export class MainComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.render()
        this.suscribeToProducts()
        this.renderByCategory()
    }
  
    render(){
        this.innerHTML = ''; // Limpiamos el contenedor antes de renderizar los productos

        this.innerHTML = `
            <article class="products__container">
                <div class="products__title__btn">
                    <h2 class="products__title">Star Wars</h2>
                    <a class="products__btn" href="#/category=starwars">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="products__content" id="starwars"></div>
            </article>
            <article class="products__container">
                <div class="products__title__btn">
                    <h2 class="products__title">Consolas</h2>
                    <a class="products__btn" href="#/category=consola">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="products__content" id="consola"></div>
            </article>
            <article class="products__container">
                <div class="products__title__btn">
                    <h2 class="products__title">Otros</h2>
                    <a class="products__btn" href="#/category=otros">Ver todo <i class="material-icons">arrow_forward</i></a>
                </div>
                <div class="products__content" id="otros"></div>
            </article>
        `
    }

    renderByCategory(){

        const containers = this.querySelectorAll(".products__content")

        containers.forEach(container => {
            container.innerHTML = "<loader-component></loader-component>"
            if(state.productsByCategory.hasOwnProperty(container.id)){
                let contador = 0;
                const arrayProductsHTML = [];

                for (const product of state.productsByCategory[container.id]){
                    if (contador >= 6) {
                        break; // Detener el bucle cuando contador llega a 6
                    }
                    
                    contador++;
                    const { imageUrl, name, price, id } = product;
                    const html = `
                        <product-card src="${imageUrl}" title="${name}" price="${price}" link="${id}"></product-card>
                    `;
                    arrayProductsHTML.push(html);
                }
                // Unir los elementos del array sin comas
                const arrayWithoutCommas = arrayProductsHTML.join("");
                container.innerHTML = arrayWithoutCommas;
                return
            }

            container.innerHTML = "No hay productos para esta categoría."

                
        })
    }

    suscribeToProducts(){
        productsSubject.subscribe((data) => {
            this.render();
            this.renderByCategory()
        })
    }
}
  
customElements.define('main-view', MainComponent);