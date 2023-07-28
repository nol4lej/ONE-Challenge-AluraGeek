export const loadPanelProducts = async (hash) => {
    const isManage = productManagedValidation(hash);
    
    let manageRoute;
    let panelProductView;

    if(isManage){
        manageRoute = await import(`../../views/panel/manage.view.js`)
        panelProductView = manageRoute.ManageProduct
        return panelProductView(isManage);
    }

    manageRoute = await import(`../../views/panel/manage.view.js`)
    panelProductView = manageRoute.ManageProduct

    return panelProductView(isManage);
}

const productManagedValidation = (hash) => {
    // Obtener la cadena de consulta (query string) eliminando lo que está antes del '?'
    const queryString = hash.split('?')[1];
    const params = new URLSearchParams(queryString);
    const id = params.get("edit");

    if(id){
        return id
    } else {
        return false
    }
}