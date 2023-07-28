import("../../components/modal-confirm/modal-confirm.css")
import("../../components/panel/admin-prods/admin-prods.css")
import("../../components/panel/admin-prods/admin-prods.js")
import("../../components/modal-confirm/modal-confirm.js")

export const admin = () => {
    const container = `
        <nav-panel></nav-panel>
        <admin-products></admin-products>
    `
    return container
}