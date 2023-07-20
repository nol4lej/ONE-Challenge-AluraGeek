"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchallenge_alurageek"] = self["webpackChunkchallenge_alurageek"] || []).push([["src_components_contactfooter_js"],{

/***/ "./src/components/contactfooter.js":
/*!*****************************************!*\
  !*** ./src/components/contactfooter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactFooter: () => (/* binding */ ContactFooter)\n/* harmony export */ });\nclass ContactFooter extends HTMLElement{\r\n\r\n    constructor(){\r\n        super();\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        this.innerHTML = `\r\n            <div class=\"contact\">\r\n                <div class=\"links__container\">\r\n                    <div class=\"footer__logo\">\r\n                        <img class=\"contact__img\" src=\"/src/img/logo.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"footer__links\">\r\n                        <ul class=\"links__list\">\r\n                            <li class=\"link__item\"><a href=\"#\">Quiénes somos</a></li>\r\n                            <li class=\"link__item\"><a href=\"#\">Políticas de privacidad</a></li>\r\n                            <li class=\"link__item\"><a href=\"#\">Programa de fidelidad</a></li>\r\n                            <li class=\"link__item\"><a href=\"#\">Nuestras tiendas</a></li>\r\n                            <li class=\"link__item\"><a href=\"#\">Quiero ser franquiciado</a></li>\r\n                            <li class=\"link__item\"><a href=\"#\">Anúncie aquí</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form\">\r\n                    <h3 class=\"form__title\">Hable con nosotros</h3>\r\n                    <form action=\"\" class=\"form__container\">\r\n                        <div class=\"input__container\">\r\n                            <label for=\"\" class=\"input__title\">Nombre</label>\r\n                            <input type=\"text\" name=\"\" id=\"\" class=\"input__name\">\r\n                        </div>\r\n                        <textarea class=\"form__textarea\" name=\"\" id=\"\" placeholder=\"Escribe tu mensaje\"></textarea>\r\n                        <button class=\"form__button\" type=\"submit\">Enviar mensaje</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n            <footer class=\"footer\">\r\n                <h2 class=\"footer__title\">Desarrollado por Nolasco Medina 2023</h2>\r\n            </footer>\r\n        `;\r\n    }\r\n}\r\n\r\ncustomElements.define(\"contact-footer\", ContactFooter)\n\n//# sourceURL=webpack://challenge-alurageek/./src/components/contactfooter.js?");

/***/ })

}]);