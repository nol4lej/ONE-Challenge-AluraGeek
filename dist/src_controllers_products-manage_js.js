"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchallenge_alurageek"] = self["webpackChunkchallenge_alurageek"] || []).push([["src_controllers_products-manage_js"],{

/***/ "./src/controllers/products-manage.js":
/*!********************************************!*\
  !*** ./src/controllers/products-manage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   products: () => (/* binding */ products)\n/* harmony export */ });\n/* harmony import */ var _helpers_subject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/subject.js */ \"./src/helpers/subject.js\");\n\r\n\r\nclass Products extends _helpers_subject_js__WEBPACK_IMPORTED_MODULE_0__.Subject{\r\n\r\n    constructor(){\r\n        super();\r\n        this.products = []\r\n        this.productsByCategory = {}\r\n    }\r\n\r\n    notify(product){\r\n        this.products.push(product)\r\n        super.notify(this)\r\n    }\r\n\r\n    FetchProducts(){\r\n        fetch(\"http://localhost:3000/productos\")\r\n        .then(res => res.json())\r\n        .then(productos => {\r\n            productos.forEach(producto => {\r\n                // console.log(producto)\r\n                this.notify(producto)\r\n                this.DistributedCategory(producto)\r\n            });\r\n        })\r\n        .catch(error => console.log(error))\r\n    }\r\n\r\n    DistributedCategory(producto){\r\n        const category = producto.category;\r\n        if (!this.productsByCategory.hasOwnProperty(category)) {\r\n            this.productsByCategory[category] = []; // Asigna un array vacío como valor para la nueva categoría\r\n            this.productsByCategory[category].push(producto) // agrega el producto con el que estamos verificando la categoria\r\n        } else {\r\n            this.productsByCategory[category].push(producto) // agrega los productos en las categorias existentes\r\n        }\r\n\r\n        // Manera simplificada de realizar lo mismo:\r\n        // this.productsByCategory[category] = this.productsByCategory[category] || [];\r\n        // this.productsByCategory[category].push(producto);\r\n    }\r\n\r\n    RandomProductsByCategory(){\r\n        \r\n    }\r\n\r\n    getAllProducts(){\r\n        return this.products\r\n    }\r\n\r\n    getProduct(id) {\r\n        const allProducts = this.getAllProducts();\r\n        const foundProduct = allProducts.find(product => {\r\n            product.id === id\r\n            console.log(product.id)\r\n        });\r\n        console.log(foundProduct)\r\n\r\n      }\r\n\r\n}\r\n\r\nclass ProductsObserver{\r\n    notify(subject){\r\n        // console.log(subject)\r\n    }\r\n}\r\n\r\nconst productsObserver = new ProductsObserver()\r\nconst products = new Products();\r\nproducts.suscribe(productsObserver)\r\n\r\nproducts.FetchProducts()\r\n// console.log(products.productsByCategory)\r\nconsole.log(products.getAllProducts())\r\nconsole.log(products.getProduct(\"e0ea324b-356a-4423-a619-09338941354b\"))\n\n//# sourceURL=webpack://challenge-alurageek/./src/controllers/products-manage.js?");

/***/ })

}]);