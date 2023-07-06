import { Main } from "../views/main.js";
import { Error } from "../views/error.js";
import { Login } from "../views/login.js";
import { ProductsByCategory } from "../views/allbycategory.js";

const root = document.getElementById("root")

export function Router(route){
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
            document.startViewTransition(() => Error())
            break;
    }
}