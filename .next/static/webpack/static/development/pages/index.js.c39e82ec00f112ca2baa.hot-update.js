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
/* harmony import */ var _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/Fire */ "./firebase/Fire.js");
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Main */ "./pages/Main.js");






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
      _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__["auth"].signInWithEmailAndPassword(this.username.value, this.password.value);
    }
  }, {
    key: "handleSignUp",
    value: function handleSignUp(event) {
      this.toggleSignup();
      event.preventDefault();
      console.log("username : " + this.username.value + "password : " + this.password.value);
      _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__["auth"].createUserWithEmailAndPassword(this.username.value, this.password.value).then(function (Credential) {
        console.log(Credential);
      });
    }
  }, {
    key: "handleLogOut",
    value: function handleLogOut(event) {
      event.preventDefault();
      _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__["auth"].signOut().then(function () {
        console.log('user signed out');
      });

      __jsx(_pages_Main__WEBPACK_IMPORTED_MODULE_11__["default"], {
        notes: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
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
          lineNumber: 70,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
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
          lineNumber: 74,
          columnNumber: 25
        }
      }, "Todo App"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
        className: "ml-auto ",
        navbar: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "btn-group mr-auto",
        role: "group",
        "aria-label": "Basic example",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
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
          lineNumber: 80,
          columnNumber: 33
        }
      }, "Login"), __jsx("button", {
        type: "button",
        onClick: this.toggleSignup,
        className: "btn btn-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 33
        }
      }, "Signup"), __jsx("button", {
        type: "button",
        onClick: this.handleLogOut,
        className: "btn btn-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 33
        }
      }, "Logout"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.isModalOpen,
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
        toggle: this.toggleModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }
      }, "Login"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleLogin,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
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
          lineNumber: 99,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        htmlFor: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
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
          lineNumber: 104,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        check: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
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
          lineNumber: 109,
          columnNumber: 37
        }
      }), "Remember me")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        value: "submit",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 29
        }
      }, "Login")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.isSignupOpen,
        toggle: this.toggleSignup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 1
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
        toggle: this.toggleSignup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      }, "SignUp"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleSignUp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
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

/***/ "./firebase/Config.js":
/*!****************************!*\
  !*** ./firebase/Config.js ***!
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

/***/ "./firebase/Fire.js":
/*!**************************!*\
  !*** ./firebase/Fire.js ***!
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
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./firebase/Config.js");
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
  firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_Config__WEBPACK_IMPORTED_MODULE_0__["Config"]);
}

var auth = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth();
var fireauth = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth;
var firestore = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
var firebasestore = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore;
var database = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.database();

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
/* harmony import */ var _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/Fire */ "./firebase/Fire.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Main */ "./pages/Main.js");







var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleKeyPress", function (event) {
      if (event.key === "Enter") {
        // let noteArr = this.state.notes;
        // noteArr.push(this.state.noteText);
        //  this.setState({ noteText: ''});
        _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('todos').add({
          todo: _this.state.noteText
        });

        _this.setState({
          noteText: ''
        });
      }
    });

    _this.state = {
      noteText: '',
      notes: [{
        todo: ""
      }],
      id: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__["auth"].onAuthStateChanged(function (user) {
        if (user) {
          console.log('user logged in: ', user);
          _firebase_Fire__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('todos').get().then(function (querySnapshot) {
            querySnapshot.docs.forEach(function (doc) {
              _this2.setState({
                notes: doc.data(),
                id: doc.id
              }); //const data=doc.data();
              // console.log(data);

            });
          });
        } else {
          console.log('user logged out');
        }
      });
    }
  }, {
    key: "updateNoteText",
    value: function updateNoteText(noteText) {
      this.setState({
        noteText: noteText.target.value
      });
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

      console.log(this.state.notes);
      console.log(this.state.id);
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }), __jsx(_Main__WEBPACK_IMPORTED_MODULE_12__["default"], {
        notes: this.state.notes,
        id: this.state.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 14
        }
      }), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "button ",
        onClick: function onClick(noteText) {
          return _this3.updateNoteText(noteText);
        },
        style: {
          fontStyle: "oblique",
          marginBottom: "10px",
          marginTop: "80px",
          color: "#E54E65"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
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
          lineNumber: 98,
          columnNumber: 9
        }
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/Main.js":
/*!***********************!*\
  !*** ./pages/Main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _firebase_Fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/Fire */ "./firebase/Fire.js");





var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Card = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Card, _Component);

  var _super = _createSuper(Card);

  function Card() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Card, [{
    key: "render",
    // deleteTodo (id) {
    //    firestore.collection('todos').doc(id).delete();
    //     } 
    value: function render() {
      console.log(this.props.id);
      console.log(this.props.notes);
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "card text-dark mb-3 mt-4 ml-3",
        style: {
          maxWidth: "50rem",
          backgroundColor: "#e6ff99"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 41
        }
      }, __jsx("div", {
        className: "card-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "level",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "level-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "level-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }
      }, __jsx("p", {
        className: "card-text ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 22
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 48
        }
      }, this.props.notes.todo)), __jsx("p", {
        className: "card-text ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 22
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 48
        }
      }, " ", this.props.id))))), __jsx("div", {
        className: "level-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "level-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 23
        }
      }, __jsx("button", {
        type: "button",
        className: "btn btn-danger",
        style: {
          "float": "right"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 22
        }
      }, "Delete")))))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);
/*{this.props.notes.forEach(todo => {
        <li>{todo}</li>    
    })}*/

/***/ }),

/***/ "./pages/Note.js":
/*!***********************!*\
  !*** ./pages/Note.js ***!
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _firebase_Fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase/Fire */ "./firebase/Fire.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");







var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\Note.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var todoRef = _firebase_Fire__WEBPACK_IMPORTED_MODULE_9__["firestore"].collection("todos");

var App = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "addTodo", function (e) {
      e.preventDefault();
      var ref = todoRef.doc();
      ref.set({
        task: _this.state.todo,
        createdAt: new Date().getTime(),
        done: false,
        id: ref.id
      }).then(function (docRef) {
        console.log(docRef);
      })["catch"](function (error) {
        console.error("Error adding document: ", error);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updateTodo", function (e) {
      _this.toggleUpdate();

      e.preventDefault();
      var a = e.target;
      var b = _this.state.update;
      var ref = todoRef.doc();
      todoRef.doc(b).update({
        task: _this.username.value
      }).then(function (docRef) {
        console.log(docRef);
      })["catch"](function (error) {
        console.error("Error updating document: ", error);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "deleteTodo", function (e) {
      todoRef.doc(e.target.value)["delete"]().then(function () {
        console.log("Document successfully deleted!");
      })["catch"](function (error) {
        console.error("Error removing document: ", error);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleUpdate", function (e) {
      _this.toggleUpdate();

      var t = e.target;

      _this.setState({
        update: t.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e) {
      var t = e.target;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, t.name, t.value));
    });

    _this.state = {
      todos: [],
      isUpdate: false,
      update: ''
    };
    _this.toggleUpdate = _this.toggleUpdate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "toggleUpdate",
    value: function toggleUpdate() {
      this.setState({
        isUpdate: !this.state.isUpdate
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      todoRef.orderBy('createdAt').onSnapshot(function (docSnapShot) {
        var todos = [];
        docSnapShot.forEach(function (doc) {
          todos.push(doc.data());
        });

        _this2.setState({
          todos: todos,
          loaded: true
        });
      });
    }
  }, {
    key: "renderTodoList",
    value: function renderTodoList() {
      var _this3 = this;

      var ListItem = this.state.todos.map(function (todo, index) {
        return __jsx("div", {
          className: "card text-dark mb-3 mt-4 ml-3",
          style: {
            maxWidth: "50rem",
            backgroundColor: "#e6ff99"
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-content",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-body",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 9
          }
        }, __jsx("p", {
          className: "card-text ",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 6
          }
        }, __jsx("h3", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 32
          }
        }, todo.task)), __jsx("button", {
          value: todo.id,
          className: "btn btn-sm btn-danger",
          onClick: _this3.deleteTodo,
          style: {
            "float": "right"
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 7
          }
        }, "X"), __jsx("button", {
          value: todo.id,
          className: "btn btn-sm btn-info",
          onClick: _this3.handleUpdate,
          style: {
            "float": "right"
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }
        }, "Update"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
          isOpen: _this3.state.isUpdate,
          toggle: _this3.toggleUpdate,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
          toggle: _this3.toggleUpdate,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }
        }, "Update"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
          onSubmit: _this3.updateTodo,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 21
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 29
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
          htmlFor: "username",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 33
          }
        }, "Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
          type: "text",
          id: "username",
          name: "username",
          innerRef: function innerRef(input) {
            return _this3.username = input;
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 33
          }
        })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          value: todo.id,
          color: "primary",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }
        }, "Update")))))));
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 7
        }
      }, ListItem);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      console.log(this.state.notes);
      return __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 9
        }
      }), __jsx("form", {
        onSubmit: this.addTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.handleChange,
        name: "todo",
        style: {
          backgroundColor: "#E2CEEE",
          marginTop: "20px",
          marginLeft: "8px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      }), __jsx("button", {
        className: "btn btn-primary",
        type: "submit",
        onClick: this.addTodo,
        style: {
          marginTop: "20px",
          marginLeft: "8px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }
      }, "Add Todo"))), this.renderTodoList());
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/main.js":
false

})
//# sourceMappingURL=index.js.c39e82ec00f112ca2baa.hot-update.js.map