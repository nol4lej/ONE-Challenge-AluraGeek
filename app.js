import { Router } from "./src/router/router.js";

Router(window.location.hash)
window.addEventListener("hashchange", () => {
    Router(window.location.hash)
})