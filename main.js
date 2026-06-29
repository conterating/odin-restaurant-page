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

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  const contactHeader = document.createElement(\"h1\");\n  contactHeader.textContent = \"You wanna contact us?\";\n\n  const contactEmail = document.createElement(\"p\");\n  contactEmail.textContent = \"thebestmacandcheese@email.email\";\n\n  const contactPhone = document.createElement(\"p\");\n  contactPhone.textContent = \"MAC-AND-CHEESE\";\n\n  contentDiv.append(contactHeader, contactEmail, contactPhone);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const homeHeader = document.createElement(\"h1\");\n  homeHeader.textContent = \"The Duble Taunt\";\n\n  const homeText = document.createElement(\"p\");\n  homeText.textContent =\n    \"This is the best restaurant in the whole world it makes the best mac and cheese you'll ever have. Come try it, you'll never be able to have a different mac and cheese again.\";\n\n  const homeImage = document.createElement(\"img\");\n  homeImage.src =\n    \"https://www.allrecipes.com/thmb/e8uotDI18ieXNBY0KpmtGKbxMRM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_008-4x3-6ed91ba87a1344558aacc0f9ef0f4b41.jpg\";\n  homeImage.style.width = \"300px\";\n  homeImage.style.height = \"300px\";\n\n  const contentDiv = document.querySelector(\"#content\");\n  contentDiv.append(homeHeader, homeText, homeImage);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst contentDiv = document.querySelector(\"#content\");\nconst buttons = document.querySelectorAll(\"button\");\nconsole.log(buttons);\n\nbuttons.forEach((element) => {\n  element.addEventListener(\"click\", (event) => {\n    contentDiv.innerHTML = \"\";\n\n    if (event.target.textContent == \"Home\") {\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if (event.target.textContent == \"Menu\") {\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (event.target.textContent == \"Contact\") {\n      (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n  });\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const menuDiv = document.createElement(\"div\");\n  const contentDiv = document.querySelector(\"#content\");\n\n  const menuHeader = document.createElement(\"h1\");\n  menuHeader.textContent = \"We only serve mac and cheese :)\";\n\n  const menuText = document.createElement(\"p\");\n  menuText.textContent =\n    \"The only other option we have is...buffalo mac and cheese\";\n\n  const menuText2 = document.createElement(\"p\");\n  menuText2.textContent =\n    \"Would you like some mac and cheese to wash your main course down with?\";\n\n  menuDiv.append(menuHeader, menuText, menuText2);\n  contentDiv.append(menuDiv);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?\n}");

/***/ }

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			(Object.getOwnPropertyDescriptor(x, "name") || {}).writable || Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
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