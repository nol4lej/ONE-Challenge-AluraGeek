import("../../components/all-products-category/allbycategory.css")
import("../../components/all-products-category/allbycategory.js")

export const allByCategoryView = (category) => {
    const container = `
        <products-by-category category="${category}"></products-by-category>
        <footer-component></footer-component>
    `
    return container
}