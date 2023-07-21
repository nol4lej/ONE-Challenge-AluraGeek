import { App } from "./app.js"
import { productsSubject } from "./observables/products.js"

window.addEventListener("DOMContentLoaded", () => {
    productsSubject.fetchProducts()
    import("./components/init.components.js")
    App()
})