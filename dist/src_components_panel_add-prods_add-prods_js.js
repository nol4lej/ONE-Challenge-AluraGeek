"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_panel_add-prods_add-prods_js"],{

/***/ "./src/components/panel/add-prods/add-prods.js":
/*!*****************************************************!*\
  !*** ./src/components/panel/add-prods/add-prods.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddProds: () => (/* binding */ AddProds)\n/* harmony export */ });\nclass AddProds extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.innerHTML = `\r\n            <section class=\"addform__container\">\r\n                <div class=\"add__title\">\r\n                    <h2>Agregar nuevo producto</h2>\r\n                    <a href=\"#/panel/administrar\" class=\"add__back\"><i class=\"material-icons\">arrow_back</i>Volver</a>\r\n                </div>\r\n                <form id=\"addproduct-form\" class=\"add__form\">\r\n                    <div class=\"add__img\">\r\n                        <label for=\"\" class=\"img__label\">URL de la imagen</label>\r\n                        <input type=\"text\" id=\"img-input\" class=\"img__input\">\r\n                    </div>\r\n                    <div class=\"add__name\">\r\n                    <label for=\"\" class=\"name__label\">Nombre del producto</label>\r\n                        <input type=\"text\" id=\"name-input\" class=\"name__input\">\r\n                    </div>\r\n                    <div class=\"add__category\">\r\n                        <label for=\"\" class=\"categoria__label\">Categoría</label>\r\n                        <select id=\"categoria\" class=\"categoria__input\">\r\n                            <option value=\"starwars\">Star Wars</option>\r\n                            <option value=\"consola\">Consola</option>\r\n                            <option value=\"otros\">Otros</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"add__price\">\r\n                        <label for=\"\" class=\"price__label\">Precio del producto</label>\r\n                        <p class=\"container__number\">$<input type=\"number\" id=\"price-input\" class=\"price__input\"></p>\r\n                    </div>\r\n                    <div class=\"add__description\">\r\n                        <label for=\"\" class=\"description__label\">Descripción del producto</label>\r\n                        <input type=\"text\" id=\"description-input\" class=\"description__input\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"add__btn\">Agregar producto</button>\r\n                </form>\r\n                <span id=\"message\"></span>\r\n            </section>\r\n        `\r\n    }\r\n\r\n\r\n}\r\n\r\ncustomElements.define(\"add-products\", AddProds)\n\n//# sourceURL=webpack://alurageek/./src/components/panel/add-prods/add-prods.js?");

/***/ })

}]);