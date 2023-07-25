/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || []).push([["src_components_panel_perfil_perfil_js"],{

/***/ "./src/components/panel/perfil/perfil.js":
/*!***********************************************!*\
  !*** ./src/components/panel/perfil/perfil.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Perfil: () => (/* binding */ Perfil)\n/* harmony export */ });\n/* harmony import */ var _state_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state.js */ \"./src/state/state.js\");\n/* harmony import */ var _observables_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../observables/users.js */ \"./src/observables/users.js\");\n\r\n\r\n\r\n\r\nclass Perfil extends HTMLElement{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render()\r\n    }\r\n\r\n    render(){\r\n        const {email, id, role, user} = _state_state_js__WEBPACK_IMPORTED_MODULE_0__.state.user\r\n\r\n        this.innerHTML = `\r\n            <div class=\"perfil__container\">\r\n                <div class=\"perfil__data\">\r\n                    <p class=\"data__name\">User ID</p>\r\n                    <span class=\"data__output\" id=\"user-id\">${id}</span>\r\n                </div>\r\n                <div class=\"perfil__data\">\r\n                    <p class=\"data__name\">Username</p>\r\n                    <span class=\"data__output\" id=\"username\">${user}</span>\r\n                </div>\r\n                <div class=\"perfil__data\">\r\n                    <p class=\"data__name\">Role</p>\r\n                    <span class=\"data__output\" id=\"role\">${role}</span>\r\n                </div>\r\n                <div class=\"perfil__data\">\r\n                    <p class=\"data__name\">Email</p>\r\n                    <span class=\"data__output\" id=\"email\">${email}</span>\r\n                </div>\r\n\r\n            </div>\r\n        `\r\n    }\r\n\r\n}\r\n\r\ncustomElements.define(\"perfil-panel\", Perfil)\n\n//# sourceURL=webpack://alurageek/./src/components/panel/perfil/perfil.js?");

/***/ }),

/***/ "./src/helpers/fetch/fetch.post.js":
/*!*****************************************!*\
  !*** ./src/helpers/fetch/fetch.post.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPost: () => (/* binding */ fetchPost)\n/* harmony export */ });\nasync function fetchPost(url, bodyContent){\r\n    return new Promise(async (resolve, reject) => {\r\n        const res = await fetch((url), {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(bodyContent),\r\n        })\r\n        console.log(res)\r\n        if(!res.ok){\r\n            reject()\r\n        } else {\r\n            resolve()\r\n            return\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://alurageek/./src/helpers/fetch/fetch.post.js?");

/***/ }),

/***/ "./src/observables/users.js":
/*!**********************************!*\
  !*** ./src/observables/users.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _helpers_fetch_fetch_get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/fetch/fetch.get.js */ \"./src/helpers/fetch/fetch.get.js\");\n/* harmony import */ var _helpers_fetch_fetch_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch/fetch.post.js */ \"./src/helpers/fetch/fetch.post.js\");\n/* harmony import */ var _helpers_subject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/subject.js */ \"./src/helpers/subject.js\");\n/* harmony import */ var _state_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.js */ \"./src/state/state.js\");\n\r\n\r\n\r\n\r\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"./node_modules/bcryptjs/dist/bcrypt.js\");\r\nconst { v4: uuidv4 } = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/commonjs-browser/index.js\");\r\n\r\nclass Users extends _helpers_subject_js__WEBPACK_IMPORTED_MODULE_2__.Subject{\r\n\r\n    constructor(){\r\n        super()\r\n    }\r\n\r\n    notify(user){\r\n        super.notify(user)\r\n    }\r\n\r\n    async login(inputUser, password){\r\n        return new Promise( async (resolve, reject) => {\r\n            try {\r\n                const users = await (0,_helpers_fetch_fetch_get_js__WEBPACK_IMPORTED_MODULE_0__.fetchGet)(\"http://localhost:3000/users\")\r\n                let userFound = false;\r\n\r\n                if(!users){\r\n                    // este mensaje se manda al catch\r\n                    throw (\"Debido a un problema de conectividad, no es posible iniciar sesión.\");\r\n                }\r\n\r\n                for(const user of users){\r\n                    if(inputUser === user.name || inputUser === user.email){\r\n                        const hashedPassword = user.password;\r\n                        try {\r\n                            await this.verifyPassword(password, hashedPassword)\r\n    \r\n                            const {email, id, name, role} = user\r\n                            const userLogged = {\r\n                                email: email, \r\n                                id: id, \r\n                                user: name, \r\n                                role: role\r\n                            }\r\n                            _state_state_js__WEBPACK_IMPORTED_MODULE_3__.state.user = userLogged\r\n                            this.notify(userLogged)\r\n                            userFound = true\r\n                            resolve(\"Haz iniciado sesión exitosamente.\")\r\n                            break\r\n                        } catch (error) {\r\n                            reject(error)\r\n                            return\r\n                        }\r\n                    }\r\n                }\r\n\r\n                if(!userFound) {\r\n                    // este mensaje se manda al catch\r\n                    throw (\"El usuario no existe\");\r\n                }\r\n\r\n            } catch (error) {\r\n                // el \"error\" se manda al componente y renderiza los mensajes de error.\r\n                reject(error)\r\n            }\r\n        })\r\n    }\r\n\r\n    async verifyPassword(password, hash){\r\n        try {\r\n            const result = await bcrypt.compare(password, hash)\r\n            if(result){\r\n                return 'La contraseña es válida'\r\n            } else {\r\n                throw ('La contraseña es inválida')\r\n            }\r\n        } catch (error) {\r\n            throw error\r\n        }\r\n    }\r\n\r\n    async register(email, username, password){\r\n        try {\r\n            const newUser = {\r\n                name: username,\r\n                email: email,\r\n                password: await this.encryptPassword(password),\r\n                role: \"user\",\r\n                id: uuidv4()\r\n            }\r\n\r\n            const res = await (0,_helpers_fetch_fetch_post_js__WEBPACK_IMPORTED_MODULE_1__.fetchPost)(\"http://localhost:3000/users\", newUser)\r\n            return \"Usuario creado exitosamente.\"\r\n\r\n        } catch (error) {   \r\n            throw \"No se pudo crear un nuevo usuario.\"\r\n        }\r\n    }\r\n\r\n    encryptPassword(password){\r\n        return new Promise((resolve, reject) => {\r\n            bcrypt.genSalt(10, (error, salt) => {\r\n                bcrypt.hash(password, salt, (error, hash) => {\r\n                    if(error){\r\n                        reject(error)\r\n                    } else {\r\n                        resolve(hash)\r\n                    }\r\n                })\r\n            }) \r\n        })\r\n\r\n    }\r\n\r\n    logout(){\r\n        return new Promise((resolve, reject) => {\r\n            try {\r\n                _state_state_js__WEBPACK_IMPORTED_MODULE_3__.state.user = \"\"\r\n                this.notify()\r\n                resolve()\r\n            } catch (error) {\r\n                reject(error)\r\n            }\r\n        })\r\n        \r\n    }\r\n\r\n}\r\n\r\nconst user = new Users()\n\n//# sourceURL=webpack://alurageek/./src/observables/users.js?");

/***/ }),

/***/ "?86c1":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://alurageek/crypto_(ignored)?");

/***/ })

}]);