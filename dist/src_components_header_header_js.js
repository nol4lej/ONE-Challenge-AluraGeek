"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_header_header_js"],{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)\n/* harmony export */ });\nclass HeaderComponent extends HTMLElement{\r\n\r\n    constructor(){\r\n        super();\r\n    };\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        this.innerHTML = `\r\n            <header class=\"header\">\r\n                <div class=\"header__content\">\r\n                    <h1 class=\"header__title\">Febrero Promocional</h1>\r\n                    <p class=\"header__info\">Productos seleccionados con 33% de descuento</p>\r\n                    <a href=\"#/category=consola\" class=\"header__button\">Ver Consolas</a>\r\n                </div>\r\n            </header>\r\n        `;\r\n    };\r\n\r\n};\r\n\r\ncustomElements.define(\"header-component\", HeaderComponent)\n\n//# sourceURL=webpack://alurageek/./src/components/header/header.js?");

/***/ })

}]);