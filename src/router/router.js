import { helpers } from "./router-helpers.js"
import { Error404 } from "../views/error404.view"

const pages = {
    404: Error404,
    "": helpers.loadMain,
    "#/": helpers.loadMain,
    "#/login": helpers.loadForms,
    "#/register": helpers.loadForms,
    "#/panel": helpers.loadPanel,
    "#/panel/admin": helpers.loadPanel,
    "#/panel/product?add": helpers.loadPanelProducts,
    "#/panel/product?edit=": helpers.loadPanelProducts,
    "#/id=": helpers.loadViewProduct,
    "#/category=": helpers.loadAllByCategory
}

export const router =  async (hash) => {
    const root = document.getElementById("root")
    // root.innerHTML = ""
    root.innerHTML = "<loader-component></loader-component>"
    root.scrollIntoView({ behavior: 'smooth' });

    let route;
    
    // Al colocar "true" en el switch, estamos indicando que se evaluarán las condiciones booleanas en los case. 
    // Al hacer esto, switch buscará el primer case donde la condición sea true y ejecutará el código asociado a ese case.
    // Esto es por que al usar hash.startsWith() devuelve una condición booleana.
    switch (true) {
        case hash.startsWith("#/id="):
            route = pages["#/id="];
            root.innerHTML = await route(hash);
            break;

        case hash.startsWith("#/category="):
            route = pages["#/category="];
            root.innerHTML = await route(hash);
            break;

        case hash.startsWith("#/panel/product?edit="):
            route = pages["#/panel/product?edit="]
            root.innerHTML = await route(hash)
            break;

        default:
            route = pages[hash] || pages[404]
            root.innerHTML = await route(hash)
            break;
    }
}