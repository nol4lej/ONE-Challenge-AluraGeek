export const loadSearchProducts = async (hash) => {
    const ids = hashSearchValidation(hash);
    const searchViewModule = await import("../../views/products/searchprods.view")
    const searchViewContent = searchViewModule.SearchProducts;
    return searchViewContent(ids)
}

const hashSearchValidation = (hash) => {
    const queryString = hash.split('?')[1];
    const params = new URLSearchParams(queryString);
    const ids = params.get("search");
    if(ids){
        return ids
    } else {
        return false
    }
}