import { Router } from "./src/router/router.js";
import { Loading } from "./src/views/loading.js";

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

