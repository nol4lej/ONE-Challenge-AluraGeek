import { Error } from "../views/error.js";
import { Main } from "../views/main.js";

const root = document.getElementById("root")

export function Router(route){
    root.innerHTML = ""
    switch (route) {
        case "#/":
        case "":
            document.startViewTransition(() => Main())
            Main()
            break;
        default:
            document.startViewTransition(() => Error())
            break;
    }


}