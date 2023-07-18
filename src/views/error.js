import { ContactFooter } from "../components/contactfooter.js";

export function Error(){
    const root = document.getElementById("root");
    root.innerHTML = `
        <div class="error__container">
            <h2 class="error__title">Error 404</h2>
        </div>
    `
    ContactFooter();
}