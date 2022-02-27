"use strict";
(self["webpackChunkmyPetProject"] = self["webpackChunkmyPetProject"] || []).push([["index"],{

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1645967367376
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/getActiveMenuItem.js":
/*!**********************************!*\
  !*** ./src/getActiveMenuItem.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setActivePage": function() { return /* binding */ setActivePage; }
/* harmony export */ });
const setActivePage = () => {

	let current = 0;
	const menuList = document.querySelector('.menu__list-upper');
	const allLinks = menuList.querySelectorAll('.menu__list-link');
	const menuLinks = [];

	for (const link of allLinks) {
		console.log(link.classList);
		if (link.className === 'menu__list-link') {
			menuLinks.push(link);
		}
	}

	for (let i = 0; i < menuLinks.length; i++) {
		 console.log(menuLinks[i].href);
		if (menuLinks[i].href === document.URL) {
			current = i;
		}
	}
	menuLinks[current].classList.add('menu__list-link--active');
};

document.addEventListener("DOMContentLoaded", () => {
	setActivePage();
});




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _getActiveMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getActiveMenuItem */ "./src/getActiveMenuItem.js");




document.onbeforeunload = function() {
  alert('s');
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","styles"], function() { return __webpack_exec__("./src/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDkxMDc1ZGEzYzk0ODg1MmU2YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0SkFBNkUsY0FBYyxlQUFlO0FBQ3hJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnNCO0FBQ2M7QUFDZTs7QUFFcEQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL3N0eWxlcy9tYWluLnNjc3M/Y2Q3ZSIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvZ2V0QWN0aXZlTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDU5NjczNjczNzZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVBhZ2UgPSAoKSA9PiB7XG5cblx0bGV0IGN1cnJlbnQgPSAwO1xuXHRjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0LXVwcGVyJyk7XG5cdGNvbnN0IGFsbExpbmtzID0gbWVudUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2xpc3QtbGluaycpO1xuXHRjb25zdCBtZW51TGlua3MgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGxpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRjb25zb2xlLmxvZyhsaW5rLmNsYXNzTGlzdCk7XG5cdFx0aWYgKGxpbmsuY2xhc3NOYW1lID09PSAnbWVudV9fbGlzdC1saW5rJykge1xuXHRcdFx0bWVudUxpbmtzLnB1c2gobGluayk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHQgY29uc29sZS5sb2cobWVudUxpbmtzW2ldLmhyZWYpO1xuXHRcdGlmIChtZW51TGlua3NbaV0uaHJlZiA9PT0gZG9jdW1lbnQuVVJMKSB7XG5cdFx0XHRjdXJyZW50ID0gaTtcblx0XHR9XG5cdH1cblx0bWVudUxpbmtzW2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xpc3QtbGluay0tYWN0aXZlJyk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdHNldEFjdGl2ZVBhZ2UoKTtcbn0pO1xuXG5cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBzZXRBY3RpdmVQYWdlIH0gZnJvbSAnLi9nZXRBY3RpdmVNZW51SXRlbSc7XG5cbmRvY3VtZW50Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGFsZXJ0KCdzJyk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==