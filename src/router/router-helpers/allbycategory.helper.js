export const loadAllByCategory = async (hash) => {
    const category = categoryValidation(hash);
    const allByCategoryModule = await import(`../../views/products/allbycategory.view`)
    const view = allByCategoryModule.allByCategoryView;
    return view(category)
}

const categoryValidation = (hash) => {
    const params = new URLSearchParams(hash.slice(2));
    const category = params.get("category");
    if(category){
        return category
    } else {
        return false
    }
}