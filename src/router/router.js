import { Main } from "../views/main.js";
import { Error } from "../views/error.js";
import { Login } from "../views/login.js";
import { ProductsByCategory } from "../views/allbycategory.js";
import { ViewProduct } from "../views/viewproduct.js";

const root = document.getElementById("root")

export async function Router(route){
    root.innerHTML = ""
    switch (route) {
        case "#/":
        case "":
            document.startViewTransition(() => Main())
            break;
        case "#/login":
            document.startViewTransition(() => Login())
            break;
        case "#/starwars":
        case "#/consola":
        case "#/otros":
            document.startViewTransition(() => ProductsByCategory(route))
            break;
        default:
            await document.startViewTransition(() => ViewProduct(route));
            break;
    }
}