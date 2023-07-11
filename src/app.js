import { Router } from "./router/router.js";
import { Loading } from "./helpers/loading.js";

export function App(){
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

