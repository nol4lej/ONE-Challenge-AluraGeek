import { App } from "./app.js"
import("./controllers/logout-observer.js")
import { } from "./controllers/session-buttons.js"
import("./helpers/products/products-manage.js")

import("./components/contactfooter.js")

window.addEventListener("DOMContentLoaded", async () => {
    App()
})