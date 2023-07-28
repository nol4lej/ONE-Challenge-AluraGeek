"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_panel_manage-prods_manage-prods_js"],{

/***/ "./src/components/panel/manage-prods/manage-prods.js":
/*!***********************************************************!*\
  !*** ./src/components/panel/manage-prods/manage-prods.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ManageProducts: () => (/* binding */ ManageProducts)\n/* harmony export */ });\n/* harmony import */ var _observables_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../observables/products.js */ \"./src/observables/products.js\");\n/* harmony import */ var _state_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state/state.js */ \"./src/state/state.js\");\n\r\n\r\n\r\nclass ManageProducts extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n        this.userState = _state_state_js__WEBPACK_IMPORTED_MODULE_1__.state.user\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.handleRoleUser()\r\n\r\n        this.render()\r\n\r\n        let isEditstate = false;\r\n        // ESTE METODO SE CARGA AQUI PORQUE SE CARGARÁ DESPUES QUE EL FORM SEA RENDERIZADO\r\n        // \"toEdit\" es un id de un producto o es \"false\", esto lo proporciona el enrutador.\r\n        const id = this.getAttribute(\"toEdit\")\r\n        if(id !== \"false\"){\r\n            isEditstate = true\r\n            this.handleForm(isEditstate, id)\r\n            this.handleEdit(id)\r\n            return \r\n        }\r\n\r\n        this.handleForm(isEditstate)\r\n    }\r\n\r\n    render(){\r\n\r\n\r\n        this.innerHTML = `\r\n        <section class=\"addform__container\">\r\n            <div class=\"add__title\">\r\n                <h2>Agregar nuevo producto</h2>\r\n                <a href=\"#/panel/administrar\" class=\"add__back\"><i class=\"material-icons\">arrow_back</i>Volver</a>\r\n            </div>\r\n            <form id=\"manageproduct-form\" class=\"add__form\">\r\n                <div class=\"add__img\">\r\n                    <label for=\"\" class=\"img__label\">URL de la imagen</label>\r\n                    <input type=\"text\" id=\"img-input\" class=\"img__input\" required>\r\n                </div>\r\n                <div class=\"add__name\">\r\n                <label for=\"\" class=\"name__label\">Nombre del producto</label>\r\n                    <input type=\"text\" id=\"name-input\" class=\"name__input\" required>\r\n                </div>\r\n                <div class=\"add__category\">\r\n                    <label for=\"\" class=\"categoria__label\">Categoría</label>\r\n                    <select id=\"categoria-select\" class=\"categoria__input\" required>\r\n                        <option disabled selected value=\"\">Selecciona una categoría</option>\r\n                        <option value=\"starwars\">Star Wars</option>\r\n                        <option value=\"consola\">Consola</option>\r\n                        <option value=\"otros\">Otros</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"add__price\">\r\n                    <label for=\"\" class=\"price__label\">Precio del producto</label>\r\n                    <p class=\"container__number\">$<input type=\"text\" id=\"price-input\" class=\"price__input\" required></p>\r\n                </div>\r\n                <div class=\"add__description\">\r\n                    <label for=\"\" class=\"description__label\">Descripción del producto</label>\r\n                    <textarea id=\"description-input\" class=\"description__input\" cols=\"30\" rows=\"3\" required></textarea>\r\n                </div>\r\n                <button type=\"submit\" class=\"add__btn\" id=\"submit-btn\">Agregar producto</button>\r\n            </form>\r\n            <span id=\"product-info\" class=\"product__info\"></span>\r\n        </section>\r\n    `\r\n    }\r\n\r\n    set toEdit(value){\r\n        this.setAttribute(\"toEdit\", value)\r\n    }\r\n    get toEdit(){\r\n        return this.getAttribute(\"toEdit\")\r\n    }\r\n\r\n    handleForm(isEditstate, id){\r\n\r\n        const form = this.querySelector(\"#manageproduct-form\")\r\n        form.addEventListener(\"submit\", async (event) => {\r\n            event.preventDefault()\r\n\r\n            const img = this.querySelector(\"#img-input\").value\r\n            const name = this.querySelector(\"#name-input\").value\r\n            const category = this.querySelector(\"#categoria-select\").value\r\n            const price = this.querySelector(\"#price-input\").value\r\n            const description = this.querySelector(\"#description-input\").value\r\n            const info = this.querySelector(\"#product-info\")\r\n\r\n            if(isEditstate){\r\n                try {id\r\n                    const res = await _observables_products_js__WEBPACK_IMPORTED_MODULE_0__.productsSubject.updateProduct(img, name, category, price, description, id)\r\n                    info.classList.add(\"success\")\r\n                    info.innerHTML = `<i class=\"material-icons\">check_circle</i> ${res}`\r\n                } catch (error) {\r\n                    info.classList.add(\"error\")\r\n                    info.innerHTML = `<i class=\"material-icons\">error</i> ${error}`\r\n    \r\n                }\r\n            } else {\r\n                try {\r\n                    const res = await _observables_products_js__WEBPACK_IMPORTED_MODULE_0__.productsSubject.addProduct(img, name, category, price, description)\r\n                    info.classList.add(\"success\")\r\n                    info.innerHTML = `<i class=\"material-icons\">check_circle</i> ${res}`\r\n                } catch (error) {\r\n                    info.classList.add(\"error\")\r\n                    info.innerHTML = `<i class=\"material-icons\">error</i> ${error}`\r\n                }\r\n            }\r\n        })\r\n    }\r\n    \r\n    async handleEdit(productId){\r\n        const {imageUrl, name, price, category, description, } = await _observables_products_js__WEBPACK_IMPORTED_MODULE_0__.productsSubject.getProduct(productId)\r\n\r\n        this.querySelector(\"#img-input\").value = imageUrl;\r\n        this.querySelector(\"#name-input\").value = name;\r\n        this.querySelector(\"#categoria-select\").value = category;\r\n        this.querySelector(\"#price-input\").value = price;\r\n        this.querySelector(\"#description-input\").value = description;\r\n        this.querySelector(\"#submit-btn\").innerHTML = \"Actualizar producto\"\r\n    }\r\n\r\n    handleRoleUser(){\r\n        if(this.userState.role !== \"admin\"){\r\n            window.location.href = \"#\";\r\n        }\r\n        return\r\n    }\r\n\r\n}\r\n\r\ncustomElements.define(\"manage-products\", ManageProducts)\n\n//# sourceURL=webpack://alurageek/./src/components/panel/manage-prods/manage-prods.js?");

/***/ })

}]);