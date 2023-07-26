import { productsSubject } from "../../../observables/products.js"
import { state } from "../../../state/state.js";

export class ManageProducts extends HTMLElement{

    constructor(){
        super()
        this.userState = state.user
    }

    connectedCallback(){
        this.handleRoleUser()

        this.render()

        let isEditstate = false;
        // ESTE METODO SE CARGA AQUI PORQUE SE CARGARÁ DESPUES QUE EL FORM SEA RENDERIZADO
        // "toEdit" es un id de un producto o es "false", esto lo proporciona el enrutador.
        const id = this.getAttribute("toEdit")
        if(id !== "false"){
            isEditstate = true
            this.handleForm(isEditstate, id)
            this.handleEdit(id)
            return 
        }

        this.handleForm(isEditstate)
    }

    render(){


        this.innerHTML = `
        <section class="addform__container">
            <div class="add__title">
                <h2>Agregar nuevo producto</h2>
                <a href="#/panel/administrar" class="add__back"><i class="material-icons">arrow_back</i>Volver</a>
            </div>
            <form id="manageproduct-form" class="add__form">
                <div class="add__img">
                    <label for="" class="img__label">URL de la imagen</label>
                    <input type="text" id="img-input" class="img__input" required>
                </div>
                <div class="add__name">
                <label for="" class="name__label">Nombre del producto</label>
                    <input type="text" id="name-input" class="name__input" required>
                </div>
                <div class="add__category">
                    <label for="" class="categoria__label">Categoría</label>
                    <select id="categoria-select" class="categoria__input" required>
                        <option disabled selected value="">Selecciona una categoría</option>
                        <option value="starwars">Star Wars</option>
                        <option value="consola">Consola</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
                <div class="add__price">
                    <label for="" class="price__label">Precio del producto</label>
                    <p class="container__number">$<input type="text" id="price-input" class="price__input" required></p>
                </div>
                <div class="add__description">
                    <label for="" class="description__label">Descripción del producto</label>
                    <textarea id="description-input" class="description__input" cols="30" rows="3" required></textarea>
                </div>
                <button type="submit" class="add__btn" id="submit-btn">Agregar producto</button>
            </form>
            <span id="product-info" class="product__info"></span>
        </section>
    `
    }

    set toEdit(value){
        this.setAttribute("toEdit", value)
    }
    get toEdit(){
        return this.getAttribute("toEdit")
    }

    handleForm(isEditstate, id){

        const form = this.querySelector("#manageproduct-form")
        form.addEventListener("submit", async (event) => {
            event.preventDefault()

            const img = this.querySelector("#img-input").value
            const name = this.querySelector("#name-input").value
            const category = this.querySelector("#categoria-select").value
            const price = this.querySelector("#price-input").value
            const description = this.querySelector("#description-input").value
            const info = this.querySelector("#product-info")

            if(isEditstate){
                try {id
                    const res = await productsSubject.updateProduct(img, name, category, price, description, id)
                    info.classList.add("success")
                    info.innerHTML = `<i class="material-icons">check_circle</i> ${res}`
                } catch (error) {
                    info.classList.add("error")
                    info.innerHTML = `<i class="material-icons">error</i> ${error}`
    
                }
            } else {
                try {
                    const res = await productsSubject.addProduct(img, name, category, price, description)
                    info.classList.add("success")
                    info.innerHTML = `<i class="material-icons">check_circle</i> ${res}`
                } catch (error) {
                    info.classList.add("error")
                    info.innerHTML = `<i class="material-icons">error</i> ${error}`
                }
            }
        })
    }
    
    async handleEdit(productId){
        const {imageUrl, name, price, category, description, } = await productsSubject.getProduct(productId)

        this.querySelector("#img-input").value = imageUrl;
        this.querySelector("#name-input").value = name;
        this.querySelector("#categoria-select").value = category;
        this.querySelector("#price-input").value = price;
        this.querySelector("#description-input").value = description;
        this.querySelector("#submit-btn").innerHTML = "Actualizar producto"
    }

    handleRoleUser(){
        if(this.userState.role !== "admin"){
            window.location.href = "#";
        }
        return
    }

}

customElements.define("manage-products", ManageProducts)