import { App } from "./app.js"
import { productsSubject } from "./observables/products.js"

window.addEventListener("DOMContentLoaded", async () => {
    await productsSubject.fetchProducts()
    import("./components/init.components.js")
    App()
})