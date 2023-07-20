import { Router } from "./router/router.js";
import { Loading } from "../src/components/loading.js";
import { user } from "./controllers/users-handle.js";

import { products } from "./controllers/products-manage.js";

class ProductsObserver{
    notify(subject){
        console.log(subject)
    }
}

const productsObserver = new ProductsObserver()
products.suscribe(productsObserver)

export function App(){

    user.loginState()



    // Loading();
    // setTimeout(() => {
        Router(window.location.hash)
    // }, 500);
    window.addEventListener("hashchange", () => {
        // Loading();
        // setTimeout(() => {
            Router(window.location.hash)
        // }, 500);
    });
}

