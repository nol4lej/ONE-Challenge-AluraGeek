import { productsSubject } from "../../observables/products.js";

export class ModalConfirm extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
        this.handleCancel()
        this.handleConfirm()
    }

    render(){
        this.innerHTML = `
            <div class="modal__content">
                <h2 class="modal__title">¿Deseas eliminar este producto?</h2>
                <div class="modal__buttons__container">
                    <button class="modal__btn" id="confirm-btn">Confirmar</button>
                    <button class="modal__btn" id="cancel-btn">Cancelar</button>
                </div>
            </div>
        `
    }

    handleCancel(){
        const btn = this.querySelector("#cancel-btn")
        btn.addEventListener("click", () => {
            this.classList.remove("active");
            setTimeout(() => {
                this.remove();
            }, 500);
        })
    }

    handleConfirm(){
        const btn = this.querySelector("#confirm-btn")
        const id = this.getAttribute("productId")
        btn.addEventListener("click", async () => {
            try {
                const res = await productsSubject.deleteProduct(id)
                console.log(res)
                this.classList.remove("active");
                setTimeout(() => {
                    this.remove();
                }, 500);
            } catch (error) {
                console.log(error)
            }
        })
    }

    set productId(value){
        this.setAttribute("productId", value)
    }
    get productId(){
        return this.getAttribute("productId")
    }

}

customElements.define("modal-confirm", ModalConfirm)