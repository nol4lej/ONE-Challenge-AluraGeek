import { router } from "./router/router.js";

export const App = () => {
    router(window.location.hash);
    window.addEventListener("hashchange", () => {
        router(window.location.hash);
    });
};