(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/array/from */ \"./node_modules/core-js-pure/stable/array/from.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ \"./node_modules/core-js-pure/stable/instance/concat.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/entries */ \"./node_modules/core-js-pure/stable/instance/entries.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/filter */ \"./node_modules/core-js-pure/stable/instance/filter.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/for-each */ \"./node_modules/core-js-pure/stable/instance/for-each.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/includes */ \"./node_modules/core-js-pure/stable/instance/includes.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/index-of */ \"./node_modules/core-js-pure/stable/instance/index-of.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/keys */ \"./node_modules/core-js-pure/stable/instance/keys.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/map */ \"./node_modules/core-js-pure/stable/instance/map.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/slice */ \"./node_modules/core-js-pure/stable/instance/slice.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/starts-with */ \"./node_modules/core-js-pure/stable/instance/starts-with.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/trim */ \"./node_modules/core-js-pure/stable/instance/trim.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ \"./node_modules/core-js-pure/stable/json/stringify.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/assign */ \"./node_modules/core-js-pure/stable/object/assign.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/create */ \"./node_modules/core-js-pure/stable/object/create.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-properties */ \"./node_modules/core-js-pure/stable/object/define-properties.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-property */ \"./node_modules/core-js-pure/stable/object/define-property.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/entries */ \"./node_modules/core-js-pure/stable/object/entries.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/from-entries */ \"./node_modules/core-js-pure/stable/object/from-entries.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-descriptor */ \"./node_modules/core-js-pure/stable/object/get-own-property-descriptor.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-descriptors */ \"./node_modules/core-js-pure/stable/object/get-own-property-descriptors.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-symbols */ \"./node_modules/core-js-pure/stable/object/get-own-property-symbols.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/keys */ \"./node_modules/core-js-pure/stable/object/keys.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/parse-int */ \"./node_modules/core-js-pure/stable/parse-int.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/promise */ \"./node_modules/core-js-pure/stable/promise/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/set-interval */ \"./node_modules/core-js-pure/stable/set-interval.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/url-search-params */ \"./node_modules/core-js-pure/stable/url-search-params/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/url.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/url.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/url */ \"./node_modules/core-js-pure/stable/url/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/url.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/from */ \"./node_modules/core-js-pure/features/array/from.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/is-array */ \"./node_modules/core-js-pure/features/array/is-array.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator-method */ \"./node_modules/core-js-pure/features/get-iterator-method.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator */ \"./node_modules/core-js-pure/features/get-iterator.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/bind.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/bind.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/bind */ \"./node_modules/core-js-pure/features/instance/bind.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/instance/bind.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/for-each.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/for-each.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/for-each */ \"./node_modules/core-js-pure/features/instance/for-each.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/index-of */ \"./node_modules/core-js-pure/features/instance/index-of.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/reverse.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/reverse.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/reverse */ \"./node_modules/core-js-pure/features/instance/reverse.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/instance/reverse.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/slice */ \"./node_modules/core-js-pure/features/instance/slice.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/create */ \"./node_modules/core-js-pure/features/object/create.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"./node_modules/core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/get-own-property-descriptor */ \"./node_modules/core-js-pure/features/object/get-own-property-descriptor.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/get-own-property-symbols */ \"./node_modules/core-js-pure/features/object/get-own-property-symbols.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/get-prototype-of */ \"./node_modules/core-js-pure/features/object/get-prototype-of.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/keys */ \"./node_modules/core-js-pure/features/object/keys.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/set-prototype-of */ \"./node_modules/core-js-pure/features/object/set-prototype-of.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/promise */ \"./node_modules/core-js-pure/features/promise/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/reflect/get.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/reflect/get.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/reflect/get */ \"./node_modules/core-js-pure/features/reflect/get.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/reflect/get.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol */ \"./node_modules/core-js-pure/features/symbol/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol/iterator */ \"./node_modules/core-js-pure/features/symbol/iterator.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/symbol/to-primitive.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/symbol/to-primitive.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol/to-primitive */ \"./node_modules/core-js-pure/features/symbol/to-primitive.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/symbol/to-primitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\nmodule.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Array$isArray = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js\");\nfunction _arrayWithHoles(arr) {\n  if (_Array$isArray(arr)) return arr;\n}\nmodule.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\nmodule.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Promise = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ \"./node_modules/@babel/runtime-corejs3/core-js/promise.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    _Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new _Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\nmodule.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\nmodule.exports = _classCallCheck, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\nvar toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime-corejs3/helpers/toPropertyKey.js\");\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    _Object$defineProperty(target, toPropertyKey(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  _Object$defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\nmodule.exports = _createClass, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\nvar toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime-corejs3/helpers/toPropertyKey.js\");\nfunction _defineProperty(obj, key, value) {\n  key = toPropertyKey(key);\n  if (key in obj) {\n    _Object$defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/get.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/get.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Reflect$get = __webpack_require__(/*! @babel/runtime-corejs3/core-js/reflect/get */ \"./node_modules/@babel/runtime-corejs3/core-js/reflect/get.js\");\nvar _bindInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/bind */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/bind.js\");\nvar _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js\");\nvar superPropBase = __webpack_require__(/*! ./superPropBase.js */ \"./node_modules/@babel/runtime-corejs3/helpers/superPropBase.js\");\nfunction _get() {\n  if (typeof Reflect !== \"undefined\" && _Reflect$get) {\n    var _context;\n    module.exports = _get = _bindInstanceProperty(_context = _Reflect$get).call(_context), module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  } else {\n    module.exports = _get = function _get(target, property, receiver) {\n      var base = superPropBase(target, property);\n      if (!base) return;\n      var desc = _Object$getOwnPropertyDescriptor(base, property);\n      if (desc.get) {\n        return desc.get.call(arguments.length < 3 ? target : receiver);\n      }\n      return desc.value;\n    }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  }\n  return _get.apply(this, arguments);\n}\nmodule.exports = _get, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/get.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$setPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js\");\nvar _bindInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/bind */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/bind.js\");\nvar _Object$getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js\");\nfunction _getPrototypeOf(o) {\n  var _context;\n  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf(o) {\n    return o.__proto__ || _Object$getPrototypeOf(o);\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _getPrototypeOf(o);\n}\nmodule.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$create = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/create */ \"./node_modules/@babel/runtime-corejs3/core-js/object/create.js\");\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime-corejs3/helpers/setPrototypeOf.js\");\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = _Object$create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  _Object$defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\nmodule.exports = _inherits, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\nvar _getIteratorMethod = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js\");\nfunction _iterableToArrayLimit(arr, i) {\n  var _i = null == arr ? null : \"undefined\" != typeof _Symbol && _getIteratorMethod(arr) || arr[\"@@iterator\"];\n  if (null != _i) {\n    var _s,\n      _e,\n      _x,\n      _r,\n      _arr = [],\n      _n = !0,\n      _d = !1;\n    try {\n      if (_x = (_i = _i.call(arr)).next, 0 === i) {\n        if (Object(_i) !== _i) return;\n        _n = !1;\n      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);\n    } catch (err) {\n      _d = !0, _e = err;\n    } finally {\n      try {\n        if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return;\n      } finally {\n        if (_d) throw _e;\n      }\n    }\n    return _arr;\n  }\n}\nmodule.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nmodule.exports = _nonIterableRest, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js\");\nvar _indexOfInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js\");\nvar objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ \"./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js\");\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n  if (_Object$getOwnPropertySymbols) {\n    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n  return target;\n}\nmodule.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js/object/keys.js\");\nvar _indexOfInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js\");\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = _Object$keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\nmodule.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime-corejs3/helpers/typeof.js\")[\"default\"];\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js\");\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return assertThisInitialized(self);\n}\nmodule.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/regeneratorRuntime.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/regeneratorRuntime.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime-corejs3/helpers/typeof.js\")[\"default\"];\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\nvar _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\nvar _Object$create = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/create */ \"./node_modules/@babel/runtime-corejs3/core-js/object/create.js\");\nvar _Object$getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js\");\nvar _forEachInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/for-each.js\");\nvar _Object$setPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js\");\nvar _Promise = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ \"./node_modules/@babel/runtime-corejs3/core-js/promise.js\");\nvar _reverseInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/reverse */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/reverse.js\");\nvar _sliceInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = _Object$defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof _Symbol ? _Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return _Object$defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = _Object$create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = _Object$getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    var _context;\n    _forEachInstanceProperty(_context = [\"next\", \"throw\", \"return\"]).call(_context, function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return doneResult();\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var methodName = context.method,\n      method = delegate.iterator[methodName];\n    if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel;\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    return {\n      next: doneResult\n    };\n  }\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = _Object$create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = _Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) keys.push(key);\n    return _reverseInstanceProperty(keys).call(keys), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      var _context2;\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, _forEachInstanceProperty(_context2 = this.tryEntries).call(_context2, resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$setPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js\");\nvar _bindInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/bind */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/bind.js\");\nfunction _setPrototypeOf(o, p) {\n  var _context;\n  module.exports = _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _setPrototypeOf(o, p);\n}\nmodule.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js\");\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js\");\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js\");\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js\");\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\nmodule.exports = _slicedToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/superPropBase.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/superPropBase.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ \"./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js\");\nfunction _superPropBase(object, property) {\n  while (!Object.prototype.hasOwnProperty.call(object, property)) {\n    object = getPrototypeOf(object);\n    if (object === null) break;\n  }\n  return object;\n}\nmodule.exports = _superPropBase, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/superPropBase.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/toPrimitive.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/toPrimitive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol$toPrimitive = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol/to-primitive */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol/to-primitive.js\");\nvar _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime-corejs3/helpers/typeof.js\")[\"default\"];\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[_Symbol$toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\nmodule.exports = _toPrimitive, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/toPropertyKey.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/toPropertyKey.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime-corejs3/helpers/typeof.js\")[\"default\"];\nvar toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime-corejs3/helpers/toPrimitive.js\");\nfunction _toPropertyKey(arg) {\n  var key = toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nmodule.exports = _toPropertyKey, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\nvar _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol/iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof _Symbol && \"symbol\" == typeof _Symbol$iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _sliceInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\nvar _Array$from = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\nvar arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js\");\nfunction _unsupportedIterableToArray(o, minLen) {\n  var _context;\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return _Array$from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\nmodule.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime-corejs3/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/array/from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/array/from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/array/from */ \"./node_modules/core-js-pure/stable/array/from.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/array/is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/array/is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/array/is-array */ \"./node_modules/core-js-pure/stable/array/is-array.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/get-iterator-method.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/get-iterator-method.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../stable/get-iterator-method */ \"./node_modules/core-js-pure/stable/get-iterator-method.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/get-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/get-iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../stable/get-iterator */ \"./node_modules/core-js-pure/stable/get-iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/instance/bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/instance/bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/instance/bind */ \"./node_modules/core-js-pure/stable/instance/bind.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/instance/bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/instance/for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/instance/for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/instance/for-each */ \"./node_modules/core-js-pure/stable/instance/for-each.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/instance/index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/instance/index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/instance/index-of */ \"./node_modules/core-js-pure/stable/instance/index-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/instance/reverse.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/instance/reverse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/instance/reverse */ \"./node_modules/core-js-pure/stable/instance/reverse.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/instance/reverse.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/instance/slice.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/instance/slice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/instance/slice */ \"./node_modules/core-js-pure/stable/instance/slice.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/object/create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/object/create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/create */ \"./node_modules/core-js-pure/stable/object/create.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/object/define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/define-property */ \"./node_modules/core-js-pure/stable/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/object/get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/object/get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/get-own-property-descriptor */ \"./node_modules/core-js-pure/stable/object/get-own-property-descriptor.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/object/get-own-property-symbols.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/object/get-own-property-symbols.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/get-own-property-symbols */ \"./node_modules/core-js-pure/stable/object/get-own-property-symbols.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/object/get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/object/get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/get-prototype-of */ \"./node_modules/core-js-pure/stable/object/get-prototype-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/object/keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/object/keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/keys */ \"./node_modules/core-js-pure/stable/object/keys.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/object/set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/object/set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/object/set-prototype-of */ \"./node_modules/core-js-pure/stable/object/set-prototype-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/promise/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/promise/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/promise */ \"./node_modules/core-js-pure/stable/promise/index.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/promise/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/reflect/get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/reflect/get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/reflect/get */ \"./node_modules/core-js-pure/stable/reflect/get.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/reflect/get.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/symbol/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/symbol/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/symbol */ \"./node_modules/core-js-pure/stable/symbol/index.js\");\n\n__webpack_require__(/*! ../../modules/esnext.symbol.dispose */ \"./node_modules/core-js-pure/modules/esnext.symbol.dispose.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/symbol/iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/symbol/iterator */ \"./node_modules/core-js-pure/stable/symbol/iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/actual/symbol/to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/actual/symbol/to-primitive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../stable/symbol/to-primitive */ \"./node_modules/core-js-pure/stable/symbol/to-primitive.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/actual/symbol/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/from.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/from.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es.array.from */ \"./node_modules/core-js-pure/modules/es.array.from.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.from;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/is-array.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/is-array.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.is-array */ \"./node_modules/core-js-pure/modules/es.array.is-array.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.isArray;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.concat */ \"./node_modules/core-js-pure/modules/es.array.concat.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').concat;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/entries.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/entries.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').entries;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.filter */ \"./node_modules/core-js-pure/modules/es.array.filter.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').filter;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/filter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.for-each */ \"./node_modules/core-js-pure/modules/es.array.for-each.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.includes */ \"./node_modules/core-js-pure/modules/es.array.includes.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').includes;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.index-of */ \"./node_modules/core-js-pure/modules/es.array.index-of.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').indexOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').keys;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.map */ \"./node_modules/core-js-pure/modules/es.array.map.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').map;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/reverse.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/reverse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.reverse */ \"./node_modules/core-js-pure/modules/es.array.reverse.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').reverse;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/reverse.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.slice */ \"./node_modules/core-js-pure/modules/es.array.slice.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').slice;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/function/virtual/bind.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/es/function/virtual/bind.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.function.bind */ \"./node_modules/core-js-pure/modules/es.function.bind.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Function').bind;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/function/virtual/bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/get-iterator-method.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/get-iterator-method.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nmodule.exports = getIteratorMethod;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/get-iterator.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/get-iterator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\n\nmodule.exports = getIterator;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/bind.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/bind.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../function/virtual/bind */ \"./node_modules/core-js-pure/es/function/virtual/bind.js\");\n\nvar FunctionPrototype = Function.prototype;\n\nmodule.exports = function (it) {\n  var own = it.bind;\n  return it === FunctionPrototype || (isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/concat */ \"./node_modules/core-js-pure/es/array/virtual/concat.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.concat;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/filter */ \"./node_modules/core-js-pure/es/array/virtual/filter.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.filter;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/filter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar arrayMethod = __webpack_require__(/*! ../array/virtual/includes */ \"./node_modules/core-js-pure/es/array/virtual/includes.js\");\nvar stringMethod = __webpack_require__(/*! ../string/virtual/includes */ \"./node_modules/core-js-pure/es/string/virtual/includes.js\");\n\nvar ArrayPrototype = Array.prototype;\nvar StringPrototype = String.prototype;\n\nmodule.exports = function (it) {\n  var own = it.includes;\n  if (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.includes)) return arrayMethod;\n  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.includes)) {\n    return stringMethod;\n  } return own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/index-of */ \"./node_modules/core-js-pure/es/array/virtual/index-of.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.indexOf;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/map */ \"./node_modules/core-js-pure/es/array/virtual/map.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.map;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/reverse */ \"./node_modules/core-js-pure/es/array/virtual/reverse.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.reverse;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reverse) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/reverse.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/slice */ \"./node_modules/core-js-pure/es/array/virtual/slice.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.slice;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/starts-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/starts-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../string/virtual/starts-with */ \"./node_modules/core-js-pure/es/string/virtual/starts-with.js\");\n\nvar StringPrototype = String.prototype;\n\nmodule.exports = function (it) {\n  var own = it.startsWith;\n  return typeof it == 'string' || it === StringPrototype\n    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.startsWith) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../string/virtual/trim */ \"./node_modules/core-js-pure/es/string/virtual/trim.js\");\n\nvar StringPrototype = String.prototype;\n\nmodule.exports = function (it) {\n  var own = it.trim;\n  return typeof it == 'string' || it === StringPrototype\n    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trim) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/trim.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/json/stringify.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/json/stringify.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.json.stringify */ \"./node_modules/core-js-pure/modules/es.json.stringify.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar apply = __webpack_require__(/*! ../../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\n\n// eslint-disable-next-line es/no-json -- safe\nif (!path.JSON) path.JSON = { stringify: JSON.stringify };\n\n// eslint-disable-next-line no-unused-vars -- required for `.length`\nmodule.exports = function stringify(it, replacer, space) {\n  return apply(path.JSON.stringify, null, arguments);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/assign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/assign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.assign */ \"./node_modules/core-js-pure/modules/es.object.assign.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/create.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/create.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.create */ \"./node_modules/core-js-pure/modules/es.object.create.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nmodule.exports = function create(P, D) {\n  return Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/define-properties.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-properties.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-properties */ \"./node_modules/core-js-pure/modules/es.object.define-properties.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperties = module.exports = function defineProperties(T, D) {\n  return Object.defineProperties(T, D);\n};\n\nif (Object.defineProperties.sham) defineProperties.sham = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/define-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"./node_modules/core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/entries.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/entries.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.entries */ \"./node_modules/core-js-pure/modules/es.object.entries.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.entries;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/from-entries.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/from-entries.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../../modules/es.object.from-entries */ \"./node_modules/core-js-pure/modules/es.object.from-entries.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.fromEntries;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/get-own-property-descriptor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/get-own-property-descriptor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptor */ \"./node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {\n  return Object.getOwnPropertyDescriptor(it, key);\n};\n\nif (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/get-own-property-descriptors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/get-own-property-descriptors.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptors */ \"./node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.getOwnPropertyDescriptors;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/get-own-property-symbols.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/get-own-property-symbols.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.symbol */ \"./node_modules/core-js-pure/modules/es.symbol.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/get-prototype-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/get-prototype-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.get-prototype-of */ \"./node_modules/core-js-pure/modules/es.object.get-prototype-of.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/keys.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/keys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.keys */ \"./node_modules/core-js-pure/modules/es.object.keys.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.keys;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/set-prototype-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/set-prototype-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.set-prototype-of */ \"./node_modules/core-js-pure/modules/es.object.set-prototype-of.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/parse-int.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js-pure/es/parse-int.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es.parse-int */ \"./node_modules/core-js-pure/modules/es.parse-int.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.parseInt;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/promise/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/promise/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.aggregate-error */ \"./node_modules/core-js-pure/modules/es.aggregate-error.js\");\n__webpack_require__(/*! ../../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.promise */ \"./node_modules/core-js-pure/modules/es.promise.js\");\n__webpack_require__(/*! ../../modules/es.promise.all-settled */ \"./node_modules/core-js-pure/modules/es.promise.all-settled.js\");\n__webpack_require__(/*! ../../modules/es.promise.any */ \"./node_modules/core-js-pure/modules/es.promise.any.js\");\n__webpack_require__(/*! ../../modules/es.promise.finally */ \"./node_modules/core-js-pure/modules/es.promise.finally.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Promise;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/promise/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/reflect/get.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/reflect/get.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.reflect.get */ \"./node_modules/core-js-pure/modules/es.reflect.get.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Reflect.get;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/reflect/get.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/string/virtual/includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.string.includes */ \"./node_modules/core-js-pure/modules/es.string.includes.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('String').includes;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/string/virtual/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/string/virtual/starts-with.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/starts-with.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.string.starts-with */ \"./node_modules/core-js-pure/modules/es.string.starts-with.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('String').startsWith;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/string/virtual/starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/string/virtual/trim.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/trim.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.string.trim */ \"./node_modules/core-js-pure/modules/es.string.trim.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('String').trim;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/string/virtual/trim.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/symbol/index.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/symbol/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.concat */ \"./node_modules/core-js-pure/modules/es.array.concat.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.symbol */ \"./node_modules/core-js-pure/modules/es.symbol.js\");\n__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ \"./node_modules/core-js-pure/modules/es.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.description */ \"./node_modules/core-js-pure/modules/es.symbol.description.js\");\n__webpack_require__(/*! ../../modules/es.symbol.has-instance */ \"./node_modules/core-js-pure/modules/es.symbol.has-instance.js\");\n__webpack_require__(/*! ../../modules/es.symbol.is-concat-spreadable */ \"./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js\");\n__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"./node_modules/core-js-pure/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match */ \"./node_modules/core-js-pure/modules/es.symbol.match.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match-all */ \"./node_modules/core-js-pure/modules/es.symbol.match-all.js\");\n__webpack_require__(/*! ../../modules/es.symbol.replace */ \"./node_modules/core-js-pure/modules/es.symbol.replace.js\");\n__webpack_require__(/*! ../../modules/es.symbol.search */ \"./node_modules/core-js-pure/modules/es.symbol.search.js\");\n__webpack_require__(/*! ../../modules/es.symbol.species */ \"./node_modules/core-js-pure/modules/es.symbol.species.js\");\n__webpack_require__(/*! ../../modules/es.symbol.split */ \"./node_modules/core-js-pure/modules/es.symbol.split.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-primitive */ \"./node_modules/core-js-pure/modules/es.symbol.to-primitive.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-string-tag */ \"./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.symbol.unscopables */ \"./node_modules/core-js-pure/modules/es.symbol.unscopables.js\");\n__webpack_require__(/*! ../../modules/es.json.to-string-tag */ \"./node_modules/core-js-pure/modules/es.json.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.math.to-string-tag */ \"./node_modules/core-js-pure/modules/es.math.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.reflect.to-string-tag */ \"./node_modules/core-js-pure/modules/es.reflect.to-string-tag.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/symbol/iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/symbol/iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"./node_modules/core-js-pure/modules/es.symbol.iterator.js\");\nvar WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\n\nmodule.exports = WrappedWellKnownSymbolModule.f('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/symbol/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/symbol/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.date.to-primitive */ \"./node_modules/core-js-pure/modules/es.date.to-primitive.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-primitive */ \"./node_modules/core-js-pure/modules/es.symbol.to-primitive.js\");\nvar WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\n\nmodule.exports = WrappedWellKnownSymbolModule.f('toPrimitive');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/symbol/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/features/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/array/from */ \"./node_modules/core-js-pure/full/array/from.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/array/is-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/array/is-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/array/is-array */ \"./node_modules/core-js-pure/full/array/is-array.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/get-iterator-method.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/features/get-iterator-method.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../full/get-iterator-method */ \"./node_modules/core-js-pure/full/get-iterator-method.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/features/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../full/get-iterator */ \"./node_modules/core-js-pure/full/get-iterator.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/bind.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/bind.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/instance/bind */ \"./node_modules/core-js-pure/full/instance/bind.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/instance/bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/instance/for-each */ \"./node_modules/core-js-pure/full/instance/for-each.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/instance/index-of */ \"./node_modules/core-js-pure/full/instance/index-of.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/instance/reverse */ \"./node_modules/core-js-pure/full/instance/reverse.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/instance/reverse.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/instance/slice */ \"./node_modules/core-js-pure/full/instance/slice.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/create */ \"./node_modules/core-js-pure/full/object/create.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/define-property */ \"./node_modules/core-js-pure/full/object/define-property.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/get-own-property-descriptor */ \"./node_modules/core-js-pure/full/object/get-own-property-descriptor.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/get-own-property-symbols.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/get-own-property-symbols.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/get-own-property-symbols */ \"./node_modules/core-js-pure/full/object/get-own-property-symbols.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/get-prototype-of */ \"./node_modules/core-js-pure/full/object/get-prototype-of.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/keys */ \"./node_modules/core-js-pure/full/object/keys.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/object/set-prototype-of */ \"./node_modules/core-js-pure/full/object/set-prototype-of.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/promise/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/features/promise/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/promise */ \"./node_modules/core-js-pure/full/promise/index.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/promise/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/reflect/get.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/reflect/get.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/reflect/get */ \"./node_modules/core-js-pure/full/reflect/get.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/reflect/get.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/symbol/index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/features/symbol/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/symbol */ \"./node_modules/core-js-pure/full/symbol/index.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/features/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/symbol/iterator */ \"./node_modules/core-js-pure/full/symbol/iterator.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/symbol/to-primitive.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/features/symbol/to-primitive.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../full/symbol/to-primitive */ \"./node_modules/core-js-pure/full/symbol/to-primitive.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/symbol/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/array/from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/full/array/from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/array/from */ \"./node_modules/core-js-pure/actual/array/from.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/array/is-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/full/array/is-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/array/is-array */ \"./node_modules/core-js-pure/actual/array/is-array.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/full/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../actual/get-iterator-method */ \"./node_modules/core-js-pure/actual/get-iterator-method.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/full/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../actual/get-iterator */ \"./node_modules/core-js-pure/actual/get-iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/instance/bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/full/instance/bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/instance/bind */ \"./node_modules/core-js-pure/actual/instance/bind.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/instance/bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/instance/for-each.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/full/instance/for-each.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/instance/for-each */ \"./node_modules/core-js-pure/actual/instance/for-each.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/instance/index-of.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/full/instance/index-of.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/instance/index-of */ \"./node_modules/core-js-pure/actual/instance/index-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/instance/reverse.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/full/instance/reverse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/instance/reverse */ \"./node_modules/core-js-pure/actual/instance/reverse.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/instance/reverse.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/instance/slice.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/full/instance/slice.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/instance/slice */ \"./node_modules/core-js-pure/actual/instance/slice.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/object/create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/full/object/create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/create */ \"./node_modules/core-js-pure/actual/object/create.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/object/define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/full/object/define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/define-property */ \"./node_modules/core-js-pure/actual/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/object/get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/full/object/get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/get-own-property-descriptor */ \"./node_modules/core-js-pure/actual/object/get-own-property-descriptor.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/object/get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/full/object/get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/get-own-property-symbols */ \"./node_modules/core-js-pure/actual/object/get-own-property-symbols.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/object/get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/full/object/get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/get-prototype-of */ \"./node_modules/core-js-pure/actual/object/get-prototype-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/object/keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/full/object/keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/keys */ \"./node_modules/core-js-pure/actual/object/keys.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/object/set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/full/object/set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/object/set-prototype-of */ \"./node_modules/core-js-pure/actual/object/set-prototype-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/promise/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/full/promise/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/promise */ \"./node_modules/core-js-pure/actual/promise/index.js\");\n__webpack_require__(/*! ../../modules/esnext.aggregate-error */ \"./node_modules/core-js-pure/modules/esnext.aggregate-error.js\");\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../../modules/esnext.promise.all-settled */ \"./node_modules/core-js-pure/modules/esnext.promise.all-settled.js\");\n__webpack_require__(/*! ../../modules/esnext.promise.try */ \"./node_modules/core-js-pure/modules/esnext.promise.try.js\");\n__webpack_require__(/*! ../../modules/esnext.promise.any */ \"./node_modules/core-js-pure/modules/esnext.promise.any.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/promise/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/reflect/get.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/full/reflect/get.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/reflect/get */ \"./node_modules/core-js-pure/actual/reflect/get.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/reflect/get.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/symbol/index.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/full/symbol/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/symbol */ \"./node_modules/core-js-pure/actual/symbol/index.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.async-dispose */ \"./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.matcher */ \"./node_modules/core-js-pure/modules/esnext.symbol.matcher.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.metadata-key */ \"./node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.observable */ \"./node_modules/core-js-pure/modules/esnext.symbol.observable.js\");\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../../modules/esnext.symbol.metadata */ \"./node_modules/core-js-pure/modules/esnext.symbol.metadata.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.pattern-match */ \"./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.replace-all */ \"./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/symbol/iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/full/symbol/iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/symbol/iterator */ \"./node_modules/core-js-pure/actual/symbol/iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/full/symbol/to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/full/symbol/to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../actual/symbol/to-primitive */ \"./node_modules/core-js-pure/actual/symbol/to-primitive.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/full/symbol/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-callable.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-callable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw $TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js-pure/internals/is-constructor.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsConstructor(argument) is true`\nmodule.exports = function (argument) {\n  if (isConstructor(argument)) return argument;\n  throw $TypeError(tryToString(argument) + ' is not a constructor');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/a-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument) {\n  if (typeof argument == 'object' || isCallable(argument)) return argument;\n  throw $TypeError(\"Can't set \" + $String(argument) + ' as a prototype');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-instance.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (it, Prototype) {\n  if (isPrototypeOf(Prototype, it)) return it;\n  throw $TypeError('Incorrect invocation');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw $TypeError($String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js-pure/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n} : [].forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js-pure/internals/is-constructor.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nvar $Array = Array;\n\n// `Array.from` method implementation\n// https://tc39.es/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var IS_CONSTRUCTOR = isConstructor(this);\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = getIterator(O, iteratorMethod);\n    next = iterator.next;\n    result = IS_CONSTRUCTOR ? new this() : [];\n    for (;!(step = call(next, iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = lengthOfArrayLike(O);\n    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);\n    for (;length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-iteration.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = uncurryThis([].push);\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_REJECT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that);\n    var length = lengthOfArrayLike(self);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push(target, value);      // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push(target, value);      // filterReject\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterReject` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterReject: createMethod(7)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-is-strict.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-is-strict.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call -- required for testing\n    method.call(null, argument || function () { return 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-slice-simple.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-slice-simple.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\n\nvar $Array = Array;\nvar max = Math.max;\n\nmodule.exports = function (O, start, end) {\n  var length = lengthOfArrayLike(O);\n  var k = toAbsoluteIndex(start, length);\n  var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n  var result = $Array(max(fin - k, 0));\n  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);\n  result.length = n;\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-slice-simple.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-slice.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-slice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis([].slice);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-sort.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-sort.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js-pure/internals/array-slice-simple.js\");\n\nvar floor = Math.floor;\n\nvar mergeSort = function (array, comparefn) {\n  var length = array.length;\n  var middle = floor(length / 2);\n  return length < 8 ? insertionSort(array, comparefn) : merge(\n    array,\n    mergeSort(arraySlice(array, 0, middle), comparefn),\n    mergeSort(arraySlice(array, middle), comparefn),\n    comparefn\n  );\n};\n\nvar insertionSort = function (array, comparefn) {\n  var length = array.length;\n  var i = 1;\n  var element, j;\n\n  while (i < length) {\n    j = i;\n    element = array[i];\n    while (j && comparefn(array[j - 1], element) > 0) {\n      array[j] = array[--j];\n    }\n    if (j !== i++) array[j] = element;\n  } return array;\n};\n\nvar merge = function (array, left, right, comparefn) {\n  var llength = left.length;\n  var rlength = right.length;\n  var lindex = 0;\n  var rindex = 0;\n\n  while (lindex < llength || rindex < rlength) {\n    array[lindex + rindex] = (lindex < llength && rindex < rlength)\n      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]\n      : lindex < llength ? left[lindex++] : right[rindex++];\n  } return array;\n};\n\nmodule.exports = mergeSort;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-sort.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-species-constructor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-constructor.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js-pure/internals/is-constructor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar $Array = Array;\n\n// a part of `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? $Array : C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-species-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ \"./node_modules/core-js-pure/internals/array-species-constructor.js\");\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js-pure/internals/iterator-close.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  } catch (error) {\n    iteratorClose(iterator, 'throw', error);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar $Object = Object;\n\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/copy-constructor-properties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/copy-constructor-properties.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js-pure/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\nmodule.exports = function (target, source, exceptions) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {\n      defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-is-regexp-logic.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-is-regexp-logic.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (error1) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (error2) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iter-result-object.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iter-result-object.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `CreateIterResultObject` abstract operation\n// https://tc39.es/ecma262/#sec-createiterresultobject\nmodule.exports = function (value, done) {\n  return { value: value, done: done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-iter-result-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPropertyKey(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-built-in-accessor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-built-in-accessor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\nmodule.exports = function (target, name, descriptor) {\n  return defineProperty.f(target, name, descriptor);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/define-built-in-accessor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-built-in.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-built-in.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else createNonEnumerableProperty(target, key, value);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/define-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-built-ins.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-built-ins.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) {\n    if (options && options.unsafe && target[key]) target[key] = src[key];\n    else defineBuiltIn(target, key, src[key], options);\n  } return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/define-built-ins.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-global-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-global-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/define-global-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var documentAll = typeof document == 'object' && document.all;\n\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot\n// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing\nvar IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;\n\nmodule.exports = {\n  all: documentAll,\n  IS_HTMLDDA: IS_HTMLDDA\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/document-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var $TypeError = TypeError;\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991\n\nmodule.exports = function (it) {\n  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/dom-iterables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-browser.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-browser.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ \"./node_modules/core-js-pure/internals/engine-is-deno.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js-pure/internals/engine-is-node.js\");\n\nmodule.exports = !IS_DENO && !IS_NODE\n  && typeof window == 'object'\n  && typeof document == 'object';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-is-browser.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-bun.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-bun.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global Bun -- Deno case */\nmodule.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-is-bun.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-deno.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-deno.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global Deno -- Deno case */\nmodule.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-is-deno.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-ios-pebble.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-ios-pebble.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nmodule.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-is-ios-pebble.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-ios.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-ios.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nmodule.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-is-ios.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-node.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-node.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nmodule.exports = typeof process != 'undefined' && classof(process) == 'process';\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-is-node.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-webos-webkit.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-webos-webkit.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nmodule.exports = /web0s(?!.*chrome)/i.test(userAgent);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-is-webos-webkit.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/entry-virtual.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = function (CONSTRUCTOR) {\n  return path[CONSTRUCTOR + 'Prototype'];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/entry-virtual.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/error-stack-clear.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/error-stack-clear.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar $Error = Error;\nvar replace = uncurryThis(''.replace);\n\nvar TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');\nvar V8_OR_CHAKRA_STACK_ENTRY = /\\n\\s*at [^:]*:[^\\n]*/;\nvar IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);\n\nmodule.exports = function (stack, dropEntries) {\n  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {\n    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');\n  } return stack;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/error-stack-clear.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/error-stack-install.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/error-stack-install.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar clearErrorStack = __webpack_require__(/*! ../internals/error-stack-clear */ \"./node_modules/core-js-pure/internals/error-stack-clear.js\");\nvar ERROR_STACK_INSTALLABLE = __webpack_require__(/*! ../internals/error-stack-installable */ \"./node_modules/core-js-pure/internals/error-stack-installable.js\");\n\n// non-standard V8\nvar captureStackTrace = Error.captureStackTrace;\n\nmodule.exports = function (error, C, stack, dropEntries) {\n  if (ERROR_STACK_INSTALLABLE) {\n    if (captureStackTrace) captureStackTrace(error, C);\n    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/error-stack-install.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/error-stack-installable.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/error-stack-installable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = !fails(function () {\n  var error = Error('a');\n  if (!('stack' in error)) return true;\n  // eslint-disable-next-line es/no-object-defineproperty -- safe\n  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));\n  return error.stack !== 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/error-stack-installable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof Wrapper) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return apply(NativeConstructor, this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target         - name of the target object\n  options.global         - target is the global object\n  options.stat           - export as static methods of target\n  options.proto          - export as prototype methods of target\n  options.real           - real prototype method for the `pure` version\n  options.forced         - export even if the native feature is available\n  options.bind           - bind methods to the target, required for the `pure` version\n  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe         - use the simple assignment of property instead of delete + defineProperty\n  options.sham           - add a flag to not completely full polyfills\n  options.enumerable     - export as enumerable property\n  options.dontCallGetSet - prevent calling a getter on target\n  options.name           - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.dontCallGetSet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;\n\n    // bind methods to global for calling from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    createNonEnumerableProperty(target, key, resultProperty);\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);\n      // export real prototype methods\n      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-apply.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-apply.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-apply.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-native.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-native.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-function-prototype-bind -- safe\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js-pure/internals/array-slice.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar $Function = Function;\nvar concat = uncurryThis([].concat);\nvar join = uncurryThis([].join);\nvar factories = {};\n\nvar construct = function (C, argsLength, args) {\n  if (!hasOwn(factories, argsLength)) {\n    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';\n    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');\n  } return factories[argsLength](C, args);\n};\n\n// `Function.prototype.bind` method implementation\n// https://tc39.es/ecma262/#sec-function.prototype.bind\nmodule.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {\n  var F = aCallable(this);\n  var Prototype = F.prototype;\n  var partArgs = arraySlice(arguments, 1);\n  var boundFunction = function bound(/* args... */) {\n    var args = concat(partArgs, arraySlice(arguments));\n    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);\n  };\n  if (isObject(Prototype)) boundFunction.prototype = Prototype;\n  return boundFunction;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-call.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-call.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-name.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-name.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\n\nvar EXISTS = hasOwn(FunctionPrototype, 'name');\n// additional protection from minified / mangled / dropped function names\nvar PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));\n\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-name.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this-clause.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this-clause.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = function (fn) {\n  // Nashorn bug:\n  //   https://github.com/zloirock/core-js/issues/1128\n  //   https://github.com/zloirock/core-js/issues/1130\n  if (classofRaw(fn) === 'Function') return uncurryThis(fn);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-uncurry-this-clause.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar call = FunctionPrototype.call;\nvar uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {\n  return function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar aFunction = function (variable) {\n  return isCallable(variable) ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)\n    || getMethod(it, '@@iterator')\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument, usingIterator) {\n  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;\n  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));\n  throw $TypeError(tryToString(argument) + ' is not iterable');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-method.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-method.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return isNullOrUndefined(func) ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has-own-property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has-own-property.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n// eslint-disable-next-line es/no-object-hasown -- safe\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/host-report-errors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/host-report-errors.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (a, b) {\n  try {\n    // eslint-disable-next-line no-console -- safe\n    arguments.length == 1 ? console.error(a) : console.error(a, b);\n  } catch (error) { /* empty */ }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/host-report-errors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar $Object = Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !$Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split(it, '') : $Object(it);\n} : $Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/inspect-source.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString);\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/install-error-cause.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/install-error-cause.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\n// `InstallErrorCause` abstract operation\n// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause\nmodule.exports = function (O, options) {\n  if (isObject(options) && 'cause' in options) {\n    createNonEnumerableProperty(O, 'cause', options.cause);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/install-error-cause.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ \"./node_modules/core-js-pure/internals/weak-map-basic-detection.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = global.TypeError;\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  /* eslint-disable no-self-assign -- prototype methods protection */\n  store.get = store.get;\n  store.has = store.has;\n  store.set = store.set;\n  /* eslint-enable no-self-assign -- prototype methods protection */\n  set = function (it, metadata) {\n    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    store.set(it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return store.get(it) || {};\n  };\n  has = function (it) {\n    return store.has(it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(argument) {\n  return classof(argument) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-callable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-callable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $documentAll = __webpack_require__(/*! ../internals/document-all */ \"./node_modules/core-js-pure/internals/document-all.js\");\n\nvar documentAll = $documentAll.all;\n\n// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = $documentAll.IS_HTMLDDA ? function (argument) {\n  return typeof argument == 'function' || argument === documentAll;\n} : function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js-pure/internals/inspect-source.js\");\n\nvar noop = function () { /* empty */ };\nvar empty = [];\nvar construct = getBuiltIn('Reflect', 'construct');\nvar constructorRegExp = /^\\s*(?:class|function)\\b/;\nvar exec = uncurryThis(constructorRegExp.exec);\nvar INCORRECT_TO_STRING = !constructorRegExp.exec(noop);\n\nvar isConstructorModern = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  try {\n    construct(noop, empty, argument);\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nvar isConstructorLegacy = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  switch (classof(argument)) {\n    case 'AsyncFunction':\n    case 'GeneratorFunction':\n    case 'AsyncGeneratorFunction': return false;\n  }\n  try {\n    // we can't check .prototype since constructors produced by .bind haven't it\n    // `Function#toString` throws on some built-it function in some legacy engines\n    // (for example, `DOMQuad` and similar in FF41-)\n    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));\n  } catch (error) {\n    return true;\n  }\n};\n\nisConstructorLegacy.sham = true;\n\n// `IsConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-isconstructor\nmodule.exports = !construct || fails(function () {\n  var called;\n  return isConstructorModern(isConstructorModern.call)\n    || !isConstructorModern(Object)\n    || !isConstructorModern(function () { called = true; })\n    || called;\n}) ? isConstructorLegacy : isConstructorModern;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-data-descriptor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-data-descriptor.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\n\nmodule.exports = function (descriptor) {\n  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-data-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-null-or-undefined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-null-or-undefined.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// we can't use just `it == null` since of `document.all` special case\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec\nmodule.exports = function (it) {\n  return it === null || it === undefined;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-null-or-undefined.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar $documentAll = __webpack_require__(/*! ../internals/document-all */ \"./node_modules/core-js-pure/internals/document-all.js\");\n\nvar documentAll = $documentAll.all;\n\nmodule.exports = $documentAll.IS_HTMLDDA ? function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;\n} : function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.es/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-symbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar $Object = Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterate.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js-pure/internals/iterator-close.js\");\n\nvar $TypeError = TypeError;\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar ResultPrototype = Result.prototype;\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_RECORD = !!(options && options.IS_RECORD);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator, 'normal', condition);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    } return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_RECORD) {\n    iterator = iterable.iterator;\n  } else if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && isPrototypeOf(ResultPrototype, result)) return result;\n      } return new Result(false);\n    }\n    iterator = getIterator(iterable, iterFn);\n  }\n\n  next = IS_RECORD ? iterable.next : iterator.next;\n  while (!(step = call(next, iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator, 'throw', error);\n    }\n    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;\n  } return new Result(false);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-close.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-close.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\n\nmodule.exports = function (iterator, kind, value) {\n  var innerResult, innerError;\n  anObject(iterator);\n  try {\n    innerResult = getMethod(iterator, 'return');\n    if (!innerResult) {\n      if (kind === 'throw') throw value;\n      return value;\n    }\n    innerResult = call(innerResult, iterator);\n  } catch (error) {\n    innerError = true;\n    innerResult = error;\n  }\n  if (kind === 'throw') throw value;\n  if (innerError) throw innerResult;\n  anObject(innerResult);\n  return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-create-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-create-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterator-create-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-define.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-define.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js-pure/internals/function-name.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ \"./node_modules/core-js-pure/internals/iterator-create-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {\n          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {\n      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);\n    } else {\n      INCORRECT_VALUES_NAME = true;\n      defaultIterator = function values() { return call(nativeIterator, this); };\n    }\n  }\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });\n  }\n  Iterators[NAME] = defaultIterator;\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterator-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\n// `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\n/* eslint-disable es/no-array-prototype-keys -- safe */\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {\n  var test = {};\n  // FF44- legacy iterators case\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\n\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};\nelse if (IS_PURE) IteratorPrototype = create(IteratorPrototype);\n\n// `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\nif (!isCallable(IteratorPrototype[ITERATOR])) {\n  defineBuiltIn(IteratorPrototype, ITERATOR, function () {\n    return this;\n  });\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/length-of-array-like.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/length-of-array-like.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\n\n// `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/length-of-array-like.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/math-trunc.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/math-trunc.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `Math.trunc` method\n// https://tc39.es/ecma262/#sec-math.trunc\n// eslint-disable-next-line es/no-math-trunc -- safe\nmodule.exports = Math.trunc || function trunc(x) {\n  var n = +x;\n  return (n > 0 ? floor : ceil)(n);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/math-trunc.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/microtask.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/microtask.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar macrotask = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js-pure/internals/task.js\").set;\nvar Queue = __webpack_require__(/*! ../internals/queue */ \"./node_modules/core-js-pure/internals/queue.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js-pure/internals/engine-is-ios.js\");\nvar IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/engine-is-ios-pebble */ \"./node_modules/core-js-pure/internals/engine-is-ios-pebble.js\");\nvar IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ \"./node_modules/core-js-pure/internals/engine-is-webos-webkit.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js-pure/internals/engine-is-node.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar document = global.document;\nvar process = global.process;\nvar Promise = global.Promise;\n// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\nvar notify, toggle, node, promise, then;\n\n// modern engines have queueMicrotask method\nif (!microtask) {\n  var queue = new Queue();\n\n  var flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n    while (fn = queue.get()) try {\n      fn();\n    } catch (error) {\n      if (queue.head) notify();\n      throw error;\n    }\n    if (parent) parent.enter();\n  };\n\n  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898\n  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, { characterData: true });\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    // workaround of WebKit ~ iOS Safari 10.1 bug\n    promise.constructor = Promise;\n    then = bind(promise.then, promise);\n    notify = function () {\n      then(flush);\n    };\n  // Node.js without promises\n  } else if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessage\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    // `webpack` dev server bug on IE global methods - use bind(fn, global)\n    macrotask = bind(macrotask, global);\n    notify = function () {\n      macrotask(flush);\n    };\n  }\n\n  microtask = function (fn) {\n    if (!queue.head) notify();\n    queue.add(fn);\n  };\n}\n\nmodule.exports = microtask;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/microtask.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/new-promise-capability.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/new-promise-capability.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\n\nvar $TypeError = TypeError;\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aCallable(resolve);\n  this.reject = aCallable(reject);\n};\n\n// `NewPromiseCapability` abstract operation\n// https://tc39.es/ecma262/#sec-newpromisecapability\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/normalize-string-argument.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/normalize-string-argument.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\n\nmodule.exports = function (argument, $default) {\n  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/normalize-string-argument.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/not-a-regexp.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/not-a-regexp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js-pure/internals/is-regexp.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw $TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/number-parse-int.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/number-parse-int.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar trim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js-pure/internals/string-trim.js\").trim;\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js-pure/internals/whitespaces.js\");\n\nvar $parseInt = global.parseInt;\nvar Symbol = global.Symbol;\nvar ITERATOR = Symbol && Symbol.iterator;\nvar hex = /^[+-]?0x/i;\nvar exec = uncurryThis(hex.exec);\nvar FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22\n  // MS Edge 18- broken with boxed symbols\n  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));\n\n// `parseInt` method\n// https://tc39.es/ecma262/#sec-parseint-string-radix\nmodule.exports = FORCED ? function parseInt(string, radix) {\n  var S = trim(toString(string));\n  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/number-parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-assign.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\n// eslint-disable-next-line es/no-object-assign -- safe\nvar $assign = Object.assign;\n// eslint-disable-next-line es/no-object-defineproperty -- required for testing\nvar defineProperty = Object.defineProperty;\nvar concat = uncurryThis([].concat);\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\nmodule.exports = !$assign || fails(function () {\n  // should have correct order of operations (Edge bug)\n  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {\n    enumerable: true,\n    get: function () {\n      defineProperty(this, 'b', {\n        value: 3,\n        enumerable: false\n      });\n    }\n  }), { b: 2 })).b !== 1) return true;\n  // should work with symbols and should have deterministic property order (V8 bug)\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line es/no-symbol -- safe\n  var symbol = Symbol();\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* global ActiveXObject -- old IE, WSH */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    activeXDocument = new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = typeof document != 'undefined'\n    ? document.domain && activeXDocument\n      ? NullProtoObjectViaActiveX(activeXDocument) // old IE\n      : NullProtoObjectViaIFrame()\n    : NullProtoObjectViaActiveX(activeXDocument); // WSH\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\n// eslint-disable-next-line es/no-object-create -- safe\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js-pure/internals/v8-prototype-define-bug.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\nexports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var props = toIndexedObject(Properties);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js-pure/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-names-external.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-names-external.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-object-getownpropertynames -- safe */\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar $getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js-pure/internals/object-get-own-property-names.js\").f;\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js-pure/internals/array-slice-simple.js\");\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return $getOwnPropertyNames(it);\n  } catch (error) {\n    return arraySlice(windowNames);\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && classof(it) == 'Window'\n    ? getWindowNames(it)\n    : $getOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-names.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-names.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar $Object = Object;\nvar ObjectPrototype = $Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n// eslint-disable-next-line es/no-object-getprototypeof -- safe\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {\n  var object = toObject(O);\n  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];\n  var constructor = object.constructor;\n  if (isCallable(constructor) && object instanceof constructor) {\n    return constructor.prototype;\n  } return object instanceof $Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-is-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-is-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es/no-object-keys -- safe\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-proto -- safe */\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);\n    setter(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar $propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\").f;\n\nvar propertyIsEnumerable = uncurryThis($propertyIsEnumerable);\nvar push = uncurryThis([].push);\n\n// `Object.{ entries, values }` methods implementation\nvar createMethod = function (TO_ENTRIES) {\n  return function (it) {\n    var O = toIndexedObject(it);\n    var keys = objectKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {\n        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\nmodule.exports = {\n  // `Object.entries` method\n  // https://tc39.es/ecma262/#sec-object.entries\n  entries: createMethod(true),\n  // `Object.values` method\n  // https://tc39.es/ecma262/#sec-object.values\n  values: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ordinary-to-primitive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar $TypeError = TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw $TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/own-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/own-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js-pure/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\nvar concat = uncurryThis([].concat);\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/perform.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/perform.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { error: false, value: exec() };\n  } catch (error) {\n    return { error: true, value: error };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/perform.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/promise-constructor-detection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/promise-constructor-detection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js-pure/internals/promise-native-constructor.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js-pure/internals/inspect-source.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ \"./node_modules/core-js-pure/internals/engine-is-browser.js\");\nvar IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ \"./node_modules/core-js-pure/internals/engine-is-deno.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;\nvar SPECIES = wellKnownSymbol('species');\nvar SUBCLASSING = false;\nvar NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);\n\nvar FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {\n  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);\n  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);\n  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n  // We can't detect it synchronously, so just check versions\n  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;\n  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution\n  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;\n  // We can't use @@species feature detection in V8 since it causes\n  // deoptimization and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {\n    // Detect correctness of subclassing with @@species support\n    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });\n    var FakePromise = function (exec) {\n      exec(function () { /* empty */ }, function () { /* empty */ });\n    };\n    var constructor = promise.constructor = {};\n    constructor[SPECIES] = FakePromise;\n    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;\n    if (!SUBCLASSING) return true;\n  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;\n});\n\nmodule.exports = {\n  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,\n  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,\n  SUBCLASSING: SUBCLASSING\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/promise-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/promise-native-constructor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/promise-native-constructor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/promise-native-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/promise-resolve.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/promise-resolve.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js":
/*!************************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js-pure/internals/promise-native-constructor.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js-pure/internals/promise-constructor-detection.js\").CONSTRUCTOR;\n\nmodule.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {\n  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/queue.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/queue.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Queue = function () {\n  this.head = null;\n  this.tail = null;\n};\n\nQueue.prototype = {\n  add: function (item) {\n    var entry = { item: item, next: null };\n    var tail = this.tail;\n    if (tail) tail.next = entry;\n    else this.head = entry;\n    this.tail = entry;\n  },\n  get: function () {\n    var entry = this.head;\n    if (entry) {\n      var next = this.head = entry.next;\n      if (next === null) this.tail = null;\n      return entry.item;\n    }\n  }\n};\n\nmodule.exports = Queue;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/queue.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\nvar $TypeError = TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (isNullOrUndefined(it)) throw $TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/schedulers-fix.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/schedulers-fix.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar ENGINE_IS_BUN = __webpack_require__(/*! ../internals/engine-is-bun */ \"./node_modules/core-js-pure/internals/engine-is-bun.js\");\nvar USER_AGENT = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js-pure/internals/array-slice.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\n\nvar Function = global.Function;\n// dirty IE9- and Bun 0.3.0- checks\nvar WRAP = /MSIE .\\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {\n  var version = global.Bun.version.split('.');\n  return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);\n})();\n\n// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers\n// https://github.com/oven-sh/bun/issues/1633\nmodule.exports = function (scheduler, hasTimeArg) {\n  var firstParamIndex = hasTimeArg ? 2 : 1;\n  return WRAP ? function (handler, timeout /* , ...arguments */) {\n    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;\n    var fn = isCallable(handler) ? handler : Function(handler);\n    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];\n    var callback = boundArgs ? function () {\n      apply(fn, this, params);\n    } : fn;\n    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);\n  } : scheduler;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/schedulers-fix.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-species.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-species.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n    if (!hasOwn(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js-pure/internals/define-global-property.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || defineGlobalProperty(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.27.2',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar aConstructor = __webpack_require__(/*! ../internals/a-constructor */ \"./node_modules/core-js-pure/internals/a-constructor.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js-pure/internals/to-integer-or-infinity.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar stringSlice = uncurryThis(''.slice);\n\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = toString(requireObjectCoercible($this));\n    var position = toIntegerOrInfinity(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = charCodeAt(S, position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING\n          ? charAt(S, position)\n          : first\n        : CONVERT_TO_STRING\n          ? stringSlice(S, position, position + 2)\n          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-punycode-to-ascii.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-punycode-to-ascii.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1\nvar base = 36;\nvar tMin = 1;\nvar tMax = 26;\nvar skew = 38;\nvar damp = 700;\nvar initialBias = 72;\nvar initialN = 128; // 0x80\nvar delimiter = '-'; // '\\x2D'\nvar regexNonASCII = /[^\\0-\\u007E]/; // non-ASCII chars\nvar regexSeparators = /[.\\u3002\\uFF0E\\uFF61]/g; // RFC 3490 separators\nvar OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';\nvar baseMinusTMin = base - tMin;\n\nvar $RangeError = RangeError;\nvar exec = uncurryThis(regexSeparators.exec);\nvar floor = Math.floor;\nvar fromCharCode = String.fromCharCode;\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar join = uncurryThis([].join);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar split = uncurryThis(''.split);\nvar toLowerCase = uncurryThis(''.toLowerCase);\n\n/**\n * Creates an array containing the numeric code points of each Unicode\n * character in the string. While JavaScript uses UCS-2 internally,\n * this function will convert a pair of surrogate halves (each of which\n * UCS-2 exposes as separate characters) into a single code point,\n * matching UTF-16.\n */\nvar ucs2decode = function (string) {\n  var output = [];\n  var counter = 0;\n  var length = string.length;\n  while (counter < length) {\n    var value = charCodeAt(string, counter++);\n    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {\n      // It's a high surrogate, and there is a next character.\n      var extra = charCodeAt(string, counter++);\n      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.\n        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);\n      } else {\n        // It's an unmatched surrogate; only append this code unit, in case the\n        // next code unit is the high surrogate of a surrogate pair.\n        push(output, value);\n        counter--;\n      }\n    } else {\n      push(output, value);\n    }\n  }\n  return output;\n};\n\n/**\n * Converts a digit/integer into a basic code point.\n */\nvar digitToBasic = function (digit) {\n  //  0..25 map to ASCII a..z or A..Z\n  // 26..35 map to ASCII 0..9\n  return digit + 22 + 75 * (digit < 26);\n};\n\n/**\n * Bias adaptation function as per section 3.4 of RFC 3492.\n * https://tools.ietf.org/html/rfc3492#section-3.4\n */\nvar adapt = function (delta, numPoints, firstTime) {\n  var k = 0;\n  delta = firstTime ? floor(delta / damp) : delta >> 1;\n  delta += floor(delta / numPoints);\n  while (delta > baseMinusTMin * tMax >> 1) {\n    delta = floor(delta / baseMinusTMin);\n    k += base;\n  }\n  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));\n};\n\n/**\n * Converts a string of Unicode symbols (e.g. a domain name label) to a\n * Punycode string of ASCII-only symbols.\n */\nvar encode = function (input) {\n  var output = [];\n\n  // Convert the input in UCS-2 to an array of Unicode code points.\n  input = ucs2decode(input);\n\n  // Cache the length.\n  var inputLength = input.length;\n\n  // Initialize the state.\n  var n = initialN;\n  var delta = 0;\n  var bias = initialBias;\n  var i, currentValue;\n\n  // Handle the basic code points.\n  for (i = 0; i < input.length; i++) {\n    currentValue = input[i];\n    if (currentValue < 0x80) {\n      push(output, fromCharCode(currentValue));\n    }\n  }\n\n  var basicLength = output.length; // number of basic code points.\n  var handledCPCount = basicLength; // number of code points that have been handled;\n\n  // Finish the basic string with a delimiter unless it's empty.\n  if (basicLength) {\n    push(output, delimiter);\n  }\n\n  // Main encoding loop:\n  while (handledCPCount < inputLength) {\n    // All non-basic code points < n have been handled already. Find the next larger one:\n    var m = maxInt;\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue >= n && currentValue < m) {\n        m = currentValue;\n      }\n    }\n\n    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.\n    var handledCPCountPlusOne = handledCPCount + 1;\n    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {\n      throw $RangeError(OVERFLOW_ERROR);\n    }\n\n    delta += (m - n) * handledCPCountPlusOne;\n    n = m;\n\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue < n && ++delta > maxInt) {\n        throw $RangeError(OVERFLOW_ERROR);\n      }\n      if (currentValue == n) {\n        // Represent delta as a generalized variable-length integer.\n        var q = delta;\n        var k = base;\n        while (true) {\n          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);\n          if (q < t) break;\n          var qMinusT = q - t;\n          var baseMinusT = base - t;\n          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));\n          q = floor(qMinusT / baseMinusT);\n          k += base;\n        }\n\n        push(output, fromCharCode(digitToBasic(q)));\n        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);\n        delta = 0;\n        handledCPCount++;\n      }\n    }\n\n    delta++;\n    n++;\n  }\n  return join(output, '');\n};\n\nmodule.exports = function (input) {\n  var encoded = [];\n  var labels = split(replace(toLowerCase(input), regexSeparators, '\\u002E'), '.');\n  var i, label;\n  for (i = 0; i < labels.length; i++) {\n    label = labels[i];\n    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);\n  }\n  return join(encoded, '.');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/string-punycode-to-ascii.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-trim-forced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-trim-forced.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js-pure/internals/function-name.js\").PROPER;\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js-pure/internals/whitespaces.js\");\n\nvar non = '\\u200B\\u0085\\u180E';\n\n// check that a method works with the correct list\n// of whitespaces and has a correct name\nmodule.exports = function (METHOD_NAME) {\n  return fails(function () {\n    return !!whitespaces[METHOD_NAME]()\n      || non[METHOD_NAME]() !== non\n      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/string-trim-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-trim.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-trim.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js-pure/internals/whitespaces.js\");\n\nvar replace = uncurryThis(''.replace);\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = toString(requireObjectCoercible($this));\n    if (TYPE & 1) string = replace(string, ltrim, '');\n    if (TYPE & 2) string = replace(string, rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.es/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/symbol-constructor-detection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/symbol-constructor-detection.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/symbol-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/symbol-define-to-primitive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/symbol-define-to-primitive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\n\nmodule.exports = function () {\n  var Symbol = getBuiltIn('Symbol');\n  var SymbolPrototype = Symbol && Symbol.prototype;\n  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;\n  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {\n    // `Symbol.prototype[@@toPrimitive]` method\n    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive\n    // eslint-disable-next-line no-unused-vars -- required for .length\n    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {\n      return call(valueOf, this);\n    }, { arity: 1 });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/symbol-define-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/symbol-registry-detection.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/symbol-registry-detection.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\n\n/* eslint-disable es/no-symbol -- safe */\nmodule.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/symbol-registry-detection.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/task.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/task.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js-pure/internals/array-slice.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js-pure/internals/engine-is-ios.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js-pure/internals/engine-is-node.js\");\n\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar Dispatch = global.Dispatch;\nvar Function = global.Function;\nvar MessageChannel = global.MessageChannel;\nvar String = global.String;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar $location, defer, channel, port;\n\nfails(function () {\n  // Deno throws a ReferenceError on `location` access without `--location` flag\n  $location = global.location;\n});\n\nvar run = function (id) {\n  if (hasOwn(queue, id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar eventListener = function (event) {\n  run(event.data);\n};\n\nvar globalPostMessageDefer = function (id) {\n  // old engines have not location.origin\n  global.postMessage(String(id), $location.protocol + '//' + $location.host);\n};\n\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!set || !clear) {\n  set = function setImmediate(handler) {\n    validateArgumentsLength(arguments.length, 1);\n    var fn = isCallable(handler) ? handler : Function(handler);\n    var args = arraySlice(arguments, 1);\n    queue[++counter] = function () {\n      apply(fn, undefined, args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (IS_NODE) {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  // except iOS - https://github.com/zloirock/core-js/issues/624\n  } else if (MessageChannel && !IS_IOS) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = eventListener;\n    defer = bind(port.postMessage, port);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (\n    global.addEventListener &&\n    isCallable(global.postMessage) &&\n    !global.importScripts &&\n    $location && $location.protocol !== 'file:' &&\n    !fails(globalPostMessageDefer)\n  ) {\n    defer = globalPostMessageDefer;\n    global.addEventListener('message', eventListener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/task.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js-pure/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer-or-infinity.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer-or-infinity.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var trunc = __webpack_require__(/*! ../internals/math-trunc */ \"./node_modules/core-js-pure/internals/math-trunc.js\");\n\n// `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\nmodule.exports = function (argument) {\n  var number = +argument;\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return number !== number || number === 0 ? 0 : trunc(number);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-integer-or-infinity.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js-pure/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nvar $Object = Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return $Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js-pure/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar $TypeError = TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw $TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-property-key.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-property-key.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\nvar $String = String;\n\nmodule.exports = function (argument) {\n  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');\n  return $String(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/try-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/try-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var $String = String;\n\nmodule.exports = function (argument) {\n  try {\n    return $String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/url-constructor-detection.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/url-constructor-detection.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line unicorn/relative-url-style -- required for testing\n  var url = new URL('b?a=1&b=2&c=3', 'http://a');\n  var searchParams = url.searchParams;\n  var result = '';\n  url.pathname = 'c%20d';\n  searchParams.forEach(function (value, key) {\n    searchParams['delete']('b');\n    result += key + value;\n  });\n  return (IS_PURE && !url.toJSON)\n    || !searchParams.sort\n    || url.href !== 'http://a/c%20d?a=1&c=3'\n    || searchParams.get('c') !== '3'\n    || String(new URLSearchParams('?a=1')) !== 'a=1'\n    || !searchParams[ITERATOR]\n    // throws in Edge\n    || new URL('https://a@b').username !== 'a'\n    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'\n    // not punycoded in Edge\n    || new URL('http://тест').host !== 'xn--e1aybc'\n    // not escaped in Chrome 62-\n    || new URL('http://a#б').hash !== '#%D0%B1'\n    // fails in Chrome 66-\n    || result !== 'a1c3'\n    // throws in Safari\n    || new URL('http://x', undefined).host !== 'x';\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/url-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/v8-prototype-define-bug.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/v8-prototype-define-bug.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype != 42;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/validate-arguments-length.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/validate-arguments-length.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var $TypeError = TypeError;\n\nmodule.exports = function (passed, required) {\n  if (passed < required) throw $TypeError('Not enough arguments');\n  return passed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/validate-arguments-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/weak-map-basic-detection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/weak-map-basic-detection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/weak-map-basic-detection.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol-define.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol-define.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/well-known-symbol-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar Symbol = global.Symbol;\nvar WellKnownSymbolsStore = shared('wks');\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name)) {\n    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)\n      ? Symbol[name]\n      : createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/whitespaces.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/whitespaces.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// a string of all valid unicode whitespaces\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002' +\n  '\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.aggregate-error.constructor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.aggregate-error.constructor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js-pure/internals/copy-constructor-properties.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar installErrorCause = __webpack_require__(/*! ../internals/install-error-cause */ \"./node_modules/core-js-pure/internals/install-error-cause.js\");\nvar installErrorStack = __webpack_require__(/*! ../internals/error-stack-install */ \"./node_modules/core-js-pure/internals/error-stack-install.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ \"./node_modules/core-js-pure/internals/normalize-string-argument.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar $Error = Error;\nvar push = [].push;\n\nvar $AggregateError = function AggregateError(errors, message /* , options */) {\n  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);\n  var that;\n  if (setPrototypeOf) {\n    that = setPrototypeOf($Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);\n  } else {\n    that = isInstance ? this : create(AggregateErrorPrototype);\n    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');\n  }\n  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));\n  installErrorStack(that, $AggregateError, that.stack, 1);\n  if (arguments.length > 2) installErrorCause(that, arguments[2]);\n  var errorsArray = [];\n  iterate(errors, push, { that: errorsArray });\n  createNonEnumerableProperty(that, 'errors', errorsArray);\n  return that;\n};\n\nif (setPrototypeOf) setPrototypeOf($AggregateError, $Error);\nelse copyConstructorProperties($AggregateError, $Error, { name: true });\n\nvar AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {\n  constructor: createPropertyDescriptor(1, $AggregateError),\n  message: createPropertyDescriptor(1, ''),\n  name: createPropertyDescriptor(1, 'AggregateError')\n});\n\n// `AggregateError` constructor\n// https://tc39.es/ecma262/#sec-aggregate-error-constructor\n$({ global: true, constructor: true, arity: 2 }, {\n  AggregateError: $AggregateError\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.aggregate-error.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.aggregate-error.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.aggregate-error.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove this module from `core-js@4` since it's replaced to module below\n__webpack_require__(/*! ../modules/es.aggregate-error.constructor */ \"./node_modules/core-js-pure/modules/es.aggregate-error.constructor.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.aggregate-error.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\nvar doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ \"./node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');\n\n// `Array.prototype.concat` method\n// https://tc39.es/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  concat: function concat(arg) {\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = lengthOfArrayLike(E);\n        doesNotExceedSafeInteger(n + len);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        doesNotExceedSafeInteger(n + 1);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $filter = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").filter;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');\n\n// `Array.prototype.filter` method\n// https://tc39.es/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js-pure/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js-pure/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  // eslint-disable-next-line es/no-array-from -- required for testing\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.es/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $includes = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").includes;\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\n\n// FF99+ bug\nvar BROKEN_ON_SPARSE = fails(function () {\n  return !Array(1).includes();\n});\n\n// `Array.prototype.includes` method\n// https://tc39.es/ecma262/#sec-array.prototype.includes\n$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable es/no-array-prototype-indexof -- required for testing */\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar $indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js-pure/internals/array-method-is-strict.js\");\n\nvar nativeIndexOf = uncurryThis([].indexOf);\n\nvar NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;\nvar FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');\n\n// `Array.prototype.indexOf` method\n// https://tc39.es/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? nativeIndexOf(this, searchElement, fromIndex) || 0\n      : $indexOf(this, searchElement, fromIndex);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.is-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.is-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\n\n// `Array.isArray` method\n// https://tc39.es/ecma262/#sec-array.isarray\n$({ target: 'Array', stat: true }, {\n  isArray: isArray\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar defineIterator = __webpack_require__(/*! ../internals/iterator-define */ \"./node_modules/core-js-pure/internals/iterator-define.js\");\nvar createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ \"./node_modules/core-js-pure/internals/create-iter-result-object.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return createIterResultObject(undefined, true);\n  }\n  if (kind == 'keys') return createIterResultObject(index, false);\n  if (kind == 'values') return createIterResultObject(target[index], false);\n  return createIterResultObject([index, target[index]], false);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\nvar values = Iterators.Arguments = Iterators.Array;\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n// V8 ~ Chrome 45- bug\nif (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {\n  defineProperty(values, 'name', { value: 'values' });\n} catch (error) { /* empty */ }\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").map;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');\n\n// `Array.prototype.map` method\n// https://tc39.es/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.reverse.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.reverse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\n\nvar nativeReverse = uncurryThis([].reverse);\nvar test = [1, 2];\n\n// `Array.prototype.reverse` method\n// https://tc39.es/ecma262/#sec-array.prototype.reverse\n// fix for Safari 12.0 bug\n// https://bugs.webkit.org/show_bug.cgi?id=188794\n$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {\n  reverse: function reverse() {\n    // eslint-disable-next-line no-self-assign -- dirty hack\n    if (isArray(this)) this.length = this.length;\n    return nativeReverse(this);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.reverse.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js-pure/internals/is-constructor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar nativeSlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js-pure/internals/array-slice.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\n\nvar SPECIES = wellKnownSymbol('species');\nvar $Array = Array;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.es/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = lengthOfArrayLike(O);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === $Array || Constructor === undefined) {\n        return nativeSlice(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.date.to-primitive.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.date.to-primitive.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.function.bind.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.function.bind.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"./node_modules/core-js-pure/internals/function-bind.js\");\n\n// `Function.prototype.bind` method\n// https://tc39.es/ecma262/#sec-function.prototype.bind\n$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {\n  bind: bind\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.stringify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js-pure/internals/array-slice.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\n\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar exec = uncurryThis(/./.exec);\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar replace = uncurryThis(''.replace);\nvar numberToString = uncurryThis(1.0.toString);\n\nvar tester = /[\\uD800-\\uDFFF]/g;\nvar low = /^[\\uD800-\\uDBFF]$/;\nvar hi = /^[\\uDC00-\\uDFFF]$/;\n\nvar WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {\n  var symbol = getBuiltIn('Symbol')();\n  // MS Edge converts symbol values to JSON as {}\n  return $stringify([symbol]) != '[null]'\n    // WebKit converts symbol values to JSON as null\n    || $stringify({ a: symbol }) != '{}'\n    // V8 throws on boxed symbols\n    || $stringify(Object(symbol)) != '{}';\n});\n\n// https://github.com/tc39/proposal-well-formed-stringify\nvar ILL_FORMED_UNICODE = fails(function () {\n  return $stringify('\\uDF06\\uD834') !== '\"\\\\udf06\\\\ud834\"'\n    || $stringify('\\uDEAD') !== '\"\\\\udead\"';\n});\n\nvar stringifyWithSymbolsFix = function (it, replacer) {\n  var args = arraySlice(arguments);\n  var $replacer = replacer;\n  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n  if (!isArray(replacer)) replacer = function (key, value) {\n    if (isCallable($replacer)) value = call($replacer, this, key, value);\n    if (!isSymbol(value)) return value;\n  };\n  args[1] = replacer;\n  return apply($stringify, null, args);\n};\n\nvar fixIllFormed = function (match, offset, string) {\n  var prev = charAt(string, offset - 1);\n  var next = charAt(string, offset + 1);\n  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {\n    return '\\\\u' + numberToString(charCodeAt(match, 0), 16);\n  } return match;\n};\n\nif ($stringify) {\n  // `JSON.stringify` method\n  // https://tc39.es/ecma262/#sec-json.stringify\n  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {\n    // eslint-disable-next-line no-unused-vars -- required for `.length`\n    stringify: function stringify(it, replacer, space) {\n      var args = arraySlice(arguments);\n      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);\n      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.json.stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// JSON[@@toStringTag] property\n// https://tc39.es/ecma262/#sec-json-@@tostringtag\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.json.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.math.to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.math.to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.math.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.assign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js-pure/internals/object-assign.js\");\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\n// eslint-disable-next-line es/no-object-assign -- required for testing\n$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {\n  assign: assign\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  create: create\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.define-properties.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-properties.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\").f;\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\n$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {\n  defineProperties: defineProperties\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.define-property.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\n// eslint-disable-next-line es/no-object-defineproperty -- safe\n$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {\n  defineProperty: defineProperty\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.entries.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.entries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $entries = __webpack_require__(/*! ../internals/object-to-array */ \"./node_modules/core-js-pure/internals/object-to-array.js\").entries;\n\n// `Object.entries` method\n// https://tc39.es/ecma262/#sec-object.entries\n$({ target: 'Object', stat: true }, {\n  entries: function entries(O) {\n    return $entries(O);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.from-entries.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.from-entries.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\n\n// `Object.fromEntries` method\n// https://github.com/tc39/proposal-object-from-entries\n$({ target: 'Object', stat: true }, {\n  fromEntries: function fromEntries(iterable) {\n    var obj = {};\n    iterate(iterable, function (k, v) {\n      createProperty(obj, k, v);\n    }, { AS_ENTRIES: true });\n    return obj;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js":
/*!************************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\n$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {\n    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js-pure/internals/own-keys.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\n\n// `Object.getOwnPropertyDescriptors` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIndexedObject(object);\n    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var index = 0;\n    var key, descriptor;\n    while (keys.length > index) {\n      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);\n      if (descriptor !== undefined) createProperty(result, key, descriptor);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\n// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });\n\n// `Object.getOwnPropertySymbols` method\n// https://tc39.es/ecma262/#sec-object.getownpropertysymbols\n$({ target: 'Object', stat: true, forced: FORCED }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.get-prototype-of.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.get-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(it) {\n    return nativeGetPrototypeOf(toObject(it));\n  }\n});\n\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.set-prototype-of.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.set-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n$({ target: 'Object', stat: true }, {\n  setPrototypeOf: setPrototypeOf\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.parse-int.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.parse-int.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ \"./node_modules/core-js-pure/internals/number-parse-int.js\");\n\n// `parseInt` method\n// https://tc39.es/ecma262/#sec-parseint-string-radix\n$({ global: true, forced: parseInt != $parseInt }, {\n  parseInt: $parseInt\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.all-settled.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ \"./node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js\");\n\n// `Promise.allSettled` method\n// https://tc39.es/ecma262/#sec-promise.allsettled\n$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {\n  allSettled: function allSettled(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var promiseResolve = aCallable(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        remaining++;\n        call(promiseResolve, C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'fulfilled', value: value };\n          --remaining || resolve(values);\n        }, function (error) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'rejected', reason: error };\n          --remaining || resolve(values);\n        });\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.all-settled.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ \"./node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js\");\n\n// `Promise.all` method\n// https://tc39.es/ecma262/#sec-promise.all\n$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aCallable(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        remaining++;\n        call($promiseResolve, C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.any.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.any.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ \"./node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js\");\n\nvar PROMISE_ANY_ERROR = 'No one promise resolved';\n\n// `Promise.any` method\n// https://tc39.es/ecma262/#sec-promise.any\n$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {\n  any: function any(iterable) {\n    var C = this;\n    var AggregateError = getBuiltIn('AggregateError');\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var promiseResolve = aCallable(C.resolve);\n      var errors = [];\n      var counter = 0;\n      var remaining = 1;\n      var alreadyResolved = false;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyRejected = false;\n        remaining++;\n        call(promiseResolve, C, promise).then(function (value) {\n          if (alreadyRejected || alreadyResolved) return;\n          alreadyResolved = true;\n          resolve(value);\n        }, function (error) {\n          if (alreadyRejected || alreadyResolved) return;\n          alreadyRejected = true;\n          errors[index] = error;\n          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));\n        });\n      });\n      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.any.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.catch.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.catch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js-pure/internals/promise-constructor-detection.js\").CONSTRUCTOR;\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js-pure/internals/promise-native-constructor.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\n\nvar NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;\n\n// `Promise.prototype.catch` method\n// https://tc39.es/ecma262/#sec-promise.prototype.catch\n$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {\n  'catch': function (onRejected) {\n    return this.then(undefined, onRejected);\n  }\n});\n\n// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`\nif (!IS_PURE && isCallable(NativePromiseConstructor)) {\n  var method = getBuiltIn('Promise').prototype['catch'];\n  if (NativePromisePrototype['catch'] !== method) {\n    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.catch.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js-pure/internals/engine-is-node.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js-pure/internals/set-species.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js-pure/internals/species-constructor.js\");\nvar task = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js-pure/internals/task.js\").set;\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"./node_modules/core-js-pure/internals/microtask.js\");\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"./node_modules/core-js-pure/internals/host-report-errors.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\nvar Queue = __webpack_require__(/*! ../internals/queue */ \"./node_modules/core-js-pure/internals/queue.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js-pure/internals/promise-native-constructor.js\");\nvar PromiseConstructorDetection = __webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js-pure/internals/promise-constructor-detection.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\n\nvar PROMISE = 'Promise';\nvar FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;\nvar NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;\nvar NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar setInternalState = InternalStateModule.set;\nvar NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;\nvar PromiseConstructor = NativePromiseConstructor;\nvar PromisePrototype = NativePromisePrototype;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\n\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\n\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && isCallable(then = it.then) ? then : false;\n};\n\nvar callReaction = function (reaction, state) {\n  var value = state.value;\n  var ok = state.state == FULFILLED;\n  var handler = ok ? reaction.ok : reaction.fail;\n  var resolve = reaction.resolve;\n  var reject = reaction.reject;\n  var domain = reaction.domain;\n  var result, then, exited;\n  try {\n    if (handler) {\n      if (!ok) {\n        if (state.rejection === UNHANDLED) onHandleUnhandled(state);\n        state.rejection = HANDLED;\n      }\n      if (handler === true) result = value;\n      else {\n        if (domain) domain.enter();\n        result = handler(value); // can throw\n        if (domain) {\n          domain.exit();\n          exited = true;\n        }\n      }\n      if (result === reaction.promise) {\n        reject(TypeError('Promise-chain cycle'));\n      } else if (then = isThenable(result)) {\n        call(then, result, resolve, reject);\n      } else resolve(result);\n    } else reject(value);\n  } catch (error) {\n    if (domain && !exited) domain.exit();\n    reject(error);\n  }\n};\n\nvar notify = function (state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  microtask(function () {\n    var reactions = state.reactions;\n    var reaction;\n    while (reaction = reactions.get()) {\n      callReaction(reaction, state);\n    }\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = { promise: promise, reason: reason };\n  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);\n  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (state) {\n  call(task, global, function () {\n    var promise = state.facade;\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (state) {\n  call(task, global, function () {\n    var promise = state.facade;\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, state, unwrap) {\n  return function (value) {\n    fn(state, value, unwrap);\n  };\n};\n\nvar internalReject = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(state, true);\n};\n\nvar internalResolve = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  try {\n    if (state.facade === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n    if (then) {\n      microtask(function () {\n        var wrapper = { done: false };\n        try {\n          call(then, value,\n            bind(internalResolve, wrapper, state),\n            bind(internalReject, wrapper, state)\n          );\n        } catch (error) {\n          internalReject(wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(state, false);\n    }\n  } catch (error) {\n    internalReject({ done: false }, error, state);\n  }\n};\n\n// constructor polyfill\nif (FORCED_PROMISE_CONSTRUCTOR) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromisePrototype);\n    aCallable(executor);\n    call(Internal, this);\n    var state = getInternalPromiseState(this);\n    try {\n      executor(bind(internalResolve, state), bind(internalReject, state));\n    } catch (error) {\n      internalReject(state, error);\n    }\n  };\n\n  PromisePrototype = PromiseConstructor.prototype;\n\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: new Queue(),\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n\n  // `Promise.prototype.then` method\n  // https://tc39.es/ecma262/#sec-promise.prototype.then\n  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {\n    var state = getInternalPromiseState(this);\n    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n    state.parent = true;\n    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;\n    reaction.fail = isCallable(onRejected) && onRejected;\n    reaction.domain = IS_NODE ? process.domain : undefined;\n    if (state.state == PENDING) state.reactions.add(reaction);\n    else microtask(function () {\n      callReaction(reaction, state);\n    });\n    return reaction.promise;\n  });\n\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalPromiseState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, state);\n    this.reject = bind(internalReject, state);\n  };\n\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {\n    nativeThen = NativePromisePrototype.then;\n\n    if (!NATIVE_PROMISE_SUBCLASSING) {\n      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs\n      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {\n        var that = this;\n        return new PromiseConstructor(function (resolve, reject) {\n          call(nativeThen, that, resolve, reject);\n        }).then(onFulfilled, onRejected);\n      // https://github.com/zloirock/core-js/issues/640\n      }, { unsafe: true });\n    }\n\n    // make `.constructor === Promise` work for native promise-based APIs\n    try {\n      delete NativePromisePrototype.constructor;\n    } catch (error) { /* empty */ }\n\n    // make `instanceof Promise` work for native promise-based APIs\n    if (setPrototypeOf) {\n      setPrototypeOf(NativePromisePrototype, PromisePrototype);\n    }\n  }\n}\n\n$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {\n  Promise: PromiseConstructor\n});\n\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.finally.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.finally.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js-pure/internals/promise-native-constructor.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js-pure/internals/species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js-pure/internals/promise-resolve.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\n\nvar NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;\n\n// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829\nvar NON_GENERIC = !!NativePromiseConstructor && fails(function () {\n  // eslint-disable-next-line unicorn/no-thenable -- required for testing\n  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });\n});\n\n// `Promise.prototype.finally` method\n// https://tc39.es/ecma262/#sec-promise.prototype.finally\n$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {\n  'finally': function (onFinally) {\n    var C = speciesConstructor(this, getBuiltIn('Promise'));\n    var isFunction = isCallable(onFinally);\n    return this.then(\n      isFunction ? function (x) {\n        return promiseResolve(C, onFinally()).then(function () { return x; });\n      } : onFinally,\n      isFunction ? function (e) {\n        return promiseResolve(C, onFinally()).then(function () { throw e; });\n      } : onFinally\n    );\n  }\n});\n\n// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`\nif (!IS_PURE && isCallable(NativePromiseConstructor)) {\n  var method = getBuiltIn('Promise').prototype['finally'];\n  if (NativePromisePrototype['finally'] !== method) {\n    defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove this module from `core-js@4` since it's split to modules listed below\n__webpack_require__(/*! ../modules/es.promise.constructor */ \"./node_modules/core-js-pure/modules/es.promise.constructor.js\");\n__webpack_require__(/*! ../modules/es.promise.all */ \"./node_modules/core-js-pure/modules/es.promise.all.js\");\n__webpack_require__(/*! ../modules/es.promise.catch */ \"./node_modules/core-js-pure/modules/es.promise.catch.js\");\n__webpack_require__(/*! ../modules/es.promise.race */ \"./node_modules/core-js-pure/modules/es.promise.race.js\");\n__webpack_require__(/*! ../modules/es.promise.reject */ \"./node_modules/core-js-pure/modules/es.promise.reject.js\");\n__webpack_require__(/*! ../modules/es.promise.resolve */ \"./node_modules/core-js-pure/modules/es.promise.resolve.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.race.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.race.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ \"./node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js\");\n\n// `Promise.race` method\n// https://tc39.es/ecma262/#sec-promise.race\n$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aCallable(C.resolve);\n      iterate(iterable, function (promise) {\n        call($promiseResolve, C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.race.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.reject.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.reject.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js-pure/internals/promise-constructor-detection.js\").CONSTRUCTOR;\n\n// `Promise.reject` method\n// https://tc39.es/ecma262/#sec-promise.reject\n$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {\n  reject: function reject(r) {\n    var capability = newPromiseCapabilityModule.f(this);\n    call(capability.reject, undefined, r);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.reject.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.resolve.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.resolve.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js-pure/internals/promise-native-constructor.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js-pure/internals/promise-constructor-detection.js\").CONSTRUCTOR;\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js-pure/internals/promise-resolve.js\");\n\nvar PromiseConstructorWrapper = getBuiltIn('Promise');\nvar CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;\n\n// `Promise.resolve` method\n// https://tc39.es/ecma262/#sec-promise.resolve\n$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {\n  resolve: function resolve(x) {\n    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.promise.resolve.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.reflect.get.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.reflect.get.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar isDataDescriptor = __webpack_require__(/*! ../internals/is-data-descriptor */ \"./node_modules/core-js-pure/internals/is-data-descriptor.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\n\n// `Reflect.get` method\n// https://tc39.es/ecma262/#sec-reflect.get\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var descriptor, prototype;\n  if (anObject(target) === receiver) return target[propertyKey];\n  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);\n  if (descriptor) return isDataDescriptor(descriptor)\n    ? descriptor.value\n    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);\n  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);\n}\n\n$({ target: 'Reflect', stat: true }, {\n  get: get\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.reflect.to-string-tag.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.reflect.to-string-tag.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.reflect.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js-pure/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js-pure/internals/correct-is-regexp-logic.js\");\n\nvar stringIndexOf = uncurryThis(''.indexOf);\n\n// `String.prototype.includes` method\n// https://tc39.es/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~stringIndexOf(\n      toString(requireObjectCoercible(this)),\n      toString(notARegExp(searchString)),\n      arguments.length > 1 ? arguments[1] : undefined\n    );\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/iterator-define */ \"./node_modules/core-js-pure/internals/iterator-define.js\");\nvar createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ \"./node_modules/core-js-pure/internals/create-iter-result-object.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: toString(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return createIterResultObject(undefined, true);\n  point = charAt(string, index);\n  state.index += point.length;\n  return createIterResultObject(point, false);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.starts-with.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.starts-with.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js-pure/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js-pure/internals/correct-is-regexp-logic.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\n// eslint-disable-next-line es/no-string-prototype-startswith -- safe\nvar nativeStartsWith = uncurryThis(''.startsWith);\nvar stringSlice = uncurryThis(''.slice);\nvar min = Math.min;\n\nvar CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');\n// https://github.com/zloirock/core-js/pull/702\nvar MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {\n  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');\n  return descriptor && !descriptor.writable;\n}();\n\n// `String.prototype.startsWith` method\n// https://tc39.es/ecma262/#sec-string.prototype.startswith\n$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = toString(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = toString(searchString);\n    return nativeStartsWith\n      ? nativeStartsWith(that, search, index)\n      : stringSlice(that, index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.trim.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.trim.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $trim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js-pure/internals/string-trim.js\").trim;\nvar forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ \"./node_modules/core-js-pure/internals/string-trim-forced.js\");\n\n// `String.prototype.trim` method\n// https://tc39.es/ecma262/#sec-string.prototype.trim\n$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {\n  trim: function trim() {\n    return $trim(this);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.async-iterator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.async-iterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.asyncIterator` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.asynciterator\ndefineWellKnownSymbol('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js-pure/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js-pure/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\nvar defineSymbolToPrimitive = __webpack_require__(/*! ../internals/symbol-define-to-primitive */ \"./node_modules/core-js-pure/internals/symbol-define-to-primitive.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\n\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\n\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];\nvar TypeError = global.TypeError;\nvar QObject = global.QObject;\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar push = uncurryThis([].push);\n\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar WellKnownSymbolsStore = shared('wks');\n\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPropertyKey(P);\n  anObject(Attributes);\n  if (hasOwn(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPropertyKey(V);\n  var enumerable = call(nativePropertyIsEnumerable, this, P);\n  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]\n    ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPropertyKey(P);\n  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function (O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {\n      push(result, AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.es/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);\n      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  SymbolPrototype = $Symbol[PROTOTYPE];\n\n  defineBuiltIn(SymbolPrototype, 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  defineBuiltIn($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  definePropertiesModule.f = $defineProperties;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty(SymbolPrototype, 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n}\n\n$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.es/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.es/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.es/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames\n});\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive\ndefineSymbolToPrimitive();\n\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.description.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.description.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.for.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.for.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar NATIVE_SYMBOL_REGISTRY = __webpack_require__(/*! ../internals/symbol-registry-detection */ \"./node_modules/core-js-pure/internals/symbol-registry-detection.js\");\n\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\n\n// `Symbol.for` method\n// https://tc39.es/ecma262/#sec-symbol.for\n$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {\n  'for': function (key) {\n    var string = toString(key);\n    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = getBuiltIn('Symbol')(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.for.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.has-instance.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.has-instance.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.hasInstance` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.hasinstance\ndefineWellKnownSymbol('hasInstance');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.isConcatSpreadable` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable\ndefineWellKnownSymbol('isConcatSpreadable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove this module from `core-js@4` since it's split to modules listed below\n__webpack_require__(/*! ../modules/es.symbol.constructor */ \"./node_modules/core-js-pure/modules/es.symbol.constructor.js\");\n__webpack_require__(/*! ../modules/es.symbol.for */ \"./node_modules/core-js-pure/modules/es.symbol.for.js\");\n__webpack_require__(/*! ../modules/es.symbol.key-for */ \"./node_modules/core-js-pure/modules/es.symbol.key-for.js\");\n__webpack_require__(/*! ../modules/es.json.stringify */ \"./node_modules/core-js-pure/modules/es.json.stringify.js\");\n__webpack_require__(/*! ../modules/es.object.get-own-property-symbols */ \"./node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.key-for.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.key-for.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar NATIVE_SYMBOL_REGISTRY = __webpack_require__(/*! ../internals/symbol-registry-detection */ \"./node_modules/core-js-pure/internals/symbol-registry-detection.js\");\n\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\n\n// `Symbol.keyFor` method\n// https://tc39.es/ecma262/#sec-symbol.keyfor\n$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');\n    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.key-for.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.match-all.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.match-all.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.matchAll` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.matchall\ndefineWellKnownSymbol('matchAll');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.match.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.match.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.match` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.match\ndefineWellKnownSymbol('match');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.match.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.replace.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.replace.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.replace` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.replace\ndefineWellKnownSymbol('replace');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.replace.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.search.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.search.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.search` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.search\ndefineWellKnownSymbol('search');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.search.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.species.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.species.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.species` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.species\ndefineWellKnownSymbol('species');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.species.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.split.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.split.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.split` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.split\ndefineWellKnownSymbol('split');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.split.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.to-primitive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.to-primitive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\nvar defineSymbolToPrimitive = __webpack_require__(/*! ../internals/symbol-define-to-primitive */ \"./node_modules/core-js-pure/internals/symbol-define-to-primitive.js\");\n\n// `Symbol.toPrimitive` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.toprimitive\ndefineWellKnownSymbol('toPrimitive');\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive\ndefineSymbolToPrimitive();\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// `Symbol.toStringTag` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.tostringtag\ndefineWellKnownSymbol('toStringTag');\n\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag(getBuiltIn('Symbol'), 'Symbol');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.unscopables.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.unscopables.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.unscopables` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.unscopables\ndefineWellKnownSymbol('unscopables');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.aggregate-error.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.aggregate-error.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.aggregate-error */ \"./node_modules/core-js-pure/modules/es.aggregate-error.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.aggregate-error.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.promise.all-settled.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.promise.all-settled.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.promise.all-settled.js */ \"./node_modules/core-js-pure/modules/es.promise.all-settled.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.promise.all-settled.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.promise.any.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.promise.any.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.promise.any */ \"./node_modules/core-js-pure/modules/es.promise.any.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.promise.any.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: Remove from `core-js@4`\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\n\n// `Promise.try` method\n// https://github.com/tc39/proposal-promise-try\n$({ target: 'Promise', stat: true, forced: true }, {\n  'try': function (callbackfn) {\n    var promiseCapability = newPromiseCapabilityModule.f(this);\n    var result = perform(callbackfn);\n    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);\n    return promiseCapability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.asyncDispose` well-known symbol\n// https://github.com/tc39/proposal-async-explicit-resource-management\ndefineWellKnownSymbol('asyncDispose');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.dispose.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.dispose.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.dispose` well-known symbol\n// https://github.com/tc39/proposal-explicit-resource-management\ndefineWellKnownSymbol('dispose');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.dispose.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.matcher.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.matcher.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.matcher` well-known symbol\n// https://github.com/tc39/proposal-pattern-matching\ndefineWellKnownSymbol('matcher');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.matcher.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.metadataKey` well-known symbol\n// https://github.com/tc39/proposal-decorator-metadata\ndefineWellKnownSymbol('metadataKey');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.metadata` well-known symbol\n// https://github.com/tc39/proposal-decorators\ndefineWellKnownSymbol('metadata');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.metadata.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.observable` well-known symbol\n// https://github.com/tc39/proposal-observable\ndefineWellKnownSymbol('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: remove from `core-js@4`\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\n// `Symbol.patternMatch` well-known symbol\n// https://github.com/tc39/proposal-pattern-matching\ndefineWellKnownSymbol('patternMatch');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: remove from `core-js@4`\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ \"./node_modules/core-js-pure/internals/well-known-symbol-define.js\");\n\ndefineWellKnownSymbol('replaceAll');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js-pure/internals/dom-iterables.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {\n    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n  }\n  Iterators[COLLECTION_NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.set-interval.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.set-interval.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ \"./node_modules/core-js-pure/internals/schedulers-fix.js\");\n\nvar setInterval = schedulersFix(global.setInterval, true);\n\n// Bun / IE9- setInterval additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval\n$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {\n  setInterval: setInterval\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.set-interval.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.set-timeout.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.set-timeout.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ \"./node_modules/core-js-pure/internals/schedulers-fix.js\");\n\nvar setTimeout = schedulersFix(global.setTimeout, true);\n\n// Bun / IE9- setTimeout additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout\n$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {\n  setTimeout: setTimeout\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.set-timeout.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.timers.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.timers.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove this module from `core-js@4` since it's split to modules listed below\n__webpack_require__(/*! ../modules/web.set-interval */ \"./node_modules/core-js-pure/modules/web.set-interval.js\");\n__webpack_require__(/*! ../modules/web.set-timeout */ \"./node_modules/core-js-pure/modules/web.set-timeout.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url-search-params.constructor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url-search-params.constructor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/url-constructor-detection */ \"./node_modules/core-js-pure/internals/url-constructor-detection.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ \"./node_modules/core-js-pure/internals/define-built-ins.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ \"./node_modules/core-js-pure/internals/iterator-create-constructor.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar arraySort = __webpack_require__(/*! ../internals/array-sort */ \"./node_modules/core-js-pure/internals/array-sort.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar URL_SEARCH_PARAMS = 'URLSearchParams';\nvar URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);\nvar getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Avoid NodeJS experimental warning\nvar safeGetBuiltIn = function (name) {\n  if (!DESCRIPTORS) return global[name];\n  var descriptor = getOwnPropertyDescriptor(global, name);\n  return descriptor && descriptor.value;\n};\n\nvar nativeFetch = safeGetBuiltIn('fetch');\nvar NativeRequest = safeGetBuiltIn('Request');\nvar Headers = safeGetBuiltIn('Headers');\nvar RequestPrototype = NativeRequest && NativeRequest.prototype;\nvar HeadersPrototype = Headers && Headers.prototype;\nvar RegExp = global.RegExp;\nvar TypeError = global.TypeError;\nvar decodeURIComponent = global.decodeURIComponent;\nvar encodeURIComponent = global.encodeURIComponent;\nvar charAt = uncurryThis(''.charAt);\nvar join = uncurryThis([].join);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar shift = uncurryThis([].shift);\nvar splice = uncurryThis([].splice);\nvar split = uncurryThis(''.split);\nvar stringSlice = uncurryThis(''.slice);\n\nvar plus = /\\+/g;\nvar sequences = Array(4);\n\nvar percentSequence = function (bytes) {\n  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\\\da-f]{2}){' + bytes + '})', 'gi'));\n};\n\nvar percentDecode = function (sequence) {\n  try {\n    return decodeURIComponent(sequence);\n  } catch (error) {\n    return sequence;\n  }\n};\n\nvar deserialize = function (it) {\n  var result = replace(it, plus, ' ');\n  var bytes = 4;\n  try {\n    return decodeURIComponent(result);\n  } catch (error) {\n    while (bytes) {\n      result = replace(result, percentSequence(bytes--), percentDecode);\n    }\n    return result;\n  }\n};\n\nvar find = /[!'()~]|%20/g;\n\nvar replacements = {\n  '!': '%21',\n  \"'\": '%27',\n  '(': '%28',\n  ')': '%29',\n  '~': '%7E',\n  '%20': '+'\n};\n\nvar replacer = function (match) {\n  return replacements[match];\n};\n\nvar serialize = function (it) {\n  return replace(encodeURIComponent(it), find, replacer);\n};\n\nvar URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {\n  setInternalState(this, {\n    type: URL_SEARCH_PARAMS_ITERATOR,\n    iterator: getIterator(getInternalParamsState(params).entries),\n    kind: kind\n  });\n}, 'Iterator', function next() {\n  var state = getInternalIteratorState(this);\n  var kind = state.kind;\n  var step = state.iterator.next();\n  var entry = step.value;\n  if (!step.done) {\n    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];\n  } return step;\n}, true);\n\nvar URLSearchParamsState = function (init) {\n  this.entries = [];\n  this.url = null;\n\n  if (init !== undefined) {\n    if (isObject(init)) this.parseObject(init);\n    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));\n  }\n};\n\nURLSearchParamsState.prototype = {\n  type: URL_SEARCH_PARAMS,\n  bindURL: function (url) {\n    this.url = url;\n    this.update();\n  },\n  parseObject: function (object) {\n    var iteratorMethod = getIteratorMethod(object);\n    var iterator, next, step, entryIterator, entryNext, first, second;\n\n    if (iteratorMethod) {\n      iterator = getIterator(object, iteratorMethod);\n      next = iterator.next;\n      while (!(step = call(next, iterator)).done) {\n        entryIterator = getIterator(anObject(step.value));\n        entryNext = entryIterator.next;\n        if (\n          (first = call(entryNext, entryIterator)).done ||\n          (second = call(entryNext, entryIterator)).done ||\n          !call(entryNext, entryIterator).done\n        ) throw TypeError('Expected sequence with length 2');\n        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });\n      }\n    } else for (var key in object) if (hasOwn(object, key)) {\n      push(this.entries, { key: key, value: $toString(object[key]) });\n    }\n  },\n  parseQuery: function (query) {\n    if (query) {\n      var attributes = split(query, '&');\n      var index = 0;\n      var attribute, entry;\n      while (index < attributes.length) {\n        attribute = attributes[index++];\n        if (attribute.length) {\n          entry = split(attribute, '=');\n          push(this.entries, {\n            key: deserialize(shift(entry)),\n            value: deserialize(join(entry, '='))\n          });\n        }\n      }\n    }\n  },\n  serialize: function () {\n    var entries = this.entries;\n    var result = [];\n    var index = 0;\n    var entry;\n    while (index < entries.length) {\n      entry = entries[index++];\n      push(result, serialize(entry.key) + '=' + serialize(entry.value));\n    } return join(result, '&');\n  },\n  update: function () {\n    this.entries.length = 0;\n    this.parseQuery(this.url.query);\n  },\n  updateURL: function () {\n    if (this.url) this.url.update();\n  }\n};\n\n// `URLSearchParams` constructor\n// https://url.spec.whatwg.org/#interface-urlsearchparams\nvar URLSearchParamsConstructor = function URLSearchParams(/* init */) {\n  anInstance(this, URLSearchParamsPrototype);\n  var init = arguments.length > 0 ? arguments[0] : undefined;\n  setInternalState(this, new URLSearchParamsState(init));\n};\n\nvar URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;\n\ndefineBuiltIns(URLSearchParamsPrototype, {\n  // `URLSearchParams.prototype.append` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-append\n  append: function append(name, value) {\n    validateArgumentsLength(arguments.length, 2);\n    var state = getInternalParamsState(this);\n    push(state.entries, { key: $toString(name), value: $toString(value) });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.delete` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete\n  'delete': function (name) {\n    validateArgumentsLength(arguments.length, 1);\n    var state = getInternalParamsState(this);\n    var entries = state.entries;\n    var key = $toString(name);\n    var index = 0;\n    while (index < entries.length) {\n      if (entries[index].key === key) splice(entries, index, 1);\n      else index++;\n    }\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.get` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-get\n  get: function get(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = $toString(name);\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) return entries[index].value;\n    }\n    return null;\n  },\n  // `URLSearchParams.prototype.getAll` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall\n  getAll: function getAll(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = $toString(name);\n    var result = [];\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) push(result, entries[index].value);\n    }\n    return result;\n  },\n  // `URLSearchParams.prototype.has` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-has\n  has: function has(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = $toString(name);\n    var index = 0;\n    while (index < entries.length) {\n      if (entries[index++].key === key) return true;\n    }\n    return false;\n  },\n  // `URLSearchParams.prototype.set` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-set\n  set: function set(name, value) {\n    validateArgumentsLength(arguments.length, 1);\n    var state = getInternalParamsState(this);\n    var entries = state.entries;\n    var found = false;\n    var key = $toString(name);\n    var val = $toString(value);\n    var index = 0;\n    var entry;\n    for (; index < entries.length; index++) {\n      entry = entries[index];\n      if (entry.key === key) {\n        if (found) splice(entries, index--, 1);\n        else {\n          found = true;\n          entry.value = val;\n        }\n      }\n    }\n    if (!found) push(entries, { key: key, value: val });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.sort` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort\n  sort: function sort() {\n    var state = getInternalParamsState(this);\n    arraySort(state.entries, function (a, b) {\n      return a.key > b.key ? 1 : -1;\n    });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.forEach` method\n  forEach: function forEach(callback /* , thisArg */) {\n    var entries = getInternalParamsState(this).entries;\n    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);\n    var index = 0;\n    var entry;\n    while (index < entries.length) {\n      entry = entries[index++];\n      boundFunction(entry.value, entry.key, this);\n    }\n  },\n  // `URLSearchParams.prototype.keys` method\n  keys: function keys() {\n    return new URLSearchParamsIterator(this, 'keys');\n  },\n  // `URLSearchParams.prototype.values` method\n  values: function values() {\n    return new URLSearchParamsIterator(this, 'values');\n  },\n  // `URLSearchParams.prototype.entries` method\n  entries: function entries() {\n    return new URLSearchParamsIterator(this, 'entries');\n  }\n}, { enumerable: true });\n\n// `URLSearchParams.prototype[@@iterator]` method\ndefineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });\n\n// `URLSearchParams.prototype.toString` method\n// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior\ndefineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {\n  return getInternalParamsState(this).serialize();\n}, { enumerable: true });\n\nsetToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);\n\n$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {\n  URLSearchParams: URLSearchParamsConstructor\n});\n\n// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`\nif (!USE_NATIVE_URL && isCallable(Headers)) {\n  var headersHas = uncurryThis(HeadersPrototype.has);\n  var headersSet = uncurryThis(HeadersPrototype.set);\n\n  var wrapRequestOptions = function (init) {\n    if (isObject(init)) {\n      var body = init.body;\n      var headers;\n      if (classof(body) === URL_SEARCH_PARAMS) {\n        headers = init.headers ? new Headers(init.headers) : new Headers();\n        if (!headersHas(headers, 'content-type')) {\n          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');\n        }\n        return create(init, {\n          body: createPropertyDescriptor(0, $toString(body)),\n          headers: createPropertyDescriptor(0, headers)\n        });\n      }\n    } return init;\n  };\n\n  if (isCallable(nativeFetch)) {\n    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {\n      fetch: function fetch(input /* , init */) {\n        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});\n      }\n    });\n  }\n\n  if (isCallable(NativeRequest)) {\n    var RequestConstructor = function Request(input /* , init */) {\n      anInstance(this, RequestPrototype);\n      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});\n    };\n\n    RequestPrototype.constructor = RequestConstructor;\n    RequestConstructor.prototype = RequestPrototype;\n\n    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {\n      Request: RequestConstructor\n    });\n  }\n}\n\nmodule.exports = {\n  URLSearchParams: URLSearchParamsConstructor,\n  getState: getInternalParamsState\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.url-search-params.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url-search-params.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url-search-params.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove this module from `core-js@4` since it's replaced to module below\n__webpack_require__(/*! ../modules/web.url-search-params.constructor */ \"./node_modules/core-js-pure/modules/web.url-search-params.constructor.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.url-search-params.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.constructor.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.constructor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/url-constructor-detection */ \"./node_modules/core-js-pure/internals/url-constructor-detection.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ \"./node_modules/core-js-pure/internals/define-built-in-accessor.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js-pure/internals/object-assign.js\");\nvar arrayFrom = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js-pure/internals/array-from.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js-pure/internals/array-slice-simple.js\");\nvar codeAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").codeAt;\nvar toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ \"./node_modules/core-js-pure/internals/string-punycode-to-ascii.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\nvar URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params.constructor */ \"./node_modules/core-js-pure/modules/web.url-search-params.constructor.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar getInternalURLState = InternalStateModule.getterFor('URL');\nvar URLSearchParams = URLSearchParamsModule.URLSearchParams;\nvar getInternalSearchParamsState = URLSearchParamsModule.getState;\n\nvar NativeURL = global.URL;\nvar TypeError = global.TypeError;\nvar parseInt = global.parseInt;\nvar floor = Math.floor;\nvar pow = Math.pow;\nvar charAt = uncurryThis(''.charAt);\nvar exec = uncurryThis(/./.exec);\nvar join = uncurryThis([].join);\nvar numberToString = uncurryThis(1.0.toString);\nvar pop = uncurryThis([].pop);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar shift = uncurryThis([].shift);\nvar split = uncurryThis(''.split);\nvar stringSlice = uncurryThis(''.slice);\nvar toLowerCase = uncurryThis(''.toLowerCase);\nvar unshift = uncurryThis([].unshift);\n\nvar INVALID_AUTHORITY = 'Invalid authority';\nvar INVALID_SCHEME = 'Invalid scheme';\nvar INVALID_HOST = 'Invalid host';\nvar INVALID_PORT = 'Invalid port';\n\nvar ALPHA = /[a-z]/i;\n// eslint-disable-next-line regexp/no-obscure-range -- safe\nvar ALPHANUMERIC = /[\\d+-.a-z]/i;\nvar DIGIT = /\\d/;\nvar HEX_START = /^0x/i;\nvar OCT = /^[0-7]+$/;\nvar DEC = /^\\d+$/;\nvar HEX = /^[\\da-f]+$/i;\n/* eslint-disable regexp/no-control-character -- safe */\nvar FORBIDDEN_HOST_CODE_POINT = /[\\0\\t\\n\\r #%/:<>?@[\\\\\\]^|]/;\nvar FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\\0\\t\\n\\r #/:<>?@[\\\\\\]^|]/;\nvar LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\\u0000-\\u0020]+|[\\u0000-\\u0020]+$/g;\nvar TAB_AND_NEW_LINE = /[\\t\\n\\r]/g;\n/* eslint-enable regexp/no-control-character -- safe */\nvar EOF;\n\n// https://url.spec.whatwg.org/#ipv4-number-parser\nvar parseIPv4 = function (input) {\n  var parts = split(input, '.');\n  var partsLength, numbers, index, part, radix, number, ipv4;\n  if (parts.length && parts[parts.length - 1] == '') {\n    parts.length--;\n  }\n  partsLength = parts.length;\n  if (partsLength > 4) return input;\n  numbers = [];\n  for (index = 0; index < partsLength; index++) {\n    part = parts[index];\n    if (part == '') return input;\n    radix = 10;\n    if (part.length > 1 && charAt(part, 0) == '0') {\n      radix = exec(HEX_START, part) ? 16 : 8;\n      part = stringSlice(part, radix == 8 ? 1 : 2);\n    }\n    if (part === '') {\n      number = 0;\n    } else {\n      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;\n      number = parseInt(part, radix);\n    }\n    push(numbers, number);\n  }\n  for (index = 0; index < partsLength; index++) {\n    number = numbers[index];\n    if (index == partsLength - 1) {\n      if (number >= pow(256, 5 - partsLength)) return null;\n    } else if (number > 255) return null;\n  }\n  ipv4 = pop(numbers);\n  for (index = 0; index < numbers.length; index++) {\n    ipv4 += numbers[index] * pow(256, 3 - index);\n  }\n  return ipv4;\n};\n\n// https://url.spec.whatwg.org/#concept-ipv6-parser\n// eslint-disable-next-line max-statements -- TODO\nvar parseIPv6 = function (input) {\n  var address = [0, 0, 0, 0, 0, 0, 0, 0];\n  var pieceIndex = 0;\n  var compress = null;\n  var pointer = 0;\n  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;\n\n  var chr = function () {\n    return charAt(input, pointer);\n  };\n\n  if (chr() == ':') {\n    if (charAt(input, 1) != ':') return;\n    pointer += 2;\n    pieceIndex++;\n    compress = pieceIndex;\n  }\n  while (chr()) {\n    if (pieceIndex == 8) return;\n    if (chr() == ':') {\n      if (compress !== null) return;\n      pointer++;\n      pieceIndex++;\n      compress = pieceIndex;\n      continue;\n    }\n    value = length = 0;\n    while (length < 4 && exec(HEX, chr())) {\n      value = value * 16 + parseInt(chr(), 16);\n      pointer++;\n      length++;\n    }\n    if (chr() == '.') {\n      if (length == 0) return;\n      pointer -= length;\n      if (pieceIndex > 6) return;\n      numbersSeen = 0;\n      while (chr()) {\n        ipv4Piece = null;\n        if (numbersSeen > 0) {\n          if (chr() == '.' && numbersSeen < 4) pointer++;\n          else return;\n        }\n        if (!exec(DIGIT, chr())) return;\n        while (exec(DIGIT, chr())) {\n          number = parseInt(chr(), 10);\n          if (ipv4Piece === null) ipv4Piece = number;\n          else if (ipv4Piece == 0) return;\n          else ipv4Piece = ipv4Piece * 10 + number;\n          if (ipv4Piece > 255) return;\n          pointer++;\n        }\n        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;\n        numbersSeen++;\n        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;\n      }\n      if (numbersSeen != 4) return;\n      break;\n    } else if (chr() == ':') {\n      pointer++;\n      if (!chr()) return;\n    } else if (chr()) return;\n    address[pieceIndex++] = value;\n  }\n  if (compress !== null) {\n    swaps = pieceIndex - compress;\n    pieceIndex = 7;\n    while (pieceIndex != 0 && swaps > 0) {\n      swap = address[pieceIndex];\n      address[pieceIndex--] = address[compress + swaps - 1];\n      address[compress + --swaps] = swap;\n    }\n  } else if (pieceIndex != 8) return;\n  return address;\n};\n\nvar findLongestZeroSequence = function (ipv6) {\n  var maxIndex = null;\n  var maxLength = 1;\n  var currStart = null;\n  var currLength = 0;\n  var index = 0;\n  for (; index < 8; index++) {\n    if (ipv6[index] !== 0) {\n      if (currLength > maxLength) {\n        maxIndex = currStart;\n        maxLength = currLength;\n      }\n      currStart = null;\n      currLength = 0;\n    } else {\n      if (currStart === null) currStart = index;\n      ++currLength;\n    }\n  }\n  if (currLength > maxLength) {\n    maxIndex = currStart;\n    maxLength = currLength;\n  }\n  return maxIndex;\n};\n\n// https://url.spec.whatwg.org/#host-serializing\nvar serializeHost = function (host) {\n  var result, index, compress, ignore0;\n  // ipv4\n  if (typeof host == 'number') {\n    result = [];\n    for (index = 0; index < 4; index++) {\n      unshift(result, host % 256);\n      host = floor(host / 256);\n    } return join(result, '.');\n  // ipv6\n  } else if (typeof host == 'object') {\n    result = '';\n    compress = findLongestZeroSequence(host);\n    for (index = 0; index < 8; index++) {\n      if (ignore0 && host[index] === 0) continue;\n      if (ignore0) ignore0 = false;\n      if (compress === index) {\n        result += index ? ':' : '::';\n        ignore0 = true;\n      } else {\n        result += numberToString(host[index], 16);\n        if (index < 7) result += ':';\n      }\n    }\n    return '[' + result + ']';\n  } return host;\n};\n\nvar C0ControlPercentEncodeSet = {};\nvar fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {\n  ' ': 1, '\"': 1, '<': 1, '>': 1, '`': 1\n});\nvar pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {\n  '#': 1, '?': 1, '{': 1, '}': 1\n});\nvar userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {\n  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\\\': 1, ']': 1, '^': 1, '|': 1\n});\n\nvar percentEncode = function (chr, set) {\n  var code = codeAt(chr, 0);\n  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);\n};\n\n// https://url.spec.whatwg.org/#special-scheme\nvar specialSchemes = {\n  ftp: 21,\n  file: null,\n  http: 80,\n  https: 443,\n  ws: 80,\n  wss: 443\n};\n\n// https://url.spec.whatwg.org/#windows-drive-letter\nvar isWindowsDriveLetter = function (string, normalized) {\n  var second;\n  return string.length == 2 && exec(ALPHA, charAt(string, 0))\n    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));\n};\n\n// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter\nvar startsWithWindowsDriveLetter = function (string) {\n  var third;\n  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (\n    string.length == 2 ||\n    ((third = charAt(string, 2)) === '/' || third === '\\\\' || third === '?' || third === '#')\n  );\n};\n\n// https://url.spec.whatwg.org/#single-dot-path-segment\nvar isSingleDot = function (segment) {\n  return segment === '.' || toLowerCase(segment) === '%2e';\n};\n\n// https://url.spec.whatwg.org/#double-dot-path-segment\nvar isDoubleDot = function (segment) {\n  segment = toLowerCase(segment);\n  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';\n};\n\n// States:\nvar SCHEME_START = {};\nvar SCHEME = {};\nvar NO_SCHEME = {};\nvar SPECIAL_RELATIVE_OR_AUTHORITY = {};\nvar PATH_OR_AUTHORITY = {};\nvar RELATIVE = {};\nvar RELATIVE_SLASH = {};\nvar SPECIAL_AUTHORITY_SLASHES = {};\nvar SPECIAL_AUTHORITY_IGNORE_SLASHES = {};\nvar AUTHORITY = {};\nvar HOST = {};\nvar HOSTNAME = {};\nvar PORT = {};\nvar FILE = {};\nvar FILE_SLASH = {};\nvar FILE_HOST = {};\nvar PATH_START = {};\nvar PATH = {};\nvar CANNOT_BE_A_BASE_URL_PATH = {};\nvar QUERY = {};\nvar FRAGMENT = {};\n\nvar URLState = function (url, isBase, base) {\n  var urlString = $toString(url);\n  var baseState, failure, searchParams;\n  if (isBase) {\n    failure = this.parse(urlString);\n    if (failure) throw TypeError(failure);\n    this.searchParams = null;\n  } else {\n    if (base !== undefined) baseState = new URLState(base, true);\n    failure = this.parse(urlString, null, baseState);\n    if (failure) throw TypeError(failure);\n    searchParams = getInternalSearchParamsState(new URLSearchParams());\n    searchParams.bindURL(this);\n    this.searchParams = searchParams;\n  }\n};\n\nURLState.prototype = {\n  type: 'URL',\n  // https://url.spec.whatwg.org/#url-parsing\n  // eslint-disable-next-line max-statements -- TODO\n  parse: function (input, stateOverride, base) {\n    var url = this;\n    var state = stateOverride || SCHEME_START;\n    var pointer = 0;\n    var buffer = '';\n    var seenAt = false;\n    var seenBracket = false;\n    var seenPasswordToken = false;\n    var codePoints, chr, bufferCodePoints, failure;\n\n    input = $toString(input);\n\n    if (!stateOverride) {\n      url.scheme = '';\n      url.username = '';\n      url.password = '';\n      url.host = null;\n      url.port = null;\n      url.path = [];\n      url.query = null;\n      url.fragment = null;\n      url.cannotBeABaseURL = false;\n      input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');\n    }\n\n    input = replace(input, TAB_AND_NEW_LINE, '');\n\n    codePoints = arrayFrom(input);\n\n    while (pointer <= codePoints.length) {\n      chr = codePoints[pointer];\n      switch (state) {\n        case SCHEME_START:\n          if (chr && exec(ALPHA, chr)) {\n            buffer += toLowerCase(chr);\n            state = SCHEME;\n          } else if (!stateOverride) {\n            state = NO_SCHEME;\n            continue;\n          } else return INVALID_SCHEME;\n          break;\n\n        case SCHEME:\n          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {\n            buffer += toLowerCase(chr);\n          } else if (chr == ':') {\n            if (stateOverride && (\n              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||\n              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||\n              (url.scheme == 'file' && !url.host)\n            )) return;\n            url.scheme = buffer;\n            if (stateOverride) {\n              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;\n              return;\n            }\n            buffer = '';\n            if (url.scheme == 'file') {\n              state = FILE;\n            } else if (url.isSpecial() && base && base.scheme == url.scheme) {\n              state = SPECIAL_RELATIVE_OR_AUTHORITY;\n            } else if (url.isSpecial()) {\n              state = SPECIAL_AUTHORITY_SLASHES;\n            } else if (codePoints[pointer + 1] == '/') {\n              state = PATH_OR_AUTHORITY;\n              pointer++;\n            } else {\n              url.cannotBeABaseURL = true;\n              push(url.path, '');\n              state = CANNOT_BE_A_BASE_URL_PATH;\n            }\n          } else if (!stateOverride) {\n            buffer = '';\n            state = NO_SCHEME;\n            pointer = 0;\n            continue;\n          } else return INVALID_SCHEME;\n          break;\n\n        case NO_SCHEME:\n          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;\n          if (base.cannotBeABaseURL && chr == '#') {\n            url.scheme = base.scheme;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n            url.fragment = '';\n            url.cannotBeABaseURL = true;\n            state = FRAGMENT;\n            break;\n          }\n          state = base.scheme == 'file' ? FILE : RELATIVE;\n          continue;\n\n        case SPECIAL_RELATIVE_OR_AUTHORITY:\n          if (chr == '/' && codePoints[pointer + 1] == '/') {\n            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n            pointer++;\n          } else {\n            state = RELATIVE;\n            continue;\n          } break;\n\n        case PATH_OR_AUTHORITY:\n          if (chr == '/') {\n            state = AUTHORITY;\n            break;\n          } else {\n            state = PATH;\n            continue;\n          }\n\n        case RELATIVE:\n          url.scheme = base.scheme;\n          if (chr == EOF) {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n          } else if (chr == '/' || (chr == '\\\\' && url.isSpecial())) {\n            state = RELATIVE_SLASH;\n          } else if (chr == '?') {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = '';\n            state = QUERY;\n          } else if (chr == '#') {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n            url.fragment = '';\n            state = FRAGMENT;\n          } else {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.path.length--;\n            state = PATH;\n            continue;\n          } break;\n\n        case RELATIVE_SLASH:\n          if (url.isSpecial() && (chr == '/' || chr == '\\\\')) {\n            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n          } else if (chr == '/') {\n            state = AUTHORITY;\n          } else {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            state = PATH;\n            continue;\n          } break;\n\n        case SPECIAL_AUTHORITY_SLASHES:\n          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;\n          pointer++;\n          break;\n\n        case SPECIAL_AUTHORITY_IGNORE_SLASHES:\n          if (chr != '/' && chr != '\\\\') {\n            state = AUTHORITY;\n            continue;\n          } break;\n\n        case AUTHORITY:\n          if (chr == '@') {\n            if (seenAt) buffer = '%40' + buffer;\n            seenAt = true;\n            bufferCodePoints = arrayFrom(buffer);\n            for (var i = 0; i < bufferCodePoints.length; i++) {\n              var codePoint = bufferCodePoints[i];\n              if (codePoint == ':' && !seenPasswordToken) {\n                seenPasswordToken = true;\n                continue;\n              }\n              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);\n              if (seenPasswordToken) url.password += encodedCodePoints;\n              else url.username += encodedCodePoints;\n            }\n            buffer = '';\n          } else if (\n            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||\n            (chr == '\\\\' && url.isSpecial())\n          ) {\n            if (seenAt && buffer == '') return INVALID_AUTHORITY;\n            pointer -= arrayFrom(buffer).length + 1;\n            buffer = '';\n            state = HOST;\n          } else buffer += chr;\n          break;\n\n        case HOST:\n        case HOSTNAME:\n          if (stateOverride && url.scheme == 'file') {\n            state = FILE_HOST;\n            continue;\n          } else if (chr == ':' && !seenBracket) {\n            if (buffer == '') return INVALID_HOST;\n            failure = url.parseHost(buffer);\n            if (failure) return failure;\n            buffer = '';\n            state = PORT;\n            if (stateOverride == HOSTNAME) return;\n          } else if (\n            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||\n            (chr == '\\\\' && url.isSpecial())\n          ) {\n            if (url.isSpecial() && buffer == '') return INVALID_HOST;\n            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;\n            failure = url.parseHost(buffer);\n            if (failure) return failure;\n            buffer = '';\n            state = PATH_START;\n            if (stateOverride) return;\n            continue;\n          } else {\n            if (chr == '[') seenBracket = true;\n            else if (chr == ']') seenBracket = false;\n            buffer += chr;\n          } break;\n\n        case PORT:\n          if (exec(DIGIT, chr)) {\n            buffer += chr;\n          } else if (\n            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||\n            (chr == '\\\\' && url.isSpecial()) ||\n            stateOverride\n          ) {\n            if (buffer != '') {\n              var port = parseInt(buffer, 10);\n              if (port > 0xFFFF) return INVALID_PORT;\n              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;\n              buffer = '';\n            }\n            if (stateOverride) return;\n            state = PATH_START;\n            continue;\n          } else return INVALID_PORT;\n          break;\n\n        case FILE:\n          url.scheme = 'file';\n          if (chr == '/' || chr == '\\\\') state = FILE_SLASH;\n          else if (base && base.scheme == 'file') {\n            if (chr == EOF) {\n              url.host = base.host;\n              url.path = arraySlice(base.path);\n              url.query = base.query;\n            } else if (chr == '?') {\n              url.host = base.host;\n              url.path = arraySlice(base.path);\n              url.query = '';\n              state = QUERY;\n            } else if (chr == '#') {\n              url.host = base.host;\n              url.path = arraySlice(base.path);\n              url.query = base.query;\n              url.fragment = '';\n              state = FRAGMENT;\n            } else {\n              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {\n                url.host = base.host;\n                url.path = arraySlice(base.path);\n                url.shortenPath();\n              }\n              state = PATH;\n              continue;\n            }\n          } else {\n            state = PATH;\n            continue;\n          } break;\n\n        case FILE_SLASH:\n          if (chr == '/' || chr == '\\\\') {\n            state = FILE_HOST;\n            break;\n          }\n          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {\n            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);\n            else url.host = base.host;\n          }\n          state = PATH;\n          continue;\n\n        case FILE_HOST:\n          if (chr == EOF || chr == '/' || chr == '\\\\' || chr == '?' || chr == '#') {\n            if (!stateOverride && isWindowsDriveLetter(buffer)) {\n              state = PATH;\n            } else if (buffer == '') {\n              url.host = '';\n              if (stateOverride) return;\n              state = PATH_START;\n            } else {\n              failure = url.parseHost(buffer);\n              if (failure) return failure;\n              if (url.host == 'localhost') url.host = '';\n              if (stateOverride) return;\n              buffer = '';\n              state = PATH_START;\n            } continue;\n          } else buffer += chr;\n          break;\n\n        case PATH_START:\n          if (url.isSpecial()) {\n            state = PATH;\n            if (chr != '/' && chr != '\\\\') continue;\n          } else if (!stateOverride && chr == '?') {\n            url.query = '';\n            state = QUERY;\n          } else if (!stateOverride && chr == '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr != EOF) {\n            state = PATH;\n            if (chr != '/') continue;\n          } break;\n\n        case PATH:\n          if (\n            chr == EOF || chr == '/' ||\n            (chr == '\\\\' && url.isSpecial()) ||\n            (!stateOverride && (chr == '?' || chr == '#'))\n          ) {\n            if (isDoubleDot(buffer)) {\n              url.shortenPath();\n              if (chr != '/' && !(chr == '\\\\' && url.isSpecial())) {\n                push(url.path, '');\n              }\n            } else if (isSingleDot(buffer)) {\n              if (chr != '/' && !(chr == '\\\\' && url.isSpecial())) {\n                push(url.path, '');\n              }\n            } else {\n              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {\n                if (url.host) url.host = '';\n                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter\n              }\n              push(url.path, buffer);\n            }\n            buffer = '';\n            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {\n              while (url.path.length > 1 && url.path[0] === '') {\n                shift(url.path);\n              }\n            }\n            if (chr == '?') {\n              url.query = '';\n              state = QUERY;\n            } else if (chr == '#') {\n              url.fragment = '';\n              state = FRAGMENT;\n            }\n          } else {\n            buffer += percentEncode(chr, pathPercentEncodeSet);\n          } break;\n\n        case CANNOT_BE_A_BASE_URL_PATH:\n          if (chr == '?') {\n            url.query = '';\n            state = QUERY;\n          } else if (chr == '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr != EOF) {\n            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);\n          } break;\n\n        case QUERY:\n          if (!stateOverride && chr == '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr != EOF) {\n            if (chr == \"'\" && url.isSpecial()) url.query += '%27';\n            else if (chr == '#') url.query += '%23';\n            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);\n          } break;\n\n        case FRAGMENT:\n          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);\n          break;\n      }\n\n      pointer++;\n    }\n  },\n  // https://url.spec.whatwg.org/#host-parsing\n  parseHost: function (input) {\n    var result, codePoints, index;\n    if (charAt(input, 0) == '[') {\n      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;\n      result = parseIPv6(stringSlice(input, 1, -1));\n      if (!result) return INVALID_HOST;\n      this.host = result;\n    // opaque host\n    } else if (!this.isSpecial()) {\n      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;\n      result = '';\n      codePoints = arrayFrom(input);\n      for (index = 0; index < codePoints.length; index++) {\n        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);\n      }\n      this.host = result;\n    } else {\n      input = toASCII(input);\n      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;\n      result = parseIPv4(input);\n      if (result === null) return INVALID_HOST;\n      this.host = result;\n    }\n  },\n  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port\n  cannotHaveUsernamePasswordPort: function () {\n    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';\n  },\n  // https://url.spec.whatwg.org/#include-credentials\n  includesCredentials: function () {\n    return this.username != '' || this.password != '';\n  },\n  // https://url.spec.whatwg.org/#is-special\n  isSpecial: function () {\n    return hasOwn(specialSchemes, this.scheme);\n  },\n  // https://url.spec.whatwg.org/#shorten-a-urls-path\n  shortenPath: function () {\n    var path = this.path;\n    var pathSize = path.length;\n    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {\n      path.length--;\n    }\n  },\n  // https://url.spec.whatwg.org/#concept-url-serializer\n  serialize: function () {\n    var url = this;\n    var scheme = url.scheme;\n    var username = url.username;\n    var password = url.password;\n    var host = url.host;\n    var port = url.port;\n    var path = url.path;\n    var query = url.query;\n    var fragment = url.fragment;\n    var output = scheme + ':';\n    if (host !== null) {\n      output += '//';\n      if (url.includesCredentials()) {\n        output += username + (password ? ':' + password : '') + '@';\n      }\n      output += serializeHost(host);\n      if (port !== null) output += ':' + port;\n    } else if (scheme == 'file') output += '//';\n    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';\n    if (query !== null) output += '?' + query;\n    if (fragment !== null) output += '#' + fragment;\n    return output;\n  },\n  // https://url.spec.whatwg.org/#dom-url-href\n  setHref: function (href) {\n    var failure = this.parse(href);\n    if (failure) throw TypeError(failure);\n    this.searchParams.update();\n  },\n  // https://url.spec.whatwg.org/#dom-url-origin\n  getOrigin: function () {\n    var scheme = this.scheme;\n    var port = this.port;\n    if (scheme == 'blob') try {\n      return new URLConstructor(scheme.path[0]).origin;\n    } catch (error) {\n      return 'null';\n    }\n    if (scheme == 'file' || !this.isSpecial()) return 'null';\n    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');\n  },\n  // https://url.spec.whatwg.org/#dom-url-protocol\n  getProtocol: function () {\n    return this.scheme + ':';\n  },\n  setProtocol: function (protocol) {\n    this.parse($toString(protocol) + ':', SCHEME_START);\n  },\n  // https://url.spec.whatwg.org/#dom-url-username\n  getUsername: function () {\n    return this.username;\n  },\n  setUsername: function (username) {\n    var codePoints = arrayFrom($toString(username));\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    this.username = '';\n    for (var i = 0; i < codePoints.length; i++) {\n      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n    }\n  },\n  // https://url.spec.whatwg.org/#dom-url-password\n  getPassword: function () {\n    return this.password;\n  },\n  setPassword: function (password) {\n    var codePoints = arrayFrom($toString(password));\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    this.password = '';\n    for (var i = 0; i < codePoints.length; i++) {\n      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n    }\n  },\n  // https://url.spec.whatwg.org/#dom-url-host\n  getHost: function () {\n    var host = this.host;\n    var port = this.port;\n    return host === null ? ''\n      : port === null ? serializeHost(host)\n      : serializeHost(host) + ':' + port;\n  },\n  setHost: function (host) {\n    if (this.cannotBeABaseURL) return;\n    this.parse(host, HOST);\n  },\n  // https://url.spec.whatwg.org/#dom-url-hostname\n  getHostname: function () {\n    var host = this.host;\n    return host === null ? '' : serializeHost(host);\n  },\n  setHostname: function (hostname) {\n    if (this.cannotBeABaseURL) return;\n    this.parse(hostname, HOSTNAME);\n  },\n  // https://url.spec.whatwg.org/#dom-url-port\n  getPort: function () {\n    var port = this.port;\n    return port === null ? '' : $toString(port);\n  },\n  setPort: function (port) {\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    port = $toString(port);\n    if (port == '') this.port = null;\n    else this.parse(port, PORT);\n  },\n  // https://url.spec.whatwg.org/#dom-url-pathname\n  getPathname: function () {\n    var path = this.path;\n    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';\n  },\n  setPathname: function (pathname) {\n    if (this.cannotBeABaseURL) return;\n    this.path = [];\n    this.parse(pathname, PATH_START);\n  },\n  // https://url.spec.whatwg.org/#dom-url-search\n  getSearch: function () {\n    var query = this.query;\n    return query ? '?' + query : '';\n  },\n  setSearch: function (search) {\n    search = $toString(search);\n    if (search == '') {\n      this.query = null;\n    } else {\n      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);\n      this.query = '';\n      this.parse(search, QUERY);\n    }\n    this.searchParams.update();\n  },\n  // https://url.spec.whatwg.org/#dom-url-searchparams\n  getSearchParams: function () {\n    return this.searchParams.facade;\n  },\n  // https://url.spec.whatwg.org/#dom-url-hash\n  getHash: function () {\n    var fragment = this.fragment;\n    return fragment ? '#' + fragment : '';\n  },\n  setHash: function (hash) {\n    hash = $toString(hash);\n    if (hash == '') {\n      this.fragment = null;\n      return;\n    }\n    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);\n    this.fragment = '';\n    this.parse(hash, FRAGMENT);\n  },\n  update: function () {\n    this.query = this.searchParams.serialize() || null;\n  }\n};\n\n// `URL` constructor\n// https://url.spec.whatwg.org/#url-class\nvar URLConstructor = function URL(url /* , base */) {\n  var that = anInstance(this, URLPrototype);\n  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;\n  var state = setInternalState(that, new URLState(url, false, base));\n  if (!DESCRIPTORS) {\n    that.href = state.serialize();\n    that.origin = state.getOrigin();\n    that.protocol = state.getProtocol();\n    that.username = state.getUsername();\n    that.password = state.getPassword();\n    that.host = state.getHost();\n    that.hostname = state.getHostname();\n    that.port = state.getPort();\n    that.pathname = state.getPathname();\n    that.search = state.getSearch();\n    that.searchParams = state.getSearchParams();\n    that.hash = state.getHash();\n  }\n};\n\nvar URLPrototype = URLConstructor.prototype;\n\nvar accessorDescriptor = function (getter, setter) {\n  return {\n    get: function () {\n      return getInternalURLState(this)[getter]();\n    },\n    set: setter && function (value) {\n      return getInternalURLState(this)[setter](value);\n    },\n    configurable: true,\n    enumerable: true\n  };\n};\n\nif (DESCRIPTORS) {\n  // `URL.prototype.href` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-href\n  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));\n  // `URL.prototype.origin` getter\n  // https://url.spec.whatwg.org/#dom-url-origin\n  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));\n  // `URL.prototype.protocol` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-protocol\n  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));\n  // `URL.prototype.username` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-username\n  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));\n  // `URL.prototype.password` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-password\n  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));\n  // `URL.prototype.host` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-host\n  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));\n  // `URL.prototype.hostname` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-hostname\n  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));\n  // `URL.prototype.port` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-port\n  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));\n  // `URL.prototype.pathname` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-pathname\n  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));\n  // `URL.prototype.search` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-search\n  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));\n  // `URL.prototype.searchParams` getter\n  // https://url.spec.whatwg.org/#dom-url-searchparams\n  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));\n  // `URL.prototype.hash` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-hash\n  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));\n}\n\n// `URL.prototype.toJSON` method\n// https://url.spec.whatwg.org/#dom-url-tojson\ndefineBuiltIn(URLPrototype, 'toJSON', function toJSON() {\n  return getInternalURLState(this).serialize();\n}, { enumerable: true });\n\n// `URL.prototype.toString` method\n// https://url.spec.whatwg.org/#URL-stringification-behavior\ndefineBuiltIn(URLPrototype, 'toString', function toString() {\n  return getInternalURLState(this).serialize();\n}, { enumerable: true });\n\nif (NativeURL) {\n  var nativeCreateObjectURL = NativeURL.createObjectURL;\n  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;\n  // `URL.createObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL\n  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));\n  // `URL.revokeObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL\n  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));\n}\n\nsetToStringTag(URLConstructor, 'URL');\n\n$({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {\n  URL: URLConstructor\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.url.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove this module from `core-js@4` since it's replaced to module below\n__webpack_require__(/*! ../modules/web.url.constructor */ \"./node_modules/core-js-pure/modules/web.url.constructor.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.url.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.to-json.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.to-json.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.url.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/from */ \"./node_modules/core-js-pure/es/array/from.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/is-array */ \"./node_modules/core-js-pure/es/array/is-array.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/entries.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/entries.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/entries */ \"./node_modules/core-js-pure/es/array/virtual/entries.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/virtual/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/for-each.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/for-each */ \"./node_modules/core-js-pure/es/array/virtual/for-each.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/keys */ \"./node_modules/core-js-pure/es/array/virtual/keys.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/virtual/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/get-iterator-method.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/get-iterator-method.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../es/get-iterator-method */ \"./node_modules/core-js-pure/es/get-iterator-method.js\");\n__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/get-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/get-iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../es/get-iterator */ \"./node_modules/core-js-pure/es/get-iterator.js\");\n__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/bind */ \"./node_modules/core-js-pure/es/instance/bind.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/bind.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/concat.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/concat.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/concat */ \"./node_modules/core-js-pure/es/instance/concat.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/entries.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/entries.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar hasOwn = __webpack_require__(/*! ../../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/entries */ \"./node_modules/core-js-pure/stable/array/virtual/entries.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.entries;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.entries)\n    || hasOwn(DOMIterables, classof(it)) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/filter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/filter */ \"./node_modules/core-js-pure/es/instance/filter.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/filter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar hasOwn = __webpack_require__(/*! ../../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/for-each */ \"./node_modules/core-js-pure/stable/array/virtual/for-each.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.forEach;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach)\n    || hasOwn(DOMIterables, classof(it)) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/includes */ \"./node_modules/core-js-pure/es/instance/includes.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/index-of */ \"./node_modules/core-js-pure/es/instance/index-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar hasOwn = __webpack_require__(/*! ../../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar method = __webpack_require__(/*! ../array/virtual/keys */ \"./node_modules/core-js-pure/stable/array/virtual/keys.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.keys;\n  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.keys)\n    || hasOwn(DOMIterables, classof(it)) ? method : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/map.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/map.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/map */ \"./node_modules/core-js-pure/es/instance/map.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/reverse.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/reverse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/reverse */ \"./node_modules/core-js-pure/es/instance/reverse.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/reverse.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/slice.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/slice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/slice */ \"./node_modules/core-js-pure/es/instance/slice.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/starts-with.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/starts-with.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/starts-with */ \"./node_modules/core-js-pure/es/instance/starts-with.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/trim.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/trim.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/trim */ \"./node_modules/core-js-pure/es/instance/trim.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/trim.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/json/stringify.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/json/stringify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/json/stringify */ \"./node_modules/core-js-pure/es/json/stringify.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/assign */ \"./node_modules/core-js-pure/es/object/assign.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/create */ \"./node_modules/core-js-pure/es/object/create.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/define-properties */ \"./node_modules/core-js-pure/es/object/define-properties.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/define-property */ \"./node_modules/core-js-pure/es/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/entries */ \"./node_modules/core-js-pure/es/object/entries.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/from-entries.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/from-entries.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/from-entries */ \"./node_modules/core-js-pure/es/object/from-entries.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/get-own-property-descriptor */ \"./node_modules/core-js-pure/es/object/get-own-property-descriptor.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/get-own-property-descriptors */ \"./node_modules/core-js-pure/es/object/get-own-property-descriptors.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/get-own-property-symbols.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/get-own-property-symbols.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/get-own-property-symbols */ \"./node_modules/core-js-pure/es/object/get-own-property-symbols.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/get-prototype-of */ \"./node_modules/core-js-pure/es/object/get-prototype-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/keys */ \"./node_modules/core-js-pure/es/object/keys.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/set-prototype-of */ \"./node_modules/core-js-pure/es/object/set-prototype-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/stable/parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../es/parse-int */ \"./node_modules/core-js-pure/es/parse-int.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/promise/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/promise/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/promise */ \"./node_modules/core-js-pure/es/promise/index.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/promise/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/reflect/get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/reflect/get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/reflect/get */ \"./node_modules/core-js-pure/es/reflect/get.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/reflect/get.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/set-interval.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js-pure/modules/web.timers.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.setInterval;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/set-interval.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/symbol/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/symbol/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/symbol */ \"./node_modules/core-js-pure/es/symbol/index.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/symbol/iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/symbol/iterator */ \"./node_modules/core-js-pure/es/symbol/iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/symbol/to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/symbol/to-primitive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/symbol/to-primitive */ \"./node_modules/core-js-pure/es/symbol/to-primitive.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/symbol/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/url-search-params/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/url-search-params/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../web/url-search-params */ \"./node_modules/core-js-pure/web/url-search-params.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/url-search-params/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/url/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/stable/url/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../web/url */ \"./node_modules/core-js-pure/web/url.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/url/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/web/url-search-params.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/web/url-search-params.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.url-search-params */ \"./node_modules/core-js-pure/modules/web.url-search-params.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.URLSearchParams;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/web/url-search-params.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/web/url.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js-pure/web/url.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.url */ \"./node_modules/core-js-pure/modules/web.url.js\");\n__webpack_require__(/*! ../modules/web.url.to-json */ \"./node_modules/core-js-pure/modules/web.url.to-json.js\");\n__webpack_require__(/*! ../modules/web.url-search-params */ \"./node_modules/core-js-pure/modules/web.url-search-params.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.URL;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/web/url.js?");

/***/ }),

/***/ "./node_modules/js-sha1/src/sha1.js":
/*!******************************************!*\
  !*** ./node_modules/js-sha1/src/sha1.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*\n * [js-sha1]{@link https://github.com/emn178/js-sha1}\n *\n * @version 0.6.0\n * @author Chen, Yi-Cyuan [emn178@gmail.com]\n * @copyright Chen, Yi-Cyuan 2014-2017\n * @license MIT\n */\n/*jslint bitwise: true */\n(function() {\n  'use strict';\n\n  var root = typeof window === 'object' ? window : {};\n  var NODE_JS = !root.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;\n  if (NODE_JS) {\n    root = global;\n  }\n  var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && typeof module === 'object' && module.exports;\n  var AMD =  true && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\");\n  var HEX_CHARS = '0123456789abcdef'.split('');\n  var EXTRA = [-2147483648, 8388608, 32768, 128];\n  var SHIFT = [24, 16, 8, 0];\n  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];\n\n  var blocks = [];\n\n  var createOutputMethod = function (outputType) {\n    return function (message) {\n      return new Sha1(true).update(message)[outputType]();\n    };\n  };\n\n  var createMethod = function () {\n    var method = createOutputMethod('hex');\n    if (NODE_JS) {\n      method = nodeWrap(method);\n    }\n    method.create = function () {\n      return new Sha1();\n    };\n    method.update = function (message) {\n      return method.create().update(message);\n    };\n    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {\n      var type = OUTPUT_TYPES[i];\n      method[type] = createOutputMethod(type);\n    }\n    return method;\n  };\n\n  var nodeWrap = function (method) {\n    var crypto = eval(\"require('crypto')\");\n    var Buffer = eval(\"require('buffer').Buffer\");\n    var nodeMethod = function (message) {\n      if (typeof message === 'string') {\n        return crypto.createHash('sha1').update(message, 'utf8').digest('hex');\n      } else if (message.constructor === ArrayBuffer) {\n        message = new Uint8Array(message);\n      } else if (message.length === undefined) {\n        return method(message);\n      }\n      return crypto.createHash('sha1').update(new Buffer(message)).digest('hex');\n    };\n    return nodeMethod;\n  };\n\n  function Sha1(sharedMemory) {\n    if (sharedMemory) {\n      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =\n      blocks[4] = blocks[5] = blocks[6] = blocks[7] =\n      blocks[8] = blocks[9] = blocks[10] = blocks[11] =\n      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n      this.blocks = blocks;\n    } else {\n      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n    }\n\n    this.h0 = 0x67452301;\n    this.h1 = 0xEFCDAB89;\n    this.h2 = 0x98BADCFE;\n    this.h3 = 0x10325476;\n    this.h4 = 0xC3D2E1F0;\n\n    this.block = this.start = this.bytes = this.hBytes = 0;\n    this.finalized = this.hashed = false;\n    this.first = true;\n  }\n\n  Sha1.prototype.update = function (message) {\n    if (this.finalized) {\n      return;\n    }\n    var notString = typeof(message) !== 'string';\n    if (notString && message.constructor === root.ArrayBuffer) {\n      message = new Uint8Array(message);\n    }\n    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;\n\n    while (index < length) {\n      if (this.hashed) {\n        this.hashed = false;\n        blocks[0] = this.block;\n        blocks[16] = blocks[1] = blocks[2] = blocks[3] =\n        blocks[4] = blocks[5] = blocks[6] = blocks[7] =\n        blocks[8] = blocks[9] = blocks[10] = blocks[11] =\n        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n      }\n\n      if(notString) {\n        for (i = this.start; index < length && i < 64; ++index) {\n          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];\n        }\n      } else {\n        for (i = this.start; index < length && i < 64; ++index) {\n          code = message.charCodeAt(index);\n          if (code < 0x80) {\n            blocks[i >> 2] |= code << SHIFT[i++ & 3];\n          } else if (code < 0x800) {\n            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];\n            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];\n          } else if (code < 0xd800 || code >= 0xe000) {\n            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];\n            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];\n            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];\n          } else {\n            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));\n            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];\n            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];\n            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];\n            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];\n          }\n        }\n      }\n\n      this.lastByteIndex = i;\n      this.bytes += i - this.start;\n      if (i >= 64) {\n        this.block = blocks[16];\n        this.start = i - 64;\n        this.hash();\n        this.hashed = true;\n      } else {\n        this.start = i;\n      }\n    }\n    if (this.bytes > 4294967295) {\n      this.hBytes += this.bytes / 4294967296 << 0;\n      this.bytes = this.bytes % 4294967296;\n    }\n    return this;\n  };\n\n  Sha1.prototype.finalize = function () {\n    if (this.finalized) {\n      return;\n    }\n    this.finalized = true;\n    var blocks = this.blocks, i = this.lastByteIndex;\n    blocks[16] = this.block;\n    blocks[i >> 2] |= EXTRA[i & 3];\n    this.block = blocks[16];\n    if (i >= 56) {\n      if (!this.hashed) {\n        this.hash();\n      }\n      blocks[0] = this.block;\n      blocks[16] = blocks[1] = blocks[2] = blocks[3] =\n      blocks[4] = blocks[5] = blocks[6] = blocks[7] =\n      blocks[8] = blocks[9] = blocks[10] = blocks[11] =\n      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n    }\n    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;\n    blocks[15] = this.bytes << 3;\n    this.hash();\n  };\n\n  Sha1.prototype.hash = function () {\n    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;\n    var f, j, t, blocks = this.blocks;\n\n    for(j = 16; j < 80; ++j) {\n      t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];\n      blocks[j] =  (t << 1) | (t >>> 31);\n    }\n\n    for(j = 0; j < 20; j += 5) {\n      f = (b & c) | ((~b) & d);\n      t = (a << 5) | (a >>> 27);\n      e = t + f + e + 1518500249 + blocks[j] << 0;\n      b = (b << 30) | (b >>> 2);\n\n      f = (a & b) | ((~a) & c);\n      t = (e << 5) | (e >>> 27);\n      d = t + f + d + 1518500249 + blocks[j + 1] << 0;\n      a = (a << 30) | (a >>> 2);\n\n      f = (e & a) | ((~e) & b);\n      t = (d << 5) | (d >>> 27);\n      c = t + f + c + 1518500249 + blocks[j + 2] << 0;\n      e = (e << 30) | (e >>> 2);\n\n      f = (d & e) | ((~d) & a);\n      t = (c << 5) | (c >>> 27);\n      b = t + f + b + 1518500249 + blocks[j + 3] << 0;\n      d = (d << 30) | (d >>> 2);\n\n      f = (c & d) | ((~c) & e);\n      t = (b << 5) | (b >>> 27);\n      a = t + f + a + 1518500249 + blocks[j + 4] << 0;\n      c = (c << 30) | (c >>> 2);\n    }\n\n    for(; j < 40; j += 5) {\n      f = b ^ c ^ d;\n      t = (a << 5) | (a >>> 27);\n      e = t + f + e + 1859775393 + blocks[j] << 0;\n      b = (b << 30) | (b >>> 2);\n\n      f = a ^ b ^ c;\n      t = (e << 5) | (e >>> 27);\n      d = t + f + d + 1859775393 + blocks[j + 1] << 0;\n      a = (a << 30) | (a >>> 2);\n\n      f = e ^ a ^ b;\n      t = (d << 5) | (d >>> 27);\n      c = t + f + c + 1859775393 + blocks[j + 2] << 0;\n      e = (e << 30) | (e >>> 2);\n\n      f = d ^ e ^ a;\n      t = (c << 5) | (c >>> 27);\n      b = t + f + b + 1859775393 + blocks[j + 3] << 0;\n      d = (d << 30) | (d >>> 2);\n\n      f = c ^ d ^ e;\n      t = (b << 5) | (b >>> 27);\n      a = t + f + a + 1859775393 + blocks[j + 4] << 0;\n      c = (c << 30) | (c >>> 2);\n    }\n\n    for(; j < 60; j += 5) {\n      f = (b & c) | (b & d) | (c & d);\n      t = (a << 5) | (a >>> 27);\n      e = t + f + e - 1894007588 + blocks[j] << 0;\n      b = (b << 30) | (b >>> 2);\n\n      f = (a & b) | (a & c) | (b & c);\n      t = (e << 5) | (e >>> 27);\n      d = t + f + d - 1894007588 + blocks[j + 1] << 0;\n      a = (a << 30) | (a >>> 2);\n\n      f = (e & a) | (e & b) | (a & b);\n      t = (d << 5) | (d >>> 27);\n      c = t + f + c - 1894007588 + blocks[j + 2] << 0;\n      e = (e << 30) | (e >>> 2);\n\n      f = (d & e) | (d & a) | (e & a);\n      t = (c << 5) | (c >>> 27);\n      b = t + f + b - 1894007588 + blocks[j + 3] << 0;\n      d = (d << 30) | (d >>> 2);\n\n      f = (c & d) | (c & e) | (d & e);\n      t = (b << 5) | (b >>> 27);\n      a = t + f + a - 1894007588 + blocks[j + 4] << 0;\n      c = (c << 30) | (c >>> 2);\n    }\n\n    for(; j < 80; j += 5) {\n      f = b ^ c ^ d;\n      t = (a << 5) | (a >>> 27);\n      e = t + f + e - 899497514 + blocks[j] << 0;\n      b = (b << 30) | (b >>> 2);\n\n      f = a ^ b ^ c;\n      t = (e << 5) | (e >>> 27);\n      d = t + f + d - 899497514 + blocks[j + 1] << 0;\n      a = (a << 30) | (a >>> 2);\n\n      f = e ^ a ^ b;\n      t = (d << 5) | (d >>> 27);\n      c = t + f + c - 899497514 + blocks[j + 2] << 0;\n      e = (e << 30) | (e >>> 2);\n\n      f = d ^ e ^ a;\n      t = (c << 5) | (c >>> 27);\n      b = t + f + b - 899497514 + blocks[j + 3] << 0;\n      d = (d << 30) | (d >>> 2);\n\n      f = c ^ d ^ e;\n      t = (b << 5) | (b >>> 27);\n      a = t + f + a - 899497514 + blocks[j + 4] << 0;\n      c = (c << 30) | (c >>> 2);\n    }\n\n    this.h0 = this.h0 + a << 0;\n    this.h1 = this.h1 + b << 0;\n    this.h2 = this.h2 + c << 0;\n    this.h3 = this.h3 + d << 0;\n    this.h4 = this.h4 + e << 0;\n  };\n\n  Sha1.prototype.hex = function () {\n    this.finalize();\n\n    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;\n\n    return HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +\n           HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +\n           HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +\n           HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +\n           HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +\n           HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +\n           HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +\n           HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +\n           HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +\n           HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +\n           HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +\n           HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +\n           HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +\n           HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +\n           HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +\n           HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +\n           HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +\n           HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +\n           HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +\n           HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F];\n  };\n\n  Sha1.prototype.toString = Sha1.prototype.hex;\n\n  Sha1.prototype.digest = function () {\n    this.finalize();\n\n    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;\n\n    return [\n      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,\n      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,\n      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,\n      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,\n      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF\n    ];\n  };\n\n  Sha1.prototype.array = Sha1.prototype.digest;\n\n  Sha1.prototype.arrayBuffer = function () {\n    this.finalize();\n\n    var buffer = new ArrayBuffer(20);\n    var dataView = new DataView(buffer);\n    dataView.setUint32(0, this.h0);\n    dataView.setUint32(4, this.h1);\n    dataView.setUint32(8, this.h2);\n    dataView.setUint32(12, this.h3);\n    dataView.setUint32(16, this.h4);\n    return buffer;\n  };\n\n  var exports = createMethod();\n\n  if (COMMON_JS) {\n    module.exports = exports;\n  } else {\n    root.sha1 = exports;\n    if (AMD) {\n      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n        return exports;\n      }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n  }\n})();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/js-sha1/src/sha1.js?");

/***/ }),

/***/ "./node_modules/mersenne-twister/src/mersenne-twister.js":
/*!***************************************************************!*\
  !*** ./node_modules/mersenne-twister/src/mersenne-twister.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace\n  so it's better encapsulated. Now you can have multiple random number generators\n  and they won't stomp all over eachother's state.\n\n  If you want to use this as a substitute for Math.random(), use the random()\n  method like so:\n\n  var m = new MersenneTwister();\n  var randomNumber = m.random();\n\n  You can also call the other genrand_{foo}() methods on the instance.\n\n  If you want to use a specific seed in order to get a repeatable random\n  sequence, pass an integer into the constructor:\n\n  var m = new MersenneTwister(123);\n\n  and that will always produce the same random sequence.\n\n  Sean McCullough (banksean@gmail.com)\n*/\n\n/*\n   A C-program for MT19937, with initialization improved 2002/1/26.\n   Coded by Takuji Nishimura and Makoto Matsumoto.\n\n   Before using, initialize the state by using init_seed(seed)\n   or init_by_array(init_key, key_length).\n\n   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,\n   All rights reserved.\n\n   Redistribution and use in source and binary forms, with or without\n   modification, are permitted provided that the following conditions\n   are met:\n\n     1. Redistributions of source code must retain the above copyright\n        notice, this list of conditions and the following disclaimer.\n\n     2. Redistributions in binary form must reproduce the above copyright\n        notice, this list of conditions and the following disclaimer in the\n        documentation and/or other materials provided with the distribution.\n\n     3. The names of its contributors may not be used to endorse or promote\n        products derived from this software without specific prior written\n        permission.\n\n   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n   \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR\n   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF\n   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING\n   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\n   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n   Any feedback is very welcome.\n   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html\n   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)\n*/\n\nvar MersenneTwister = function(seed) {\n\tif (seed == undefined) {\n\t\tseed = new Date().getTime();\n\t}\n\n\t/* Period parameters */\n\tthis.N = 624;\n\tthis.M = 397;\n\tthis.MATRIX_A = 0x9908b0df;   /* constant vector a */\n\tthis.UPPER_MASK = 0x80000000; /* most significant w-r bits */\n\tthis.LOWER_MASK = 0x7fffffff; /* least significant r bits */\n\n\tthis.mt = new Array(this.N); /* the array for the state vector */\n\tthis.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */\n\n\tif (seed.constructor == Array) {\n\t\tthis.init_by_array(seed, seed.length);\n\t}\n\telse {\n\t\tthis.init_seed(seed);\n\t}\n}\n\n/* initializes mt[N] with a seed */\n/* origin name init_genrand */\nMersenneTwister.prototype.init_seed = function(s) {\n\tthis.mt[0] = s >>> 0;\n\tfor (this.mti=1; this.mti<this.N; this.mti++) {\n\t\tvar s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);\n\t\tthis.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)\n\t\t+ this.mti;\n\t\t/* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */\n\t\t/* In the previous versions, MSBs of the seed affect   */\n\t\t/* only MSBs of the array mt[].                        */\n\t\t/* 2002/01/09 modified by Makoto Matsumoto             */\n\t\tthis.mt[this.mti] >>>= 0;\n\t\t/* for >32 bit machines */\n\t}\n}\n\n/* initialize by an array with array-length */\n/* init_key is the array for initializing keys */\n/* key_length is its length */\n/* slight change for C++, 2004/2/26 */\nMersenneTwister.prototype.init_by_array = function(init_key, key_length) {\n\tvar i, j, k;\n\tthis.init_seed(19650218);\n\ti=1; j=0;\n\tk = (this.N>key_length ? this.N : key_length);\n\tfor (; k; k--) {\n\t\tvar s = this.mt[i-1] ^ (this.mt[i-1] >>> 30)\n\t\tthis.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))\n\t\t+ init_key[j] + j; /* non linear */\n\t\tthis.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */\n\t\ti++; j++;\n\t\tif (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }\n\t\tif (j>=key_length) j=0;\n\t}\n\tfor (k=this.N-1; k; k--) {\n\t\tvar s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);\n\t\tthis.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))\n\t\t- i; /* non linear */\n\t\tthis.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */\n\t\ti++;\n\t\tif (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }\n\t}\n\n\tthis.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */\n}\n\n/* generates a random number on [0,0xffffffff]-interval */\n/* origin name genrand_int32 */\nMersenneTwister.prototype.random_int = function() {\n\tvar y;\n\tvar mag01 = new Array(0x0, this.MATRIX_A);\n\t/* mag01[x] = x * MATRIX_A  for x=0,1 */\n\n\tif (this.mti >= this.N) { /* generate N words at one time */\n\t\tvar kk;\n\n\t\tif (this.mti == this.N+1)  /* if init_seed() has not been called, */\n\t\t\tthis.init_seed(5489);  /* a default initial seed is used */\n\n\t\tfor (kk=0;kk<this.N-this.M;kk++) {\n\t\t\ty = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);\n\t\t\tthis.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];\n\t\t}\n\t\tfor (;kk<this.N-1;kk++) {\n\t\t\ty = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);\n\t\t\tthis.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];\n\t\t}\n\t\ty = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);\n\t\tthis.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];\n\n\t\tthis.mti = 0;\n\t}\n\n\ty = this.mt[this.mti++];\n\n\t/* Tempering */\n\ty ^= (y >>> 11);\n\ty ^= (y << 7) & 0x9d2c5680;\n\ty ^= (y << 15) & 0xefc60000;\n\ty ^= (y >>> 18);\n\n\treturn y >>> 0;\n}\n\n/* generates a random number on [0,0x7fffffff]-interval */\n/* origin name genrand_int31 */\nMersenneTwister.prototype.random_int31 = function() {\n\treturn (this.random_int()>>>1);\n}\n\n/* generates a random number on [0,1]-real-interval */\n/* origin name genrand_real1 */\nMersenneTwister.prototype.random_incl = function() {\n\treturn this.random_int()*(1.0/4294967295.0);\n\t/* divided by 2^32-1 */\n}\n\n/* generates a random number on [0,1)-real-interval */\nMersenneTwister.prototype.random = function() {\n\treturn this.random_int()*(1.0/4294967296.0);\n\t/* divided by 2^32 */\n}\n\n/* generates a random number on (0,1)-real-interval */\n/* origin name genrand_real3 */\nMersenneTwister.prototype.random_excl = function() {\n\treturn (this.random_int() + 0.5)*(1.0/4294967296.0);\n\t/* divided by 2^32 */\n}\n\n/* generates a random number on [0,1) with 53-bit resolution*/\n/* origin name genrand_res53 */\nMersenneTwister.prototype.random_long = function() {\n\tvar a=this.random_int()>>>5, b=this.random_int()>>>6;\n\treturn(a*67108864.0+b)*(1.0/9007199254740992.0);\n}\n\n/* These real versions are due to Isaku Wada, 2002/01/09 added */\n\nmodule.exports = MersenneTwister;\n\n\n//# sourceURL=webpack:///./node_modules/mersenne-twister/src/mersenne-twister.js?");

/***/ }),

/***/ "./node_modules/polyfill-crypto.getrandomvalues/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/polyfill-crypto.getrandomvalues/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MersenneTwister = __webpack_require__(/*! mersenne-twister */ \"./node_modules/mersenne-twister/src/mersenne-twister.js\")\n\nvar twister = new MersenneTwister(Math.random()*Number.MAX_SAFE_INTEGER)\n\nmodule.exports = getRandomValues\n\n\nfunction getRandomValues (abv) {\n  var l = abv.length\n  while (l--) {\n    abv[l] = Math.floor(randomFloat() * 256)\n  }\n  return abv\n}\n\nfunction randomFloat() {\n  return twister.random()\n}\n\n//# sourceURL=webpack:///./node_modules/polyfill-crypto.getrandomvalues/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/esm-browser/v1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v1\", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/esm-browser/v3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v3\", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v4\", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/esm-browser/v5.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v5\", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ \"./node_modules/uuid/dist/esm-browser/nil.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NIL\", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ \"./node_modules/uuid/dist/esm-browser/version.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stringify\", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"parse\", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * Browser-compatible JavaScript MD5\n *\n * Modification of JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\nfunction md5(bytes) {\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Uint8Array(msg.length);\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));\n}\n/*\n * Convert an array of little-endian words to an array of bytes\n */\n\n\nfunction md5ToHexEncodedArray(input) {\n  var output = [];\n  var length32 = input.length * 32;\n  var hexTab = '0123456789abcdef';\n\n  for (var i = 0; i < length32; i += 8) {\n    var x = input[i >> 5] >>> i % 32 & 0xff;\n    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);\n    output.push(hex);\n  }\n\n  return output;\n}\n/**\n * Calculate output length with padding and bit length\n */\n\n\nfunction getOutputLength(inputLength8) {\n  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;\n}\n/*\n * Calculate the MD5 of an array of little-endian words, and a bit length.\n */\n\n\nfunction wordsToMd5(x, len) {\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[getOutputLength(len) - 1] = len;\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n\n  for (var i = 0; i < x.length; i += 16) {\n    var olda = a;\n    var oldb = b;\n    var oldc = c;\n    var oldd = d;\n    a = md5ff(a, b, c, d, x[i], 7, -680876936);\n    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5gg(b, c, d, a, x[i], 20, -373897302);\n    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5hh(d, a, b, c, x[i], 11, -358537222);\n    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n    a = md5ii(a, b, c, d, x[i], 6, -198630844);\n    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n    a = safeAdd(a, olda);\n    b = safeAdd(b, oldb);\n    c = safeAdd(c, oldc);\n    d = safeAdd(d, oldd);\n  }\n\n  return [a, b, c, d];\n}\n/*\n * Convert an array bytes to an array of little-endian words\n * Characters >255 have their high-byte silently ignored.\n */\n\n\nfunction bytesToWords(input) {\n  if (input.length === 0) {\n    return [];\n  }\n\n  var length8 = input.length * 8;\n  var output = new Uint32Array(getOutputLength(length8));\n\n  for (var i = 0; i < length8; i += 8) {\n    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;\n  }\n\n  return output;\n}\n/*\n * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n * to work around bugs in some JS interpreters.\n */\n\n\nfunction safeAdd(x, y) {\n  var lsw = (x & 0xffff) + (y & 0xffff);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xffff;\n}\n/*\n * Bitwise rotate a 32-bit number to the left.\n */\n\n\nfunction bitRotateLeft(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n/*\n * These functions implement the four basic operations the algorithm uses.\n */\n\n\nfunction md5cmn(q, a, b, x, s, t) {\n  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n}\n\nfunction md5ff(a, b, c, d, x, s, t) {\n  return md5cmn(b & c | ~b & d, a, b, x, s, t);\n}\n\nfunction md5gg(a, b, c, d, x, s, t) {\n  return md5cmn(b & d | c & ~d, a, b, x, s, t);\n}\n\nfunction md5hh(a, b, c, d, x, s, t) {\n  return md5cmn(b ^ c ^ d, a, b, x, s, t);\n}\n\nfunction md5ii(a, b, c, d, x, s, t) {\n  return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (md5);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('00000000-0000-0000-0000-000000000000');\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/nil.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction parse(uuid) {\n  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  var v;\n  var arr = new Uint8Array(16); // Parse ########-....-....-....-............\n\n  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;\n  arr[1] = v >>> 16 & 0xff;\n  arr[2] = v >>> 8 & 0xff;\n  arr[3] = v & 0xff; // Parse ........-####-....-....-............\n\n  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;\n  arr[5] = v & 0xff; // Parse ........-....-####-....-............\n\n  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;\n  arr[7] = v & 0xff; // Parse ........-....-....-####-............\n\n  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;\n  arr[9] = v & 0xff; // Parse ........-....-....-....-############\n  // (Use \"/\" to avoid 32-bit truncation when bit-shifting high-order bytes)\n\n  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;\n  arr[11] = v / 0x100000000 & 0xff;\n  arr[12] = v >>> 24 & 0xff;\n  arr[13] = v >>> 16 & 0xff;\n  arr[14] = v >>> 8 & 0xff;\n  arr[15] = v & 0xff;\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parse);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/parse.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rng; });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Adapted from Chris Veness' SHA1 code at\n// http://www.movable-type.co.uk/scripts/sha1.html\nfunction f(s, x, y, z) {\n  switch (s) {\n    case 0:\n      return x & y ^ ~x & z;\n\n    case 1:\n      return x ^ y ^ z;\n\n    case 2:\n      return x & y ^ x & z ^ y & z;\n\n    case 3:\n      return x ^ y ^ z;\n  }\n}\n\nfunction ROTL(x, n) {\n  return x << n | x >>> 32 - n;\n}\n\nfunction sha1(bytes) {\n  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];\n  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];\n\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = [];\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes.push(msg.charCodeAt(i));\n    }\n  } else if (!Array.isArray(bytes)) {\n    // Convert Array-like to Array\n    bytes = Array.prototype.slice.call(bytes);\n  }\n\n  bytes.push(0x80);\n  var l = bytes.length / 4 + 2;\n  var N = Math.ceil(l / 16);\n  var M = new Array(N);\n\n  for (var _i = 0; _i < N; ++_i) {\n    var arr = new Uint32Array(16);\n\n    for (var j = 0; j < 16; ++j) {\n      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];\n    }\n\n    M[_i] = arr;\n  }\n\n  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);\n  M[N - 1][14] = Math.floor(M[N - 1][14]);\n  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;\n\n  for (var _i2 = 0; _i2 < N; ++_i2) {\n    var W = new Uint32Array(80);\n\n    for (var t = 0; t < 16; ++t) {\n      W[t] = M[_i2][t];\n    }\n\n    for (var _t = 16; _t < 80; ++_t) {\n      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);\n    }\n\n    var a = H[0];\n    var b = H[1];\n    var c = H[2];\n    var d = H[3];\n    var e = H[4];\n\n    for (var _t2 = 0; _t2 < 80; ++_t2) {\n      var s = Math.floor(_t2 / 20);\n      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;\n      e = d;\n      d = c;\n      c = ROTL(b, 30) >>> 0;\n      b = a;\n      a = T;\n    }\n\n    H[0] = H[0] + a >>> 0;\n    H[1] = H[1] + b >>> 0;\n    H[2] = H[2] + c >>> 0;\n    H[3] = H[3] + d >>> 0;\n    H[4] = H[4] + e >>> 0;\n  }\n\n  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sha1);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stringify);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || new Array(16);\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v1);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/esm-browser/md5.js\");\n\n\nvar v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v3);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DNS\", function() { return DNS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL\", function() { return URL; });\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n\n\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  var bytes = [];\n\n  for (var i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nvar DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nvar URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(namespace);\n    }\n\n    if (namespace.length !== 16) {\n      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');\n    } // Compute hash of namespace and value, Per 4.3\n    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =\n    // hashfunc([...namespace, ... value])`\n\n\n    var bytes = new Uint8Array(16 + value.length);\n    bytes.set(namespace);\n    bytes.set(value, namespace.length);\n    bytes = hashfunc(bytes);\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (var i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n});\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v4);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/esm-browser/sha1.js\");\n\n\nvar v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v5);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction version(uuid) {\n  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.substr(14, 1), 16);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (version);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/version.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/api/apiManager.js":
/*!*******************************!*\
  !*** ./src/api/apiManager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ApiManager; });\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"./node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baseApi */ \"./src/api/baseApi.js\");\n/* harmony import */ var _storage_storageQueue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage/storageQueue */ \"./src/storage/storageQueue.js\");\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _conversionEventApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conversionEventApi */ \"./src/api/conversionEventApi.js\");\n/* harmony import */ var _pageVisitApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pageVisitApi */ \"./src/api/pageVisitApi.js\");\n/* harmony import */ var _eventApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eventApi */ \"./src/api/eventApi.js\");\n/* harmony import */ var _customUserIdApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customUserIdApi */ \"./src/api/customUserIdApi.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ApiManager =\n/*#__PURE__*/\nfunction () {\n  function ApiManager() {\n    var _this = this;\n\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ApiManager);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, \"_tabClosed\", function () {\n      _this._skipFailed = true;\n      return _this._startSendingApis();\n    });\n\n    this._setSupportedApis();\n\n    this._skipFailed = false;\n    this._isSendingApis = false;\n    this._storageQueue = new _storage_storageQueue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n    window.addEventListener(_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"BrowserEvents\"].TabClosed, this._tabClosed);\n\n    this._startSendingApis();\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ApiManager, [{\n    key: \"sendApi\",\n    value: function sendApi(api) {\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isNullOrEmpty(api) || !(api instanceof _baseApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"])) {\n        return;\n      }\n\n      this._storageQueue.enqueue(api);\n\n      return this._startSendingApis();\n    }\n  }, {\n    key: \"_startSendingApis\",\n    value: function () {\n      var _startSendingApis2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var api, result;\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!this._isSendingApis) {\n                  _context.next = 2;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 2:\n                this._isSendingApis = true;\n\n              case 3:\n                if (this._storageQueue.isQueueEmpty()) {\n                  _context.next = 13;\n                  break;\n                }\n\n                api = this._storageQueue.peek();\n                _context.next = 7;\n                return api.sendRequest();\n\n              case 7:\n                result = _context.sent;\n\n                if (!(!result && !this._skipFailed)) {\n                  _context.next = 10;\n                  break;\n                }\n\n                return _context.abrupt(\"break\", 13);\n\n              case 10:\n                this._storageQueue.dequeue();\n\n                _context.next = 3;\n                break;\n\n              case 13:\n                this._isSendingApis = false;\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function _startSendingApis() {\n        return _startSendingApis2.apply(this, arguments);\n      }\n\n      return _startSendingApis;\n    }()\n  }, {\n    key: \"_setSupportedApis\",\n    value: function _setSupportedApis() {\n      var _BaseApi$apiClasses;\n\n      _baseApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"].apiClasses = (_BaseApi$apiClasses = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_BaseApi$apiClasses, _consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"EventTypes\"].ConversionEventApi, _conversionEventApi__WEBPACK_IMPORTED_MODULE_9__[\"default\"]), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_BaseApi$apiClasses, _consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"EventTypes\"].CustomUserIdEventApi, _customUserIdApi__WEBPACK_IMPORTED_MODULE_12__[\"default\"]), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_BaseApi$apiClasses, _consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"EventTypes\"].EventApi, _eventApi__WEBPACK_IMPORTED_MODULE_11__[\"default\"]), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_BaseApi$apiClasses, _consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"EventTypes\"].PageVisitApi, _pageVisitApi__WEBPACK_IMPORTED_MODULE_10__[\"default\"]), _BaseApi$apiClasses);\n    }\n  }]);\n\n  return ApiManager;\n}();\n\n\n\n//# sourceURL=webpack:///./src/api/apiManager.js?");

/***/ }),

/***/ "./src/api/bannerApi.js":
/*!******************************!*\
  !*** ./src/api/bannerApi.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BannerApi; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"./node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/get */ \"./node_modules/@babel/runtime-corejs3/helpers/get.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ \"./node_modules/@babel/runtime-corejs3/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./baseApi */ \"./src/api/baseApi.js\");\n/* harmony import */ var _singular_singularState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../singular/singularState */ \"./src/singular/singularState.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singular_singularLog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../singular/singularLog */ \"./src/singular/singularLog.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar BannerApi =\n/*#__PURE__*/\nfunction (_BaseApi) {\n  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(BannerApi, _BaseApi);\n\n  function BannerApi() {\n    var _this$_params;\n\n    var _this;\n\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, BannerApi);\n\n    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BannerApi).call(this));\n    _this._apiType = _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"EventTypes\"].FetchBannerApi;\n    _this._method = _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Request\"].GetMethod;\n    _this._endpoint = _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Request\"].Endpoints.FetchBanner;\n    var singularInstance = _singular_singularState__WEBPACK_IMPORTED_MODULE_12__[\"default\"].getInstance();\n    _this._params = (_this$_params = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].Owner, singularInstance.getSingularConfig().apikey), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].Locale, navigator.language), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].CurrentDeviceTime, _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].getCurrentTimestamp()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].Timezone, _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].getTimeZone()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].BannerShowsCounter, '1'), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].Keyspace, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].SingularDeviceId), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].ProductId, singularInstance.getSingularConfig().productId), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].IsFirstVisit, singularInstance.isFirstVisit()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].SdkVersion, _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].getSdkVersion()), _this$_params);\n    return _this;\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(BannerApi, [{\n    key: \"sendRequest\",\n    value: function () {\n      var _sendRequest = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(bannerLastDismissed) {\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].BannerSourceUrl] = location.href;\n\n                if (bannerLastDismissed) {\n                  this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Params\"].LastDismissed] = bannerLastDismissed;\n                }\n\n                _context.next = 4;\n                return _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BannerApi.prototype), \"sendRequest\", this).call(this);\n\n              case 4:\n                return _context.abrupt(\"return\", _context.sent);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function sendRequest(_x) {\n        return _sendRequest.apply(this, arguments);\n      }\n\n      return sendRequest;\n    }()\n  }, {\n    key: \"_buildRequestUrl\",\n    value: function _buildRequestUrl(queryString) {\n      var _context2, _context3;\n\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = \"\".concat(_consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Request\"].BaseUrl.replace('v1/', ''))).call(_context3, this._endpoint)).call(_context2, queryString);\n    }\n  }, {\n    key: \"isValidResponse\",\n    value: function isValidResponse(response) {\n      //validate keys\n      var display = response.display,\n          meta = response.meta;\n\n      if (!display || !meta) {\n        _singular_singularLog__WEBPACK_IMPORTED_MODULE_14__[\"default\"].debug(\"BannerApi.isValidResponse: missing display or meta keys\");\n        return false;\n      }\n\n      return _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Request\"].FetchBannerResponseLinkKey in meta;\n    }\n  }, {\n    key: \"handleResponse\",\n    value: function handleResponse(request) {\n      try {\n        _singular_singularLog__WEBPACK_IMPORTED_MODULE_14__[\"default\"].debug(\"handeling response of banner request: \".concat(request));\n        var response = JSON.parse(request.responseText);\n\n        if (!response) {\n          return;\n        }\n\n        var validResponse = request.status === _consts_constants__WEBPACK_IMPORTED_MODULE_10__[\"Request\"].ValidResponseCode && this.isValidResponse(response);\n\n        if (!validResponse) {\n          _singular_singularLog__WEBPACK_IMPORTED_MODULE_14__[\"default\"].debug(\"response is not valid\");\n          return;\n        }\n\n        return response;\n      } catch (e) {\n        _singular_singularLog__WEBPACK_IMPORTED_MODULE_14__[\"default\"].debug(\"error processing response\");\n      }\n    }\n  }]);\n\n  return BannerApi;\n}(_baseApi__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/api/bannerApi.js?");

/***/ }),

/***/ "./src/api/baseApi.js":
/*!****************************!*\
  !*** ./src/api/baseApi.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseApi; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/create */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/entries */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"./node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _singular_singularState__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../singular/singularState */ \"./src/singular/singularState.js\");\n/* harmony import */ var _singular_singularLog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../singular/singularLog */ \"./src/singular/singularLog.js\");\n/* harmony import */ var _storage_dynamicStorage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../storage/dynamicStorage */ \"./src/storage/dynamicStorage.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_16___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context13; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_12___default()(_context13 = ownKeys(source, true)).call(_context13, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context14; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_12___default()(_context14 = ownKeys(source)).call(_context14, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar BaseApi =\n/*#__PURE__*/\nfunction () {\n  function BaseApi() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default()(this, BaseApi);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(this, \"_endpoint\", void 0);\n\n    this._extra = {};\n    this._method = _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].PostMethod;\n    this.initApiParams();\n    _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().updateLastEventTimestamp();\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default()(BaseApi, [{\n    key: \"initApiParams\",\n    value: function initApiParams() {\n      var _this$_params;\n\n      this._params = (_this$_params = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].BrowserAvailableMemory, _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getBrowserAvailableMemory()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].BrowserUsedMemory, _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getBrowserUsedMemory()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].CustomUserId, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getCustomUserId()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].CurrentDeviceTime, _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getCurrentTimestamp()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].EventId, _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].generateUUID()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].IsConversion, false), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].Keyspace, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].SingularDeviceId), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].Owner, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSingularConfig().apikey), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].Platform, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].PlatformWeb), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].ProductId, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSingularConfig().productId), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].ScreenHeight, window.screen.height), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].ScreenWidth, window.screen.width), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].SdkVersion, _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getSdkVersion()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].SingularInstanceId, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSingularInstanceId()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].SingularDeviceId.toLowerCase(), _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSingularDeviceId()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].StorageType, _storage_dynamicStorage__WEBPACK_IMPORTED_MODULE_27__[\"default\"].getAvailableStorageType()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].Timezone, _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getTimeZone()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].TouchpointTimestamp, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getTouchpointTimestamp()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].UserAgent, navigator.userAgent), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].UUID, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSingularDeviceId()), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(_this$_params, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].GlobalProperties, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getGlobalProperties() && _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default()(_singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getGlobalProperties())), _this$_params);\n    }\n  }, {\n    key: \"sendRequest\",\n    value: function () {\n      var _sendRequest = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_18___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee() {\n        var _this = this;\n\n        var clientHints;\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getOS();\n\n              case 2:\n                this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].OS] = _context2.sent;\n                _context2.next = 5;\n                return _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getClientHints();\n\n              case 5:\n                clientHints = _context2.sent;\n\n                if (clientHints) {\n                  this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].ClientHints] = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default()(clientHints);\n                }\n\n                return _context2.abrupt(\"return\", new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_17___default.a(function (resolve) {\n                  var _context;\n\n                  if (_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_16___default()(_this._extra).length > 0) {\n                    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].Extra] = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default()(_this._extra);\n                  } // All events should get their session id here except for page visit that get it on init\n\n\n                  if (!_this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].SessionId]) {\n                    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].SessionId] = _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSessionId();\n                  }\n\n                  var params = _objectSpread({}, _this._params, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()({}, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].Lag, _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].getCurrentTimestamp() - _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_15___default()(_this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].CurrentDeviceTime])));\n\n                  var body = _this._method === _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].PostMethod ? _this._buildRequestBody(params) : null;\n\n                  var queryParams = _this._buildQueryParams(params);\n\n                  var url = _this._buildRequestUrl(queryParams);\n\n                  _singular_singularLog__WEBPACK_IMPORTED_MODULE_26__[\"default\"].debug(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14___default()(_context = \"Sending api request\\nUrl:\".concat(url, \"\\nBody:\")).call(_context, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default()(body)));\n                  var request = new XMLHttpRequest();\n                  request.open(_this._method || _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].PostMethod, url, true);\n                  request.setRequestHeader(_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].ContentType, _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].ContentTypeValue);\n                  request.timeout = _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].RequestTimeoutMs;\n\n                  request.ontimeout = function () {\n                    resolve(false);\n                  };\n\n                  request.onreadystatechange = function () {\n                    // The ready state of the request is still XMLHttpRequest.DONE even if the request failed\n                    if (request.readyState === XMLHttpRequest.DONE) {\n                      resolve(_this.handleResponse(request));\n                    }\n                  };\n\n                  request.send(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default()(body));\n                }));\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function sendRequest() {\n        return _sendRequest.apply(this, arguments);\n      }\n\n      return sendRequest;\n    }()\n  }, {\n    key: \"handleResponse\",\n    value: function handleResponse(request) {\n      try {\n        var response = JSON.parse(request.responseText);\n        return request.status === _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].ValidResponseCode && response[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].Status] === _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].ValidResponse;\n      } catch (e) {\n        return false;\n      }\n    }\n  }, {\n    key: \"_buildRequestBody\",\n    value: function _buildRequestBody(params) {\n      var _context3, _context4;\n\n      var payload = {};\n\n      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_12___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11___default()(_context4 = _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_10___default()(params)).call(_context4, function (_ref) {\n        var _context5;\n\n        var _ref2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_ref, 2),\n            key = _ref2[0],\n            value = _ref2[1];\n\n        return _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default()(_context5 = _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].PostParams).call(_context5, key) && !_utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].isNullOrEmpty(value);\n      })).call(_context3, function (_ref3) {\n        var _ref4 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_ref3, 2),\n            key = _ref4[0],\n            value = _ref4[1];\n\n        payload[key] = value;\n      });\n\n      if (_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_16___default()(payload).length === 0) {\n        return {};\n      }\n\n      var payloadString = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default()(payload);\n\n      return {\n        payload: payloadString,\n        signature: _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].calculateHash(payloadString, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSingularConfig().secret)\n      };\n    }\n  }, {\n    key: \"_buildQueryParams\",\n    value: function _buildQueryParams(params) {\n      var _context6,\n          _context7,\n          _this2 = this,\n          _context10;\n\n      // Build the request url with all the query params that are not in the POST body\n      var queryParams = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11___default()(_context7 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_16___default()(params)).call(_context7, function (param) {\n        var _context8;\n\n        if (_utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].isNullOrEmpty(params[param])) {\n          return false;\n        }\n\n        return _this2._method !== _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].PostMethod || !_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default()(_context8 = _consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].PostParams).call(_context8, param);\n      })).call(_context6, function (key) {\n        var _context9;\n\n        return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14___default()(_context9 = \"\".concat(encodeURIComponent(key), \"=\")).call(_context9, encodeURIComponent(params[key]));\n      });\n\n      var queryString = \"?\".concat(queryParams.join('&'));\n      var hash = _utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].calculateHash(queryString, _singular_singularState__WEBPACK_IMPORTED_MODULE_25__[\"default\"].getInstance().getSingularConfig().secret);\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14___default()(_context10 = \"\".concat(queryString, \"&h=\")).call(_context10, hash);\n    }\n  }, {\n    key: \"_buildRequestUrl\",\n    value: function _buildRequestUrl(queryString) {\n      var _context11, _context12;\n\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14___default()(_context11 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_14___default()(_context12 = \"\".concat(_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Request\"].BaseUrl)).call(_context12, this._endpoint)).call(_context11, queryString);\n    }\n  }, {\n    key: \"eventId\",\n    get: function get() {\n      return this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_24__[\"Params\"].EventId];\n    }\n  }], [{\n    key: \"toJsonString\",\n    value: function toJsonString(api) {\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].isNullOrEmpty(api)) {\n        return null;\n      }\n\n      return _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_19___default()(api);\n    }\n  }, {\n    key: \"fromJsonString\",\n    value: function fromJsonString(json) {\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_23__[\"default\"].isNullOrEmpty(json)) {\n        return null;\n      }\n\n      var apiData = JSON.parse(json); // The parsed object is BaseApi by default. I need to cast it to it's original type when parsing from json\n      // We use Object.create in order to support IE10\n\n      var api = _babel_runtime_corejs3_core_js_stable_object_create__WEBPACK_IMPORTED_MODULE_6___default()(this.apiClasses[apiData._apiType].prototype);\n\n      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5___default()(api, apiData);\n\n      return api;\n    }\n  }]);\n\n  return BaseApi;\n}();\n\n_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22___default()(BaseApi, \"apiClasses\", {});\n\n\n\n//# sourceURL=webpack:///./src/api/baseApi.js?");

/***/ }),

/***/ "./src/api/conversionEventApi.js":
/*!***************************************!*\
  !*** ./src/api/conversionEventApi.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConversionEventApi; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ \"./node_modules/@babel/runtime-corejs3/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _eventApi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eventApi */ \"./src/api/eventApi.js\");\n/* harmony import */ var _singular_singularState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../singular/singularState */ \"./src/singular/singularState.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(source, true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(source)).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\n\n\nvar ConversionEventApi =\n/*#__PURE__*/\nfunction (_EventApi) {\n  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(ConversionEventApi, _EventApi);\n\n  function ConversionEventApi(eventName) {\n    var _objectSpread2;\n\n    var _this;\n\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default()(this, ConversionEventApi);\n\n    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(ConversionEventApi).call(this, eventName));\n    _this._apiType = _consts_constants__WEBPACK_IMPORTED_MODULE_13__[\"EventTypes\"].ConversionEventApi;\n    _this._params = _objectSpread({}, _this._params, (_objectSpread2 = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread2, _consts_constants__WEBPACK_IMPORTED_MODULE_13__[\"Params\"].IsConversion, true), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread2, _consts_constants__WEBPACK_IMPORTED_MODULE_13__[\"Params\"].WebUrl, _singular_singularState__WEBPACK_IMPORTED_MODULE_15__[\"default\"].getInstance().getWebUrl()), _objectSpread2));\n    return _this;\n  }\n\n  return ConversionEventApi;\n}(_eventApi__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/api/conversionEventApi.js?");

/***/ }),

/***/ "./src/api/customUserIdApi.js":
/*!************************************!*\
  !*** ./src/api/customUserIdApi.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomUserIdApi; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ \"./node_modules/@babel/runtime-corejs3/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baseApi */ \"./src/api/baseApi.js\");\n\n\n\n\n\n\n\nvar CustomUserIdApi =\n/*#__PURE__*/\nfunction (_BaseApi) {\n  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CustomUserIdApi, _BaseApi);\n\n  function CustomUserIdApi() {\n    var _this;\n\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CustomUserIdApi);\n\n    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(CustomUserIdApi).call(this));\n    _this._apiType = _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"EventTypes\"].CustomUserIdEventApi;\n    _this._endpoint = _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Request\"].Endpoints.DeviceCustomUserId;\n    return _this;\n  }\n\n  return CustomUserIdApi;\n}(_baseApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/api/customUserIdApi.js?");

/***/ }),

/***/ "./src/api/eventApi.js":
/*!*****************************!*\
  !*** ./src/api/eventApi.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventApi; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ \"./node_modules/@babel/runtime-corejs3/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./baseApi */ \"./src/api/baseApi.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singular_singularState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../singular/singularState */ \"./src/singular/singularState.js\");\n/* harmony import */ var _consts_cookies__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../consts/cookies */ \"./src/consts/cookies.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(source, true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(source)).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar EventApi =\n/*#__PURE__*/\nfunction (_BaseApi) {\n  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default()(EventApi, _BaseApi);\n\n  function EventApi(eventName) {\n    var _objectSpread2;\n\n    var _this;\n\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default()(this, EventApi);\n\n    if (_utils_utils__WEBPACK_IMPORTED_MODULE_16__[\"default\"].isNullOrEmpty(eventName)) {\n      throw new Error('eventName must not be null or empty');\n    }\n\n    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(EventApi).call(this));\n    _this._apiType = _consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"EventTypes\"].EventApi;\n    _this._endpoint = _consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Request\"].Endpoints.Event;\n    _this._params = _objectSpread({}, _this._params, (_objectSpread2 = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread2, _consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].EventProductName, _singular_singularState__WEBPACK_IMPORTED_MODULE_17__[\"default\"].getInstance().getSingularConfig().productName), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread2, _consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].EventName, eventName), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread2, _consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].IsRevenueEvent, false), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread2, _consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].IsFirstEvent, _singular_singularState__WEBPACK_IMPORTED_MODULE_17__[\"default\"].getInstance().IsFirstEvent(eventName)), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread2, _consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].isAfterConversionEvent, _this._getIsAfterConversionEvent()), _objectSpread2));\n    return _this;\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default()(EventApi, [{\n    key: \"_getIsAfterConversionEvent\",\n    value: function _getIsAfterConversionEvent() {\n      var singularState = _singular_singularState__WEBPACK_IMPORTED_MODULE_17__[\"default\"].getInstance();\n      var isFirstPageVisitOccurred = singularState.getFirstPageVisitOccurred();\n      var hasConversionEventOccurred = singularState.getConversionEventOccurred(); // isFirstAfterConversionEvent should be true if:\n      // 1. First page visit has occurred\n      // 2. A conversion event has occurred (marketing params detected)\n\n      var isFirstAfterConversionEvent = isFirstPageVisitOccurred && hasConversionEventOccurred;\n\n      if (isFirstAfterConversionEvent) {\n        // Always reset conversion event flag when this is the first after conversion event\n        singularState.setConversionEventOccurred(false); // Only return true if within 30 days of touchpoint timestamp\n\n        var touchpointTimestamp = singularState.getTouchpointTimestamp();\n\n        if (touchpointTimestamp && _utils_utils__WEBPACK_IMPORTED_MODULE_16__[\"default\"].getCurrentTimestamp() - touchpointTimestamp < _consts_cookies__WEBPACK_IMPORTED_MODULE_18__[\"ThirtyDaysInSeconds\"]) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"withRevenue\",\n    value: function withRevenue(currency, amount) {\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_16__[\"default\"].isNullOrEmpty(currency)) {\n        throw new Error('Currency must not be null or empty');\n      } else if (_utils_utils__WEBPACK_IMPORTED_MODULE_16__[\"default\"].isNullOrEmpty(amount)) {\n        throw new Error('Amount must not be null or empty');\n      }\n\n      this._extra[_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].RevenueCurrency] = currency;\n      this._extra[_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].RevenueAmount] = amount;\n      this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].IsRevenueEvent] = true;\n      return this;\n    }\n  }, {\n    key: \"withArgs\",\n    value: function withArgs(args) {\n      if (!args || _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(args).length === 0) {\n        return this;\n      }\n\n      this._extra = _objectSpread({}, this._extra, {}, args);\n      return this;\n    }\n  }, {\n    key: \"withParams\",\n    value: function withParams(params) {\n      if (!params || _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(params).length === 0) {\n        return this;\n      }\n\n      this._params = _objectSpread({}, this._params, {}, params);\n      return this;\n    }\n  }]);\n\n  return EventApi;\n}(_baseApi__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/api/eventApi.js?");

/***/ }),

/***/ "./src/api/pageVisitApi.js":
/*!*********************************!*\
  !*** ./src/api/pageVisitApi.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageVisitApi; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/get */ \"./node_modules/@babel/runtime-corejs3/helpers/get.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ \"./node_modules/@babel/runtime-corejs3/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _conversionEventApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversionEventApi */ \"./src/api/conversionEventApi.js\");\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singular_singularState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../singular/singularState */ \"./src/singular/singularState.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar PageVisitApi =\n/*#__PURE__*/\nfunction (_ConversionEventApi) {\n  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PageVisitApi, _ConversionEventApi);\n\n  function PageVisitApi() {\n    var _this;\n\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PageVisitApi);\n\n    // We get the session id before the super constructor because baseApi updates the last event\n    // Timestamp and that will prevent from generating a new session id if needed\n    var sessionId = _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getSessionIdForPageVisit();\n    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PageVisitApi).call(this, _consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"EventTypes\"].PageVisitEventName));\n    _this._apiType = _consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"EventTypes\"].PageVisitApi;\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].SessionId] = sessionId;\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].WebUrl] = window.location.href;\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].DocumentReferrer] = document.referrer;\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].IsFirstVisit] = _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().isFirstVisit();\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].IsPageRefreshed] = _utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isPageRefreshed();\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].SdidPersistMode] = _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getSdidPersistMode(); // If we already had a page visit event, we want to send \"false\" and vice versa, so we're taking the opposite\n    // value to firstPageVisitOccurred value\n\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].IsFirstPageVisitInSession] = !_singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getFirstPageVisitOccurred();\n    _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].ECID] = _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getMatchID() || _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getSingularDeviceId();\n    var failReason = _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getSdidPersistFailReason();\n\n    if (!_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isNullOrEmpty(failReason)) {\n      _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].SdidPersistFailedReason] = failReason;\n    }\n\n    var prevSdid = _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getPreviousSdid();\n\n    if (!_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isNullOrEmpty(prevSdid)) {\n      _this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].PreviousSdid] = prevSdid;\n    }\n\n    return _this;\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PageVisitApi, [{\n    key: \"_getIsAfterConversionEvent\",\n    value: function _getIsAfterConversionEvent() {\n      // PageVisitApi should always return false for isFirstAfterConversionEvent\n      return false;\n    }\n  }, {\n    key: \"handleResponse\",\n    value: function handleResponse(request) {\n      var isSuccess = _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PageVisitApi.prototype), \"handleResponse\", this).call(this, request);\n\n      if (isSuccess) {\n        _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().saveSessionId(this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].SessionId]);\n\n        if (!_singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().getFirstPageVisitOccurred()) {\n          _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().setFirstPageVisitURL(this._params[_consts_constants__WEBPACK_IMPORTED_MODULE_7__[\"Params\"].WebUrl]);\n          _singular_singularState__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getInstance().setFirstPageVisitOccurred(true);\n        }\n      }\n\n      return isSuccess;\n    }\n  }]);\n\n  return PageVisitApi;\n}(_conversionEventApi__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/api/pageVisitApi.js?");

/***/ }),

/***/ "./src/banners/bannerManager.js":
/*!**************************************!*\
  !*** ./src/banners/bannerManager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BannerManager; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-interval */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/entries */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/url.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"./node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _api_bannerApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/bannerApi */ \"./src/api/bannerApi.js\");\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _singular_singularState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../singular/singularState */ \"./src/singular/singularState.js\");\n/* harmony import */ var _singular_singular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../singular/singular */ \"./src/singular/singular.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singular_singularLog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../singular/singularLog */ \"./src/singular/singularLog.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CLASS_PREFIX = \"singular-banner-\";\nvar BANNER_SOURCE = \"Organic Banner\";\n\nvar BannerManager =\n/*#__PURE__*/\nfunction () {\n  function BannerManager() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, BannerManager);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(this, \"getBannerLastDismissed\", function () {\n      return _singular_singularState__WEBPACK_IMPORTED_MODULE_15__[\"default\"].getInstance()._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Storage\"].BannerLastDismissedKey);\n    });\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(this, \"setBannerLastDismissed\", function () {\n      _singular_singularState__WEBPACK_IMPORTED_MODULE_15__[\"default\"].getInstance()._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Storage\"].BannerLastDismissedKey, _utils_utils__WEBPACK_IMPORTED_MODULE_17__[\"default\"].getCurrentTimestamp());\n    });\n\n    this.isShowingBanner = false;\n    this.bannersAPI = new _api_bannerApi__WEBPACK_IMPORTED_MODULE_13__[\"default\"]();\n    this.bannerElement = this.htmlToElement(this.fetchTemplate());\n    this.bannerStyle = null;\n    this.closeButton = this.bannerElement.getElementsByClassName('singular-banner-close-button')[0];\n    this.downloadButton = this.bannerElement.getElementsByClassName('singular-banner-download-button')[0]; // We need these to remove event listeners\n\n    this.onCloseClick;\n    this.onDownloadClick;\n    this.urlChangeInterval;\n  } // TODO: The template should be a static resource \n\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default()(BannerManager, [{\n    key: \"fetchTemplate\",\n    value: function fetchTemplate() {\n      return \"<div id=\\\"singular-banner\\\">\\n        <img class=\\\"singular-banner-background-image\\\">\\n        <img class=\\\"singular-banner-logo\\\">\\n        <div class=\\\"singular-banner-content\\\">\\n          <span class=\\\"singular-banner-title\\\"></span>\\n          <span class=\\\"singular-banner-subtitle\\\"></span>\\n        </div>\\n        <svg class=\\\"singular-banner-close-button\\\" version=\\\"1.1\\\" id=\\\"Layer_1\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 13 13\\\" xml:space=\\\"preserve\\\"><g><g><path id=\\\"icon_remove\\\" d=\\\"M7.6,6.1l4.4,4.4c0.4,0.4,0.4,1,0,1.4s-1,0.4-1.4,0L6.1,7.6L1.7,12c-0.4,0.4-1,0.4-1.4,0\\n            c-0.4-0.4-0.4-1,0-1.4l4.4-4.4L0.3,1.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l4.4,4.4l4.4-4.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4\\n            L7.6,6.1z\\\"></path></g></g></svg>\\n        <div class=\\\"singular-banner-download-button\\\"></div>\\n      </div>\";\n    }\n  }, {\n    key: \"fetchBanner\",\n    value: function fetchBanner() {\n      return this.bannersAPI.sendRequest(this.getBannerLastDismissed());\n    }\n  }, {\n    key: \"showBanner\",\n    value: function () {\n      var _showBanner = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee(linkParamOverride) {\n        var banner;\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!this.isShowingBanner) {\n                  _context.next = 2;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 2:\n                this.isShowingBanner = true;\n                _context.next = 5;\n                return this.fetchBanner();\n\n              case 5:\n                banner = _context.sent;\n\n                if (banner) {\n                  _context.next = 8;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 8:\n                this.renderBanner(banner, linkParamOverride);\n                this.sendImpression(banner);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function showBanner(_x) {\n        return _showBanner.apply(this, arguments);\n      }\n\n      return showBanner;\n    }()\n  }, {\n    key: \"hideBanner\",\n    value: function hideBanner() {\n      this.isShowingBanner = false;\n      this.closeButton.removeEventListener('click', this.onCloseClick);\n      this.downloadButton.removeEventListener('click', this.onDownloadClick);\n      this.removeUrlChangeListener();\n      this.bannerElement.remove();\n      this.bannerStyle.remove();\n    }\n  }, {\n    key: \"isValidUrl\",\n    value: function isValidUrl(string) {\n      try {\n        var url = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_7___default.a(string);\n        return url.protocol === 'http:' || url.protocol === 'https:';\n      } catch (_) {\n        return false;\n      }\n    }\n  }, {\n    key: \"setBannerStyle\",\n    value: function setBannerStyle(css, onLoad) {\n      if (this.isValidUrl(css)) {\n        this.bannerStyle = document.createElement('link');\n        this.bannerStyle.href = css;\n        this.bannerStyle.type = 'text/css';\n        this.bannerStyle.rel = 'stylesheet';\n      } else {\n        this.bannerStyle = document.createElement('style');\n        this.bannerStyle.innerHTML = css;\n      }\n\n      this.bannerStyle.onload = onLoad;\n      document.head.appendChild(this.bannerStyle);\n    }\n  }, {\n    key: \"renderBanner\",\n    value: function renderBanner(banner, linkParamOverride) {\n      var _this = this,\n          _context2;\n\n      var _banner$display = banner.display,\n          placement = _banner$display.placement,\n          css = _banner$display.css,\n          elementValues = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6___default()(_banner$display, [\"placement\", \"css\"]),\n          meta = banner.meta;\n\n      var addBannerElement = function addBannerElement() {\n        return document.body.prepend(_this.bannerElement);\n      };\n\n      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(elementValues)).call(_context2, function (_ref) {\n        var _ref2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref, 2),\n            key = _ref2[0],\n            value = _ref2[1];\n\n        var formattedKey = _this.getElementClassName(key);\n\n        var element = _this.bannerElement.getElementsByClassName(formattedKey)[0];\n\n        if (!element) {\n          return;\n        }\n\n        if (element.nodeName === \"IMG\") {\n          element.src = value;\n        } else if (element.nodeName === \"DIV\" || element.nodeName === \"SPAN\") {\n          element.innerHTML = value.toString();\n        }\n      });\n\n      if (placement) {\n        this.bannerElement.classList.add(placement);\n      }\n\n      this.onCloseClick = function () {\n        _this.setBannerLastDismissed();\n\n        _this.hideBanner();\n      };\n\n      this.onDownloadClick = function () {\n        var redirectUrl = _this.prepareLink(linkParamOverride, meta);\n\n        window.open(redirectUrl);\n      };\n\n      this.closeButton.addEventListener(\"click\", this.onCloseClick);\n      this.downloadButton.addEventListener(\"click\", this.onDownloadClick);\n      this.addUrlChangeListener(); // We want to load the banner element only after the loading of the banner css completes.\n\n      this.setBannerStyle(css, addBannerElement);\n    }\n  }, {\n    key: \"sendImpression\",\n    value: function () {\n      var _sendImpression = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2(banner) {\n        var meta, impression_link, enrichedLink, _context3;\n\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                meta = banner.meta;\n                impression_link = meta.impression_link;\n\n                if (impression_link) {\n                  _context4.next = 4;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\");\n\n              case 4:\n                enrichedLink = this.enrichLinkData(impression_link, meta);\n                _context4.prev = 5;\n                _context4.next = 8;\n                return fetch(enrichedLink, {\n                  mode: 'no-cors'\n                });\n\n              case 8:\n                _context4.next = 13;\n                break;\n\n              case 10:\n                _context4.prev = 10;\n                _context4.t0 = _context4[\"catch\"](5);\n                _singular_singularLog__WEBPACK_IMPORTED_MODULE_18__[\"default\"].debug(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = \"failed to send banner impression \".concat(enrichedLink, \", error: \")).call(_context3, _context4.t0));\n\n              case 13:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee2, this, [[5, 10]]);\n      }));\n\n      function sendImpression(_x2) {\n        return _sendImpression.apply(this, arguments);\n      }\n\n      return sendImpression;\n    }()\n  }, {\n    key: \"getElementClassName\",\n    value: function getElementClassName(fieldName) {\n      var _context5;\n\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = \"\".concat(CLASS_PREFIX)).call(_context5, fieldName.replace('_', '-'));\n    }\n  }, {\n    key: \"htmlToElement\",\n    value: function htmlToElement(html) {\n      var template = document.createElement('div');\n      template.innerHTML = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_1___default()(html).call(html);\n      return template.firstChild;\n    }\n  }, {\n    key: \"prepareLink\",\n    value: function prepareLink(overrideLinkParams, bannerMeta) {\n      var linkParams = overrideLinkParams || bannerMeta.link_overrides;\n      return this.enrichLinkData(bannerMeta.link, bannerMeta, linkParams);\n    }\n  }, {\n    key: \"enrichLinkData\",\n    value: function enrichLinkData(baseLink, bannerMeta) {\n      var _context6;\n\n      var overrideLinkParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n      var _SingularState$getIns = _singular_singularState__WEBPACK_IMPORTED_MODULE_15__[\"default\"].getInstance().getSingularConfig(),\n          bannersOptions = _SingularState$getIns.bannersOptions;\n\n      var link = baseLink;\n\n      if (bannersOptions && bannersOptions.isWebToAppSupported) {\n        link = _singular_singular__WEBPACK_IMPORTED_MODULE_16__[\"default\"].buildWebToAppLink(baseLink) || baseLink;\n      }\n\n      var linkURL = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_7___default.a(link);\n      linkURL.searchParams.set(_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].Source, BANNER_SOURCE);\n\n      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context6 = _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(overrideLinkParams)).call(_context6, function (_ref3) {\n        var _ref4 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref3, 2),\n            key = _ref4[0],\n            value = _ref4[1];\n\n        if (!value) {\n          return;\n        }\n\n        linkURL.searchParams.set(key, value);\n      });\n\n      linkURL.searchParams.set(_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].BannerName, bannerMeta.name);\n      linkURL.searchParams.set(_consts_constants__WEBPACK_IMPORTED_MODULE_14__[\"Params\"].BannerID, bannerMeta.id);\n      return linkURL.toString();\n    }\n  }, {\n    key: \"addUrlChangeListener\",\n    value: function addUrlChangeListener() {\n      var _this2 = this;\n\n      var currentPage = location.href;\n      this.urlChangeInterval = _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n        if (currentPage != location.href) {\n          currentPage = location.href;\n\n          _this2.hideBanner();\n\n          _this2.showBanner();\n        }\n      }, 500);\n    }\n  }, {\n    key: \"removeUrlChangeListener\",\n    value: function removeUrlChangeListener() {\n      clearInterval(this.urlChangeInterval);\n      this.urlChangeInterval = null;\n    }\n  }]);\n\n  return BannerManager;\n}();\n\n\n\n//# sourceURL=webpack:///./src/banners/bannerManager.js?");

/***/ }),

/***/ "./src/consts/browserEvents.js":
/*!*************************************!*\
  !*** ./src/consts/browserEvents.js ***!
  \*************************************/
/*! exports provided: TabClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TabClosed\", function() { return TabClosed; });\nvar TabClosed = 'onbeforeunload';\n\n//# sourceURL=webpack:///./src/consts/browserEvents.js?");

/***/ }),

/***/ "./src/consts/clientHints.js":
/*!***********************************!*\
  !*** ./src/consts/clientHints.js ***!
  \***********************************/
/*! exports provided: HighEntropyValuesKeys, PlatformKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HighEntropyValuesKeys\", function() { return HighEntropyValuesKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlatformKey\", function() { return PlatformKey; });\nvar HighEntropyValuesKeys = [\"platformVersion\", PlatformKey, \"uaFullVersion\", \"model\", \"architecture\"];\nvar PlatformKey = 'platform';\n\n//# sourceURL=webpack:///./src/consts/clientHints.js?");

/***/ }),

/***/ "./src/consts/constants.js":
/*!*********************************!*\
  !*** ./src/consts/constants.js ***!
  \*********************************/
/*! exports provided: SDK, BrowserEvents, EventTypes, Storage, Params, Request, OS, LogLevel, ClientHints, Cookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk */ \"./src/consts/sdk.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"SDK\", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _browserEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browserEvents */ \"./src/consts/browserEvents.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"BrowserEvents\", function() { return _browserEvents__WEBPACK_IMPORTED_MODULE_1__; });\n/* harmony import */ var _eventTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventTypes */ \"./src/consts/eventTypes.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"EventTypes\", function() { return _eventTypes__WEBPACK_IMPORTED_MODULE_2__; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/consts/storage.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Storage\", function() { return _storage__WEBPACK_IMPORTED_MODULE_3__; });\n/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./params */ \"./src/consts/params.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Params\", function() { return _params__WEBPACK_IMPORTED_MODULE_4__; });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request */ \"./src/consts/request.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Request\", function() { return _request__WEBPACK_IMPORTED_MODULE_5__; });\n/* harmony import */ var _os__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./os */ \"./src/consts/os.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"OS\", function() { return _os__WEBPACK_IMPORTED_MODULE_6__; });\n/* harmony import */ var _logLevel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logLevel */ \"./src/consts/logLevel.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"LogLevel\", function() { return _logLevel__WEBPACK_IMPORTED_MODULE_7__; });\n/* harmony import */ var _clientHints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clientHints */ \"./src/consts/clientHints.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"ClientHints\", function() { return _clientHints__WEBPACK_IMPORTED_MODULE_8__; });\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cookies */ \"./src/consts/cookies.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Cookies\", function() { return _cookies__WEBPACK_IMPORTED_MODULE_9__; });\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/consts/constants.js?");

/***/ }),

/***/ "./src/consts/cookies.js":
/*!*******************************!*\
  !*** ./src/consts/cookies.js ***!
  \*******************************/
/*! exports provided: CookieDomainKey, CookieExpiresKey, MilliSecondsInDay, ThirtyDaysInSeconds, CookieExpirationInDays, SingularDeviceIdKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CookieDomainKey\", function() { return CookieDomainKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CookieExpiresKey\", function() { return CookieExpiresKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MilliSecondsInDay\", function() { return MilliSecondsInDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThirtyDaysInSeconds\", function() { return ThirtyDaysInSeconds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CookieExpirationInDays\", function() { return CookieExpirationInDays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SingularDeviceIdKey\", function() { return SingularDeviceIdKey; });\nvar CookieDomainKey = 'domain';\nvar CookieExpiresKey = 'expires';\nvar MilliSecondsInDay = 86400 * 1000;\nvar ThirtyDaysInSeconds = 30 * 24 * 60 * 60;\nvar CookieExpirationInDays = 365 * MilliSecondsInDay;\nvar SingularDeviceIdKey = 'singular_device_id';\n\n//# sourceURL=webpack:///./src/consts/cookies.js?");

/***/ }),

/***/ "./src/consts/eventTypes.js":
/*!**********************************!*\
  !*** ./src/consts/eventTypes.js ***!
  \**********************************/
/*! exports provided: ConversionEventApi, CustomUserIdEventApi, EventApi, PageVisitApi, PageVisitEventName, SetMatchIdEventName, FetchBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConversionEventApi\", function() { return ConversionEventApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomUserIdEventApi\", function() { return CustomUserIdEventApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventApi\", function() { return EventApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageVisitApi\", function() { return PageVisitApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageVisitEventName\", function() { return PageVisitEventName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetMatchIdEventName\", function() { return SetMatchIdEventName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchBanner\", function() { return FetchBanner; });\nvar ConversionEventApi = 'conversion_event';\nvar CustomUserIdEventApi = 'custom_user_id_event';\nvar EventApi = 'event';\nvar PageVisitApi = 'page_visit';\nvar PageVisitEventName = '__PAGE_VISIT__';\nvar SetMatchIdEventName = 'setMatchId'; //Banners\n\nvar FetchBanner = 'fetch_banner';\n\n//# sourceURL=webpack:///./src/consts/eventTypes.js?");

/***/ }),

/***/ "./src/consts/logLevel.js":
/*!********************************!*\
  !*** ./src/consts/logLevel.js ***!
  \********************************/
/*! exports provided: Debug, Info, Warn, None */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Debug\", function() { return Debug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Info\", function() { return Info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Warn\", function() { return Warn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"None\", function() { return None; });\nvar Debug = 3;\nvar Info = 2;\nvar Warn = 1;\nvar None = 0;\n\n//# sourceURL=webpack:///./src/consts/logLevel.js?");

/***/ }),

/***/ "./src/consts/os.js":
/*!**************************!*\
  !*** ./src/consts/os.js ***!
  \**************************/
/*! exports provided: Android, iOS, Linux, MacOs, Unknown, Windows, iOSPlatforms, MacOsPlatforms, WindowsPlatforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Android\", function() { return Android; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iOS\", function() { return iOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Linux\", function() { return Linux; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MacOs\", function() { return MacOs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Unknown\", function() { return Unknown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iOSPlatforms\", function() { return iOSPlatforms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MacOsPlatforms\", function() { return MacOsPlatforms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WindowsPlatforms\", function() { return WindowsPlatforms; });\nvar Android = 'Android';\nvar iOS = 'iOS';\nvar Linux = 'Linux';\nvar MacOs = 'MacOS';\nvar Unknown = 'Unknown';\nvar Windows = 'Windows';\nvar iOSPlatforms = ['iPhone', 'iPad', 'iPod'];\nvar MacOsPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];\nvar WindowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];\n\n//# sourceURL=webpack:///./src/consts/os.js?");

/***/ }),

/***/ "./src/consts/params.js":
/*!******************************!*\
  !*** ./src/consts/params.js ***!
  \******************************/
/*! exports provided: AppName, BrowserAvailableMemory, BrowserUsedMemory, BannerShowsCounter, BannerSourceUrl, ClientHints, CustomUserId, CurrentDeviceTime, DeeplinkParam, DeferredDeeplinkParam, DocumentReferrer, EventId, EventName, EventProductName, Extra, GlobalProperties, IsConversion, IsFirstEvent, IsFirstVisit, IsFirstPageVisitInSession, isAfterConversionEvent, IsPageRefreshed, IsRevenueEvent, IsSetMatchId, Keyspace, Lag, Locale, MatchId, OS, ECID, Owner, PassthroughParam, Platform, PlatformWeb, PreviousSdid, ProductId, RevenueAmount, RevenueCurrency, ScreenHeight, ScreenWidth, SdidPersistMode, SdidPersistFailedReason, SdkVersion, SessionId, SingularDeviceId, SingularInstanceId, StorageType, Timezone, TouchpointTimestamp, UserAgent, UUID, UUID_REGEX, WebParams, WebUrl, LastDismissed, BannerName, BannerID, Source, WebUrlMarketingParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppName\", function() { return AppName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BrowserAvailableMemory\", function() { return BrowserAvailableMemory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BrowserUsedMemory\", function() { return BrowserUsedMemory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerShowsCounter\", function() { return BannerShowsCounter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerSourceUrl\", function() { return BannerSourceUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClientHints\", function() { return ClientHints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomUserId\", function() { return CustomUserId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CurrentDeviceTime\", function() { return CurrentDeviceTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeeplinkParam\", function() { return DeeplinkParam; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeferredDeeplinkParam\", function() { return DeferredDeeplinkParam; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DocumentReferrer\", function() { return DocumentReferrer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventId\", function() { return EventId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventName\", function() { return EventName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventProductName\", function() { return EventProductName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Extra\", function() { return Extra; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalProperties\", function() { return GlobalProperties; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsConversion\", function() { return IsConversion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsFirstEvent\", function() { return IsFirstEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsFirstVisit\", function() { return IsFirstVisit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsFirstPageVisitInSession\", function() { return IsFirstPageVisitInSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAfterConversionEvent\", function() { return isAfterConversionEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsPageRefreshed\", function() { return IsPageRefreshed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsRevenueEvent\", function() { return IsRevenueEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsSetMatchId\", function() { return IsSetMatchId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keyspace\", function() { return Keyspace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lag\", function() { return Lag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Locale\", function() { return Locale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MatchId\", function() { return MatchId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OS\", function() { return OS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ECID\", function() { return ECID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Owner\", function() { return Owner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PassthroughParam\", function() { return PassthroughParam; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Platform\", function() { return Platform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlatformWeb\", function() { return PlatformWeb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PreviousSdid\", function() { return PreviousSdid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductId\", function() { return ProductId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RevenueAmount\", function() { return RevenueAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RevenueCurrency\", function() { return RevenueCurrency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScreenHeight\", function() { return ScreenHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScreenWidth\", function() { return ScreenWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SdidPersistMode\", function() { return SdidPersistMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SdidPersistFailedReason\", function() { return SdidPersistFailedReason; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SdkVersion\", function() { return SdkVersion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SessionId\", function() { return SessionId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SingularDeviceId\", function() { return SingularDeviceId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SingularInstanceId\", function() { return SingularInstanceId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StorageType\", function() { return StorageType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timezone\", function() { return Timezone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TouchpointTimestamp\", function() { return TouchpointTimestamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserAgent\", function() { return UserAgent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UUID\", function() { return UUID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UUID_REGEX\", function() { return UUID_REGEX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebParams\", function() { return WebParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebUrl\", function() { return WebUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LastDismissed\", function() { return LastDismissed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerName\", function() { return BannerName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerID\", function() { return BannerID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Source\", function() { return Source; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebUrlMarketingParams\", function() { return WebUrlMarketingParams; });\nvar AppName = 'n';\nvar BrowserAvailableMemory = 'browser_available_memory';\nvar BrowserUsedMemory = 'browser_used_memory';\nvar BannerShowsCounter = 'counter_banner_showed';\nvar BannerSourceUrl = 'source_url';\nvar ClientHints = 'client_hints';\nvar CustomUserId = 'custom_user_id';\nvar CurrentDeviceTime = 'current_device_time';\nvar DeeplinkParam = '_dl';\nvar DeferredDeeplinkParam = '_ddl';\nvar DocumentReferrer = 'document_referrer';\nvar EventId = 'event_id';\nvar EventName = 'n';\nvar EventProductName = 'product_name';\nvar Extra = 'e';\nvar GlobalProperties = 'global_properties';\nvar IsConversion = 'conversion_event';\nvar IsFirstEvent = 'first';\nvar IsFirstVisit = 'is_first_visit';\nvar IsFirstPageVisitInSession = 'is_first_page_visit_in_session';\nvar isAfterConversionEvent = 'is_after_conversion_event';\nvar IsPageRefreshed = 'is_page_refreshed';\nvar IsRevenueEvent = 'is_revenue_event';\nvar IsSetMatchId = 'is_set_match_id';\nvar Keyspace = 'k';\nvar Lag = 'lag';\nvar Locale = 'l';\nvar MatchId = 'match_id';\nvar OS = 'os';\nvar ECID = 'ecid';\nvar Owner = 'a';\nvar PassthroughParam = '_p';\nvar Platform = 'p';\nvar PlatformWeb = 'Web';\nvar PreviousSdid = 'prev_sdid';\nvar ProductId = 'i';\nvar RevenueAmount = 'r';\nvar RevenueCurrency = 'pcc';\nvar ScreenHeight = 'screen_height';\nvar ScreenWidth = 'screen_width';\nvar SdidPersistMode = 'sdid_persist_mode';\nvar SdidPersistFailedReason = 'sdid_persist_failed_reason';\nvar SdkVersion = 'sdk';\nvar SessionId = 's';\nvar SingularDeviceId = 'SDID';\nvar SingularInstanceId = 'singular_instance_id';\nvar StorageType = 'storage_type';\nvar Timezone = 'timezone';\nvar TouchpointTimestamp = 'touchpoint_timestamp';\nvar UserAgent = 'device_user_agent';\nvar UUID = 'u';\nvar UUID_REGEX = '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$';\nvar WebParams = '_web_params';\nvar WebUrl = 'web_url';\nvar LastDismissed = 'last_dismissed';\nvar BannerName = 'bn';\nvar BannerID = 'baid';\nvar Source = 'utm_source';\nvar WebUrlMarketingParams = {\n  \"clid_params\": ['clid='],\n  \"singular_p_params\": ['pcnid=', 'pcrnid=', \"pcid=\", \"pcn=\", \"psc=\", \"pscid=\", \"pscn=\", \"pcrid=\", \"pcrn=\", \"ps=\", \"psid=\", \"psn=\", \"pshid=\", \"paffid=\", \"paffn=\", \"pcc=\", \"psrc=\", \"pmed=\"],\n  \"singular_wp_params\": [\"wpcid=\", \"wpcn=\", \"wpsc=\", \"wpscid=\", \"wpscn=\", \"wpcrid=\", \"wpcrn=\", \"wps=\", \"wpsid=\", \"wpsn=\", \"wpshid=\", \"wpaffid=\", \"wpaffn=\", \"wpkw=\", \"wpsrc=\", \"wpmed=\"],\n  \"utm_params\": ['utm_.+='],\n  \"additional_params\": [\"kw=\", \"an=\", \"ud=\"]\n};\n\n//# sourceURL=webpack:///./src/consts/params.js?");

/***/ }),

/***/ "./src/consts/request.js":
/*!*******************************!*\
  !*** ./src/consts/request.js ***!
  \*******************************/
/*! exports provided: BaseUrl, ContentType, ContentTypeValue, Endpoints, PostMethod, GetMethod, PostParams, Status, RequestTimeoutMs, ValidResponse, ValidResponseCode, FetchBannerResponseLinkKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseUrl\", function() { return BaseUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentType\", function() { return ContentType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentTypeValue\", function() { return ContentTypeValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Endpoints\", function() { return Endpoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostMethod\", function() { return PostMethod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetMethod\", function() { return GetMethod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostParams\", function() { return PostParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Status\", function() { return Status; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequestTimeoutMs\", function() { return RequestTimeoutMs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValidResponse\", function() { return ValidResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValidResponseCode\", function() { return ValidResponseCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchBannerResponseLinkKey\", function() { return FetchBannerResponseLinkKey; });\n/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params */ \"./src/consts/params.js\");\n\nvar BaseUrl = \"https://sdk-api-v1.singular.net/api/v1/\";\nvar ContentType = 'Content-Type';\nvar ContentTypeValue = 'application/json';\nvar Endpoints = {\n  Session: 'start',\n  Event: 'event',\n  DeviceCustomUserId: 'set_device_for_custom_id',\n  FetchBanner: 'banners'\n};\nvar PostMethod = 'POST';\nvar GetMethod = 'GET';\nvar PostParams = [_params__WEBPACK_IMPORTED_MODULE_0__[\"GlobalProperties\"], _params__WEBPACK_IMPORTED_MODULE_0__[\"Extra\"], _params__WEBPACK_IMPORTED_MODULE_0__[\"WebUrl\"], _params__WEBPACK_IMPORTED_MODULE_0__[\"UserAgent\"], _params__WEBPACK_IMPORTED_MODULE_0__[\"EventProductName\"], _params__WEBPACK_IMPORTED_MODULE_0__[\"DocumentReferrer\"], _params__WEBPACK_IMPORTED_MODULE_0__[\"ClientHints\"]];\nvar Status = 'status';\nvar RequestTimeoutMs = 30000;\nvar ValidResponse = 'ok';\nvar ValidResponseCode = 200;\nvar FetchBannerResponseLinkKey = 'link';\n\n//# sourceURL=webpack:///./src/consts/request.js?");

/***/ }),

/***/ "./src/consts/sdk.js":
/*!***************************!*\
  !*** ./src/consts/sdk.js ***!
  \***************************/
/*! exports provided: DefaultSessionTimeoutMinutes, Version, SdidPersistModeOff, SdidPersistModeAuto, SdidPersistModeManual, ECID_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultSessionTimeoutMinutes\", function() { return DefaultSessionTimeoutMinutes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Version\", function() { return Version; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SdidPersistModeOff\", function() { return SdidPersistModeOff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SdidPersistModeAuto\", function() { return SdidPersistModeAuto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SdidPersistModeManual\", function() { return SdidPersistModeManual; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ECID_PREFIX\", function() { return ECID_PREFIX; });\nvar DefaultSessionTimeoutMinutes = 30;\nvar Version = \"WebSDK-v\".concat(\"1.4.9\");\nvar SdidPersistModeOff = \"off\";\nvar SdidPersistModeAuto = \"auto\";\nvar SdidPersistModeManual = \"manual\";\nvar ECID_PREFIX = \"__singular_ddl__\";\n\n//# sourceURL=webpack:///./src/consts/sdk.js?");

/***/ }),

/***/ "./src/consts/storage.js":
/*!*******************************!*\
  !*** ./src/consts/storage.js ***!
  \*******************************/
/*! exports provided: ApiQueueKey, CustomUserIdKey, BannerLastDismissedKey, DidVisitSiteKey, DidSendEventKeyBase, ConversionEventOccurredKey, GlobalStoragePrefix, GlobalProperties, MaxApisInQueue, SessionIdKey, FirstPageVisitOccurredKey, FirstPageVisitURL, SingularDeviceIdKey, MatchIdKey, SingularInstanceIdKey, StorageEnabledTestKey, StorageEnabledTestValue, StorageLastEventTimestamp, StorageTouchpointTimestampKey, StorageWebUrlKey, Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiQueueKey\", function() { return ApiQueueKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomUserIdKey\", function() { return CustomUserIdKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerLastDismissedKey\", function() { return BannerLastDismissedKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DidVisitSiteKey\", function() { return DidVisitSiteKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DidSendEventKeyBase\", function() { return DidSendEventKeyBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConversionEventOccurredKey\", function() { return ConversionEventOccurredKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStoragePrefix\", function() { return GlobalStoragePrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalProperties\", function() { return GlobalProperties; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MaxApisInQueue\", function() { return MaxApisInQueue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SessionIdKey\", function() { return SessionIdKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FirstPageVisitOccurredKey\", function() { return FirstPageVisitOccurredKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FirstPageVisitURL\", function() { return FirstPageVisitURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SingularDeviceIdKey\", function() { return SingularDeviceIdKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MatchIdKey\", function() { return MatchIdKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SingularInstanceIdKey\", function() { return SingularInstanceIdKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StorageEnabledTestKey\", function() { return StorageEnabledTestKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StorageEnabledTestValue\", function() { return StorageEnabledTestValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StorageLastEventTimestamp\", function() { return StorageLastEventTimestamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StorageTouchpointTimestampKey\", function() { return StorageTouchpointTimestampKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StorageWebUrlKey\", function() { return StorageWebUrlKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return Types; });\nvar ApiQueueKey = 'singular_api_queue';\nvar CustomUserIdKey = 'singular_custom_user_id';\nvar BannerLastDismissedKey = 'banner_last_dismissed';\nvar DidVisitSiteKey = 'did_visit_site';\nvar DidSendEventKeyBase = 'did_send_event';\nvar ConversionEventOccurredKey = 'conversion_event_occurred';\nvar GlobalStoragePrefix = 'global';\nvar GlobalProperties = 'global_properties';\nvar MaxApisInQueue = 1000;\nvar SessionIdKey = 'singular_session_id';\nvar FirstPageVisitOccurredKey = 'singular_first_page_visit_occurred';\nvar FirstPageVisitURL = 'first_page_visit_url';\nvar SingularDeviceIdKey = 'singular_id';\nvar MatchIdKey = 'match_id';\nvar SingularInstanceIdKey = 'singular_instance_id';\nvar StorageEnabledTestKey = 'singular_storage_enabled_test';\nvar StorageEnabledTestValue = \"test_value\";\nvar StorageLastEventTimestamp = \"last_event_timestamp\";\nvar StorageTouchpointTimestampKey = \"touchpoint_timestamp\";\nvar StorageWebUrlKey = \"web_url\";\nvar Types = {\n  Local: 'local',\n  Session: 'session',\n  Memory: 'memory'\n};\n\n//# sourceURL=webpack:///./src/consts/storage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: singularSdk, SingularConfig, LinkParams, BannersOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"singularSdk\", function() { return singularSdk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SingularConfig\", function() { return SingularConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkParams\", function() { return LinkParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannersOptions\", function() { return BannersOptions; });\n/* harmony import */ var _singular_singular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singular/singular */ \"./src/singular/singular.js\");\n/* harmony import */ var _singular_singularConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singular/singularConfig */ \"./src/singular/singularConfig.js\");\n/* harmony import */ var _singular_linkParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singular/linkParams */ \"./src/singular/linkParams.js\");\n/* harmony import */ var _singular_bannersOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singular/bannersOptions */ \"./src/singular/bannersOptions.js\");\n\n\n\n\n\n // This workaround is used to prevent from the SDK to be loaded twice\n\nvar SingularObject = _singular_singular__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar ConfigObject = _singular_singularConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar LinkParamsObject = _singular_linkParams__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nvar BannersOptionsObject = _singular_bannersOptions__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\nif (!window.singularSdk) {\n  window.singularSdk = SingularObject;\n  window.SingularConfig = ConfigObject;\n} else {\n  SingularObject = window.singularSdk;\n  ConfigObject = window.SingularConfig;\n}\n\nvar singularSdk = SingularObject;\nvar SingularConfig = ConfigObject;\nvar LinkParams = LinkParamsObject;\nvar BannersOptions = BannersOptionsObject;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/singular/bannersOptions.js":
/*!****************************************!*\
  !*** ./src/singular/bannersOptions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BannersOptions; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar BannersOptions =\n/*#__PURE__*/\nfunction () {\n  function BannersOptions() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BannersOptions);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"_webToAppSupport\", false);\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BannersOptions, [{\n    key: \"withWebToAppSupport\",\n    value: function withWebToAppSupport() {\n      this._webToAppSupport = true;\n      return this;\n    }\n  }, {\n    key: \"isWebToAppSupported\",\n    get: function get() {\n      return this._webToAppSupport;\n    }\n  }]);\n\n  return BannersOptions;\n}();\n\n\n\n//# sourceURL=webpack:///./src/singular/bannersOptions.js?");

/***/ }),

/***/ "./src/singular/linkParams.js":
/*!************************************!*\
  !*** ./src/singular/linkParams.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LinkParams; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar LinkParams =\n/*#__PURE__*/\nfunction () {\n  function LinkParams() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LinkParams);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"_android_redirect\", void 0);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"_android_dl\", void 0);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"_android_ddl\", void 0);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"_ios_redirect\", void 0);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"_ios_dl\", void 0);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"_ios_ddl\", void 0);\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LinkParams, [{\n    key: \"withAndroidRedirect\",\n    value: function withAndroidRedirect(redirect) {\n      this._android_redirect = redirect;\n      return this;\n    }\n  }, {\n    key: \"withAndroidDL\",\n    value: function withAndroidDL(androidDL) {\n      this._android_dl = androidDL;\n      return this;\n    }\n  }, {\n    key: \"withAndroidDDL\",\n    value: function withAndroidDDL(androidDDL) {\n      this._android_ddl = androidDDL;\n      return this;\n    }\n  }, {\n    key: \"withIosRedirect\",\n    value: function withIosRedirect(iosRedirect) {\n      this._ios_redirect = iosRedirect;\n      return this;\n    }\n  }, {\n    key: \"withIosDL\",\n    value: function withIosDL(iosDL) {\n      this._ios_dl = iosDL;\n      return this;\n    }\n  }, {\n    key: \"withIosDDL\",\n    value: function withIosDDL(iosDDL) {\n      this._ios_ddl = iosDDL;\n      return this;\n    }\n  }]);\n\n  return LinkParams;\n}();\n\n\n\n//# sourceURL=webpack:///./src/singular/linkParams.js?");

/***/ }),

/***/ "./src/singular/singular.js":
/*!**********************************!*\
  !*** ./src/singular/singular.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Singular; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_eventApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/eventApi */ \"./src/api/eventApi.js\");\n/* harmony import */ var _api_conversionEventApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/conversionEventApi */ \"./src/api/conversionEventApi.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singularInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singularInstance */ \"./src/singular/singularInstance.js\");\n/* harmony import */ var _api_pageVisitApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/pageVisitApi */ \"./src/api/pageVisitApi.js\");\n/* harmony import */ var _api_customUserIdApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/customUserIdApi */ \"./src/api/customUserIdApi.js\");\n/* harmony import */ var _singularInitParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./singularInitParams */ \"./src/singular/singularInitParams.js\");\n/* harmony import */ var _linkParams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./linkParams */ \"./src/singular/linkParams.js\");\n/* harmony import */ var _singularState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./singularState */ \"./src/singular/singularState.js\");\n/* harmony import */ var _singularLog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./singularLog */ \"./src/singular/singularLog.js\");\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _consts_eventTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../consts/eventTypes */ \"./src/consts/eventTypes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Singular =\n/*#__PURE__*/\nfunction () {\n  function Singular() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Singular);\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Singular, null, [{\n    key: \"init\",\n    value: function init(config) {\n      if (config === null) {\n        throw new Error(\"Singular config can't be null\");\n      }\n\n      if (this._isInitialized && this._singularInstance && this._singularInstance.isSameApp(config)) {\n        this._singularInstance.updateSingularConfig(config);\n\n        return;\n      }\n\n      this._singularInstance = new _singularInstance__WEBPACK_IMPORTED_MODULE_6__[\"default\"](config);\n      this._isInitialized = true;\n\n      config._initFinished(new _singularInitParams__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this.getSingularDeviceId()));\n    }\n  }, {\n    key: \"pageVisit\",\n    value: function pageVisit() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('pageVisit: SDK not initialized');\n        return;\n      }\n\n      var pageVisit = new _api_pageVisitApi__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n\n      this._singularInstance.sendApi(pageVisit);\n    }\n  }, {\n    key: \"event\",\n    value: function event(eventName, args) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('event: SDK not initialized');\n        return;\n      }\n\n      var event = new _api_eventApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"](eventName).withArgs(args);\n\n      this._singularInstance.sendApi(event);\n    }\n  }, {\n    key: \"conversionEvent\",\n    value: function conversionEvent(eventName, args) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('conversionEvent: SDK not initialized');\n        return;\n      }\n\n      var event = new _api_conversionEventApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"](eventName).withArgs(args);\n\n      this._singularInstance.sendApi(event);\n    }\n  }, {\n    key: \"revenue\",\n    value: function revenue(eventName, currency, amount, args) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('revenue: SDK not initialized');\n        return;\n      }\n\n      var event = new _api_eventApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"](eventName).withRevenue(currency, amount).withArgs(args);\n\n      this._singularInstance.sendApi(event);\n    }\n  }, {\n    key: \"login\",\n    value: function login(customUserId) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('login: SDK not initialized');\n        return;\n      }\n\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isNullOrEmpty(customUserId)) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('login: customUserId must not be empty');\n        return;\n      }\n\n      this._singularInstance.setCustomUserId(customUserId);\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('logout: SDK not initialized');\n        return;\n      }\n\n      this._singularInstance.unsetCustomUserId();\n    }\n  }, {\n    key: \"setDeviceCustomUserId\",\n    value: function setDeviceCustomUserId(customUserId) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('setDeviceCustomUserId: SDK not initialized');\n        return;\n      }\n\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isNullOrEmpty(customUserId)) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('setDeviceCustomUserId: customUserId must not be empty');\n        return;\n      }\n\n      this.login(customUserId);\n      var event = new _api_customUserIdApi__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n\n      this._singularInstance.sendApi(event);\n    }\n  }, {\n    key: \"openApp\",\n    value: function openApp(baseLink) {\n      var deeplink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var passthrough = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var deferredDeeplink = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('openApp: SDK not initialized');\n        return;\n      }\n\n      this._singularInstance.openApp(baseLink, deeplink, passthrough, deferredDeeplink);\n    }\n  }, {\n    key: \"openAppWithClipboardDdl\",\n    value: function openAppWithClipboardDdl(baseLink) {\n      var deeplink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var passthrough = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var deferredDeeplink = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('openAppWithClipboardDdl: SDK not initialized');\n        return;\n      }\n\n      this._singularInstance.openAppWithClipboardDdl(baseLink, deeplink, passthrough, deferredDeeplink);\n    }\n  }, {\n    key: \"buildWebToAppLink\",\n    value: function buildWebToAppLink(baseLink) {\n      var deeplink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var passthrough = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var deferredDeeplink = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('buildWebToAppLink: SDK not initialized');\n        return null;\n      }\n\n      return this._singularInstance.buildWebToAppLink(baseLink, deeplink, passthrough, deferredDeeplink);\n    }\n  }, {\n    key: \"getSingularDeviceId\",\n    value: function getSingularDeviceId() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('getSingularDeviceId: SDK not initialized');\n        return null;\n      }\n\n      return this._singularInstance.getSingularDeviceId();\n    }\n  }, {\n    key: \"enrichUrlWithMarketingData\",\n    value: function enrichUrlWithMarketingData(url) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('enrichUrlWithMarketingData: SDK not initialized');\n        return url;\n      }\n\n      if (!_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isValidUrl(url)) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('enrichUrlWithMarketingData: invalid URL');\n        return url;\n      }\n\n      return this._singularInstance.enrichUrlWithMarketingData(url);\n    }\n  }, {\n    key: \"showBanner\",\n    value: function showBanner(linkParams) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('showBanner: SDK not initialized');\n        return;\n      }\n\n      if (!_singularState__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getInstance().getSingularConfig().isBannersSupported) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn(\"showBanner: banners feature is not enabled\");\n        return;\n      }\n\n      if (linkParams && !(linkParams instanceof _linkParams__WEBPACK_IMPORTED_MODULE_10__[\"default\"])) {\n        linkParams = null;\n      }\n\n      return this._singularInstance.showBanner(linkParams);\n    }\n  }, {\n    key: \"hideBanner\",\n    value: function hideBanner() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('hideBanner: SDK not initialized');\n        return;\n      }\n\n      if (!_singularState__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getInstance().getSingularConfig().isBannersSupported) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn(\"hideBanner: banners feature is not enabled\");\n        return;\n      }\n\n      return this._singularInstance.hideBanner();\n    }\n  }, {\n    key: \"enrichUrlWithClipboardDdlFlow\",\n    value: function enrichUrlWithClipboardDdlFlow(url) {\n      if (!this._isInitialized || !_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isValidUrl(url)) {\n        return url;\n      }\n\n      return this._singularInstance.enrichUrlWithClipboardDdlFlow(url);\n    }\n  }, {\n    key: \"getMatchID\",\n    value: function getMatchID() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('getMatchID: SDK not initialized');\n        return null;\n      }\n\n      return this._singularInstance.getMatchID();\n    }\n  }, {\n    key: \"getGlobalProperties\",\n    value: function getGlobalProperties() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('getGlobalProperties: SDK not initialized');\n        return null;\n      }\n\n      return this._singularInstance.getGlobalProperties();\n    }\n  }, {\n    key: \"setGlobalProperties\",\n    value: function setGlobalProperties(key, value) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('setGlobalProperties: SDK not initialized');\n        return false;\n      }\n\n      return this._singularInstance.setGlobalProperties(key, value);\n    }\n  }, {\n    key: \"unsetGlobalProperty\",\n    value: function unsetGlobalProperty(key) {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('unsetGlobalProperty: SDK not initialized');\n        return false;\n      }\n\n      return this._singularInstance.unsetGlobalProperty(key);\n    }\n  }, {\n    key: \"clearGlobalProperties\",\n    value: function clearGlobalProperties() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('clearGlobalProperties: SDK not initialized');\n        return false;\n      }\n\n      return this._singularInstance.clearGlobalProperties();\n    }\n  }, {\n    key: \"setMatchID\",\n    value: function setMatchID(matchId) {\n      var _withParams;\n\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('setMatchID: SDK not initialized');\n        return;\n      }\n\n      this._singularInstance.setMatchID(matchId);\n\n      var event = new _api_eventApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_consts_eventTypes__WEBPACK_IMPORTED_MODULE_14__[\"SetMatchIdEventName\"]).withParams((_withParams = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_withParams, _consts_constants__WEBPACK_IMPORTED_MODULE_13__[\"Params\"].MatchId, matchId), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_withParams, _consts_constants__WEBPACK_IMPORTED_MODULE_13__[\"Params\"].IsSetMatchId, true), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_withParams, _consts_constants__WEBPACK_IMPORTED_MODULE_13__[\"Params\"].WebUrl, _singularState__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getInstance().getFirstPageVisitURL()), _withParams));\n\n      this._singularInstance.sendApi(event);\n    }\n  }, {\n    key: \"clearMatchID\",\n    value: function clearMatchID() {\n      if (!this._isInitialized) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_12__[\"default\"].warn('clearMatchID: SDK not initialized');\n        return;\n      }\n\n      this._singularInstance.clearMatchID();\n    }\n  }]);\n\n  return Singular;\n}();\n\n_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Singular, \"_isInitialized\", false);\n\n_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Singular, \"_singularInstance\", void 0);\n\n\n\n//# sourceURL=webpack:///./src/singular/singular.js?");

/***/ }),

/***/ "./src/singular/singularConfig.js":
/*!****************************************!*\
  !*** ./src/singular/singularConfig.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingularConfig; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singularLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singularLog */ \"./src/singular/singularLog.js\");\n/* harmony import */ var _bannersOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bannersOptions */ \"./src/singular/bannersOptions.js\");\n/* harmony import */ var _consts_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consts/sdk */ \"./src/consts/sdk.js\");\n\n\n\n\n\n\n\nvar SingularConfig =\n/*#__PURE__*/\nfunction () {\n  function SingularConfig(apikey, secret, productId) {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SingularConfig);\n\n    if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNullOrEmpty(apikey)) {\n      throw new Error(\"apikey must not be null or empty\");\n    } else if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNullOrEmpty(secret)) {\n      throw new Error(\"secret must not be null or empty\");\n    } else if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNullOrEmpty(productId)) {\n      throw new Error(\"productId must not be null or empty\");\n    }\n\n    this._apikey = apikey;\n    this._secret = secret;\n    this._productId = productId;\n    this._sessionTimeout = _consts_sdk__WEBPACK_IMPORTED_MODULE_5__[\"DefaultSessionTimeoutMinutes\"];\n    this._productName = null;\n    this._initCallback = null;\n    this._singularDeviceId = null;\n    this._autoPersistDomain = null;\n    this._bannersSupport = false;\n    this._bannersOptions = null;\n    this._overrideExistingGlobalProperties = false;\n    this._globalProperties = null;\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SingularConfig, [{\n    key: \"withCustomUserId\",\n    value: function withCustomUserId(customUserId) {\n      this._customUserId = customUserId;\n      return this;\n    }\n  }, {\n    key: \"withProductName\",\n    value: function withProductName(productName) {\n      this._productName = productName;\n      return this;\n    }\n  }, {\n    key: \"withLogLevel\",\n    value: function withLogLevel(logLevel) {\n      _singularLog__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setLogLevel(logLevel);\n      return this;\n    }\n  }, {\n    key: \"withSessionTimeoutInMinutes\",\n    value: function withSessionTimeoutInMinutes(sessionTimeout) {\n      this._sessionTimeout = sessionTimeout;\n      return this;\n    }\n  }, {\n    key: \"withWrapperVersion\",\n    value: function withWrapperVersion(wrapper) {\n      _utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setSdkWrapper(wrapper);\n      return this;\n    }\n  }, {\n    key: \"withInitFinishedCallback\",\n    value: function withInitFinishedCallback(callback) {\n      this._initCallback = callback;\n      return this;\n    }\n  }, {\n    key: \"withPersistentSingularDeviceId\",\n    value: function withPersistentSingularDeviceId(singularDeviceId) {\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNullOrEmpty(singularDeviceId)) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_3__[\"default\"].debug(\"Persistent Singular Device Id provided was empty\");\n        return this;\n      }\n\n      this._singularDeviceId = singularDeviceId;\n      return this;\n    }\n  }, {\n    key: \"withAutoPersistentSingularDeviceId\",\n    value: function withAutoPersistentSingularDeviceId(domain) {\n      if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNullOrEmpty(domain)) {\n        this._autoPersistDomain = domain;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"withBannersSupport\",\n    value: function withBannersSupport(bannersOptions) {\n      this._bannersSupport = true;\n\n      if (bannersOptions && bannersOptions instanceof _bannersOptions__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n        this._bannersOptions = bannersOptions;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"withGlobalProperties\",\n    value: function withGlobalProperties(globalProperties, overrideExisting) {\n      if (typeof overrideExisting !== 'boolean') {\n        _singularLog__WEBPACK_IMPORTED_MODULE_3__[\"default\"].warn('withGlobalProperties: overrideExisting must be a boolean (true/false)');\n        return this;\n      }\n\n      if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isObject(globalProperties)) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_3__[\"default\"].warn('withGlobalProperties: globalProperties must be a plain object ({key: value})');\n        return this;\n      }\n\n      this._globalProperties = globalProperties;\n      this._overrideExistingGlobalProperties = overrideExisting;\n      return this;\n    }\n  }, {\n    key: \"isSameApp\",\n    value: function isSameApp(config) {\n      return config && config.apikey === this.apikey && config.productId === this.productId;\n    }\n  }, {\n    key: \"_initFinished\",\n    value: function _initFinished(singularInitParams) {\n      if (!this._initCallback) {\n        return;\n      }\n\n      this._initCallback(singularInitParams);\n    }\n  }, {\n    key: \"apikey\",\n    get: function get() {\n      return this._apikey;\n    }\n  }, {\n    key: \"secret\",\n    get: function get() {\n      return this._secret;\n    }\n  }, {\n    key: \"productId\",\n    get: function get() {\n      return this._productId;\n    }\n  }, {\n    key: \"productName\",\n    get: function get() {\n      return this._productName;\n    }\n  }, {\n    key: \"customUserId\",\n    get: function get() {\n      return this._customUserId;\n    }\n  }, {\n    key: \"sessionTimeOut\",\n    get: function get() {\n      return this._sessionTimeout;\n    }\n  }, {\n    key: \"sessionTimeOutInSeconds\",\n    get: function get() {\n      return this._sessionTimeout * 60;\n    }\n  }, {\n    key: \"isBannersSupported\",\n    get: function get() {\n      return this._bannersSupport;\n    }\n  }, {\n    key: \"bannersOptions\",\n    get: function get() {\n      return this._bannersOptions;\n    }\n  }, {\n    key: \"overrideExistingGlobalProperties\",\n    get: function get() {\n      return this._overrideExistingGlobalProperties;\n    }\n  }, {\n    key: \"globalProperties\",\n    get: function get() {\n      return this._globalProperties;\n    }\n  }]);\n\n  return SingularConfig;\n}();\n\n\n\n//# sourceURL=webpack:///./src/singular/singularConfig.js?");

/***/ }),

/***/ "./src/singular/singularInitParams.js":
/*!********************************************!*\
  !*** ./src/singular/singularInitParams.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingularInitParams; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar SingularInitParams =\n/*#__PURE__*/\nfunction () {\n  function SingularInitParams(singularDeviceId) {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SingularInitParams);\n\n    this._singularDeviceId = singularDeviceId;\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SingularInitParams, [{\n    key: \"singularDeviceId\",\n    get: function get() {\n      return this._singularDeviceId;\n    }\n  }]);\n\n  return SingularInitParams;\n}();\n\n\n\n//# sourceURL=webpack:///./src/singular/singularInitParams.js?");

/***/ }),

/***/ "./src/singular/singularInstance.js":
/*!******************************************!*\
  !*** ./src/singular/singularInstance.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingularInstance; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/entries */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/url.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api_apiManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/apiManager */ \"./src/api/apiManager.js\");\n/* harmony import */ var _banners_bannerManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../banners/bannerManager */ \"./src/banners/bannerManager.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singularState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./singularState */ \"./src/singular/singularState.js\");\n/* harmony import */ var _singularLog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./singularLog */ \"./src/singular/singularLog.js\");\n/* harmony import */ var _api_pageVisitApi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../api/pageVisitApi */ \"./src/api/pageVisitApi.js\");\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar SingularInstance =\n/*#__PURE__*/\nfunction () {\n  function SingularInstance(config) {\n    var _context;\n\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default()(this, SingularInstance);\n\n    this._singularState = _singularState__WEBPACK_IMPORTED_MODULE_14__[\"default\"].getInstance().init(config);\n\n    this._singularState.updateSingularConfig(config);\n\n    _singularLog__WEBPACK_IMPORTED_MODULE_15__[\"default\"].info(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default()(_context = \"SDK is initialized Apikey:\".concat(config.apikey, \", Product Id:\")).call(_context, config.productId));\n    this._apiManager = new _api_apiManager__WEBPACK_IMPORTED_MODULE_11__[\"default\"]();\n    this.sendApi(new _api_pageVisitApi__WEBPACK_IMPORTED_MODULE_16__[\"default\"]());\n    this._bannerManager = new _banners_bannerManager__WEBPACK_IMPORTED_MODULE_12__[\"default\"]();\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default()(SingularInstance, [{\n    key: \"sendApi\",\n    value: function sendApi(api) {\n      this._apiManager.sendApi(api);\n    }\n  }, {\n    key: \"setCustomUserId\",\n    value: function setCustomUserId(customUserId) {\n      this._singularState.setCustomUserId(customUserId);\n    }\n  }, {\n    key: \"unsetCustomUserId\",\n    value: function unsetCustomUserId() {\n      this._singularState.unsetCustomUserId();\n    }\n  }, {\n    key: \"openApp\",\n    value: function openApp(baseLink, deeplink, passthrough, deferredDeeplink) {\n      var webToAppLink = this.buildWebToAppLink(baseLink, deeplink, passthrough, deferredDeeplink);\n\n      if (!webToAppLink) {\n        return;\n      }\n\n      window.open(webToAppLink);\n    }\n  }, {\n    key: \"openAppWithClipboardDdl\",\n    value: function openAppWithClipboardDdl(baseLink, deeplink, passthrough, deferredDeeplink) {\n      var webToAppLink = enrichUrlWithClipboardDdlFlow(this.buildWebToAppLink(baseLink, deeplink, passthrough, deferredDeeplink));\n\n      if (!webToAppLink) {\n        return;\n      }\n\n      window.open(webToAppLink);\n    }\n  }, {\n    key: \"buildWebToAppLink\",\n    value: function buildWebToAppLink(baseLink, deeplink, passthrough, deferredDeeplink) {\n      var webToAppLink = _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].buildWebToAppLink(baseLink, this._singularState.getWebUrl(), deeplink, passthrough, deferredDeeplink);\n\n      if (!webToAppLink) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_15__[\"default\"].warn(\"Invalid base link when generating web to app link\");\n      }\n\n      return webToAppLink;\n    }\n  }, {\n    key: \"getSingularDeviceId\",\n    value: function getSingularDeviceId() {\n      return this._singularState.getSingularDeviceId();\n    }\n  }, {\n    key: \"getMatchID\",\n    value: function getMatchID() {\n      return this._singularState.getMatchID() || this._singularState.getSingularDeviceId();\n    }\n  }, {\n    key: \"setMatchID\",\n    value: function setMatchID(matchId) {\n      this._singularState.setMatchID(matchId);\n    }\n  }, {\n    key: \"clearMatchID\",\n    value: function clearMatchID() {\n      this._singularState.clearMatchID();\n    }\n  }, {\n    key: \"getGlobalProperties\",\n    value: function getGlobalProperties() {\n      return this._singularState.getGlobalProperties();\n    }\n  }, {\n    key: \"clearGlobalProperties\",\n    value: function clearGlobalProperties() {\n      return this._singularState.clearGlobalProperties();\n    }\n  }, {\n    key: \"setGlobalProperties\",\n    value: function setGlobalProperties(key, value) {\n      return this._singularState.setGlobalProperties(key, value);\n    }\n  }, {\n    key: \"unsetGlobalProperty\",\n    value: function unsetGlobalProperty(key) {\n      return this._singularState.unsetGlobalProperty(key);\n    }\n  }, {\n    key: \"isSameApp\",\n    value: function isSameApp(config) {\n      return this._singularState.getSingularConfig().isSameApp(config);\n    }\n  }, {\n    key: \"updateSingularConfig\",\n    value: function updateSingularConfig(config) {\n      this._singularState.updateSingularConfig(config);\n    }\n  }, {\n    key: \"deselectCurrent\",\n    value: function deselectCurrent() {\n      var selection = document.getSelection();\n\n      if (!selection.rangeCount) {\n        return function () {};\n      }\n\n      var active = document.activeElement;\n      var ranges = [];\n\n      for (var i = 0; i < selection.rangeCount; i++) {\n        ranges.push(selection.getRangeAt(i));\n      }\n\n      switch (active.tagName.toUpperCase()) {\n        // .toUpperCase handles XHTML\n        case 'INPUT':\n        case 'TEXTAREA':\n          active.blur();\n          break;\n\n        default:\n          active = null;\n          break;\n      }\n\n      selection.removeAllRanges();\n      return function () {\n        selection.type === 'Caret' && selection.removeAllRanges();\n\n        if (!selection.rangeCount) {\n          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(ranges).call(ranges, function (range) {\n            selection.addRange(range);\n          });\n        }\n\n        active && active.focus();\n      };\n    }\n  }, {\n    key: \"copyToClipboard\",\n    value: function copyToClipboard(text) {\n      var reselectPrevious, range, selection, mark;\n      reselectPrevious = this.deselectCurrent();\n      range = document.createRange();\n      selection = document.getSelection();\n      mark = document.createElement(\"span\");\n      mark.textContent = text;\n      mark.style.all = \"unset\";\n      mark.style.position = \"fixed\";\n      mark.style.top = 0;\n      mark.style.clip = \"rect(0, 0, 0, 0)\";\n      mark.style.whiteSpace = \"pre\";\n      mark.style.webkitUserSelect = \"text\";\n      mark.style.MozUserSelect = \"text\";\n      mark.style.msUserSelect = \"text\";\n      mark.style.userSelect = \"text\";\n      document.body.appendChild(mark);\n      range.selectNodeContents(mark);\n      selection.addRange(range);\n      document.execCommand(\"copy\");\n\n      if (typeof selection.removeRange == \"function\") {\n        selection.removeRange(range);\n      } else {\n        selection.removeAllRanges();\n      }\n\n      document.body.removeChild(mark);\n      reselectPrevious();\n    }\n  }, {\n    key: \"enrichUrlWithClipboardDdlFlow\",\n    value: function enrichUrlWithClipboardDdlFlow(url) {\n      var uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_18__[\"v4\"])();\n      var currentUrl = window.location.href;\n      var urlObj = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_6___default.a(currentUrl);\n      var appendedUrl = urlObj.protocol + '//' + urlObj.hostname + '/' + _consts_constants__WEBPACK_IMPORTED_MODULE_17__[\"SDK\"].ECID_PREFIX + '/' + uuid;\n      var redirectUrlObj = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_6___default.a(url);\n      redirectUrlObj.searchParams.append(_consts_constants__WEBPACK_IMPORTED_MODULE_17__[\"Params\"].ECID, appendedUrl);\n      this.copyToClipboard(appendedUrl);\n      return redirectUrlObj.toString();\n    }\n  }, {\n    key: \"enrichUrlWithMarketingData\",\n    value: function enrichUrlWithMarketingData(url) {\n      if (!this._singularState._isWebUrlContainingMarketingData(window.location.href)) {\n        return url;\n      }\n\n      var locationQueryObject = _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].parseQueryFromUrl(window.location.href);\n      var urlQueryObject = _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].parseQueryFromUrl(url);\n\n      var locationQueryKeys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(locationQueryObject);\n\n      var urlQueryKeys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(urlQueryObject); // Filter the keys to check if keys available to be added in url\n\n\n      var keysToAdd = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(locationQueryKeys).call(locationQueryKeys, function (v) {\n        return _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default()(urlQueryKeys).call(urlQueryKeys, v) == -1;\n      }); // Filter the keys to check if keys to be added are marketing params or not\n\n\n      var marketingParams = _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].extractMarketingData(keysToAdd);\n      /* if url has other parameters added , append utm parameters to url\n         if url has '#', then append params before '#' in url\n         if url has no parameters added , add utm parameters to url */\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1___default()(marketingParams).call(marketingParams)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var _context2, _context3;\n\n          var _step$value = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step.value, 2),\n              i = _step$value[0],\n              key = _step$value[1];\n\n          var queryParam = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default()(_context2 = \"\".concat(encodeURIComponent(key), \"=\")).call(_context2, encodeURIComponent(locationQueryObject[key]));\n\n          url = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default()(url).call(url, \"?\") != -1 ? _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].appendQueryParamsToUrl('?', queryParam, url) : _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default()(url).call(url, \"#\") != -1 ? _utils_utils__WEBPACK_IMPORTED_MODULE_13__[\"default\"].appendQueryParamsToUrl('#', queryParam, url) : _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default()(_context3 = \"\".concat(url, \"?\")).call(_context3, queryParam);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return url;\n    }\n  }, {\n    key: \"showBanner\",\n    value: function showBanner(linkParams) {\n      this._bannerManager.showBanner(linkParams);\n    }\n  }, {\n    key: \"hideBanner\",\n    value: function hideBanner() {\n      this._bannerManager.hideBanner();\n    }\n  }, {\n    key: \"fetchBanner\",\n    value: function fetchBanner() {\n      this._bannerManager.fetchBanner();\n    }\n  }]);\n\n  return SingularInstance;\n}();\n\n\n\n//# sourceURL=webpack:///./src/singular/singularInstance.js?");

/***/ }),

/***/ "./src/singular/singularLog.js":
/*!*************************************!*\
  !*** ./src/singular/singularLog.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingularLog; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n\n\n\n\n\nvar SingularLog =\n/*#__PURE__*/\nfunction () {\n  function SingularLog() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SingularLog);\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SingularLog, null, [{\n    key: \"setLogLevel\",\n    value: function setLogLevel(logLevel) {\n      this._logLevel = logLevel;\n    }\n  }, {\n    key: \"debug\",\n    value: function debug(message) {\n      if (this._logLevel === _consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"LogLevel\"].Debug) {\n        console.log(message);\n      }\n    }\n  }, {\n    key: \"info\",\n    value: function info(message) {\n      if (this._logLevel >= _consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"LogLevel\"].Info) {\n        console.log(message);\n      }\n    }\n  }, {\n    key: \"warn\",\n    value: function warn(message) {\n      if (this._logLevel >= _consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"LogLevel\"].Warn) {\n        console.warn(message);\n      }\n    }\n  }]);\n\n  return SingularLog;\n}();\n\n_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SingularLog, \"_logLevel\", _consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"LogLevel\"].None);\n\n\n\n//# sourceURL=webpack:///./src/singular/singularLog.js?");

/***/ }),

/***/ "./src/singular/singularState.js":
/*!***************************************!*\
  !*** ./src/singular/singularState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingularState; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/entries */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url-search-params */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/starts-with */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/url.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_from_entries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/from-entries */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_from_entries__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_from_entries__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/entries */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _storage_dynamicStorage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../storage/dynamicStorage */ \"./src/storage/dynamicStorage.js\");\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singularLog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./singularLog */ \"./src/singular/singularLog.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = ownKeys(source, true)).call(_context3, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_23___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context4; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = ownKeys(source)).call(_context4, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar SingularState =\n/*#__PURE__*/\nfunction () {\n  function SingularState() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21___default()(this, SingularState);\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_22___default()(SingularState, [{\n    key: \"init\",\n    value: function init(config) {\n      this._singularConfig = config;\n      this._storage = new _storage_dynamicStorage__WEBPACK_IMPORTED_MODULE_24__[\"default\"](_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].Types.Local, this.getStoragePrefix());\n      this._singularDeviceIdStorage = new _storage_dynamicStorage__WEBPACK_IMPORTED_MODULE_24__[\"default\"](_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].Types.Local, _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].GlobalStoragePrefix);\n      this._isFirstVisit = null;\n      this._newSessionIdNeeded = false;\n      this.setWebUrl();\n      this.loadSingularPersistentData();\n      return this;\n    }\n  }, {\n    key: \"loadSingularPersistentData\",\n    value: function loadSingularPersistentData() {\n      this._sdidPersistMode = _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"SDK\"].SdidPersistModeOff;\n      this._sdidPersistFailReason = null;\n      this._previousSdid = null;\n      this._singularDeviceId = null;\n      this._instanceId = null;\n      this._matchId = null;\n      this.getSingularDeviceId();\n      this.getCustomUserId();\n      this.getSingularInstanceId();\n\n      this._persistSingularDeviceIdIfNeeded();\n    }\n  }, {\n    key: \"setWebUrl\",\n    value: function setWebUrl() {\n      var webUrl = this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].StorageWebUrlKey);\n\n      var touchpointTimestamp = this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].StorageTouchpointTimestampKey);\n\n      var currentUrl = window.location.href;\n\n      var hasMarketingParams = this._isWebUrlContainingMarketingData(currentUrl);\n\n      var isFirstVisit = !webUrl;\n\n      var urlChanged = this._didWebUrlChange(currentUrl); // Our goal is to save the last click with marketing data, so this is what we do\n      // 1. if the web_url is empty, we save it\n      // 2. if the new web_url contains marketing parameters we over-ride the current one\n\n\n      if (isFirstVisit || hasMarketingParams && urlChanged) {\n        // Set conversion event occurred flag only when marketing parameters are present to avoid organic traffic\n        if (hasMarketingParams && (isFirstVisit || urlChanged)) {\n          this.setConversionEventOccurred(true);\n        }\n\n        this._webUrl = currentUrl;\n        this._touchpointTimestamp = _utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].getCurrentTimestamp();\n\n        this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].StorageWebUrlKey, this._webUrl);\n\n        this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].StorageTouchpointTimestampKey, this._touchpointTimestamp); // We generate a new session id when opened with new marketing params\n\n\n        this._newSessionIdNeeded = true;\n      } else {\n        this._webUrl = webUrl;\n        this._touchpointTimestamp = touchpointTimestamp;\n      }\n    }\n  }, {\n    key: \"getSingularDeviceId\",\n    value: function getSingularDeviceId() {\n      if (this._singularDeviceId) {\n        return this._singularDeviceId;\n      }\n\n      var previousSdid = this._singularDeviceIdStorage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].SingularDeviceIdKey); // A persistent singular device id has been set to support cross sub-domain\n\n\n      if (this._singularConfig._singularDeviceId) {\n        this._sdidPersistMode = _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"SDK\"].SdidPersistModeManual;\n\n        if (_utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].isUUID(this._singularConfig._singularDeviceId)) {\n          _singularLog__WEBPACK_IMPORTED_MODULE_27__[\"default\"].debug(\"Persistent Singular Device Id was set manually\");\n\n          this._singularDeviceIdStorage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].SingularDeviceIdKey, this._singularConfig._singularDeviceId);\n        } else {\n          _singularLog__WEBPACK_IMPORTED_MODULE_27__[\"default\"].debug(\"Persistent Singular Device Id provided was not in uuid format\");\n          this._sdidPersistFailReason = \"invalid udid:\".concat(this._singularConfig._singularDeviceId);\n        }\n      } else if (!_utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].isNullOrEmpty(this._singularConfig._autoPersistDomain)) {\n        var singularDeviceId = _utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].getCookie(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Cookies\"].SingularDeviceIdKey);\n        this._sdidPersistMode = _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"SDK\"].SdidPersistModeAuto;\n\n        if (singularDeviceId != null) {\n          if (singularDeviceId === \"\") {\n            this._sdidPersistFailReason = \"singular sdid cookie was set to an empty string\";\n          } else if (!_utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].isUUID(singularDeviceId)) {\n            this._sdidPersistFailReason = \"invalid udid:\".concat(singularDeviceId);\n          } else {\n            _singularLog__WEBPACK_IMPORTED_MODULE_27__[\"default\"].debug(\"Persistent Singular Device Id was set automatically from cookies\");\n\n            this._singularDeviceIdStorage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].SingularDeviceIdKey, singularDeviceId);\n          }\n        }\n      }\n\n      this._singularDeviceId = this._getPersistentUUID(this._singularDeviceIdStorage, _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].SingularDeviceIdKey);\n\n      if (!_utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].isNullOrEmpty(previousSdid) && this._singularDeviceId !== previousSdid) {\n        this._previousSdid = previousSdid;\n      }\n\n      return this._singularDeviceId;\n    }\n  }, {\n    key: \"getSdidPersistMode\",\n    value: function getSdidPersistMode() {\n      return this._sdidPersistMode;\n    }\n  }, {\n    key: \"getSdidPersistFailReason\",\n    value: function getSdidPersistFailReason() {\n      return this._sdidPersistFailReason;\n    }\n  }, {\n    key: \"getPreviousSdid\",\n    value: function getPreviousSdid() {\n      return this._previousSdid;\n    }\n  }, {\n    key: \"getStoragePrefix\",\n    value: function getStoragePrefix() {\n      var _context;\n\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_20___default()(_context = \"\".concat(this._singularConfig.apikey, \"_\")).call(_context, this._singularConfig.productId);\n    }\n  }, {\n    key: \"getCustomUserId\",\n    value: function getCustomUserId() {\n      if (this._customUserId) {\n        return this._customUserId;\n      }\n\n      this._customUserId = this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].CustomUserIdKey);\n      return this._customUserId;\n    }\n  }, {\n    key: \"getWebUrl\",\n    value: function getWebUrl() {\n      return this._webUrl;\n    }\n  }, {\n    key: \"getTouchpointTimestamp\",\n    value: function getTouchpointTimestamp() {\n      return this._touchpointTimestamp;\n    }\n  }, {\n    key: \"setCustomUserId\",\n    value: function setCustomUserId(customUserId) {\n      this._customUserId = customUserId;\n\n      this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].CustomUserIdKey, customUserId);\n    }\n  }, {\n    key: \"unsetCustomUserId\",\n    value: function unsetCustomUserId() {\n      this._customUserId = null;\n\n      this._storage.removeItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].CustomUserIdKey);\n    }\n  }, {\n    key: \"getSingularConfig\",\n    value: function getSingularConfig() {\n      return this._singularConfig;\n    }\n  }, {\n    key: \"getSessionId\",\n    value: function getSessionId() {\n      return this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].SessionIdKey);\n    }\n  }, {\n    key: \"getSessionIdForPageVisit\",\n    value: function getSessionIdForPageVisit() {\n      if (!this._isNewSessionIdNeeded()) {\n        return this.getSessionId();\n      }\n\n      var sessionId = this._generateNewSessionId();\n\n      this.setFirstPageVisitOccurred(false);\n      this.setFirstPageVisitURL(null); // The first time the sdk initializes we don't have a session id. In the case that events are\n      // Not being sent from the first tab, meaning we won't save the session id. If the user opens\n      // A new tab in this case it will generate a new session id even though no re-eng happened.\n      // This is why on the first time the user enters the site we save the first session id before\n      // PageVisit has been successfully sent.\n\n      if (!this.getSessionId()) {\n        this.saveSessionId(sessionId);\n      }\n\n      return sessionId;\n    }\n  }, {\n    key: \"getSingularInstanceId\",\n    value: function getSingularInstanceId() {\n      if (this._instanceId) {\n        return this._instanceId;\n      }\n\n      this._instanceId = this._getPersistentUUID(this._storage, _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].SingularInstanceIdKey);\n      return this._instanceId;\n    }\n  }, {\n    key: \"saveSessionId\",\n    value: function saveSessionId(sessionId) {\n      this._setSessionId(sessionId);\n    }\n  }, {\n    key: \"isFirstVisit\",\n    value: function isFirstVisit() {\n      if (this._isFirstVisit !== null) {\n        return this._isFirstVisit;\n      }\n\n      this._isFirstVisit = !this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].DidVisitSiteKey);\n\n      if (this._isFirstVisit) {\n        this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].DidVisitSiteKey, true);\n      }\n\n      return this._isFirstVisit;\n    }\n  }, {\n    key: \"getMatchID\",\n    value: function getMatchID() {\n      if (this._matchId) {\n        return this._matchId;\n      }\n\n      this._matchId = this._singularDeviceIdStorage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].MatchIdKey);\n      return this._matchId;\n    }\n  }, {\n    key: \"setMatchID\",\n    value: function setMatchID(matchId) {\n      this._singularDeviceIdStorage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].MatchIdKey, matchId);\n\n      this._matchId = matchId;\n    }\n  }, {\n    key: \"clearMatchID\",\n    value: function clearMatchID() {\n      this._singularDeviceIdStorage.removeItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].MatchIdKey);\n\n      this._matchId = null;\n    }\n  }, {\n    key: \"getGlobalProperties\",\n    value: function getGlobalProperties() {\n      return JSON.parse(this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].GlobalProperties));\n    }\n  }, {\n    key: \"_saveGlobalProperties\",\n    value: function _saveGlobalProperties(properties) {\n      var entries = _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_19___default()(properties);\n\n      var limited = _babel_runtime_corejs3_core_js_stable_object_from_entries__WEBPACK_IMPORTED_MODULE_18___default()(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_17___default()(entries).call(entries, 0, 5));\n\n      this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].GlobalProperties, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16___default()(limited));\n\n      return entries.length <= 5;\n    }\n  }, {\n    key: \"initGlobalProperties\",\n    value: function initGlobalProperties(newProperties, overrideExisting) {\n      if (!_utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].isObject(newProperties)) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_27__[\"default\"].warn('initGlobalProperties: properties must be a plain object');\n        return false;\n      }\n\n      var existing = overrideExisting ? {} : this.getGlobalProperties() || {};\n      return this._saveGlobalProperties(_objectSpread({}, existing, {}, newProperties));\n    }\n  }, {\n    key: \"setGlobalProperties\",\n    value: function setGlobalProperties(key, value) {\n      if (!key) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_27__[\"default\"].warn('setGlobalProperties: key must not be empty');\n        return false;\n      }\n\n      var properties = this.getGlobalProperties() || {};\n      properties[key] = value;\n      return this._saveGlobalProperties(properties);\n    }\n  }, {\n    key: \"unsetGlobalProperty\",\n    value: function unsetGlobalProperty(key) {\n      if (!key) {\n        _singularLog__WEBPACK_IMPORTED_MODULE_27__[\"default\"].warn('unsetGlobalProperty: key must not be empty');\n        return false;\n      }\n\n      var properties = this.getGlobalProperties();\n\n      if (properties && key in properties) {\n        delete properties[key];\n\n        this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].GlobalProperties, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16___default()(properties));\n      }\n\n      return true;\n    }\n  }, {\n    key: \"clearGlobalProperties\",\n    value: function clearGlobalProperties() {\n      this._storage.removeItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].GlobalProperties);\n\n      return true;\n    }\n  }, {\n    key: \"IsFirstEvent\",\n    value: function IsFirstEvent(eventName) {\n      var _context2;\n\n      var key = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_20___default()(_context2 = \"\".concat(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].DidSendEventKeyBase, \".\")).call(_context2, eventName);\n\n      var didSendEvent = !!this._storage.getItem(key);\n\n      if (!didSendEvent) {\n        this._storage.setItem(key, true);\n      }\n\n      return !didSendEvent;\n    }\n  }, {\n    key: \"updateLastEventTimestamp\",\n    value: function updateLastEventTimestamp() {\n      this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].StorageLastEventTimestamp, _utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].getCurrentTimestamp());\n    }\n  }, {\n    key: \"getFirstPageVisitOccurred\",\n    value: function getFirstPageVisitOccurred() {\n      return this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].FirstPageVisitOccurredKey) === \"true\";\n    }\n  }, {\n    key: \"setFirstPageVisitOccurred\",\n    value: function setFirstPageVisitOccurred(firstPageVisitOccurred) {\n      return this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].FirstPageVisitOccurredKey, firstPageVisitOccurred.toString());\n    }\n  }, {\n    key: \"setFirstPageVisitURL\",\n    value: function setFirstPageVisitURL(firstVisitURL) {\n      this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].FirstPageVisitURL, firstVisitURL);\n    }\n  }, {\n    key: \"getFirstPageVisitURL\",\n    value: function getFirstPageVisitURL() {\n      return this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].FirstPageVisitURL);\n    }\n  }, {\n    key: \"getConversionEventOccurred\",\n    value: function getConversionEventOccurred() {\n      return this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].ConversionEventOccurredKey) === \"true\";\n    }\n  }, {\n    key: \"setConversionEventOccurred\",\n    value: function setConversionEventOccurred(conversionEventOccurred) {\n      return this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].ConversionEventOccurredKey, conversionEventOccurred.toString());\n    }\n  }, {\n    key: \"updateSingularConfig\",\n    value: function updateSingularConfig(config) {\n      this._singularConfig = config;\n\n      if (config.customUserId) {\n        this.setCustomUserId(config.customUserId);\n      }\n\n      if (config.globalProperties) {\n        this.initGlobalProperties(config.globalProperties, config.overrideExistingGlobalProperties);\n      } // Will handle SDID / Cookie logic with the new config here\n\n\n      this.loadSingularPersistentData();\n    }\n  }, {\n    key: \"_getPersistentUUID\",\n    value: function _getPersistentUUID(storage, storageKey) {\n      var value = storage.getItem(storageKey); // If there is no persistent id saved on storage, generate a new one and save it\n\n      if (!value) {\n        value = _utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].generateUUID();\n        storage.setItem(storageKey, value);\n      }\n\n      return value;\n    }\n  }, {\n    key: \"_isWebUrlContainingMarketingData\",\n    value: function _isWebUrlContainingMarketingData(webUrl) {\n      try {\n        var url = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_15___default.a(webUrl);\n        var urlParams = url.searchParams; // Check each marketing parameter type\n\n        for (var key in _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Params\"].WebUrlMarketingParams) {\n          var _iteratorNormalCompletion = true;\n          var _didIteratorError = false;\n          var _iteratorError = undefined;\n\n          try {\n            for (var _iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default()(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Params\"].WebUrlMarketingParams[key]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n              var param_regex = _step.value;\n\n              // Handle UTM parameters (regex pattern)\n              if (param_regex === 'utm_.+=') {\n                // Check for any UTM parameter\n                var _iteratorNormalCompletion2 = true;\n                var _didIteratorError2 = false;\n                var _iteratorError2 = undefined;\n\n                try {\n                  for (var _iterator2 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13___default()(urlParams).call(urlParams)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                    var paramName = _step2.value;\n\n                    if (_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_12___default()(paramName).call(paramName, 'utm_')) {\n                      return true;\n                    }\n                  }\n                } catch (err) {\n                  _didIteratorError2 = true;\n                  _iteratorError2 = err;\n                } finally {\n                  try {\n                    if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n                      _iterator2[\"return\"]();\n                    }\n                  } finally {\n                    if (_didIteratorError2) {\n                      throw _iteratorError2;\n                    }\n                  }\n                }\n              } // Handle simple parameter names\n              else {\n                  // Extract parameter name from pattern (remove \"=\" suffix if present)\n                  var _paramName = param_regex.replace(/=$/, ''); // Check if URL has this parameter\n\n\n                  if (urlParams.has(_paramName)) {\n                    return true;\n                  }\n                }\n            }\n          } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                _iterator[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError) {\n                throw _iteratorError;\n              }\n            }\n          }\n        }\n\n        return false;\n      } catch (e) {\n        // Fallback to original regex method if URL parsing fails\n        for (var _key in _consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Params\"].WebUrlMarketingParams) {\n          var _iteratorNormalCompletion3 = true;\n          var _didIteratorError3 = false;\n          var _iteratorError3 = undefined;\n\n          try {\n            for (var _iterator3 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default()(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Params\"].WebUrlMarketingParams[_key]), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n              var _param_regex = _step3.value;\n              var regex = RegExp(_param_regex);\n\n              if (regex.test(webUrl)) {\n                return true;\n              }\n            }\n          } catch (err) {\n            _didIteratorError3 = true;\n            _iteratorError3 = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n                _iterator3[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError3) {\n                throw _iteratorError3;\n              }\n            }\n          }\n        }\n\n        return false;\n      }\n    }\n  }, {\n    key: \"_didWebUrlChange\",\n    value: function _didWebUrlChange(webUrl) {\n      var oldWebUrlParams = new _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_11___default.a(this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].StorageWebUrlKey));\n      var newWebUrlParams = new _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_11___default.a(webUrl);\n\n      if (oldWebUrlParams.size !== newWebUrlParams.size) {\n        return true;\n      }\n\n      for (var _i = 0, _Array$from = _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_9___default()(newWebUrlParams).call(newWebUrlParams)); _i < _Array$from.length; _i++) {\n        var _Array$from$_i = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_Array$from[_i], 2),\n            key = _Array$from$_i[0],\n            val = _Array$from$_i[1];\n\n        if (oldWebUrlParams.get(key) !== val) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"_setSessionId\",\n    value: function _setSessionId(sessionId) {\n      this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].SessionIdKey, sessionId);\n    }\n  }, {\n    key: \"_getLastEventTimestamp\",\n    value: function _getLastEventTimestamp() {\n      return this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Storage\"].StorageLastEventTimestamp);\n    }\n  }, {\n    key: \"_isNewSessionIdNeeded\",\n    value: function _isNewSessionIdNeeded() {\n      return this._newSessionIdNeeded || !this.getSessionId() || !this._getLastEventTimestamp() || this._isSessionTimeout();\n    }\n  }, {\n    key: \"_isSessionTimeout\",\n    value: function _isSessionTimeout() {\n      var diff = _utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].getCurrentTimestamp() - this._getLastEventTimestamp(); // If the timestamp is corrupted/invalid, treat as timed out\n\n\n      if (isNaN(diff)) {\n        return true;\n      }\n\n      return diff > this._singularConfig.sessionTimeOutInSeconds;\n    }\n  }, {\n    key: \"_generateNewSessionId\",\n    value: function _generateNewSessionId() {\n      this._newSessionIdNeeded = false;\n      return _utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].generateUUID();\n    }\n  }, {\n    key: \"_persistSingularDeviceIdIfNeeded\",\n    value: function _persistSingularDeviceIdIfNeeded() {\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].isNullOrEmpty(this._singularConfig._autoPersistDomain)) {\n        return;\n      }\n\n      _utils_utils__WEBPACK_IMPORTED_MODULE_26__[\"default\"].setCookie(_consts_constants__WEBPACK_IMPORTED_MODULE_25__[\"Cookies\"].SingularDeviceIdKey, this.getSingularDeviceId(), this._singularConfig._autoPersistDomain);\n    }\n  }], [{\n    key: \"getInstance\",\n    value: function getInstance() {\n      if (!this._instance) {\n        this._instance = new SingularState();\n      }\n\n      return this._instance;\n    }\n  }]);\n\n  return SingularState;\n}();\n\n_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_23___default()(SingularState, \"_instance\", void 0);\n\n\n\n//# sourceURL=webpack:///./src/singular/singularState.js?");

/***/ }),

/***/ "./src/storage/dynamicStorage.js":
/*!***************************************!*\
  !*** ./src/storage/dynamicStorage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DynamicStorage; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _singular_singularLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../singular/singularLog */ \"./src/singular/singularLog.js\");\n\n\n\n\n\n\n\n\nvar DynamicStorage =\n/*#__PURE__*/\nfunction () {\n  function DynamicStorage(memoryType, storagePrefix) {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DynamicStorage);\n\n    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"_isInitialized\", false);\n\n    // On the first storage allocation, we check what's the max level of storage accessible\n    DynamicStorage.getAvailableStorageType();\n    this._storagePrefix = storagePrefix;\n    this._isInitialized = true;\n\n    if (memoryType === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Local && DynamicStorage._isLocalStorageAvailable()) {\n      this._storage = localStorage;\n      return;\n    }\n\n    if ((memoryType === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Local || memoryType === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Session) && DynamicStorage._isSessionStorageAvailable()) {\n      this._storage = sessionStorage;\n      return;\n    }\n\n    this._buildMemoryStorage();\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DynamicStorage, [{\n    key: \"getItem\",\n    value: function getItem(key) {\n      var _context;\n\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isNullOrEmpty(key) || !this._isInitialized) {\n        return null;\n      }\n\n      return this._storage.getItem(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = \"\".concat(this._storagePrefix, \"_\")).call(_context, key));\n    }\n  }, {\n    key: \"setItem\",\n    value: function setItem(key, value) {\n      var _context2;\n\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isNullOrEmpty(key) || !value || !this._isInitialized) {\n        return;\n      }\n\n      this._storage.setItem(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = \"\".concat(this._storagePrefix, \"_\")).call(_context2, key), value);\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(key) {\n      var _context3;\n\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isNullOrEmpty(key) || !this._isInitialized) {\n        return;\n      }\n\n      this._storage.removeItem(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = \"\".concat(this._storagePrefix, \"_\")).call(_context3, key));\n    }\n  }, {\n    key: \"_buildMemoryStorage\",\n    value: function _buildMemoryStorage() {\n      var _this = this;\n\n      _singular_singularLog__WEBPACK_IMPORTED_MODULE_6__[\"default\"].warn(\"Using memory storage\");\n      this._storage = {\n        _data: {},\n        setItem: function setItem(key, value) {\n          _this._storage._data[key] = value;\n        },\n        getItem: function getItem(key) {\n          return _this._storage._data[key];\n        },\n        removeItem: function removeItem(key) {\n          delete _this._storage._data[key];\n        }\n      };\n    }\n  }], [{\n    key: \"getAvailableStorageType\",\n    value: function getAvailableStorageType() {\n      // Once the available storage type is found, there is no need to check again\n      if (this._availableStorageType) {\n        return this._availableStorageType;\n      }\n\n      if (this._isLocalStorageAvailable()) {\n        this._availableStorageType = _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Local;\n      } else if (this._isSessionStorageAvailable()) {\n        this._availableStorageType = _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Session;\n      } else {\n        this._availableStorageType = _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Memory;\n      }\n\n      return this._availableStorageType;\n    }\n  }, {\n    key: \"_isLocalStorageAvailable\",\n    value: function _isLocalStorageAvailable() {\n      // If the storage availability is already found, no need to check again\n      if (this._availableStorageType === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Local) {\n        return true;\n      }\n\n      try {\n        localStorage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestKey, _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestValue);\n        var result = localStorage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestKey) === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestValue;\n        localStorage.removeItem(_consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestKey);\n        return result;\n      } catch (e) {\n        return false;\n      }\n    }\n  }, {\n    key: \"_isSessionStorageAvailable\",\n    value: function _isSessionStorageAvailable() {\n      // If the storage availability is already found, no need to check again\n      if (this._availableStorageType === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Local || this._availableStorageType === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].Types.Session) {\n        return true;\n      }\n\n      try {\n        sessionStorage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestKey, _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestValue);\n        var result = sessionStorage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestKey) === _consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestValue;\n        sessionStorage.removeItem(_consts_constants__WEBPACK_IMPORTED_MODULE_4__[\"Storage\"].StorageEnabledTestKey);\n        return result;\n      } catch (e) {\n        return false;\n      }\n    }\n  }]);\n\n  return DynamicStorage;\n}();\n\n_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(DynamicStorage, \"_availableStorageType\", void 0);\n\n\n\n//# sourceURL=webpack:///./src/storage/dynamicStorage.js?");

/***/ }),

/***/ "./src/storage/storageQueue.js":
/*!*************************************!*\
  !*** ./src/storage/storageQueue.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StorageQueue; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var _api_baseApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/baseApi */ \"./src/api/baseApi.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _dynamicStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicStorage */ \"./src/storage/dynamicStorage.js\");\n/* harmony import */ var _singular_singularLog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../singular/singularLog */ \"./src/singular/singularLog.js\");\n/* harmony import */ var _singular_singularState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../singular/singularState */ \"./src/singular/singularState.js\");\n\n\n\n\n\n\n\n\n\n\nvar StorageQueue =\n/*#__PURE__*/\nfunction () {\n  function StorageQueue() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StorageQueue);\n\n    this._storage = new _dynamicStorage__WEBPACK_IMPORTED_MODULE_6__[\"default\"](_consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"Storage\"].Types.Session, _singular_singularState__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getInstance().getStoragePrefix());\n    this._queue = this._loadQueueFromStorage();\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StorageQueue, [{\n    key: \"enqueue\",\n    value: function enqueue(api) {\n      if (_utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isNullOrEmpty(api) || !(api instanceof _api_baseApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) || this._queue.length >= _consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"Storage\"].MaxApisInQueue) {\n        return;\n      }\n\n      _singular_singularLog__WEBPACK_IMPORTED_MODULE_7__[\"default\"].debug(\"Enqueued api:\".concat(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(api)));\n\n      this._queue.push(_api_baseApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"].toJsonString(api));\n\n      this._saveQueueToStorage();\n    }\n  }, {\n    key: \"dequeue\",\n    value: function dequeue() {\n      if (this.isQueueEmpty()) {\n        return null;\n      }\n\n      var api = _api_baseApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromJsonString(this._queue.shift());\n\n      this._saveQueueToStorage();\n\n      _singular_singularLog__WEBPACK_IMPORTED_MODULE_7__[\"default\"].debug(\"Dequeued api:\".concat(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(api)));\n      return api;\n    }\n  }, {\n    key: \"peek\",\n    value: function peek() {\n      if (this.isQueueEmpty()) {\n        return null;\n      }\n\n      return _api_baseApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromJsonString(this._queue[0]);\n    }\n  }, {\n    key: \"isQueueEmpty\",\n    value: function isQueueEmpty() {\n      return this._queue.length <= 0;\n    }\n  }, {\n    key: \"_saveQueueToStorage\",\n    value: function _saveQueueToStorage() {\n      this._storage.setItem(_consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"Storage\"].ApiQueueKey, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this._queue));\n    }\n  }, {\n    key: \"_loadQueueFromStorage\",\n    value: function _loadQueueFromStorage() {\n      var queueJson = this._storage.getItem(_consts_constants__WEBPACK_IMPORTED_MODULE_3__[\"Storage\"].ApiQueueKey);\n\n      if (!queueJson) {\n        return [];\n      }\n\n      _singular_singularLog__WEBPACK_IMPORTED_MODULE_7__[\"default\"].info(\"Api queue loaded from storage\");\n      return JSON.parse(queueJson);\n    }\n  }]);\n\n  return StorageQueue;\n}();\n\n\n\n//# sourceURL=webpack:///./src/storage/storageQueue.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utils; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"./node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _consts_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../consts/constants */ \"./src/consts/constants.js\");\n/* harmony import */ var js_sha1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-sha1 */ \"./node_modules/js-sha1/src/sha1.js\");\n/* harmony import */ var js_sha1__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_sha1__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var polyfill_crypto_getrandomvalues__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! polyfill-crypto.getrandomvalues */ \"./node_modules/polyfill-crypto.getrandomvalues/index.js\");\n/* harmony import */ var polyfill_crypto_getrandomvalues__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(polyfill_crypto_getrandomvalues__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Utils =\n/*#__PURE__*/\nfunction () {\n  function Utils() {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, Utils);\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default()(Utils, null, [{\n    key: \"generateUUID\",\n    value: function generateUUID() {\n      // This is for old browsers support\n      var cryptoObject = window.crypto ? window.crypto : window.msCrypto;\n\n      if (!cryptoObject || !cryptoObject.getRandomValues || !cryptoObject.getRandomValues(new Uint8Array(1))) {\n        cryptoObject = {\n          getRandomValues: function getRandomValues(item) {\n            return polyfill_crypto_getrandomvalues__WEBPACK_IMPORTED_MODULE_14___default()(item);\n          }\n        };\n      }\n\n      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {\n        return (c ^ cryptoObject.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);\n      });\n    }\n  }, {\n    key: \"isUUID\",\n    value: function isUUID(uuid) {\n      return RegExp(_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Params\"].UUID_REGEX).test(uuid);\n    }\n  }, {\n    key: \"isObject\",\n    value: function isObject(object) {\n      return Object.prototype.toString.call(object) === '[object Object]';\n    }\n  }, {\n    key: \"getCurrentTimestamp\",\n    value: function getCurrentTimestamp() {\n      return Math.round(new Date().getTime() / 1000);\n    }\n  }, {\n    key: \"getOS\",\n    value: function () {\n      var _getOS = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {\n        var _context, _context2, _context3, platform, userAgent;\n\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.prev = 0;\n                platform = navigator.platform || \"\";\n                _context4.next = 4;\n                return this._getUserAgentInfo();\n\n              case 4:\n                userAgent = _context4.sent;\n\n                if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default()(_context = _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].MacOsPlatforms).call(_context, platform)) {\n                  _context4.next = 9;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\", _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].MacOs);\n\n              case 9:\n                if (!(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default()(_context2 = _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].iOSPlatforms).call(_context2, platform) || /iPad|iPhone|iPod/.test(userAgent))) {\n                  _context4.next = 13;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\", _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].iOS);\n\n              case 13:\n                if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default()(_context3 = _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].WindowsPlatforms).call(_context3, platform)) {\n                  _context4.next = 17;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\", _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].Windows);\n\n              case 17:\n                if (!/Android/.test(userAgent)) {\n                  _context4.next = 21;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\", _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].Android);\n\n              case 21:\n                if (!/Linux/.test(platform)) {\n                  _context4.next = 23;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\", _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].Linux);\n\n              case 23:\n                _context4.next = 27;\n                break;\n\n              case 25:\n                _context4.prev = 25;\n                _context4.t0 = _context4[\"catch\"](0);\n\n              case 27:\n                return _context4.abrupt(\"return\", _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"OS\"].Unknown);\n\n              case 28:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee, this, [[0, 25]]);\n      }));\n\n      function getOS() {\n        return _getOS.apply(this, arguments);\n      }\n\n      return getOS;\n    }()\n  }, {\n    key: \"isNullOrEmpty\",\n    value: function isNullOrEmpty(value) {\n      return value === null || value === undefined || value === '';\n    }\n  }, {\n    key: \"calculateHash\",\n    value: function calculateHash(data, secret) {\n      return js_sha1__WEBPACK_IMPORTED_MODULE_13___default.a.hex(secret + data);\n    }\n  }, {\n    key: \"getTimeZone\",\n    value: function getTimeZone() {\n      return new Date().toString().match(/([A-Z]+[\\+-][0-9]+)/)[1];\n    }\n  }, {\n    key: \"getBrowserAvailableMemory\",\n    value: function getBrowserAvailableMemory() {\n      try {\n        if (!window.performance.hasOwnProperty('memory') || !window.performance.memory.hasOwnProperty('jsHeapSizeLimit')) {\n          return null;\n        }\n\n        return window.performance.memory.jsHeapSizeLimit;\n      } catch (e) {\n        return null;\n      }\n    }\n  }, {\n    key: \"getBrowserUsedMemory\",\n    value: function getBrowserUsedMemory() {\n      try {\n        if (!window.performance.hasOwnProperty('memory') || !window.performance.memory.hasOwnProperty('usedJSHeapSize')) {\n          return null;\n        }\n\n        return window.performance.memory.usedJSHeapSize;\n      } catch (e) {\n        return null;\n      }\n    }\n  }, {\n    key: \"buildWebToAppLink\",\n    value: function buildWebToAppLink(baseLink, webUrl, deeplink, passthrough, deferredDeeplink) {\n      var _context5, _context7;\n\n      if (!this.isValidUrl(baseLink)) {\n        return null;\n      }\n\n      var linkParams = this.parseQueryFromUrl(baseLink);\n      var webParams = this.extractQueryStringWithFragment(webUrl);\n\n      if (!this.isNullOrEmpty(webParams)) {\n        linkParams[_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Params\"].WebParams] = webParams;\n      }\n\n      if (!this.isNullOrEmpty(deeplink)) {\n        linkParams[_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Params\"].DeeplinkParam] = deeplink;\n      }\n\n      if (!this.isNullOrEmpty(passthrough)) {\n        linkParams[_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Params\"].PassthroughParam] = passthrough;\n      }\n\n      if (!this.isNullOrEmpty(deferredDeeplink)) {\n        linkParams[_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Params\"].DeferredDeeplinkParam] = deferredDeeplink;\n      }\n\n      var encodedQueryParams = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(linkParams)).call(_context5, function (key) {\n        var _context6;\n\n        return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context6 = \"\".concat(encodeURIComponent(key), \"=\")).call(_context6, encodeURIComponent(linkParams[key]));\n      });\n\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context7 = \"\".concat(this.extractUrlWithPath(baseLink), \"?\")).call(_context7, encodedQueryParams.join('&'));\n    }\n  }, {\n    key: \"parseQueryFromUrl\",\n    value: function parseQueryFromUrl(url) {\n      if (this.isNullOrEmpty(url)) {\n        return {};\n      }\n\n      var urlSplit = url.split('?');\n\n      if (urlSplit.length <= 1) {\n        return {};\n      } // If the developer enters the base link with a fragment we remove it before invoking\n\n\n      var queryString = urlSplit[1].split('#')[0];\n      var params = {};\n      var pairs = queryString.split('&');\n\n      for (var i = 0; i < pairs.length; i++) {\n        var pair = pairs[i].split('=');\n        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');\n      }\n\n      return params;\n    }\n  }, {\n    key: \"extractUrlWithPath\",\n    value: function extractUrlWithPath(url) {\n      if (this.isNullOrEmpty(url)) {\n        return null;\n      }\n\n      return url.split('?')[0];\n    }\n  }, {\n    key: \"isValidUrl\",\n    value: function isValidUrl(url) {\n      if (this.isNullOrEmpty(url)) {\n        return false;\n      }\n\n      var pattern = /(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?/;\n      return pattern.test(url);\n    }\n  }, {\n    key: \"extractQueryStringWithFragment\",\n    value: function extractQueryStringWithFragment(url) {\n      if (this.isNullOrEmpty(url)) {\n        return null;\n      } // We extract the query string from the url.\n      // If there's a fragment we will also return it as a part of string\n\n\n      var splitValues = url.split('?');\n\n      if (splitValues.length >= 2 && !this.isNullOrEmpty(splitValues[1])) {\n        return splitValues[1];\n      } // If there's no query string try to extract only the fragment\n\n\n      splitValues = url.split('#');\n\n      if (splitValues.length >= 2 && !this.isNullOrEmpty(splitValues[1])) {\n        return splitValues[1];\n      }\n\n      return \"\";\n    }\n  }, {\n    key: \"isPageRefreshed\",\n    value: function isPageRefreshed() {\n      try {\n        // when window.performance.navigation.type equals to 1 it means the window was reloaded\n        if (!window.performance || window.performance.navigation.type !== 1) {\n          return false;\n        }\n      } catch (e) {\n        return false;\n      }\n\n      return true;\n    }\n  }, {\n    key: \"getClientHints\",\n    value: function getClientHints() {\n      return this._getDataFromClientHints(_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"ClientHints\"].HighEntropyValuesKeys);\n    }\n  }, {\n    key: \"setSdkWrapper\",\n    value: function setSdkWrapper(wrapper) {\n      if (Utils.isNullOrEmpty(wrapper)) {\n        return;\n      }\n\n      this._sdkWrapper = wrapper;\n    }\n  }, {\n    key: \"getSdkVersion\",\n    value: function getSdkVersion() {\n      var _context8;\n\n      if (!this._sdkWrapper) {\n        return _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"SDK\"].Version;\n      }\n\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context8 = \"\".concat(_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"SDK\"].Version, \"-\")).call(_context8, this._sdkWrapper);\n    }\n  }, {\n    key: \"getCookie\",\n    value: function getCookie(key) {\n      var cookieString = document.cookie;\n\n      if (Utils.isNullOrEmpty(cookieString)) {\n        return null;\n      }\n\n      var cookies = document.cookie.split(';');\n      var cookieKey = key + '=';\n      var cookieValue = null;\n\n      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(cookies).call(cookies, function (cookie) {\n        cookie = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2___default()(cookie).call(cookie);\n\n        if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default()(cookie).call(cookie, cookieKey) === 0) {\n          cookieValue = decodeURIComponent(cookie.substring(cookieKey.length, cookie.length));\n        }\n      });\n\n      return cookieValue;\n    }\n  }, {\n    key: \"setCookie\",\n    value: function setCookie(key, value, domain) {\n      var _context9, _context10, _context11, _context12, _context13;\n\n      if (Utils.isNullOrEmpty(key) || Utils.isNullOrEmpty(value) || Utils.isNullOrEmpty(domain)) {\n        return;\n      }\n\n      var expiration = Utils._getCookieExpirationDate();\n\n      document.cookie = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context9 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context10 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context11 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context12 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context13 = \"\".concat(key, \"=\")).call(_context13, encodeURIComponent(value), \"; \")).call(_context12, _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Cookies\"].CookieDomainKey, \"=\")).call(_context11, domain, \"; \")).call(_context10, _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Cookies\"].CookieExpiresKey, \"=\")).call(_context9, expiration.toGMTString(), \"; path=/\");\n    }\n  }, {\n    key: \"_getCookieExpirationDate\",\n    value: function _getCookieExpirationDate() {\n      var date = new Date();\n      date.setTime(date.getTime() + _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Cookies\"].CookieExpirationInDays);\n      return date;\n    }\n  }, {\n    key: \"_getUserAgentInfo\",\n    value: function () {\n      var _getUserAgentInfo2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context14) {\n          while (1) {\n            switch (_context14.prev = _context14.next) {\n              case 0:\n                if (navigator.userAgentData) {\n                  _context14.next = 2;\n                  break;\n                }\n\n                return _context14.abrupt(\"return\", navigator.userAgent || \"\");\n\n              case 2:\n                _context14.next = 4;\n                return this._getClientHintsPlatform();\n\n              case 4:\n                return _context14.abrupt(\"return\", _context14.sent);\n\n              case 5:\n              case \"end\":\n                return _context14.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function _getUserAgentInfo() {\n        return _getUserAgentInfo2.apply(this, arguments);\n      }\n\n      return _getUserAgentInfo;\n    }()\n  }, {\n    key: \"_getClientHintsPlatform\",\n    value: function () {\n      var _getClientHintsPlatform2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {\n        var platformHint;\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context15) {\n          while (1) {\n            switch (_context15.prev = _context15.next) {\n              case 0:\n                _context15.next = 2;\n                return this._getDataFromClientHints([_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"ClientHints\"].PlatformKey]);\n\n              case 2:\n                platformHint = _context15.sent;\n\n                if (platformHint) {\n                  _context15.next = 5;\n                  break;\n                }\n\n                return _context15.abrupt(\"return\", \"\");\n\n              case 5:\n                return _context15.abrupt(\"return\", platformHint[_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"ClientHints\"].PlatformKey] || \"\");\n\n              case 6:\n              case \"end\":\n                return _context15.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function _getClientHintsPlatform() {\n        return _getClientHintsPlatform2.apply(this, arguments);\n      }\n\n      return _getClientHintsPlatform;\n    }()\n  }, {\n    key: \"_getDataFromClientHints\",\n    value: function () {\n      var _getDataFromClientHints2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(keys) {\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context16) {\n          while (1) {\n            switch (_context16.prev = _context16.next) {\n              case 0:\n                if (navigator.userAgentData) {\n                  _context16.next = 2;\n                  break;\n                }\n\n                return _context16.abrupt(\"return\", null);\n\n              case 2:\n                _context16.next = 4;\n                return navigator.userAgentData.getHighEntropyValues(keys);\n\n              case 4:\n                return _context16.abrupt(\"return\", _context16.sent);\n\n              case 5:\n              case \"end\":\n                return _context16.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function _getDataFromClientHints(_x) {\n        return _getDataFromClientHints2.apply(this, arguments);\n      }\n\n      return _getDataFromClientHints;\n    }()\n  }, {\n    key: \"extractMarketingData\",\n    value: function extractMarketingData(result) {\n      var marketingParams = [];\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(result), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var objectK = _step.value;\n\n          for (var key in _consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Params\"].WebUrlMarketingParams) {\n            var _iteratorNormalCompletion2 = true;\n            var _didIteratorError2 = false;\n            var _iteratorError2 = undefined;\n\n            try {\n              for (var _iterator2 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(_consts_constants__WEBPACK_IMPORTED_MODULE_12__[\"Params\"].WebUrlMarketingParams[key]), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                var param_regex = _step2.value;\n                var regex = RegExp('^' + param_regex);\n\n                if (regex.test(objectK + \"=\")) {\n                  marketingParams.push(objectK);\n                }\n              }\n            } catch (err) {\n              _didIteratorError2 = true;\n              _iteratorError2 = err;\n            } finally {\n              try {\n                if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n                  _iterator2[\"return\"]();\n                }\n              } finally {\n                if (_didIteratorError2) {\n                  throw _iteratorError2;\n                }\n              }\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return marketingParams;\n    }\n  }, {\n    key: \"appendQueryParamsToUrl\",\n    value: function appendQueryParamsToUrl(splitChar, queryParam, url) {\n      var _context17, _context18, _context19;\n\n      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context17 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context18 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context19 = \"\".concat(url.split(splitChar)[0], \"?\")).call(_context19, queryParam)).call(_context18, splitChar == \"?\" ? \"&\" : \"#\")).call(_context17, url.split(splitChar)[1]);\n    }\n  }]);\n\n  return Utils;\n}();\n\n\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });
});