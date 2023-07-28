import("../../components/single-product/single-product.css")
import("../../components/random-products/random-products.css")
import("../../components/single-product/single-product.js")
import("../../components/random-products/random-products.js")


export const ViewProduct = (id) => {
    const container = `
        <view-product product-id="${id}"></view-product>
        <random-products product-id="${id}"></random-products>
        <footer-component></footer-component>
    `
    return container
}