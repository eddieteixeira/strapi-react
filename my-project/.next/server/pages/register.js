module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/eddie/Documents/github/strapi/my-project/pages/register.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst endpoint = 'http://localhost:1337/auth/local/register';\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const loginRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const pwdRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const mailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const register = async () => {\n    const username = loginRef.current.value;\n    const email = mailRef.current.value;\n    const password = pwdRef.current.value;\n\n    try {\n      const {\n        jwt,\n        user\n      } = await fetch(endpoint, {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify({\n          username,\n          email,\n          password\n        })\n      }).then(res => res.json());\n      window.sessionStorage.setItem('jwt', jwt);\n      window.sessionStorage.setItem('user', JSON.stringify(user));\n      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');\n    } catch (e) {\n      setError(e.toString());\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Login\",\n    ref: loginRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"mail\",\n    placeholder: \"Email\",\n    ref: mailRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    placeholder: \"Password\",\n    ref: pwdRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: () => register(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"Register\")), error && __jsx(\"div\", {\n    style: {\n      border: '1px solid red'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, error));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcz8wZWNiIl0sIm5hbWVzIjpbImVuZHBvaW50IiwibG9naW5SZWYiLCJ1c2VSZWYiLCJwd2RSZWYiLCJtYWlsUmVmIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwicmVnaXN0ZXIiLCJ1c2VybmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJqd3QiLCJ1c2VyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIlJvdXRlciIsInB1c2giLCJlIiwidG9TdHJpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxHQUFHLDJDQUFqQjtBQUVlLHFFQUFNO0FBQ25CLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFDQSxRQUFNQyxNQUFNLEdBQUdELG9EQUFNLEVBQXJCO0FBQ0EsUUFBTUUsT0FBTyxHQUFHRixvREFBTSxFQUF0QjtBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUVBLFFBQU1DLFFBQVEsR0FBRyxZQUFZO0FBQzNCLFVBQU1DLFFBQVEsR0FBR1IsUUFBUSxDQUFDUyxPQUFULENBQWlCQyxLQUFsQztBQUNBLFVBQU1DLEtBQUssR0FBR1IsT0FBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUE5QjtBQUNBLFVBQU1FLFFBQVEsR0FBR1YsTUFBTSxDQUFDTyxPQUFQLENBQWVDLEtBQWhDOztBQUVBLFFBQUc7QUFDRCxZQUFNO0FBQUNHLFdBQUQ7QUFBTUM7QUFBTixVQUFjLE1BQU1DLEtBQUssQ0FBQ2hCLFFBQUQsRUFBVztBQUN4Q2lCLGNBQU0sRUFBRSxNQURnQztBQUV4Q0MsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCO0FBRFQsU0FGK0I7QUFLeENDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJaLGtCQURtQjtBQUVuQkcsZUFGbUI7QUFHbkJDO0FBSG1CLFNBQWY7QUFMa0MsT0FBWCxDQUFMLENBVXZCUyxJQVZ1QixDQVVsQkMsR0FBRyxJQUFLQSxHQUFHLENBQUNDLElBQUosRUFWVSxDQUExQjtBQVlBQyxZQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLEtBQTlCLEVBQXFDYixHQUFyQztBQUNBVyxZQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE1BQTlCLEVBQXNDUCxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZixDQUF0QztBQUVBYSx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUVDLEtBbEJILENBa0JHLE9BQU9DLENBQVAsRUFBVTtBQUNUeEIsY0FBUSxDQUFDd0IsQ0FBQyxDQUFDQyxRQUFGLEVBQUQsQ0FBUjtBQUNEO0FBQ0YsR0ExQkg7O0FBNkJBLFNBQ0UsbUVBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUUsUUFBbEM7QUFBNENDLGdCQUFVLEVBQUU7QUFBeEQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUMsT0FBL0I7QUFBdUMsT0FBRyxFQUFFakMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUMsT0FBL0I7QUFBdUMsT0FBRyxFQUFFRyxPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLGVBQVcsRUFBQyxVQUFuQztBQUE4QyxPQUFHLEVBQUVELE1BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQVEsV0FBTyxFQUFHLE1BQU1LLFFBQVEsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQURGLEVBT0NILEtBQUssSUFBSTtBQUFLLFNBQUssRUFBRTtBQUFFOEIsWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDOUIsS0FBekMsQ0FQVixDQURGO0FBV0QsQ0E5Q0QiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBlbmRwb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXV0aC9sb2NhbC9yZWdpc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbG9naW5SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcHdkUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG1haWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBsb2dpblJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gbWFpbFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gcHdkUmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICB0cnl7XG4gICAgICBjb25zdCB7and0LCB1c2VyfSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9KSwgIFxuICAgICAgfSkudGhlbihyZXMgID0+IHJlcy5qc29uKCkpO1xuXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnand0Jywgand0KTtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xuXG4gICAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0RXJyb3IoZS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxvZ2luXCIgcmVmPXtsb2dpblJlZn0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlZj17bWFpbFJlZn0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZWY9e3B3ZFJlZn0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gcmVnaXN0ZXIoKSB9PlJlZ2lzdGVyPC9idXR0b24+ICBcbiAgICAgIDwvZGl2PlxuICAgIHtlcnJvciAmJiA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCByZWQnfX0+e2Vycm9yfTwvZGl2Pn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });