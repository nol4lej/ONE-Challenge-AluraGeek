import { loadMain } from "./router-helpers/mainview.helper"
import { loadForms } from "./router-helpers/formsview.helper.js";
import { loadPanel } from "./router-helpers/panelview.helper.js";
import { loadPanelProducts } from "./router-helpers/panelproducts.helper.js";
import { loadViewProduct } from "./router-helpers/viewproduct.helper.js";
import { loadAllByCategory } from "./router-helpers/allbycategory.helper.js";

export const helpers = {

    loadMain,
    loadForms,
    loadPanel,
    loadPanelProducts,
    loadViewProduct,
    loadAllByCategory

}