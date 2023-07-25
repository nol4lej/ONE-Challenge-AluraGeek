import { MainView } from "../views/main.view";
import { Error404 } from "../views/error404.view"
import { ViewProduct } from "../views/product.view";
import { allByCategoryView } from "../views/allbycategory.view";
import { Login } from "../views/forms/login.view";
import { Register } from "../views/forms/register.view";
import { Panel } from "../views/panel/panel.view";
import { Admin } from "../views/panel/admin.view";
import { AddProduct } from "../views/panel/add.view";

const pages = {
    404: Error404,
    "": MainView,
    "#/": MainView,
    "#/login": Login,
    "#/register": Register,
    "#/panel": Panel,
    "#/panel/administrar": Admin,
    "#/panel/addproduct": AddProduct,
    "#/id=": ViewProduct,
    "#/category=": allByCategoryView

}

export const router = (hash) => {
    const root = document.getElementById("root")
    root.innerHTML = ""
    
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