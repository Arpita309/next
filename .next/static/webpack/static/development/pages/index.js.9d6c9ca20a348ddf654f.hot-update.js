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
          lineNumber: 63,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
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
          lineNumber: 67,
          columnNumber: 25
        }
      }, "Todo App"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
        className: "ml-auto ",
        navbar: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "btn-group mr-auto",
        role: "group",
        "aria-label": "Basic example",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
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
          lineNumber: 73,
          columnNumber: 33
        }
      }, "Login"), __jsx("button", {
        type: "button",
        onClick: this.toggleSignup,
        className: "btn btn-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 33
        }
      }, "Signup"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.isModalOpen,
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, "Login"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleLogin,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
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
          lineNumber: 91,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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
          lineNumber: 96,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
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
          lineNumber: 101,
          columnNumber: 37
        }
      }), "Remember me")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        value: "submit",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 29
        }
      }, "Login")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.isSignupOpen,
        toggle: this.toggleSignup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 1
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
        toggle: this.toggleSignup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, "SignUp"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleSignUp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "firstname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
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
          lineNumber: 117,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "lastname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
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
          lineNumber: 122,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
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
          lineNumber: 127,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
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
          lineNumber: 132,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        value: "submit",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 29
        }
      }, "SignUp")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Note */ "./pages/Note.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/fire */ "./firebase/fire.js");








var _this = undefined,
    _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var setupNotes = function setupNotes(data) {
  if (data.length) {
    var note = data.map(function (doc) {
      return doc.data();
    });
    {
      __jsx("div", {
        className: "card border-success mb-3",
        style: {
          maxWidth: "20rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "card-body",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 5
        }
      }, __jsx("h4", {
        className: "card-title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }
      }, "$(note.note)")));
    }
  }
};

var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "handleKeyPress", function (event) {
      if (event.key === "Enter") {
        var noteArr = _this2.state.notes;
        noteArr.push(_this2.state.noteText);

        _this2.setState({
          noteText: ''
        });
      }
    });

    _this2.state = {
      noteText: '',
      notes: []
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "updateNoteText",
    value: function updateNoteText(noteText) {
      this.setState({
        noteText: noteText.target.value
      });
    }
  }, {
    key: "addNote",
    value: function addNote() {
      if (this.state.noteText === '') {
        return;
      }

      var noteArr = this.state.notes;
      noteArr.push(this.state.noteText);
      this.setState({
        noteText: ''
      });
      this.textInput.focus();
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(index) {
      var noteArr = this.state.notes;
      noteArr.splice(index, 1);
      this.setState({
        notes: noteArr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"].onAuthStateChanged(function (user) {
        if (user) {
          console.log('user logged in: ', user);
          db.collection('guides').get().then(function (querySnapshot) {
            setupNotes(querySnapshot.docs);
          });
        } else {
          console.log('user logged out');
          setupNotes([]);
        }
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }
      }), notes, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "button ",
        onClick: this.addNote.bind(this),
        style: {
          fontStyle: "oblique",
          marginBottom: "10px",
          marginTop: "80px",
          color: "#E54E65"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, "Add note"), __jsx("input", {
        style: {
          backgroundColor: "#E2CEEE"
        },
        placeholder: "Enter Notes",
        type: "text",
        className: "input ",
        ref: function ref(input) {
          _this3.textInput = input;
        },
        value: this.state.noteText,
        onChange: function onChange(noteText) {
          return _this3.updateNoteText(noteText);
        },
        onKeyPress: this.handleKeyPress.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Note */ "./pages/Note.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/fire */ "./firebase/fire.js");








var _this = undefined,
    _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var setupNotes = function setupNotes(data) {
  if (data.length) {
    var note = data.map(function (doc) {
      return doc.data();
    });
    {
      __jsx("div", {
        className: "card border-success mb-3",
        style: {
          maxWidth: "20rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "card-body",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 5
        }
      }, __jsx("h4", {
        className: "card-title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }
      }, "$(note.note)")));
    }
  }
};

var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "handleKeyPress", function (event) {
      if (event.key === "Enter") {
        var noteArr = _this2.state.notes;
        noteArr.push(_this2.state.noteText);

        _this2.setState({
          noteText: ''
        });
      }
    });

    _this2.state = {
      noteText: '',
      notes: []
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "updateNoteText",
    value: function updateNoteText(noteText) {
      this.setState({
        noteText: noteText.target.value
      });
    }
  }, {
    key: "addNote",
    value: function addNote() {
      if (this.state.noteText === '') {
        return;
      }

      var noteArr = this.state.notes;
      noteArr.push(this.state.noteText);
      this.setState({
        noteText: ''
      });
      this.textInput.focus();
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(index) {
      var noteArr = this.state.notes;
      noteArr.splice(index, 1);
      this.setState({
        notes: noteArr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"].onAuthStateChanged(function (user) {
        if (user) {
          console.log('user logged in: ', user);
          db.collection('guides').get().then(function (querySnapshot) {
            setupNotes(querySnapshot.docs);
          });
        } else {
          console.log('user logged out');
          setupNotes([]);
        }
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }
      }), notes, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "button ",
        onClick: this.addNote.bind(this),
        style: {
          fontStyle: "oblique",
          marginBottom: "10px",
          marginTop: "80px",
          color: "#E54E65"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, "Add note"), __jsx("input", {
        style: {
          backgroundColor: "#E2CEEE"
        },
        placeholder: "Enter Notes",
        type: "text",
        className: "input ",
        ref: function ref(input) {
          _this3.textInput = input;
        },
        value: this.state.noteText,
        onChange: function onChange(noteText) {
          return _this3.updateNoteText(noteText);
        },
        onKeyPress: this.handleKeyPress.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9d6c9ca20a348ddf654f.hot-update.js.map