webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/eddie/Documents/github/strapi-react/my-project/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar endpoint = 'http://localhost:1337/todos';\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var titleRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var jwtRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var getTodos = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(endpoint, {\n                headers: {\n                  Authorization: \"Bearer \".concat(jwtRef.current)\n                }\n              }).then(function (r) {\n                return r.json();\n              });\n\n            case 2:\n              res = _context.sent;\n              setTodos(res); //console.log(res);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getTodos() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var jwt = window.sessionStorage.getItem('jwt');\n\n    if (!jwt) {\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');\n    }\n\n    jwtRef.current = jwt; //get list of todos\n\n    getTodos();\n  }, []);\n\n  var createToto = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var title, res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              title = titleRef.current.value;\n              _context2.next = 3;\n              return fetch(endpoint, {\n                headers: {\n                  Authorization: \"Bearer \".concat(jwtRef.current),\n                  'Content-type': 'application/json'\n                },\n                body: JSON.stringify({\n                  title: title\n                })\n              });\n\n            case 3:\n              res = _context2.sent;\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function createToto() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      width: \"200px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Title\",\n    ref: titleRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return create.Todo();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, \"Create Todo\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"Todo's List:\"), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, JSON.stringify(todos))));\n}, \"bbDjuUD8dZzFL1Dk19GIT+R6L9A=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInRpdGxlUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwiand0UmVmIiwiZ2V0VG9kb3MiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY3VycmVudCIsInRoZW4iLCJyIiwianNvbiIsInJlcyIsInVzZUVmZmVjdCIsImp3dCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciIsInB1c2giLCJjcmVhdGVUb3RvIiwidGl0bGUiLCJ2YWx1ZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImNyZWF0ZSIsIlRvZG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDZCQUFqQjtBQUVlLDhFQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7O0FBRG1CLGtCQUVPQyxzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRVpDLEtBRlk7QUFBQSxNQUVMQyxRQUZLOztBQUduQixNQUFNQyxNQUFNLEdBQUdKLG9EQUFNLEVBQXJCOztBQUVBLE1BQU1LLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxLQUFLLENBQUNSLFFBQUQsRUFBVztBQUNoQ1MsdUJBQU8sRUFBRTtBQUNQQywrQkFBYSxtQkFBWUosTUFBTSxDQUFDSyxPQUFuQjtBQUROO0FBRHVCLGVBQVgsQ0FBTCxDQUlmQyxJQUplLENBSVYsVUFBQUMsQ0FBQztBQUFBLHVCQUFJQSxDQUFDLENBQUNDLElBQUYsRUFBSjtBQUFBLGVBSlMsQ0FESDs7QUFBQTtBQUNUQyxpQkFEUztBQU1mVixzQkFBUSxDQUFDVSxHQUFELENBQVIsQ0FOZSxDQU9mOztBQVBlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJSLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFVQVMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLEtBQTlCLENBQVo7O0FBQ0EsUUFBSSxDQUFDSCxHQUFMLEVBQVU7QUFDUkksd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRDs7QUFDRGhCLFVBQU0sQ0FBQ0ssT0FBUCxHQUFpQk0sR0FBakIsQ0FMYyxDQU9kOztBQUNBVixZQUFRO0FBQ1QsR0FUUSxFQVNOLEVBVE0sQ0FBVDs7QUFXQSxNQUFNZ0IsVUFBVTtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYQyxtQkFEVyxHQUNIdkIsUUFBUSxDQUFDVSxPQUFULENBQWlCYyxLQURkO0FBQUE7QUFBQSxxQkFHQ2pCLEtBQUssQ0FBQ1IsUUFBRCxFQUFZO0FBQ2pDUyx1QkFBTyxFQUFFO0FBQ1BDLCtCQUFhLG1CQUFZSixNQUFNLENBQUNLLE9BQW5CLENBRE47QUFFUCxrQ0FBZ0I7QUFGVCxpQkFEd0I7QUFLakNlLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CSix1QkFBSyxFQUFMQTtBQURtQixpQkFBZjtBQUwyQixlQUFaLENBSE47O0FBQUE7QUFHWFQsaUJBSFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVlEsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFjQSxTQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTjtBQUFLLFNBQUssRUFBRTtBQUFFTSxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsbUJBQWEsRUFBRSxRQUFsQztBQUE0Q0MsV0FBSyxFQUFFO0FBQW5ELEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBVyxFQUFDLE9BQS9CO0FBQXVDLE9BQUcsRUFBRTlCLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTStCLE1BQU0sQ0FBQ0MsSUFBUCxFQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixDQURNLEVBTU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1OLElBQUksQ0FBQ0MsU0FBTCxDQUFleEIsS0FBZixDQUFOLENBRkosQ0FOTSxDQUFSO0FBV0QsQ0FuREQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3RvZG9zJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgand0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZ2V0VG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dFJlZi5jdXJyZW50fWAsXG4gICAgICB9LFxuICAgIH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gICAgc2V0VG9kb3MocmVzKTtcbiAgICAvL2NvbnNvbGUubG9nKHJlcyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBqd3QgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XG4gICAgaWYgKCFqd3QpIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gICAgand0UmVmLmN1cnJlbnQgPSBqd3Q7XG5cbiAgICAvL2dldCBsaXN0IG9mIHRvZG9zXG4gICAgZ2V0VG9kb3MoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNyZWF0ZVRvdG8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZVJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3RSZWYuY3VycmVudH1gLFxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICB9KSxcbiAgIH0pO1xuICB9XG5cbiAgcmV0dXJuICA8ZGl2PlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIHdpZHRoOiBcIjIwMHB4XCIgfX0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgcmVmPXt0aXRsZVJlZn0gLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlLlRvZG8oKX0+Q3JlYXRlIFRvZG88L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXY+XG4gICAgICA8aDI+VG9kbydzIExpc3Q6PC9oMj5cbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodG9kb3MpfTwvcHJlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})