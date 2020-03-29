webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main */ "./pages/main.js");








var _this = undefined,
    _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






_firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"].onAuthStateChanged(function (user) {
  if (user) {
    console.log('user logged in: ', user);
    _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('users').get().then(function (querySnapshot) {
      var note = querySnapshot.docs.map(function (doc) {
        return doc.data();
      });
      console.log(note);

      __jsx(_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      });
    });
  } else {
    console.log('user logged out');
  }
});

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

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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
          lineNumber: 68,
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
          lineNumber: 69,
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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main */ "./pages/main.js");








var _this = undefined,
    _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






_firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"].onAuthStateChanged(function (user) {
  if (user) {
    console.log('user logged in: ', user);
    _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('users').get().then(function (querySnapshot) {
      var note = querySnapshot.docs.map(function (doc) {
        return doc.data();
      });
      console.log(note);

      __jsx(_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      });
    });
  } else {
    console.log('user logged out');
  }
});

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

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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
          lineNumber: 68,
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
          lineNumber: 69,
          columnNumber: 9
        }
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (Card = function Card(props) {
  __jsx("div", {
    className: "card border-success mb-3",
    style: {
      maxWidth: "20rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, "$(note.note)")), "/ ");
});

/***/ })

})
//# sourceMappingURL=index.js.643fdba9c8ded25a24aa.hot-update.js.map