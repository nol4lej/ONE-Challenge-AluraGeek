"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_all-products-category_allbycategory_js"],{

/***/ "./src/components/all-products-category/allbycategory.js":
/*!***************************************************************!*\
  !*** ./src/components/all-products-category/allbycategory.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allByCategory: () => (/* binding */ allByCategory)\n/* harmony export */ });\n/* harmony import */ var _observables_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../observables/products.js */ \"./src/observables/products.js\");\n/* harmony import */ var _state_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/state.js */ \"./src/state/state.js\");\n\r\n\r\n\r\nclass allByCategory extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render()\r\n        this.renderProducts()\r\n        this.suscribeToProducts()\r\n    }\r\n\r\n    render(){\r\n        this.innerHTML = `\r\n            <div class=\"\">\r\n                <h2 class=\"bycategory__title\">Todos los productos</h2>\r\n            </div>\r\n            <div class=\"bycategory__container\" id=\"bycategory-container\"></div>\r\n        `\r\n    }\r\n\r\n    get category(){\r\n        return this.getAttribute(\"category\")\r\n    }\r\n    set category(value){\r\n        this.setAttribute(\"category\", value)\r\n    }\r\n\r\n    renderProducts(){\r\n        const category = this.getAttribute(\"category\")\r\n        const container = this.querySelector(\"#bycategory-container\")\r\n\r\n        if(_state_state_js__WEBPACK_IMPORTED_MODULE_1__.state.productsByCategory.hasOwnProperty(category)){\r\n            const arrayProductsHTML = [];\r\n            const currentCategory = _state_state_js__WEBPACK_IMPORTED_MODULE_1__.state.productsByCategory[category]\r\n            currentCategory.forEach(product => {\r\n                const { imageUrl, name, price, id } = product\r\n                const html = `\r\n                    <product-card src=\"${imageUrl}\" title=\"${name}\" price=\"${price}\" link=\"${id}\"></product-card>\r\n                `\r\n                arrayProductsHTML.push(html)\r\n            })\r\n            const arrayWithoutCommas = arrayProductsHTML.join(\"\");\r\n            container.innerHTML = arrayWithoutCommas;   \r\n        } else {\r\n            container.innerHTML = \"<loader-component></loader-component>\"\r\n        }\r\n\r\n    }\r\n\r\n    suscribeToProducts(){\r\n    _observables_products_js__WEBPACK_IMPORTED_MODULE_0__.productsSubject.subscribe((data) => {\r\n            this.render()\r\n            this.renderProducts()   \r\n        })\r\n    }\r\n\r\n}\r\n\r\ncustomElements.define(\"products-by-category\", allByCategory)\n\n//# sourceURL=webpack://alurageek/./src/components/all-products-category/allbycategory.js?");

/***/ })

}]);