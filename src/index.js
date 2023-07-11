import("./controllers/firebase.js")
import("./controllers/users-manage.js")
import("./controllers/logout-observer.js")
import("./controllers/session-buttons.js")
import("./controllers/products-manage.js")
import { App } from "./app.js"

window.addEventListener("DOMContentLoaded", () => {
    App()

})