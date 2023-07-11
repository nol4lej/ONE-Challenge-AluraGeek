"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchallenge_alurageek"] = self["webpackChunkchallenge_alurageek"] || []).push([["src_controllers_session-buttons_js"],{

/***/ "./src/controllers/session-buttons.js":
/*!********************************************!*\
  !*** ./src/controllers/session-buttons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users_manage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-manage.js */ \"./src/controllers/users-manage.js\");\n\r\n\r\nclass AuthStateObserver{\r\n    notify(subject){\r\n        if(subject.users){\r\n            document.getElementById(\"btn-login\").style.display = \"none\"\r\n            document.getElementById(\"btn-reg\").style.display = \"none\"\r\n            document.getElementById(\"btn-logout\").style.display = \"flex\"\r\n            document.getElementById(\"btn-panel\").style.display = \"flex\"\r\n        } else {\r\n            document.getElementById(\"btn-login\").style.display = \"flex\"\r\n            document.getElementById(\"btn-reg\").style.display = \"flex\"\r\n            document.getElementById(\"btn-logout\").style.display = \"none\"\r\n            document.getElementById(\"btn-panel\").style.display = \"none\"\r\n        }\r\n    }\r\n}\r\nconst authStateObserver = new AuthStateObserver()\r\n_users_manage_js__WEBPACK_IMPORTED_MODULE_0__.userStateManage.suscribe(authStateObserver)\n\n//# sourceURL=webpack://challenge-alurageek/./src/controllers/session-buttons.js?");

/***/ })

}]);