"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_modal-confirm_modal-confirm_js"],{

/***/ "./src/components/modal-confirm/modal-confirm.js":
/*!*******************************************************!*\
  !*** ./src/components/modal-confirm/modal-confirm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalConfirm: () => (/* binding */ ModalConfirm)\n/* harmony export */ });\n/* harmony import */ var _observables_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../observables/products.js */ \"./src/observables/products.js\");\n\r\n\r\nclass ModalConfirm extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render()\r\n        this.handleCancel()\r\n        this.handleConfirm()\r\n    }\r\n\r\n    render(){\r\n        this.innerHTML = `\r\n            <div class=\"modal__content\">\r\n                <h2 class=\"modal__title\">¿Deseas eliminar este producto?</h2>\r\n                <div class=\"modal__buttons__container\">\r\n                    <button class=\"modal__btn\" id=\"confirm-btn\">Confirmar</button>\r\n                    <button class=\"modal__btn\" id=\"cancel-btn\">Cancelar</button>\r\n                </div>\r\n            </div>\r\n        `\r\n    }\r\n\r\n    handleCancel(){\r\n        const btn = this.querySelector(\"#cancel-btn\")\r\n        btn.addEventListener(\"click\", () => {\r\n            this.classList.remove(\"active\");\r\n            setTimeout(() => {\r\n                this.remove();\r\n            }, 500);\r\n        })\r\n    }\r\n\r\n    handleConfirm(){\r\n        const btn = this.querySelector(\"#confirm-btn\")\r\n        const id = this.getAttribute(\"productId\")\r\n        btn.addEventListener(\"click\", async () => {\r\n            try {\r\n                const res = await _observables_products_js__WEBPACK_IMPORTED_MODULE_0__.productsSubject.deleteProduct(id)\r\n                console.log(res)\r\n                this.classList.remove(\"active\");\r\n                setTimeout(() => {\r\n                    this.remove();\r\n                }, 500);\r\n            } catch (error) {\r\n                console.log(error)\r\n            }\r\n        })\r\n    }\r\n\r\n    set productId(value){\r\n        this.setAttribute(\"productId\", value)\r\n    }\r\n    get productId(){\r\n        return this.getAttribute(\"productId\")\r\n    }\r\n\r\n}\r\n\r\ncustomElements.define(\"modal-confirm\", ModalConfirm)\n\n//# sourceURL=webpack://alurageek/./src/components/modal-confirm/modal-confirm.js?");

/***/ })

}]);