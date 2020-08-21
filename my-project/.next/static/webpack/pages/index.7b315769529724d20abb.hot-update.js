webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/eddie/Documents/github/strapi-react/my-project/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar endpoint = 'http://localhost:1337/todos';\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var titleRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var jwtRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var getTodos = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(endpoint, {\n                headers: {\n                  Authorization: \"Bearer \".concat(jwtRef.current)\n                }\n              }).then(function (r) {\n                return r.json();\n              });\n\n            case 2:\n              res = _context.sent;\n              setTodos(res); //console.log(res);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getTodos() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var jwt = window.sessionStorage.getItem('jwt');\n\n    if (!jwt) {\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');\n    }\n\n    jwtRef.current = jwt; //get list of todos\n\n    getTodos();\n  }, []);\n\n  var createToto = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var title, res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              title = titleRef.current.value;\n              _context2.next = 3;\n              return fetch(endpoint, {\n                headers: {\n                  Authorization: \"Bearer \".concat(jwtRef.current),\n                  'Content-type': 'application/json'\n                }\n              });\n\n            case 3:\n              res = _context2.sent;\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function createToto() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      width: \"200px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Title\",\n    ref: titleRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return create.Todo();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, \"Create Todo\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, \"Todo's List:\"), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, JSON.stringify(todos))));\n}, \"bbDjuUD8dZzFL1Dk19GIT+R6L9A=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInRpdGxlUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwiand0UmVmIiwiZ2V0VG9kb3MiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY3VycmVudCIsInRoZW4iLCJyIiwianNvbiIsInJlcyIsInVzZUVmZmVjdCIsImp3dCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciIsInB1c2giLCJjcmVhdGVUb3RvIiwidGl0bGUiLCJ2YWx1ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJjcmVhdGUiLCJUb2RvIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsNkJBQWpCO0FBRWUsOEVBQU07QUFBQTs7QUFDbkIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2Qjs7QUFEbUIsa0JBRU9DLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFWkMsS0FGWTtBQUFBLE1BRUxDLFFBRks7O0FBR25CLE1BQU1DLE1BQU0sR0FBR0osb0RBQU0sRUFBckI7O0FBRUEsTUFBTUssUUFBUTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0dDLEtBQUssQ0FBQ1IsUUFBRCxFQUFXO0FBQ2hDUyx1QkFBTyxFQUFFO0FBQ1BDLCtCQUFhLG1CQUFZSixNQUFNLENBQUNLLE9BQW5CO0FBRE47QUFEdUIsZUFBWCxDQUFMLENBSWZDLElBSmUsQ0FJVixVQUFBQyxDQUFDO0FBQUEsdUJBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQUFKO0FBQUEsZUFKUyxDQURIOztBQUFBO0FBQ1RDLGlCQURTO0FBTWZWLHNCQUFRLENBQUNVLEdBQUQsQ0FBUixDQU5lLENBT2Y7O0FBUGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlIsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVVBUyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsS0FBOUIsQ0FBWjs7QUFDQSxRQUFJLENBQUNILEdBQUwsRUFBVTtBQUNSSSx3REFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNEOztBQUNEaEIsVUFBTSxDQUFDSyxPQUFQLEdBQWlCTSxHQUFqQixDQUxjLENBT2Q7O0FBQ0FWLFlBQVE7QUFDVCxHQVRRLEVBU04sRUFUTSxDQUFUOztBQVdBLE1BQU1nQixVQUFVO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLG1CQURXLEdBQ0h2QixRQUFRLENBQUNVLE9BQVQsQ0FBaUJjLEtBRGQ7QUFBQTtBQUFBLHFCQUdDakIsS0FBSyxDQUFDUixRQUFELEVBQVk7QUFDakNTLHVCQUFPLEVBQUU7QUFDUEMsK0JBQWEsbUJBQVlKLE1BQU0sQ0FBQ0ssT0FBbkIsQ0FETjtBQUVQLGtDQUFnQjtBQUZUO0FBRHdCLGVBQVosQ0FITjs7QUFBQTtBQUdYSSxpQkFIVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWUSxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQVdBLFNBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOO0FBQUssU0FBSyxFQUFFO0FBQUVHLGFBQU8sRUFBRSxNQUFYO0FBQW1CQyxtQkFBYSxFQUFFLFFBQWxDO0FBQTRDQyxXQUFLLEVBQUU7QUFBbkQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUMsT0FBL0I7QUFBdUMsT0FBRyxFQUFFM0IsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNNEIsTUFBTSxDQUFDQyxJQUFQLEVBQU47QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLENBRE0sRUFNTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUMsSUFBSSxDQUFDQyxTQUFMLENBQWU1QixLQUFmLENBQU4sQ0FGSixDQU5NLENBQVI7QUFXRCxDQWhERCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBlbmRwb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvdG9kb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBqd3RSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBnZXRUb2RvcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0UmVmLmN1cnJlbnR9YCxcbiAgICAgIH0sXG4gICAgfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgICBzZXRUb2RvcyhyZXMpO1xuICAgIC8vY29uc29sZS5sb2cocmVzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGp3dCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgICBpZiAoIWp3dCkge1xuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgIH1cbiAgICBqd3RSZWYuY3VycmVudCA9IGp3dDtcblxuICAgIC8vZ2V0IGxpc3Qgb2YgdG9kb3NcbiAgICBnZXRUb2RvcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY3JlYXRlVG90byA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlUmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dFJlZi5jdXJyZW50fWAsXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9XG4gICB9KTtcbiAgfVxuXG4gIHJldHVybiAgPGRpdj5cbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCB3aWR0aDogXCIyMDBweFwiIH19PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHJlZj17dGl0bGVSZWZ9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNyZWF0ZS5Ub2RvKCl9PkNyZWF0ZSBUb2RvPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPGgyPlRvZG8ncyBMaXN0OjwvaDI+XG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRvZG9zKX08L3ByZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})