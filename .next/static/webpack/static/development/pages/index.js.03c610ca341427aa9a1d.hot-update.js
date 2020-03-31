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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase/fire */ "./firebase/fire.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");







var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\Note.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var todoRef = _firebase_fire__WEBPACK_IMPORTED_MODULE_9__["firestore"].collection("todos");

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
            lineNumber: 102,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-content",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-body",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 9
          }
        }, __jsx("p", {
          className: "card-text ",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 6
          }
        }, __jsx("h3", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
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
            lineNumber: 116,
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
            lineNumber: 117,
            columnNumber: 7
          }
        }, "Update"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
          isOpen: _this3.state.isUpdate,
          toggle: _this3.toggleUpdate,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
          toggle: _this3.toggleUpdate,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }
        }, "Update"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
          onSubmit: _this3.updateTodo,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 21
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
          htmlFor: "username",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
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
            lineNumber: 127,
            columnNumber: 33
          }
        })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          value: todo.id,
          color: "primary",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 29
          }
        }, "Update")))))));
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
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
          lineNumber: 159,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 9
        }
      }), __jsx("form", {
        onSubmit: this.addTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
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
          lineNumber: 164,
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
          lineNumber: 165,
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _firebase_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase/fire */ "./firebase/fire.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");







var _jsxFileName = "C:\\Users\\at\\Desktop\\todo-next\\pages\\note.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var todoRef = _firebase_fire__WEBPACK_IMPORTED_MODULE_9__["firestore"].collection("todos");

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
            lineNumber: 102,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-content",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card-body",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 9
          }
        }, __jsx("p", {
          className: "card-text ",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 6
          }
        }, __jsx("h3", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
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
            lineNumber: 116,
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
            lineNumber: 117,
            columnNumber: 7
          }
        }, "Update"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
          isOpen: _this3.state.isUpdate,
          toggle: _this3.toggleUpdate,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
          toggle: _this3.toggleUpdate,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }
        }, "Update"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
          onSubmit: _this3.updateTodo,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 21
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
          htmlFor: "username",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
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
            lineNumber: 127,
            columnNumber: 33
          }
        })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          value: todo.id,
          color: "primary",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 29
          }
        }, "Update")))))));
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
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
          lineNumber: 159,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 9
        }
      }), __jsx("form", {
        onSubmit: this.addTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
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
          lineNumber: 164,
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
          lineNumber: 165,
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
//# sourceMappingURL=index.js.03c610ca341427aa9a1d.hot-update.js.map