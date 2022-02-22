"use strict";
(self["webpackChunkmyPetProject"] = self["webpackChunkmyPetProject"] || []).push([["index"],{

/***/ "./src/getActiveMenuItem.js":
/*!**********************************!*\
  !*** ./src/getActiveMenuItem.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setActivePage": () => (/* binding */ setActivePage)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var setActivePage = function setActivePage() {
  var current = 0;
  var menuList = document.querySelector('.menu__list-upper');
  var allLinks = menuList.querySelectorAll('.menu__list-link');
  var menuLinks = [];

  var _iterator = _createForOfIteratorHelper(allLinks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;

      if (link.className === 'menu__list-link') {
        menuLinks.push(link);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  for (var i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].href === document.URL) {
      current = i;
    }
  }

  menuLinks[current].className += ' active';
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _getActiveMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getActiveMenuItem */ "./src/getActiveMenuItem.js");



window.addEventListener('load', function () {
  return (0,_getActiveMenuItem__WEBPACK_IMPORTED_MODULE_2__.setActivePage)();
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1645555019745
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","styles"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguYWQwMTBlZjlkZmNmMDJiNjBjNDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUNsQyxNQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFqQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBakI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsRUFBbEI7O0FBSmtDLDZDQU1mRixRQU5lO0FBQUE7O0FBQUE7QUFNbEMsd0RBQTZCO0FBQUEsVUFBbEJHLElBQWtCOztBQUM1QixVQUFJQSxJQUFJLENBQUNDLFNBQUwsS0FBbUIsaUJBQXZCLEVBQTBDO0FBQ3pDRixRQUFBQSxTQUFTLENBQUNHLElBQVYsQ0FBZUYsSUFBZjtBQUNBO0FBQ0Q7QUFWaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZbEMsT0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixTQUFTLENBQUNLLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQzFDLFFBQUlKLFNBQVMsQ0FBQ0ksQ0FBRCxDQUFULENBQWFFLElBQWIsS0FBc0JWLFFBQVEsQ0FBQ1csR0FBbkMsRUFBd0M7QUFDdkNiLE1BQUFBLE9BQU8sR0FBR1UsQ0FBVjtBQUNBO0FBQ0Q7O0FBQ0RKLEVBQUFBLFNBQVMsQ0FBQ04sT0FBRCxDQUFULENBQW1CUSxTQUFuQixJQUFnQyxTQUFoQztBQUNBLENBbEJNOzs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7QUFFQVEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLFNBQU1sQixpRUFBYSxFQUFuQjtBQUFBLENBQWhDOzs7Ozs7Ozs7OztBQ0pBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0SkFBNkUsY0FBYyxlQUFlO0FBQ3hJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL2dldEFjdGl2ZU1lbnVJdGVtLmpzIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9jZDdlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXRBY3RpdmVQYWdlID0gKCkgPT4ge1xuXHRsZXQgY3VycmVudCA9IDA7XG5cdGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xpc3QtdXBwZXInKTtcblx0Y29uc3QgYWxsTGlua3MgPSBtZW51TGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9fbGlzdC1saW5rJyk7XG5cdGNvbnN0IG1lbnVMaW5rcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgbGluayBvZiBhbGxMaW5rcykge1xuXHRcdGlmIChsaW5rLmNsYXNzTmFtZSA9PT0gJ21lbnVfX2xpc3QtbGluaycpIHtcblx0XHRcdG1lbnVMaW5rcy5wdXNoKGxpbmspO1xuXHRcdH1cblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKG1lbnVMaW5rc1tpXS5ocmVmID09PSBkb2N1bWVudC5VUkwpIHtcblx0XHRcdGN1cnJlbnQgPSBpO1xuXHRcdH1cblx0fVxuXHRtZW51TGlua3NbY3VycmVudF0uY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcbn1cblxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCB7IHNldEFjdGl2ZVBhZ2UgfSBmcm9tICcuL2dldEFjdGl2ZU1lbnVJdGVtJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBzZXRBY3RpdmVQYWdlKCkpO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjQ1NTU1MDE5NzQ1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6WyJzZXRBY3RpdmVQYWdlIiwiY3VycmVudCIsIm1lbnVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWxsTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUxpbmtzIiwibGluayIsImNsYXNzTmFtZSIsInB1c2giLCJpIiwibGVuZ3RoIiwiaHJlZiIsIlVSTCIsIl8iLCJjc3MiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==