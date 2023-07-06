import { Error } from "../views/error.js";
import { Login } from "../views/login.js";
import { Main } from "../views/main.js";

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
        default:
            document.startViewTransition(() => Error())
            break;
    }
}