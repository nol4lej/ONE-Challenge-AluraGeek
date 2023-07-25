"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_panel_nav-panel_nav-panel_js"],{

/***/ "./src/components/panel/nav-panel/nav-panel.js":
/*!*****************************************************!*\
  !*** ./src/components/panel/nav-panel/nav-panel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavPanel: () => (/* binding */ NavPanel)\n/* harmony export */ });\nclass NavPanel extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render()\r\n        this.handleAdmin()\r\n    }\r\n\r\n    render(){\r\n        this.innerHTML = `\r\n            <nav class=\"nav__panel\">\r\n                <a href=\"#/panel\" class=\"nav__panel__btn\">Perfil</a>\r\n                <a href=\"#/panel/administrar\" id=\"admin-nav\" class=\"nav__panel__btn\">Administrar productos</a>\r\n            </nav>\r\n            <div id=\"main-panel\"></div>\r\n        `\r\n    }\r\n\r\n    handleAdmin(){\r\n        const btnAdmin = this.querySelector(\"#admin-nav\")\r\n        const container = this.querySelector(\"#main-panel\")\r\n        btnAdmin.addEventListener(\"click\", (event) => {\r\n            container.innerHTML = `\r\n                <admin-products></admin-products>\r\n        `\r\n        })\r\n    }\r\n\r\n}\r\n\r\ncustomElements.define(\"nav-panel\", NavPanel)\n\n//# sourceURL=webpack://alurageek/./src/components/panel/nav-panel/nav-panel.js?");

/***/ })

}]);