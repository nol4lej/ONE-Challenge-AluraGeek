import { ClienteServices } from "../controllers/crud-controller.js";
import { Error } from "./error.js";

export function ViewProduct(route){
    const completeUrl = new URL(`http://127.0.0.1:8080/${route}`).href
    const hashParams = completeUrl.split('#/')[1]; // Obtiene la parte de la fragmentación de la URL
    const params = new URLSearchParams(hashParams);
    const currentId = params.get('id');

    ClienteServices.GetProducts()
        .then(data => {

            let currentCategory;
            let products = []

            data.forEach(element => {
                const productId = element.id;
                if (currentId === productId) {
                    currentCategory = element.category;
                    RenderProduct(element)
                    return; // Detener la iteración
                }
            });

            data.forEach(element => {
                if(currentCategory === element.category){
                    products.push(element)
                }
            })

            console.log(products)
    });
}

export function RenderProduct(product){
    const {image, name, price, category, description, id} = product;
    const root = document.getElementById("root")
    root.innerHTML = `${name}`
}