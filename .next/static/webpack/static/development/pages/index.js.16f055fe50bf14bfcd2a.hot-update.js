webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/fire */ "./firebase/fire.js");






var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);
    _this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    _this.toggleModal = _this.toggleModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleLogin = _this.handleLogin.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(event) {
      this.toggleModal();
      Object(_firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"])().signInWithEmailAndPassword(this.username.value, this.password.value)["catch"](function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message; // [START_EXCLUDE]

        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        } // [END_EXCLUDE]

      });
      alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, __jsx("nav", {
        style: {
          backgroundColor: 'black',
          fontStyle: 'Italic',
          color: 'White',
          marginBottom: '25px',
          fontSize: "30px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 18
        }
      }, __jsx("div", {
        style: {
          marginLeft: "600px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 23
        }
      }, "Todo App"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        style: {
          marginLeft: "1300px",
          background: "#b3f0ff",
          "float": "right"
        },
        onClick: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 37
        }
      }, __jsx("span", {
        className: "fa fa-sign-in fa-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 139
        }
      }), " Login"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.isModalOpen,
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }, "Login"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleLogin,
        style: {},
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 33
        }
      }, "Username"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        id: "username",
        name: "username",
        innerRef: function innerRef(input) {
          return _this2.username = input;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 33
        }
      }, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "password",
        id: "password",
        name: "password",
        innerRef: function innerRef(input) {
          return _this2.password = input;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 33
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "checkbox",
        name: "remember",
        innerRef: function innerRef(input) {
          return _this2.remember = input;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 37
        }
      }), "Remember me")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        value: "submit",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 29
        }
      }, "Login")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

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


firebase__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__["firebaseConfig"]);
var auth = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.auth();
var fireauth = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.auth;
var firestore = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
var firebasestore = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore;

/***/ }),

/***/ "./firebase/firebase.js":
false

})
//# sourceMappingURL=index.js.16f055fe50bf14bfcd2a.hot-update.js.map