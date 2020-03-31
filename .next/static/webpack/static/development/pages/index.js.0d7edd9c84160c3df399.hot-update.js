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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main */ "./pages/main.js");







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
        _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('todos').add({
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

      _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["auth"].onAuthStateChanged(function (user) {
        if (user) {
          console.log('user logged in: ', user);
          _firebase_fire__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('todos').get().then(function (querySnapshot) {
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

/***/ })

})
//# sourceMappingURL=index.js.0d7edd9c84160c3df399.hot-update.js.map