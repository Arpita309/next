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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KnIj");


/***/ }),

/***/ "2+Kg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ auth; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ firestore; });

// UNUSED EXPORTS: fireauth, firebasestore, database

// CONCATENATED MODULE: ./firebase/config.js
const Config = {
  apiKey: "AIzaSyASlSjH3fL2GezWLueFMy-nhQ9vuJmJFDo",
  authDomain: "next-todo-fc90e.firebaseapp.com",
  databaseURL: "https://next-todo-fc90e.firebaseio.com",
  projectId: "next-todo-fc90e",
  storageBucket: "next-todo-fc90e.appspot.com",
  messagingSenderId: "969855624340",
  appId: "1:969855624340:web:c9a785664c2c238a3c8081",
  measurementId: "G-SKL8Y4KQHR"
};
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__("EuFW");

// EXTERNAL MODULE: external "firebase/storage"
var storage_ = __webpack_require__("ha8t");

// EXTERNAL MODULE: external "firebase/database"
var database_ = __webpack_require__("Mn+7");

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// EXTERNAL MODULE: external "firebase/messaging"
var messaging_ = __webpack_require__("dIt4");

// EXTERNAL MODULE: external "firebase/functions"
var functions_ = __webpack_require__("dCoW");

// CONCATENATED MODULE: ./firebase/fire.js



 // for storage

 // for realtime database

 // for cloud firestore

 // for cloud messaging



if (!app_default.a.apps.length) {
  app_default.a.initializeApp(Config);
}

const settings = {
  timestampsInSnapshots: true
};
app_default.a.firestore().settings(settings);
const auth = app_default.a.auth();
const fireauth = app_default.a.auth;
const firestore = app_default.a.firestore();
const firebasestore = app_default.a.firestore;
const database = app_default.a.database();

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "KnIj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2+Kg");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Card extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  // deleteTodo (id) {
  //    firestore.collection('todos').doc(id).delete();
  //     } 
  render() {
    return __jsx("div", {
      className: "card text-dark mb-3 mt-4 ml-3",
      style: {
        maxWidth: "50rem",
        backgroundColor: "#e6ff99"
      }
    }, __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "level"
    }, __jsx("div", {
      className: "level-left"
    }, __jsx("div", {
      className: "level-item"
    }, __jsx("div", {
      className: "card-body"
    }, __jsx("p", {
      className: "card-text "
    }, __jsx("h3", null, this.props.notes.todo))))), __jsx("div", {
      className: "level-right"
    }, __jsx("div", {
      className: "level-item"
    }, __jsx("button", {
      type: "button",
      className: "btn btn-danger",
      style: {
        float: "right"
      }
    }, "Delete"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "Mn+7":
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dCoW":
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "dIt4":
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });