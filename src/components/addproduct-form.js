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
        <section class="">
            <div class="">
                <h2>Agregar nuevo producto</h2>
            </div>
            <div class="">
                <form id="addproduct-form">
                    <div class="">
                        <label for="">URL de la imagen</label>
                        <input type="text" id="img-input">
                    </div>
                    <div class="">
                    <label for="">Nombre del producto</label>
                        <input type="text" id="name-input">
                    </div>
                    <div class="">
                        <label for="">Categoría</label>
                        <select id="categoria">
                            <option value="starwars">Star Wars</option>
                            <option value="consola">Consola</option>
                            <option value="otros">Otros</option>
                        </select>
                    </div>
                    <div class="">
                        <label for="">Precio del producto</label>
                        <p>$<input type="number" id="price-input"></p>
                    </div>
                    <div class="">
                        <label for="">Descripción del producto</label>
                        <input type="text" id="description-input">
                    </div>
                    <button type="submit">Agregar producto</button>
                </form>
            </div>
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