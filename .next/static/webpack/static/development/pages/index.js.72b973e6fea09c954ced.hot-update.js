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







var setupNotes = function setupNotes(data) {
  data.array.forEach(function (doc) {
    var note = doc.data;
    console.log('note');
  });
};

var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);
    _this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isSignupOpen: false
    };
    _this.toggleModal = _this.toggleModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleLogin = _this.handleLogin.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.toggleSignup = _this.toggleSignup.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
    key: "toggleSignup",
    value: function toggleSignup() {
      this.setState({
        isSignupOpen: !this.state.isSignupOpen
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(event) {
      this.toggleModal();
      event.preventDefault();
      _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"].signInWithEmailAndPassword(this.username.value, this.password.value).then(function (Credential) {
        console.log(Credential);
      });
      _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('users').get().then(function (snapshot) {
        setupNotes(snapshot.docs);
      });
    }
  }, {
    key: "handleSignUp",
    value: function handleSignUp(event) {
      this.toggleSignup();
      event.preventDefault();
      _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"].createUserWithEmailAndPassword(this.username.value, this.password.value).then(function (Credential) {
        console.log(Credential);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavbarBrand"], {
        className: "mr-auto",
        style: {
          fontSize: "30px",
          fontFamily: "cursive",
          color: "#D6E149"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      }, "Todo App"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
        className: "ml-auto ",
        navbar: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "btn-group mr-auto",
        role: "group",
        "aria-label": "Basic example",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }
      }, __jsx("button", {
        type: "button",
        onClick: this.toggleModal,
        className: "btn btn-warning",
        style: {
          paddingRight: "4px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 33
        }
      }, "Login"), __jsx("button", {
        type: "button",
        onClick: this.toggleSignup,
        className: "btn btn-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 33
        }
      }, "Signup"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.isModalOpen,
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, "Login"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleLogin,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
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
          lineNumber: 103,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
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
          lineNumber: 108,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
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
          lineNumber: 113,
          columnNumber: 37
        }
      }), "Remember me")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        value: "submit",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 29
        }
      }, "Login")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.isSignupOpen,
        toggle: this.toggleSignup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 1
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
        toggle: this.toggleSignup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }
      }, "SignUp"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleSignUp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "firstname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 33
        }
      }, "Firstname"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        id: "firstname",
        name: "firstname",
        innerRef: function innerRef(input) {
          return _this2.firstname = input;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "lastname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 33
        }
      }, "Lastname"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        id: "lastname",
        name: "lastname",
        innerRef: function innerRef(input) {
          return _this2.lastname = input;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
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
          lineNumber: 139,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
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
          lineNumber: 144,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        value: "submit",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 29
        }
      }, "SignUp")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.72b973e6fea09c954ced.hot-update.js.map