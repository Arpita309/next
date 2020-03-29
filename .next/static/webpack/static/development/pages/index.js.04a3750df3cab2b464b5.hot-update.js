webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./firebase/fire.js":
/*!**************************!*\
  !*** ./firebase/fire.js ***!
  \**************************/
/*! exports provided: auth, fireauth, firestore, firebasestore, database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireauth", function() { return fireauth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebasestore", function() { return firebasestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./firebase/config.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");



 // for storage

 // for realtime database

 // for cloud firestore

 // for cloud messaging



if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__["Config"]);
}

var auth = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth();
var fireauth = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth;
var firestore = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
var firebasestore = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore;
var database = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.database();

/***/ }),

/***/ "./node_modules/@firebase/analytics/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/performance/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/remote-config/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

var name = "firebase";
var version = "7.13.0";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/database/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/firebase/database/dist/index.esm.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/database */ "./node_modules/@firebase/database/dist/index.cjs.js");
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_database__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/functions/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/functions/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.cjs.js");
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_functions__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/messaging/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/messaging/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/messaging */ "./node_modules/@firebase/messaging/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=index.js.04a3750df3cab2b464b5.hot-update.js.map