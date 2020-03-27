webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./firebase/config.js":
/*!****************************!*\
  !*** ./firebase/config.js ***!
  \****************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = {
  apiKey: "AIzaSyASlSjH3fL2GezWLueFMy-nhQ9vuJmJFDo",
  authDomain: "next-todo-fc90e.firebaseapp.com",
  databaseURL: "https://next-todo-fc90e.firebaseio.com",
  projectId: "next-todo-fc90e",
  storageBucket: "next-todo-fc90e.appspot.com",
  messagingSenderId: "969855624340",
  appId: "1:969855624340:web:c9a785664c2c238a3c8081",
  measurementId: "G-SKL8Y4KQHR"
};

/***/ }),

/***/ "./firebase/fire.js":
/*!**************************!*\
  !*** ./firebase/fire.js ***!
  \**************************/
/*! exports provided: auth, fireauth, firestore, firebasestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireauth", function() { return fireauth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebasestore", function() { return firebasestore; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./firebase/config.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);


firebase__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__["Config"]);
var auth = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.auth();
var fireauth = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.auth;
var firestore = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
var firebasestore = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore;

/***/ })

})
//# sourceMappingURL=index.js.0beacac5dda71f7fc839.hot-update.js.map