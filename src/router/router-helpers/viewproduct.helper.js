export const loadViewProduct = async (hash) => {
    const id = hashIdValidation(hash);
    const productViewModule = await import(`../../views/products/product.view.js`)
    const formViewContent = productViewModule.ViewProduct;
    return formViewContent(id)
}

const hashIdValidation = (hash) => {
    const params = new URLSearchParams(hash.slice(2));
    const id = params.get("id");
    if(id){
        return id
    } else {
        return false
    }
}