import { ContactFooter } from "../../components/contactfooter.js"

export function AddProduct(){
    const root = document.getElementById("root")
    root.innerHTML = `
    
    <section class="">
        <div class="">
            <h2>Agregar nuevo producto</h2>
        </div>
        <div class="">
            <form action="">
                <div class="">
                    <label for="">URL de la imagen</label>
                    <input type="file">
                </div>
                <div class="">
                    <label for="">Categoría</label>
                    <input type="text">
                </div>
                <div class="">
                    <label for="">´Precio del producto</label>
                    <p>$<input type="number"></p>
                </div>
                <div class="">
                    <label for="">Descripción del producto</label>
                    <input type="text">
                </div>
            </form>
        </div>
    </section>
    
    `
    ContactFooter()

}