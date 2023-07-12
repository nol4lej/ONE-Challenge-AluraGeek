import { ClienteServices } from "../../controllers/crud-controller.js";
import { products } from "../../controllers/products-manage.js";
import { Error } from "../error.js";

console.log(products.RandomProductsByCategory())

export function ViewProduct(route){
    const completeUrl = new URL(`http://127.0.0.1:8080/${route}`).href
    const hashParams = completeUrl.split('#/')[1]; // Obtiene la parte de la fragmentación de la URL
    const params = new URLSearchParams(hashParams);
    const currentId = params.get('id');

    let currentCategory;
    let products = []
    let fintOutId = false // variable que maneja el estado si el currentId es valido
    
    if(currentId !== null){
        console.log(currentId)
        ClienteServices.GetProducts()
        .then(data => {

            // PRIMERO: busca el ID entro los productos, si lo encuentra renderiza, almacena su categoria y fintOutID es true.
            data.forEach(element => {
                const productId = element.id;
                if (currentId === productId) {
                    currentCategory = element.category;
                    RenderProduct(element);
                    fintOutId = true;
                    return; // Detener la iteración
                }
            });

            // SEGUNDO: Comprueba que findOutId haya cambiado su valor despues de la iteracion, si no es así. El ID ingresado es invalido.
            if(fintOutId === false){
                return Error()
            } else {
                // TERCERO: si fintOutId es true, entonces busca todos los productos de la misma categoria que el ID válido
                data.forEach(element => {
                    if(currentCategory === element.category){
                        products.push(element)
                    }
                })
                console.log(products)
            }

        })  
        .catch(err => console.log(err))
    } else {
        Error()
    }
}

export function RenderProduct(product){
    const {image, name, price, category, description, id} = product;
    const root = document.getElementById("root")
    root.innerHTML = `${name}`
}