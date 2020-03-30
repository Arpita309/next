module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eOL+");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "eOL+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext');
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: hsl(0, 1%, 81%);
    font-family: 'Raleway', sans-serif;
  }
  .container {
    padding-bottom: 80px;
  }
  
  .header {
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    text-transform: uppercase;
    color: #f1f1f1;
    background: #595a5c;
    padding: 40px;
    border-bottom: 1px solid #474747;
  }
  .note {
    color: #727070;
    padding: 40px;
    margin: 20px;
    background: #fff;
    border: solid 1px #e9e9e9;
    cursor: pointer;
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -webkit-transition:background-color .2s ease-out;
    -o-transition:background-color .2s ease-out;
    transition:background-color .2s ease-out
  }
  .note:hover {
    transform: scale(1.02);
    background-color: #dbb5c7;
  }
  .button {
    position: fixed;
    z-index: 1;
    right: 40px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    border-radius: 20%;
    text-align: center;
    line-height: 50px;
    font-size: 28px;
    font-weight: bold;
    color: #f1f1f1;
    background: #595a5c;
    cursor: pointer;
    box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.8);
    -webkit-box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.8);
    transition: transform .06s ease;
  }
  .button:hover {
    transform: scale(1.05);
  }
  .input {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    border: none;
    outline: none;
    background: #595a5c;
    font-size: 16px;
    color: #f1f1f1;
    border-top: 1px solid #474747;
  }
`;

/***/ })

/******/ });