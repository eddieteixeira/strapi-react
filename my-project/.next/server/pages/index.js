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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/eddie/Documents/github/strapi-react/my-project/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst endpoint = 'http://localhost:1337/todos';\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const titleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const jwtRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  const getTodos = async () => {\n    const res = await fetch(endpoint, {\n      headers: {\n        Authorization: `Bearer ${jwtRef.current}`\n      }\n    }).then(r => r.json());\n    setTodos(res); //console.log(res);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const jwt = window.sessionStorage.getItem('jwt');\n\n    if (!jwt) {\n      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/login');\n    }\n\n    jwtRef.current = jwt; //get list of todos\n\n    getTodos();\n  }, []);\n\n  const createTodo = async () => {\n    const title = titleRef.current.value;\n    const res = await fetch(endpoint, {\n      method: 'POST',\n      headers: {\n        Authorization: `Bearer ${jwtRef.current}`,\n        'Content-type': 'application/json'\n      },\n      body: JSON.stringify({\n        title\n      })\n    }).then(r => r.json());\n    const newTodos = [...todos, res];\n    setTodos(newTodos);\n    console.log(res);\n    console.log(newTodos);\n  };\n\n  return __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      alignItems: 'center',\n      width: '100%'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      justifyContent: 'center',\n      width: \"200px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Title\",\n    ref: titleRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    onClick: () => createTodo(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, \"Create Todo\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, \"Todo's List:\"), todos.map(todo => __jsx(\"div\", {\n    key: todo.title,\n    style: {\n      display: 'flex',\n      alignItems: 'center',\n      background: 'rgba(0,0,0,0.3)',\n      margin: '5px 0',\n      padding: '5px',\n      borderRadius: '5px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    checked: todo.done,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }), todo.title))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImVuZHBvaW50IiwidGl0bGVSZWYiLCJ1c2VSZWYiLCJ0b2RvcyIsInNldFRvZG9zIiwidXNlU3RhdGUiLCJqd3RSZWYiLCJnZXRUb2RvcyIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjdXJyZW50IiwidGhlbiIsInIiLCJqc29uIiwidXNlRWZmZWN0Iiwiand0Iiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiUm91dGVyIiwicHVzaCIsImNyZWF0ZVRvZG8iLCJ0aXRsZSIsInZhbHVlIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdUb2RvcyIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwibWFwIiwidG9kbyIsImJhY2tncm91bmQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUcsNkJBQWpCO0FBRWUscUVBQU07QUFDbkIsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHSixvREFBTSxFQUFyQjs7QUFFQSxRQUFNSyxRQUFRLEdBQUcsWUFBWTtBQUMzQixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDVCxRQUFELEVBQVc7QUFDaENVLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUFHLFVBQVNMLE1BQU0sQ0FBQ00sT0FBUTtBQURqQztBQUR1QixLQUFYLENBQUwsQ0FJZkMsSUFKZSxDQUlWQyxDQUFDLElBQUlB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR0wsSUFBSSxDQUFDZixLQUZSLENBREQsQ0FGTCxDQU5NLENBQVI7QUFnQkQsQ0E5REQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3RvZG9zJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgand0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZ2V0VG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dFJlZi5jdXJyZW50fWAsXG4gICAgICB9LFxuICAgIH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gICAgc2V0VG9kb3MocmVzKTtcbiAgICAvL2NvbnNvbGUubG9nKHJlcyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBqd3QgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XG4gICAgaWYgKCFqd3QpIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gICAgand0UmVmLmN1cnJlbnQgPSBqd3Q7XG5cbiAgICAvL2dldCBsaXN0IG9mIHRvZG9zXG4gICAgZ2V0VG9kb3MoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZVJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dFJlZi5jdXJyZW50fWAsXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZSxcbiAgICAgIH0pLFxuICAgfSkudGhlbihyID0+IHIuanNvbigpKTtcblxuICAgY29uc3QgbmV3VG9kb3MgPSBbLi4udG9kb3MsIHJlc107XG4gICBzZXRUb2RvcyhuZXdUb2Rvcyk7XG4gICBjb25zb2xlLmxvZyhyZXMpO1xuICAgY29uc29sZS5sb2cobmV3VG9kb3MpO1xuICB9O1xuXG4gIHJldHVybiAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB3aWR0aDogJzEwMCUnIH19PlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgd2lkdGg6IFwiMjAwcHhcIiB9fT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiByZWY9e3RpdGxlUmVmfSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gY3JlYXRlVG9kbygpIH0+Q3JlYXRlIFRvZG88L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXY+XG4gICAgICA8aDI+VG9kbydzIExpc3Q6PC9oMj5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17dG9kby50aXRsZX0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4zKScsIG1hcmdpbjogJzVweCAwJywgcGFkZGluZzogJzVweCcsIGJvcmRlclJhZGl1czogJzVweCcgfX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dG9kby5kb25lfSAvPlxuICAgICAgICAgICAge3RvZG8udGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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