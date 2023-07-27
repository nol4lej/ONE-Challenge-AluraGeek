export const SearchProductView = (searchId) => {
    const container = `
        <search-view productsId="${searchId}"></search-view>
        <footer-component></footer-component>
    `
    return container
}