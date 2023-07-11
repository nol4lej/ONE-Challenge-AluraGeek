"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchallenge_alurageek"] = self["webpackChunkchallenge_alurageek"] || []).push([["src_controllers_logout-observer_js"],{

/***/ "./src/controllers/logout-observer.js":
/*!********************************************!*\
  !*** ./src/controllers/logout-observer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users_handle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-handle.js */ \"./src/controllers/users-handle.js\");\n\r\n\r\nclass AuthStateLogoutObserver{\r\n    notify(){\r\n        const nav_logout = document.getElementById(\"btn-logout\")\r\n        nav_logout.addEventListener(\"click\", async (event) => {\r\n            \r\n            event.preventDefault()\r\n            try {\r\n                _users_handle_js__WEBPACK_IMPORTED_MODULE_0__.user.logout()\r\n                window.location.href = \"#\";\r\n            } catch (error) {\r\n                console.log(error)\r\n            }\r\n            \r\n        })\r\n    }\r\n}\r\n\r\nconst authStateLogoutObserver = new AuthStateLogoutObserver()\r\n_users_handle_js__WEBPACK_IMPORTED_MODULE_0__.user.suscribe(authStateLogoutObserver)\n\n//# sourceURL=webpack://challenge-alurageek/./src/controllers/logout-observer.js?");

/***/ })

}]);