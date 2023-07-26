/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/commonjs-browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"NIL\", ({\n  enumerable: true,\n  get: function get() {\n    return _nil.default;\n  }\n}));\nObject.defineProperty(exports, \"parse\", ({\n  enumerable: true,\n  get: function get() {\n    return _parse.default;\n  }\n}));\nObject.defineProperty(exports, \"stringify\", ({\n  enumerable: true,\n  get: function get() {\n    return _stringify.default;\n  }\n}));\nObject.defineProperty(exports, \"v1\", ({\n  enumerable: true,\n  get: function get() {\n    return _v.default;\n  }\n}));\nObject.defineProperty(exports, \"v3\", ({\n  enumerable: true,\n  get: function get() {\n    return _v2.default;\n  }\n}));\nObject.defineProperty(exports, \"v4\", ({\n  enumerable: true,\n  get: function get() {\n    return _v3.default;\n  }\n}));\nObject.defineProperty(exports, \"v5\", ({\n  enumerable: true,\n  get: function get() {\n    return _v4.default;\n  }\n}));\nObject.defineProperty(exports, \"validate\", ({\n  enumerable: true,\n  get: function get() {\n    return _validate.default;\n  }\n}));\nObject.defineProperty(exports, \"version\", ({\n  enumerable: true,\n  get: function get() {\n    return _version.default;\n  }\n}));\n\nvar _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/commonjs-browser/v1.js\"));\n\nvar _v2 = _interopRequireDefault(__webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/commonjs-browser/v3.js\"));\n\nvar _v3 = _interopRequireDefault(__webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/commonjs-browser/v4.js\"));\n\nvar _v4 = _interopRequireDefault(__webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/commonjs-browser/v5.js\"));\n\nvar _nil = _interopRequireDefault(__webpack_require__(/*! ./nil.js */ \"./node_modules/uuid/dist/commonjs-browser/nil.js\"));\n\nvar _version = _interopRequireDefault(__webpack_require__(/*! ./version.js */ \"./node_modules/uuid/dist/commonjs-browser/version.js\"));\n\nvar _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/commonjs-browser/validate.js\"));\n\nvar _stringify = _interopRequireDefault(__webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/commonjs-browser/stringify.js\"));\n\nvar _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/commonjs-browser/parse.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/md5.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/md5.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n/*\n * Browser-compatible JavaScript MD5\n *\n * Modification of JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\nfunction md5(bytes) {\n  if (typeof bytes === 'string') {\n    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Uint8Array(msg.length);\n\n    for (let i = 0; i < msg.length; ++i) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));\n}\n/*\n * Convert an array of little-endian words to an array of bytes\n */\n\n\nfunction md5ToHexEncodedArray(input) {\n  const output = [];\n  const length32 = input.length * 32;\n  const hexTab = '0123456789abcdef';\n\n  for (let i = 0; i < length32; i += 8) {\n    const x = input[i >> 5] >>> i % 32 & 0xff;\n    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);\n    output.push(hex);\n  }\n\n  return output;\n}\n/**\n * Calculate output length with padding and bit length\n */\n\n\nfunction getOutputLength(inputLength8) {\n  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;\n}\n/*\n * Calculate the MD5 of an array of little-endian words, and a bit length.\n */\n\n\nfunction wordsToMd5(x, len) {\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[getOutputLength(len) - 1] = len;\n  let a = 1732584193;\n  let b = -271733879;\n  let c = -1732584194;\n  let d = 271733878;\n\n  for (let i = 0; i < x.length; i += 16) {\n    const olda = a;\n    const oldb = b;\n    const oldc = c;\n    const oldd = d;\n    a = md5ff(a, b, c, d, x[i], 7, -680876936);\n    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5gg(b, c, d, a, x[i], 20, -373897302);\n    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5hh(d, a, b, c, x[i], 11, -358537222);\n    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n    a = md5ii(a, b, c, d, x[i], 6, -198630844);\n    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n    a = safeAdd(a, olda);\n    b = safeAdd(b, oldb);\n    c = safeAdd(c, oldc);\n    d = safeAdd(d, oldd);\n  }\n\n  return [a, b, c, d];\n}\n/*\n * Convert an array bytes to an array of little-endian words\n * Characters >255 have their high-byte silently ignored.\n */\n\n\nfunction bytesToWords(input) {\n  if (input.length === 0) {\n    return [];\n  }\n\n  const length8 = input.length * 8;\n  const output = new Uint32Array(getOutputLength(length8));\n\n  for (let i = 0; i < length8; i += 8) {\n    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;\n  }\n\n  return output;\n}\n/*\n * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n * to work around bugs in some JS interpreters.\n */\n\n\nfunction safeAdd(x, y) {\n  const lsw = (x & 0xffff) + (y & 0xffff);\n  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xffff;\n}\n/*\n * Bitwise rotate a 32-bit number to the left.\n */\n\n\nfunction bitRotateLeft(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n/*\n * These functions implement the four basic operations the algorithm uses.\n */\n\n\nfunction md5cmn(q, a, b, x, s, t) {\n  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n}\n\nfunction md5ff(a, b, c, d, x, s, t) {\n  return md5cmn(b & c | ~b & d, a, b, x, s, t);\n}\n\nfunction md5gg(a, b, c, d, x, s, t) {\n  return md5cmn(b & d | c & ~d, a, b, x, s, t);\n}\n\nfunction md5hh(a, b, c, d, x, s, t) {\n  return md5cmn(b ^ c ^ d, a, b, x, s, t);\n}\n\nfunction md5ii(a, b, c, d, x, s, t) {\n  return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\nvar _default = md5;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/native.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/native.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\nvar _default = {\n  randomUUID\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/nil.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/nil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _default = '00000000-0000-0000-0000-000000000000';\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/nil.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/parse.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/parse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/commonjs-browser/validate.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction parse(uuid) {\n  if (!(0, _validate.default)(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  let v;\n  const arr = new Uint8Array(16); // Parse ########-....-....-....-............\n\n  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;\n  arr[1] = v >>> 16 & 0xff;\n  arr[2] = v >>> 8 & 0xff;\n  arr[3] = v & 0xff; // Parse ........-####-....-....-............\n\n  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;\n  arr[5] = v & 0xff; // Parse ........-....-####-....-............\n\n  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;\n  arr[7] = v & 0xff; // Parse ........-....-....-####-............\n\n  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;\n  arr[9] = v & 0xff; // Parse ........-....-....-....-############\n  // (Use \"/\" to avoid 32-bit truncation when bit-shifting high-order bytes)\n\n  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;\n  arr[11] = v / 0x100000000 & 0xff;\n  arr[12] = v >>> 24 & 0xff;\n  arr[13] = v >>> 16 & 0xff;\n  arr[14] = v >>> 8 & 0xff;\n  arr[15] = v & 0xff;\n  return arr;\n}\n\nvar _default = parse;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/parse.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/regex.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/regex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/rng.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/rng.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = rng;\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\n\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/sha1.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/sha1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n// Adapted from Chris Veness' SHA1 code at\n// http://www.movable-type.co.uk/scripts/sha1.html\nfunction f(s, x, y, z) {\n  switch (s) {\n    case 0:\n      return x & y ^ ~x & z;\n\n    case 1:\n      return x ^ y ^ z;\n\n    case 2:\n      return x & y ^ x & z ^ y & z;\n\n    case 3:\n      return x ^ y ^ z;\n  }\n}\n\nfunction ROTL(x, n) {\n  return x << n | x >>> 32 - n;\n}\n\nfunction sha1(bytes) {\n  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];\n  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];\n\n  if (typeof bytes === 'string') {\n    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = [];\n\n    for (let i = 0; i < msg.length; ++i) {\n      bytes.push(msg.charCodeAt(i));\n    }\n  } else if (!Array.isArray(bytes)) {\n    // Convert Array-like to Array\n    bytes = Array.prototype.slice.call(bytes);\n  }\n\n  bytes.push(0x80);\n  const l = bytes.length / 4 + 2;\n  const N = Math.ceil(l / 16);\n  const M = new Array(N);\n\n  for (let i = 0; i < N; ++i) {\n    const arr = new Uint32Array(16);\n\n    for (let j = 0; j < 16; ++j) {\n      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];\n    }\n\n    M[i] = arr;\n  }\n\n  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);\n  M[N - 1][14] = Math.floor(M[N - 1][14]);\n  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;\n\n  for (let i = 0; i < N; ++i) {\n    const W = new Uint32Array(80);\n\n    for (let t = 0; t < 16; ++t) {\n      W[t] = M[i][t];\n    }\n\n    for (let t = 16; t < 80; ++t) {\n      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);\n    }\n\n    let a = H[0];\n    let b = H[1];\n    let c = H[2];\n    let d = H[3];\n    let e = H[4];\n\n    for (let t = 0; t < 80; ++t) {\n      const s = Math.floor(t / 20);\n      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;\n      e = d;\n      d = c;\n      c = ROTL(b, 30) >>> 0;\n      b = a;\n      a = T;\n    }\n\n    H[0] = H[0] + a >>> 0;\n    H[1] = H[1] + b >>> 0;\n    H[2] = H[2] + c >>> 0;\n    H[3] = H[3] + d >>> 0;\n    H[4] = H[4] + e >>> 0;\n  }\n\n  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];\n}\n\nvar _default = sha1;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/stringify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nexports.unsafeStringify = unsafeStringify;\n\nvar _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/commonjs-browser/validate.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0, _validate.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\nvar _default = stringify;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/commonjs-browser/rng.js\"));\n\nvar _stringify = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/commonjs-browser/stringify.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\nlet _nodeId;\n\nlet _clockseq; // Previous uuid creation time\n\n\nlet _lastMSecs = 0;\nlet _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  let i = buf && offset || 0;\n  const b = buf || new Array(16);\n  options = options || {};\n  let node = options.node || _nodeId;\n  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    const seedBytes = options.random || (options.rng || _rng.default)();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (let n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || (0, _stringify.unsafeStringify)(b);\n}\n\nvar _default = v1;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v3.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/commonjs-browser/v35.js\"));\n\nvar _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/commonjs-browser/md5.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst v3 = (0, _v.default)('v3', 0x30, _md.default);\nvar _default = v3;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v35.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v35.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.URL = exports.DNS = void 0;\nexports[\"default\"] = v35;\n\nvar _stringify = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/commonjs-browser/stringify.js\");\n\nvar _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/commonjs-browser/parse.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  const bytes = [];\n\n  for (let i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nconst DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nexports.DNS = DNS;\nconst URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\nexports.URL = URL;\n\nfunction v35(name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    var _namespace;\n\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = (0, _parse.default)(namespace);\n    }\n\n    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {\n      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');\n    } // Compute hash of namespace and value, Per 4.3\n    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =\n    // hashfunc([...namespace, ... value])`\n\n\n    let bytes = new Uint8Array(16 + value.length);\n    bytes.set(namespace);\n    bytes.set(value, namespace.length);\n    bytes = hashfunc(bytes);\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (let i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return (0, _stringify.unsafeStringify)(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n}\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v4.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _native = _interopRequireDefault(__webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/commonjs-browser/native.js\"));\n\nvar _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/commonjs-browser/rng.js\"));\n\nvar _stringify = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/commonjs-browser/stringify.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction v4(options, buf, offset) {\n  if (_native.default.randomUUID && !buf && !options) {\n    return _native.default.randomUUID();\n  }\n\n  options = options || {};\n\n  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0, _stringify.unsafeStringify)(rnds);\n}\n\nvar _default = v4;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v5.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/commonjs-browser/v35.js\"));\n\nvar _sha = _interopRequireDefault(__webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/commonjs-browser/sha1.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst v5 = (0, _v.default)('v5', 0x50, _sha.default);\nvar _default = v5;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/v5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _regex = _interopRequireDefault(__webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/commonjs-browser/regex.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex.default.test(uuid);\n}\n\nvar _default = validate;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/version.js":
/*!************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/version.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/commonjs-browser/validate.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction version(uuid) {\n  if (!(0, _validate.default)(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.slice(14, 15), 16);\n}\n\nvar _default = version;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://alurageek/./node_modules/uuid/dist/commonjs-browser/version.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/router.js */ \"./src/router/router.js\");\n\r\n\r\nconst App = () => {\r\n    (0,_router_router_js__WEBPACK_IMPORTED_MODULE_0__.router)(window.location.hash);\r\n    window.addEventListener(\"hashchange\", () => {\r\n        (0,_router_router_js__WEBPACK_IMPORTED_MODULE_0__.router)(window.location.hash);\r\n    });\r\n};\n\n//# sourceURL=webpack://alurageek/./src/app.js?");

/***/ }),

/***/ "./src/helpers/fetch/fetch.delete.js":
/*!*******************************************!*\
  !*** ./src/helpers/fetch/fetch.delete.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchDelete: () => (/* binding */ fetchDelete)\n/* harmony export */ });\nasync function fetchDelete(url){\r\n    try {\r\n        const res = await fetch(url, {\r\n            method: \"DELETE\"\r\n        })\r\n        console.log(res)\r\n        if(!res.ok){\r\n            return res\r\n        } else {\r\n            return res\r\n        }\r\n    } catch (error) {\r\n        console.log(error)\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://alurageek/./src/helpers/fetch/fetch.delete.js?");

/***/ }),

/***/ "./src/helpers/fetch/fetch.get.js":
/*!****************************************!*\
  !*** ./src/helpers/fetch/fetch.get.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchGet: () => (/* binding */ fetchGet)\n/* harmony export */ });\nasync function fetchGet(url) {\r\n    try {\r\n        const response = await fetch(url);\r\n        const data = await response.json();\r\n        return data\r\n        // productObserver.notify(data); // Notificar a los observadores una vez que se obtengan los productos\r\n    } catch (error) {\r\n        console.error('Error fetching products:', error);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alurageek/./src/helpers/fetch/fetch.get.js?");

/***/ }),

/***/ "./src/helpers/fetch/fetch.post.js":
/*!*****************************************!*\
  !*** ./src/helpers/fetch/fetch.post.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPost: () => (/* binding */ fetchPost)\n/* harmony export */ });\nasync function fetchPost(url, bodyContent){\r\n    return new Promise(async (resolve, reject) => {\r\n        const res = await fetch((url), {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(bodyContent),\r\n        })\r\n        console.log(res)\r\n        if(!res.ok){\r\n            reject()\r\n        } else {\r\n            resolve()\r\n            return\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://alurageek/./src/helpers/fetch/fetch.post.js?");

/***/ }),

/***/ "./src/helpers/fetch/fetch.put.js":
/*!****************************************!*\
  !*** ./src/helpers/fetch/fetch.put.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPut: () => (/* binding */ fetchPut)\n/* harmony export */ });\nasync function fetchPut(url, bodyContent){\r\n    return new Promise(async (resolve, reject) => {\r\n        const res = await fetch((url), {\r\n            method: \"PUT\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(bodyContent),\r\n        })\r\n        console.log(res)\r\n        if(!res.ok){\r\n            reject()\r\n        } else {\r\n            resolve()\r\n            return\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://alurageek/./src/helpers/fetch/fetch.put.js?");

/***/ }),

/***/ "./src/helpers/subject.js":
/*!********************************!*\
  !*** ./src/helpers/subject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Subject: () => (/* binding */ Subject)\n/* harmony export */ });\nclass Subject{\r\n\r\n    constructor(){\r\n        this.observers = []\r\n    }\r\n\r\n    notify(data){\r\n        this.observers.forEach(observer => {\r\n            if(typeof observer === \"function\"){\r\n                observer(data)\r\n            } else {\r\n                observer.notify(data)\r\n            }\r\n            \r\n        });\r\n    }\r\n\r\n    subscribe(observer){\r\n        this.observers.push(observer)\r\n    }\r\n\r\n    unsubscribe(subs){\r\n        this.observers = this.observers.filter(observer => {\r\n            observer !== subs\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://alurageek/./src/helpers/subject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _observables_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observables/products.js */ \"./src/observables/products.js\");\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    _observables_products_js__WEBPACK_IMPORTED_MODULE_1__.productsSubject.fetchProducts()\r\n    __webpack_require__.e(/*! import() */ \"src_components_init_components_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./components/init.components.js */ \"./src/components/init.components.js\", 23))\r\n    ;(0,_app_js__WEBPACK_IMPORTED_MODULE_0__.App)()\r\n})\n\n//# sourceURL=webpack://alurageek/./src/index.js?");

/***/ }),

/***/ "./src/observables/products.js":
/*!*************************************!*\
  !*** ./src/observables/products.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productsSubject: () => (/* binding */ productsSubject)\n/* harmony export */ });\n/* harmony import */ var _helpers_fetch_fetch_get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/fetch/fetch.get.js */ \"./src/helpers/fetch/fetch.get.js\");\n/* harmony import */ var _helpers_fetch_fetch_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch/fetch.post.js */ \"./src/helpers/fetch/fetch.post.js\");\n/* harmony import */ var _helpers_fetch_fetch_put_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/fetch/fetch.put.js */ \"./src/helpers/fetch/fetch.put.js\");\n/* harmony import */ var _helpers_fetch_fetch_delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/fetch/fetch.delete.js */ \"./src/helpers/fetch/fetch.delete.js\");\n/* harmony import */ var _helpers_subject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/subject.js */ \"./src/helpers/subject.js\");\n/* harmony import */ var _state_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/state.js */ \"./src/state/state.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst { v4: uuidv4 } = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/commonjs-browser/index.js\");\r\n\r\nclass ProductsSubject extends _helpers_subject_js__WEBPACK_IMPORTED_MODULE_4__.Subject{\r\n\r\n    constructor(){\r\n        super();\r\n        // this.products;\r\n        // this.productsByCategory;\r\n    };\r\n\r\n    notify(products){\r\n        // this.products = prods\r\n        // this.productsByCategory = resultProductsByCategory\r\n        this.orderByCategory(products)\r\n        super.notify(products)\r\n    }\r\n\r\n    async fetchProducts(){\r\n        const products = await (0,_helpers_fetch_fetch_get_js__WEBPACK_IMPORTED_MODULE_0__.fetchGet)('http://localhost:3000/productos')\r\n        _state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.products = products  // Actualizamos el estado global con los productos\r\n        // this.orderByCategory(products)\r\n        this.notify(products)\r\n    }\r\n\r\n    orderByCategory(products){\r\n        try {\r\n            // compruebo si products contiene tamaño, si no lo tiene es porque es un producto individual y se agrega a su categoría.\r\n            if(!products.length){\r\n                const category = products.category\r\n                _state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.productsByCategory[category].push(products)\r\n                return\r\n            }\r\n\r\n            products.forEach(product => {\r\n                const category = product.category\r\n                // verifico si \"state.productsByCategory\" contiene la categoria del producto actual\r\n                if(!_state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.productsByCategory.hasOwnProperty(category)){\r\n                    // si no tiene la categoria crea un array vacio\r\n                    _state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.productsByCategory[category] = []\r\n                    // agrega el producto actual al array de la categoria\r\n                    _state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.productsByCategory[category].push(product)\r\n                } else {\r\n                    // si la categoria ya existe, agrega el producto actual\r\n                    _state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.productsByCategory[category].push(product)\r\n                }\r\n            })\r\n            return _state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.productsByCategory\r\n        } catch (error) {\r\n            console.error(\"Error en orderByCategory:\", error)\r\n        }\r\n    }\r\n\r\n    async getProduct(currentId) {\r\n        try {\r\n            const res = await (0,_helpers_fetch_fetch_get_js__WEBPACK_IMPORTED_MODULE_0__.fetchGet)(`http://localhost:3000/productos/${currentId}`)\r\n            return res;\r\n        } catch (error) {\r\n            console.error(\"No se puede traer el producto:\", error)\r\n        }\r\n    }\r\n\r\n    async addProduct(img, name, category, price, description){\r\n\r\n        const newProduct = {\r\n            imageUrl: img,\r\n            name: name,\r\n            category: category,\r\n            price: price,\r\n            description: description,\r\n            id: uuidv4()\r\n        }\r\n\r\n        try {\r\n            const res = await (0,_helpers_fetch_fetch_post_js__WEBPACK_IMPORTED_MODULE_1__.fetchPost)(\"http://localhost:3000/productos/\", newProduct)\r\n            _state_state_js__WEBPACK_IMPORTED_MODULE_5__.state.products.push(newProduct)\r\n            this.notify(newProduct)\r\n            return \"Producto agregado correctamente.\"\r\n        } catch (error) {\r\n            return \"No se pudo agregar el nuevo producto.\"\r\n        }\r\n    }\r\n\r\n    async updateProduct(img, name, category, price, description, id){\r\n\r\n        const updateProd = {\r\n            imageUrl: img,\r\n            name: name,\r\n            category: category,\r\n            price: price,\r\n            description: description,\r\n        }\r\n\r\n        try {\r\n            const res = await (0,_helpers_fetch_fetch_put_js__WEBPACK_IMPORTED_MODULE_2__.fetchPut)(`http://localhost:3000/productos/${id}`, updateProd)\r\n            this.fetchProducts() // hago nuevamente un fetch para actualizar todos los productos\r\n            return \"Producto actualizado correctamente.\"\r\n        } catch (error) {\r\n            return \"No se pudo actualizar el producto.\"\r\n        }\r\n    }\r\n\r\n    async deleteProduct(id){\r\n        try {\r\n            const res = await (0,_helpers_fetch_fetch_delete_js__WEBPACK_IMPORTED_MODULE_3__.fetchDelete)(`http://localhost:3000/productos/${id}`)\r\n            console.log(res)\r\n            this.fetchProducts() // hago nuevamente un fetch para actualizar todos los productos\r\n            return \"Producto eliminado correctamente.\"\r\n        } catch (error) {\r\n            console.log(error)\r\n            return \"No se pudo eliminar el producto.\"\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nconst productsSubject = new ProductsSubject()\n\n//# sourceURL=webpack://alurageek/./src/observables/products.js?");

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   router: () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _views_products_main_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/products/main.view */ \"./src/views/products/main.view.js\");\n/* harmony import */ var _views_error404_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/error404.view */ \"./src/views/error404.view.js\");\n/* harmony import */ var _views_products_product_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/products/product.view */ \"./src/views/products/product.view.js\");\n/* harmony import */ var _views_products_allbycategory_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/products/allbycategory.view */ \"./src/views/products/allbycategory.view.js\");\n/* harmony import */ var _views_forms_login_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/forms/login.view */ \"./src/views/forms/login.view.js\");\n/* harmony import */ var _views_forms_register_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/forms/register.view */ \"./src/views/forms/register.view.js\");\n/* harmony import */ var _views_panel_panel_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/panel/panel.view */ \"./src/views/panel/panel.view.js\");\n/* harmony import */ var _views_panel_admin_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/panel/admin.view */ \"./src/views/panel/admin.view.js\");\n/* harmony import */ var _views_panel_manage_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/panel/manage.view */ \"./src/views/panel/manage.view.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pages = {\r\n    404: _views_error404_view__WEBPACK_IMPORTED_MODULE_1__.Error404,\r\n    \"\": _views_products_main_view__WEBPACK_IMPORTED_MODULE_0__.MainView,\r\n    \"#/\": _views_products_main_view__WEBPACK_IMPORTED_MODULE_0__.MainView,\r\n    \"#/login\": _views_forms_login_view__WEBPACK_IMPORTED_MODULE_4__.Login,\r\n    \"#/register\": _views_forms_register_view__WEBPACK_IMPORTED_MODULE_5__.Register,\r\n    \"#/panel\": _views_panel_panel_view__WEBPACK_IMPORTED_MODULE_6__.Panel,\r\n    \"#/panel/administrar\": _views_panel_admin_view__WEBPACK_IMPORTED_MODULE_7__.Admin,\r\n    \"#/panel/product?add\": _views_panel_manage_view__WEBPACK_IMPORTED_MODULE_8__.ManageProduct,\r\n    \"#/panel/product?edit=\": _views_panel_manage_view__WEBPACK_IMPORTED_MODULE_8__.ManageProduct,\r\n    \"#/id=\": _views_products_product_view__WEBPACK_IMPORTED_MODULE_2__.ViewProduct,\r\n    \"#/category=\": _views_products_allbycategory_view__WEBPACK_IMPORTED_MODULE_3__.allByCategoryView\r\n}\r\n\r\nconst router = (hash) => {\r\n    const root = document.getElementById(\"root\")\r\n    root.innerHTML = \"\"\r\n    \r\n    switch (true) {\r\n        case hash.startsWith(\"#/id=\"):\r\n            const id = hashIdValidation(hash);\r\n            const productRoute = pages[\"#/id=\"];\r\n            root.innerHTML = productRoute(id);\r\n            break;\r\n\r\n        case hash.startsWith(\"#/category=\"):\r\n            const category = categoryValidation(hash);\r\n            const categoryRoute = pages[\"#/category=\"];\r\n            root.innerHTML = categoryRoute(category);\r\n            break;\r\n\r\n        case hash.startsWith(\"#/panel/product?\"):\r\n            const isManage = productManagedValidation(hash);\r\n            let manageRoute;\r\n            if(isManage){\r\n                manageRoute = pages[\"#/panel/product?edit=\"];\r\n                root.innerHTML = manageRoute(isManage);\r\n                break\r\n            }\r\n            manageRoute = pages[\"#/panel/product?add\"];\r\n            root.innerHTML = manageRoute(isManage);\r\n            break;\r\n\r\n        default:\r\n            const route = pages[hash] || pages[404]\r\n            root.innerHTML = route()\r\n            break;\r\n    }\r\n}\r\n\r\nconst hashIdValidation = (hash) => {\r\n    const params = new URLSearchParams(hash.slice(2));\r\n    const id = params.get(\"id\");\r\n    if(id){\r\n        return id\r\n    } else {\r\n        return false\r\n    }\r\n}\r\n\r\nconst categoryValidation = (hash) => {\r\n    const params = new URLSearchParams(hash.slice(2));\r\n    const category = params.get(\"category\");\r\n    if(category){\r\n        return category\r\n    } else {\r\n        return false\r\n    }\r\n}\r\n\r\nconst productManagedValidation = (hash) => {\r\n    // Obtener la cadena de consulta (query string) eliminando lo que está antes del '?'\r\n    const queryString = hash.split('?')[1];\r\n    const params = new URLSearchParams(queryString);\r\n    const id = params.get(\"edit\");\r\n    if(id){\r\n        return id\r\n    } else {\r\n        return false\r\n    }\r\n}\n\n//# sourceURL=webpack://alurageek/./src/router/router.js?");

/***/ }),

/***/ "./src/state/state.js":
/*!****************************!*\
  !*** ./src/state/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   state: () => (/* binding */ state)\n/* harmony export */ });\nconst state = {\r\n    products: [],\r\n    productsByCategory: [],\r\n    user: []\r\n};\r\n\r\nconsole.log(\"Products State:\", state)\r\n\n\n//# sourceURL=webpack://alurageek/./src/state/state.js?");

/***/ }),

/***/ "./src/views/error404.view.js":
/*!************************************!*\
  !*** ./src/views/error404.view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Error404: () => (/* binding */ Error404)\n/* harmony export */ });\nconst Error404 = () => {\r\n    const container = `\r\n        <div style=\"display: flex; justify-content: center; padding: 100px;\">\r\n            <h1 style=\"font-size: 50px\">Error 404</h1>\r\n        </div>\r\n        <footer-component></footer-component>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/error404.view.js?");

/***/ }),

/***/ "./src/views/forms/login.view.js":
/*!***************************************!*\
  !*** ./src/views/forms/login.view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\nconst Login = () => {\r\n    const container = `\r\n        <login-form></login-form>\r\n        <footer-component></footer-component>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/forms/login.view.js?");

/***/ }),

/***/ "./src/views/forms/register.view.js":
/*!******************************************!*\
  !*** ./src/views/forms/register.view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Register: () => (/* binding */ Register)\n/* harmony export */ });\nconst Register = () => {\r\n    const container = `\r\n        <register-form></register-form>\r\n        <footer-component></footer-component>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/forms/register.view.js?");

/***/ }),

/***/ "./src/views/panel/admin.view.js":
/*!***************************************!*\
  !*** ./src/views/panel/admin.view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Admin: () => (/* binding */ Admin)\n/* harmony export */ });\nconst Admin = () => {\r\n    const container = `\r\n        <nav-panel></nav-panel>\r\n        <admin-products></admin-products>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/panel/admin.view.js?");

/***/ }),

/***/ "./src/views/panel/manage.view.js":
/*!****************************************!*\
  !*** ./src/views/panel/manage.view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ManageProduct: () => (/* binding */ ManageProduct)\n/* harmony export */ });\nconst ManageProduct = (isManage) => {\r\n    const container = `\r\n        <nav-panel></nav-panel>\r\n        <manage-products toEdit=\"${isManage}\"></manage-products>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/panel/manage.view.js?");

/***/ }),

/***/ "./src/views/panel/panel.view.js":
/*!***************************************!*\
  !*** ./src/views/panel/panel.view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Panel: () => (/* binding */ Panel)\n/* harmony export */ });\nconst Panel = () => {\r\n    const container = `\r\n        <nav-panel></nav-panel>\r\n        <perfil-panel><perfil-panel>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/panel/panel.view.js?");

/***/ }),

/***/ "./src/views/products/allbycategory.view.js":
/*!**************************************************!*\
  !*** ./src/views/products/allbycategory.view.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allByCategoryView: () => (/* binding */ allByCategoryView)\n/* harmony export */ });\nconst allByCategoryView = (category) => {\r\n    const container = `\r\n        <products-by-category category=\"${category}\"></products-by-category>\r\n        <footer-component></footer-component>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/products/allbycategory.view.js?");

/***/ }),

/***/ "./src/views/products/main.view.js":
/*!*****************************************!*\
  !*** ./src/views/products/main.view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainView: () => (/* binding */ MainView)\n/* harmony export */ });\nconst MainView = () => {\r\n    const container = `\r\n        <header-component></header-component>\r\n        <main-view></main-view>\r\n        <footer-component></footer-component>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/products/main.view.js?");

/***/ }),

/***/ "./src/views/products/product.view.js":
/*!********************************************!*\
  !*** ./src/views/products/product.view.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ViewProduct: () => (/* binding */ ViewProduct)\n/* harmony export */ });\nconst ViewProduct = (id) => {\r\n    const container = `\r\n        <view-product product-id=\"${id}\"></view-product>\r\n        <random-products product-id=\"${id}\"></random-products>\r\n        <footer-component></footer-component>\r\n    `\r\n    return container\r\n}\n\n//# sourceURL=webpack://alurageek/./src/views/products/product.view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "alurageek:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkalurageek"] = self["webpackChunkalurageek"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;