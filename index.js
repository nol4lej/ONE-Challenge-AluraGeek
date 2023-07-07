import("./src/controllers/firebase.js")
import("./src/controllers/users-manage.js")
import("./src/controllers/logout-observer.js")
import("./src/controllers/session-buttons.js")
import { App } from "./app.js"

window.addEventListener("DOMContentLoaded", () => {
    App()
})