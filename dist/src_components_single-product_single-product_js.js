"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_single-product_single-product_js"],{

/***/ "./src/components/single-product/single-product.js":
/*!*********************************************************!*\
  !*** ./src/components/single-product/single-product.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SingleProduct: () => (/* binding */ SingleProduct)\n/* harmony export */ });\n/* harmony import */ var _observables_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../observables/products */ \"./src/observables/products.js\");\n\r\n\r\nclass SingleProduct extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    async connectedCallback(){\r\n        await this.render()\r\n    }\r\n\r\n    async render(){\r\n        const id = this.getAttribute('product-id');\r\n        const product = await _observables_products__WEBPACK_IMPORTED_MODULE_0__.productsSubject.getProduct(id)\r\n        const { imageUrl, name, price, description} = product\r\n\r\n        if(JSON.stringify(product) === \"{}\"){\r\n            this.innerHTML = `\r\n                <h2 class=\"error__title\">El producto no existe o no se ha podido acceder a él.</h2>\r\n            `\r\n        } else {\r\n            this.innerHTML = `\r\n                <div class=\"single__img__container\">\r\n                    <img src=\"${imageUrl}\" alt=\"\" class=\"single__img\">\r\n                </div>\r\n                <div class=\"single__info\">\r\n                    <h2 class=\"single__name\">${name}</h2>\r\n                    <h3 class=\"single__price\">${price}</h3>\r\n                    <p class=\"single__description\">${description}</p>\r\n                </div>\r\n            `\r\n        }\r\n\r\n\r\n    }\r\n\r\n    get productId() {\r\n        return this.getAttribute('product-id');\r\n    }\r\n    set productId(value) {\r\n        this.setAttribute('product-id', value);\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\ncustomElements.define(\"view-product\", SingleProduct)\n\n//# sourceURL=webpack://alurageek/./src/components/single-product/single-product.js?");

/***/ })

}]);