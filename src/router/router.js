import { MainView } from "../views/products/main.view";
import { Error404 } from "../views/error404.view"
import { ViewProduct } from "../views/products/product.view";
import { allByCategoryView } from "../views/products/allbycategory.view";
import { Login } from "../views/forms/login.view";
import { Register } from "../views/forms/register.view";
import { Panel } from "../views/panel/panel.view";
import { Admin } from "../views/panel/admin.view";
import { ManageProduct } from "../views/panel/manage.view";

const pages = {
    404: Error404,
    "": MainView,
    "#/": MainView,
    "#/login": Login,
    "#/register": Register,
    "#/panel": Panel,
    "#/panel/administrar": Admin,
    "#/panel/product?add": ManageProduct,
    "#/panel/product?edit=": ManageProduct,
    "#/id=": ViewProduct,
    "#/category=": allByCategoryView
}

export const router = (hash) => {
    const root = document.getElementById("root")
    root.innerHTML = ""
    root.scrollIntoView({ behavior: 'smooth' });
    
    switch (true) {
        case hash.startsWith("#/id="):
            const id = hashIdValidation(hash);
            const productRoute = pages["#/id="];
            root.innerHTML = productRoute(id);
            break;

        case hash.startsWith("#/category="):
            const category = categoryValidation(hash);
            const categoryRoute = pages["#/category="];
            root.innerHTML = categoryRoute(category);
            break;

        case hash.startsWith("#/panel/product?"):
            const isManage = productManagedValidation(hash);
            let manageRoute;
            if(isManage){
                manageRoute = pages["#/panel/product?edit="];
                root.innerHTML = manageRoute(isManage);
                break
            }
            manageRoute = pages["#/panel/product?add"];
            root.innerHTML = manageRoute(isManage);
            break;

        default:
            const route = pages[hash] || pages[404]
            root.innerHTML = route()
            break;
    }
}

const hashIdValidation = (hash) => {
    const params = new URLSearchParams(hash.slice(2));
    const id = params.get("id");
    if(id){
        return id
    } else {
        return false
    }
}

const categoryValidation = (hash) => {
    const params = new URLSearchParams(hash.slice(2));
    const category = params.get("category");
    if(category){
        return category
    } else {
        return false
    }
}

const productManagedValidation = (hash) => {
    // Obtener la cadena de consulta (query string) eliminando lo que está antes del '?'
    const queryString = hash.split('?')[1];
    const params = new URLSearchParams(queryString);
    const id = params.get("edit");
    if(id){
        return id
    } else {
        return false
    }
}