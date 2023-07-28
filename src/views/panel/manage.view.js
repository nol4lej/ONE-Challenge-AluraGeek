import("../../components/panel/manage-prods/manage-prods.css")
import("../../components/panel/manage-prods/manage-prods.js")

export const ManageProduct = (isManage) => {
    const container = `
        <nav-panel></nav-panel>
        <manage-products toEdit="${isManage}"></manage-products>
    `
    return container
}