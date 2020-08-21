webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/eddie/Documents/github/strapi-react/my-project/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\nvar endpoint = 'http://localhost:1337/todos';\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var titleRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var jwtRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n\n  var getTodos = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(endpoint, {\n                headers: {\n                  Authorization: \"Bearer \".concat(jwtRef.current)\n                }\n              }).then(function (r) {\n                return r.json();\n              });\n\n            case 2:\n              res = _context.sent;\n              setTodos(res); //console.log(res);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getTodos() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var jwt = window.sessionStorage.getItem('jwt');\n\n    if (!jwt) {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');\n    }\n\n    jwtRef.current = jwt; //get list of todos\n\n    getTodos();\n  }, []);\n\n  var createTodo = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var title, res, newTodos;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              title = titleRef.current.value;\n              _context2.next = 3;\n              return fetch(endpoint, {\n                method: 'POST',\n                headers: {\n                  Authorization: \"Bearer \".concat(jwtRef.current),\n                  'Content-type': 'application/json'\n                },\n                body: JSON.stringify({\n                  title: title\n                })\n              }).then(function (r) {\n                return r.json();\n              });\n\n            case 3:\n              res = _context2.sent;\n              newTodos = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos), [res]);\n              setTodos(newTodos);\n              console.log(res);\n              console.log(newTodos);\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function createTodo() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      width: \"200px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Title\",\n    ref: titleRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return createTodo();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, \"Create Todo\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, \"Todo's List:\"), todos.map(function (todo) {\n    return __jsx(\"div\", {\n      key: todo.title,\n      style: {\n        display: 'flex',\n        alignItems: 'center'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }\n    }, __jsx(\"input\", {\n      type: \"checkbox\",\n      checked: todo.done,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    }), todo.title);\n  })));\n}, \"bbDjuUD8dZzFL1Dk19GIT+R6L9A=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInRpdGxlUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwiand0UmVmIiwiZ2V0VG9kb3MiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY3VycmVudCIsInRoZW4iLCJyIiwianNvbiIsInJlcyIsInVzZUVmZmVjdCIsImp3dCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciIsInB1c2giLCJjcmVhdGVUb2RvIiwidGl0bGUiLCJ2YWx1ZSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3VG9kb3MiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm1hcCIsInRvZG8iLCJhbGlnbkl0ZW1zIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyw2QkFBakI7QUFFZSw4RUFBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCOztBQURtQixrQkFFT0Msc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVaQyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFHbkIsTUFBTUMsTUFBTSxHQUFHSixvREFBTSxFQUFyQjs7QUFFQSxNQUFNSyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR0MsS0FBSyxDQUFDUixRQUFELEVBQVc7QUFDaENTLHVCQUFPLEVBQUU7QUFDUEMsK0JBQWEsbUJBQVlKLE1BQU0sQ0FBQ0ssT0FBbkI7QUFETjtBQUR1QixlQUFYLENBQUwsQ0FJZkMsSUFKZSxDQUlWLFVBQUFDLENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7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LElBQUksQ0FBQ2IsS0FGUixDQURhO0FBQUEsR0FBZCxDQUZMLENBTk0sQ0FBUjtBQWdCRCxDQTlERCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBlbmRwb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvdG9kb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBqd3RSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBnZXRUb2RvcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0UmVmLmN1cnJlbnR9YCxcbiAgICAgIH0sXG4gICAgfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgICBzZXRUb2RvcyhyZXMpO1xuICAgIC8vY29uc29sZS5sb2cocmVzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGp3dCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgICBpZiAoIWp3dCkge1xuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgIH1cbiAgICBqd3RSZWYuY3VycmVudCA9IGp3dDtcblxuICAgIC8vZ2V0IGxpc3Qgb2YgdG9kb3NcbiAgICBnZXRUb2RvcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlUmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0UmVmLmN1cnJlbnR9YCxcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgfSksXG4gICB9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuXG4gICBjb25zdCBuZXdUb2RvcyA9IFsuLi50b2RvcywgcmVzXTtcbiAgIHNldFRvZG9zKG5ld1RvZG9zKTtcbiAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICBjb25zb2xlLmxvZyhuZXdUb2Rvcyk7XG4gIH07XG5cbiAgcmV0dXJuICA8ZGl2PlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIHdpZHRoOiBcIjIwMHB4XCIgfX0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgcmVmPXt0aXRsZVJlZn0gLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IGNyZWF0ZVRvZG8oKSB9PkNyZWF0ZSBUb2RvPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPGgyPlRvZG8ncyBMaXN0OjwvaDI+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3RvZG8udGl0bGV9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dG9kby5kb25lfSAvPlxuICAgICAgICAgICAge3RvZG8udGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})