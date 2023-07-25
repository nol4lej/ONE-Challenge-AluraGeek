export class AddProds extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML = `
            <section class="addform__container">
                <div class="add__title">
                    <h2>Agregar nuevo producto</h2>
                    <a href="#/panel/administrar" class="add__back"><i class="material-icons">arrow_back</i>Volver</a>
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
        `
    }


}

customElements.define("add-products", AddProds)