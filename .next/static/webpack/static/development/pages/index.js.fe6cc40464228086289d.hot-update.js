webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase/fire */ "./firebase/fire.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");







var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\Note.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var todoRef = _firebase_fire__WEBPACK_IMPORTED_MODULE_8__["firestore"].collection("todos");

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "deleteTodo", function (e) {
      todoRef.doc(e.target.value)["delete"]().then(function () {
        console.log("Document successfully deleted!");
      })["catch"](function (error) {
        console.error("Error removing document: ", error);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e) {
      var t = e.target;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, t.name, t.value));
    });

    _this.state = {
      todos: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
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
            lineNumber: 64,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-content",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "level",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "level-left",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "level-item",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "card-body",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 9
          }
        }, __jsx("p", {
          className: "card-text ",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 6
          }
        }, __jsx("h3", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 32
          }
        }, todo.task))))), __jsx("div", {
          className: "level-right",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }
        }, __jsx("div", {
          className: "level-item",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 7
          }
        }, __jsx("button", {
          type: "button",
          className: "btn btn-danger",
          style: {
            "float": "right"
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 6
          }
        }, "Delete"))))));
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, ListItem);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, "Firebase Test"), __jsx("form", {
        onSubmit: this.addTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.handleChange,
        name: "todo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }), __jsx("button", {
        className: "btn btn-primary",
        type: "submit",
        onClick: this.addTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, "Add Todo"))), this.renderTodoList());
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/note.js":
/*!***********************!*\
  !*** ./pages/note.js ***!
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
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase/fire */ "./firebase/fire.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");







var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\note.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var todoRef = _firebase_fire__WEBPACK_IMPORTED_MODULE_8__["firestore"].collection("todos");

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "deleteTodo", function (e) {
      todoRef.doc(e.target.value)["delete"]().then(function () {
        console.log("Document successfully deleted!");
      })["catch"](function (error) {
        console.error("Error removing document: ", error);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e) {
      var t = e.target;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, t.name, t.value));
    });

    _this.state = {
      todos: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
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
            lineNumber: 64,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-content",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "level",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "level-left",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "level-item",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "card-body",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 9
          }
        }, __jsx("p", {
          className: "card-text ",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 6
          }
        }, __jsx("h3", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 32
          }
        }, todo.task))))), __jsx("div", {
          className: "level-right",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }
        }, __jsx("div", {
          className: "level-item",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 7
          }
        }, __jsx("button", {
          type: "button",
          className: "btn btn-danger",
          style: {
            "float": "right"
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 6
          }
        }, "Delete"))))));
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, ListItem);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, "Firebase Test"), __jsx("form", {
        onSubmit: this.addTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.handleChange,
        name: "todo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }), __jsx("button", {
        className: "btn btn-primary",
        type: "submit",
        onClick: this.addTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, "Add Todo"))), this.renderTodoList());
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.fe6cc40464228086289d.hot-update.js.map