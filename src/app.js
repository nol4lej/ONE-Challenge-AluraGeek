import { Router } from "./router/router.js";
import { Loading } from "../src/components/loading.js";
import { user } from "./controllers/users-handle.js";



export function App(){

    user.loginState()

    Loading();
    setTimeout(() => {
        Router(window.location.hash)
    }, 500);
    window.addEventListener("hashchange", () => {
        Loading();
        setTimeout(() => {
            Router(window.location.hash)
        }, 500);
    });
}

