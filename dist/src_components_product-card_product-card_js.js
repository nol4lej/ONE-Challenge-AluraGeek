"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_product-card_product-card_js"],{

/***/ "./src/components/product-card/product-card.js":
/*!*****************************************************!*\
  !*** ./src/components/product-card/product-card.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductCard: () => (/* binding */ ProductCard)\n/* harmony export */ });\nclass ProductCard extends HTMLElement{\r\n\r\n    constructor(){\r\n        super();\r\n    };\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    };\r\n\r\n    render(){\r\n        const src = this.getAttribute('src');\r\n        const title = this.getAttribute('title');\r\n        const price = this.getAttribute('price');\r\n        const link = this.getAttribute('link');\r\n\r\n        this.innerHTML = `       \r\n            <img class=\"card__img\" src=\"${src}\" alt=\"${title}\">\r\n            <h3 class=\"card__titile\">${title}</h3>\r\n            <p class=\"card__price\">${price}</p>\r\n            <a class=\"card__link\" href=\"#/id=${link}\">Ver producto</a>\r\n        `\r\n    }\r\n\r\n    get title() {\r\n        return this.getAttribute('title');\r\n    }\r\n    set title(value) {\r\n        this.setAttribute('title', value);\r\n    }\r\n\r\n    get src() {\r\n        return this.getAttribute('src');\r\n    }\r\n    set src(value) {\r\n        this.setAttribute('src', value);\r\n    }\r\n\r\n    get price() {\r\n        return this.getAttribute('price');\r\n    }\r\n    set price(value) {\r\n        this.setAttribute('price', value);\r\n    }\r\n\r\n    get link() {\r\n        return this.getAttribute('link');\r\n    }\r\n    set link(value) {\r\n        this.setAttribute('link', value);\r\n    }\r\n\r\n};\r\n\r\ncustomElements.define(\"product-card\", ProductCard)\n\n//# sourceURL=webpack://alurageek/./src/components/product-card/product-card.js?");

/***/ })

}]);