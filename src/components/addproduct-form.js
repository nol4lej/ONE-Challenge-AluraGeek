import { products } from "../controllers/products-manage.js";
const { v4: uuidv4 } = require('uuid');

export class AddProductForm extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleEvent()
    }

    render(){
        this.innerHTML = `
        <section class="addform__container">
            <div class="add__title">
                <h2>Agregar nuevo producto</h2>
                <a href="" class="add__back"><i class="material-icons">arrow_back</i>Volver</a>
            </div>
            <form id="addproduct-form" class="add__form">
                <div class="add__img">
                    <label for="" class="img__label">URL de la imagen</label>
                    <input type="text" id="img-input" class="img__input">
                </div>
                <div class="add__name">
                <label for="" class="name__label">Nombre del producto</label>
                    <input type="text" id="name-input" class="name__input">
                </div>
                <div class="add__category">
                    <label for="" class="categoria__label">Categoría</label>
                    <select id="categoria" class="categoria__input">
                        <option value="starwars">Star Wars</option>
                        <option value="consola">Consola</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
                <div class="add__price">
                    <label for="" class="price__label">Precio del producto</label>
                    <p class="container__number">$<input type="number" id="price-input" class="price__input"></p>
                </div>
                <div class="add__description">
                    <label for="" class="description__label">Descripción del producto</label>
                    <input type="text" id="description-input" class="description__input">
                </div>
                <button type="submit" class="add__btn">Agregar producto</button>
            </form>
            <span id="message"></span>
        </section>

        `;
    }

    handleEvent(){
        const form = this.querySelector("#addproduct-form")
        form.addEventListener("submit", this.onSubmit.bind(this))
    }

    onSubmit(event){
        event.preventDefault()
        const img = document.getElementById("img-input")
        const name = document.getElementById("name-input")
        const category = document.getElementById("categoria")
        const price = document.getElementById("price-input")
        const description = document.getElementById("description-input")

        const data =  {
            imageUrl: img.value,
            name: name.value,
            category: category.value,
            price: price.value,
            description: description.value, 
            id: uuidv4()
        }
        this.handleAdd(data)
    }

    async handleAdd(data){
        const message = document.getElementById("message")
        try {
            await products.addProduct(data)
            message.innerHTML = `Producto creado correctamente.`
        } catch (error) {
            message.innerHTML = `No se pudo agregar el producto`
        }
    }

}

customElements.define("addproduct-form", AddProductForm)