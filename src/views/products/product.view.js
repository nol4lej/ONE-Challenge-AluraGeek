export const ViewProduct = (id) => {
    const container = `
        <view-product product-id="${id}"></view-product>
        <random-products product-id="${id}"></random-products>
        <footer-component></footer-component>
    `
    return container
}