"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_loader_loader_js"],{

/***/ "./src/components/loader/loader.js":
/*!*****************************************!*\
  !*** ./src/components/loader/loader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Loader: () => (/* binding */ Loader)\n/* harmony export */ });\nclass Loader extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render()\r\n    }\r\n\r\n    render(){\r\n        this.innerHTML = `\r\n        <div class=\"loader__container\">\r\n            <div class=\"loader\"></div>\r\n        </div>\r\n            \r\n        `\r\n    }\r\n\r\n}\r\n\r\ncustomElements.define(\"loader-component\", Loader)\n\n//# sourceURL=webpack://alurageek/./src/components/loader/loader.js?");

/***/ })

}]);