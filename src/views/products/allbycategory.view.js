export const allByCategoryView = (category) => {
    const container = `
        <products-by-category category="${category}"></products-by-category>
        <footer-component></footer-component>
    `
    return container
}