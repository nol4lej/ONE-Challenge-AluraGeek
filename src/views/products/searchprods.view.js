import("../../components/search/search-products/search-products.css")
import("../../components/search/search-products/search-products.js")

export const SearchProducts = (ids) => {
    const container = `
        <searched-products productsId="${ids}"></searched-products>
        <footer-component></footer-component>    
    `
    return container
}