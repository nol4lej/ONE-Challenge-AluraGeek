import("../../components/panel/manage-prods/manage-prods.js")
import("../../components/panel/manage-prods/manage-prods.css")

export const ManageProduct = (isManage) => {
    const container = `
        <nav-panel></nav-panel>
        <manage-products toEdit="${isManage}"></manage-products>
    `
    return container
}