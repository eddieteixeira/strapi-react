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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/eddie/Documents/github/strapi-react/my-project/pages/login.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst endpoint = 'http://localhost:1337/auth/local';\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const loginRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const pwdRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const login = async () => {\n    const identifier = loginRef.current.value;\n    const password = pwdRef.current.value;\n\n    try {\n      const {\n        jwt,\n        user\n      } = await fetch(endpoint, {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify({\n          identifier,\n          password\n        })\n      }).then(res => {\n        if (res.status !== 200) {\n          throw new error('Error loggin in');\n        }\n\n        return res.json();\n      });\n      window.sessionStorage.setItem('jwt', jwt);\n      window.sessionStorage.setItem('user', JSON.stringify(user));\n      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');\n    } catch (e) {\n      setError(e.toString());\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Username or email\",\n    ref: loginRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    placeholder: \"Password\",\n    ref: pwdRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: () => login(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"Login\")), error && __jsx(\"div\", {\n    style: {\n      border: '1px solid red'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 16\n    }\n  }, error));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbImVuZHBvaW50IiwibG9naW5SZWYiLCJ1c2VSZWYiLCJwd2RSZWYiLCJlcnJvciIsInNldEVycm9yIiwidXNlU3RhdGUiLCJsb2dpbiIsImlkZW50aWZpZXIiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsImp3dCIsInVzZXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiUm91dGVyIiwicHVzaCIsImUiLCJ0b1N0cmluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUcsa0NBQWpCO0FBRWUscUVBQU07QUFDbkIsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0Qsb0RBQU0sRUFBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0UsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQzs7QUFFQSxRQUFNQyxLQUFLLEdBQUcsWUFBWTtBQUN4QixVQUFNQyxVQUFVLEdBQUdQLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkMsS0FBcEM7QUFDQSxVQUFNQyxRQUFRLEdBQUdSLE1BQU0sQ0FBQ00sT0FBUCxDQUFlQyxLQUFoQzs7QUFFQSxRQUFHO0FBQ0QsWUFBTTtBQUFDRSxXQUFEO0FBQU1DO0FBQU4sVUFBYyxNQUFNQyxLQUFLLENBQUNkLFFBQUQsRUFBVztBQUN4Q2UsY0FBTSxFQUFFLE1BRGdDO0FBRXhDQyxlQUFPLEVBQUU7QUFDUCwwQkFBZ0I7QUFEVCxTQUYrQjtBQUt4Q0MsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlgsb0JBRG1CO0FBRW5CRztBQUZtQixTQUFmO0FBTGtDLE9BQVgsQ0FBTCxDQVN2QlMsSUFUdUIsQ0FTbEJDLEdBQUcsSUFBSztBQUNaLFlBQUlBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBQW5CLEVBQXVCO0FBQ25CLGdCQUFNLElBQUlsQixLQUFKLENBQVUsaUJBQVYsQ0FBTjtBQUNIOztBQUNELGVBQU9pQixHQUFHLENBQUNFLElBQUosRUFBUDtBQUNILE9BZHlCLENBQTFCO0FBZ0JBQyxZQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLEtBQTlCLEVBQXFDZCxHQUFyQztBQUNBWSxZQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE1BQTlCLEVBQXNDUixJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZixDQUF0QztBQUVBYyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUVELEtBdEJELENBc0JDLE9BQU9DLENBQVAsRUFBVTtBQUNQeEIsY0FBUSxDQUFDd0IsQ0FBQyxDQUFDQyxRQUFGLEVBQUQsQ0FBUjtBQUNIO0FBQ0YsR0E3QkQ7O0FBK0JBLFNBQ0UsbUVBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUUsUUFBbEM7QUFBNENDLGdCQUFVLEVBQUU7QUFBeEQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUMsbUJBQS9CO0FBQW1ELE9BQUcsRUFBRWhDLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsZUFBVyxFQUFDLFVBQW5DO0FBQThDLE9BQUcsRUFBRUUsTUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBUSxXQUFPLEVBQUcsTUFBTUksS0FBSyxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsQ0FERixFQU1FSCxLQUFLLElBQUk7QUFBSyxTQUFLLEVBQUU7QUFBRThCLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QzlCLEtBQXpDLENBTlgsQ0FERjtBQVVELENBOUNEIiwiZmlsZSI6Ii4vcGFnZXMvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgZW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2F1dGgvbG9jYWwnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGxvZ2luUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHB3ZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gbG9naW5SZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHB3ZFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgdHJ5e1xuICAgICAgY29uc3Qge2p3dCwgdXNlcn0gPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9KSwgIFxuICAgICAgfSkudGhlbihyZXMgID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKXtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9yKCdFcnJvciBsb2dnaW4gaW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9KTtcblxuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIGp3dCk7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICBcbiAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0RXJyb3IoZS50b1N0cmluZygpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb3IgZW1haWxcIiByZWY9e2xvZ2luUmVmfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlZj17cHdkUmVmfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiBsb2dpbigpIH0+TG9naW48L2J1dHRvbj4gIFxuICAgICAgPC9kaXY+XG4gICAgIHtlcnJvciAmJiA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCByZWQnfX0+e2Vycm9yfTwvZGl2Pn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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