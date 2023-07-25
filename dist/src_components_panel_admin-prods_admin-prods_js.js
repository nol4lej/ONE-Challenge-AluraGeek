"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_panel_admin-prods_admin-prods_js"],{

/***/ "./src/components/panel/admin-prods/admin-prods.js":
/*!*********************************************************!*\
  !*** ./src/components/panel/admin-prods/admin-prods.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminProds: () => (/* binding */ AdminProds)\n/* harmony export */ });\n/* harmony import */ var _state_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state.js */ \"./src/state/state.js\");\n\r\n\r\nclass AdminProds extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render()\r\n        this.handleProducts()\r\n    }\r\n\r\n    render(){\r\n        this.innerHTML = `\r\n        <section class=\"admin__container\">\r\n            <div class=\"admin__header\">\r\n                <h2 class=\"admin__title\">Administrar Productos</h2>\r\n                <a class=\"admin__link\" href=\"#/panel/addproduct\">Agregar Producto</a>\r\n            </div>\r\n            <div class=\"admin__products\" id=\"all-products\"></div>\r\n        </section>\r\n    `\r\n    }\r\n\r\n    handleProducts(){\r\n        const container = this.querySelector(\"#all-products\")\r\n        const allproducts = _state_state_js__WEBPACK_IMPORTED_MODULE_0__.state.products\r\n        const arrayProductsHTML = [];\r\n        allproducts.forEach(product => {\r\n            const { imageUrl, category, description, name, price, id} = product\r\n\r\n            const html = `\r\n                <product-card src=\"${imageUrl}\" title=\"${name}\" price=\"${price}\" link=\"${id}\" toManage=\"yes\"></product-card>\r\n            `;\r\n            arrayProductsHTML.push(html);\r\n\r\n        })\r\n        const arrayWithoutCommas = arrayProductsHTML.join(\"\");\r\n        container.innerHTML = arrayWithoutCommas;\r\n        return\r\n    }\r\n\r\n\r\n\r\n\r\n}\r\n\r\ncustomElements.define(\"admin-products\", AdminProds)\n\n//# sourceURL=webpack://alurageek/./src/components/panel/admin-prods/admin-prods.js?");

/***/ })

}]);