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
      // 1646677841334
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _setActiveMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setActiveMenuItem */ "./src/setActiveMenuItem.js");
/* harmony import */ var _setActiveProjectsBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setActiveProjectsBtn */ "./src/setActiveProjectsBtn.js");









/***/ }),

/***/ "./src/setActiveMenuItem.js":
/*!**********************************!*\
  !*** ./src/setActiveMenuItem.js ***!
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
		if (link.className === 'menu__list-link') {
			menuLinks.push(link);
		}
	}

	for (let i = 0; i < menuLinks.length; i++) {
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

/***/ "./src/setActiveProjectsBtn.js":
/*!*************************************!*\
  !*** ./src/setActiveProjectsBtn.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setActiveProjectsBtn": function() { return /* binding */ setActiveProjectsBtn; }
/* harmony export */ });

const setActiveProjectsBtn = () => {

	let current = 0;

	const allBtns = document.querySelectorAll('.projectChanger__btn');

	for (let i = 0; i < allBtns.length; i++) {
		 console.log(allBtns[i].href);
		if (allBtns[i].href === document.URL) {
			current = i;
		}
	}
	allBtns[current]?.classList.add('projectChanger__btn--active');
};

document.addEventListener("DOMContentLoaded", () => {
	setActiveProjectsBtn();
});




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","styles"], function() { return __webpack_exec__("./src/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguMmViNTIyNWJmZGE1OWU2NzAxNzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0SkFBNkUsY0FBYyxlQUFlO0FBQ3hJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JxQzs7QUFFZTtBQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkQ7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJNOztBQUVQOztBQUVBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9jZDdlIiwid2VicGFjazovL215UGV0UHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teVBldFByb2plY3QvLi9zcmMvc2V0QWN0aXZlTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXlQZXRQcm9qZWN0Ly4vc3JjL3NldEFjdGl2ZVByb2plY3RzQnRuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDY2Nzc4NDEzMzRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgeyBzZXRBY3RpdmVQYWdlIH0gZnJvbSAnLi9zZXRBY3RpdmVNZW51SXRlbSc7XG5pbXBvcnQgeyBzZXRBY3RpdmVQcm9qZWN0c0J0biB9IGZyb20gJy4vc2V0QWN0aXZlUHJvamVjdHNCdG4nO1xuXG5cblxuIiwiZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVBhZ2UgPSAoKSA9PiB7XG5cblx0bGV0IGN1cnJlbnQgPSAwO1xuXHRjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0LXVwcGVyJyk7XG5cdGNvbnN0IGFsbExpbmtzID0gbWVudUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2xpc3QtbGluaycpO1xuXHRjb25zdCBtZW51TGlua3MgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGxpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRpZiAobGluay5jbGFzc05hbWUgPT09ICdtZW51X19saXN0LWxpbmsnKSB7XG5cdFx0XHRtZW51TGlua3MucHVzaChsaW5rKTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVMaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChtZW51TGlua3NbaV0uaHJlZiA9PT0gZG9jdW1lbnQuVVJMKSB7XG5cdFx0XHRjdXJyZW50ID0gaTtcblx0XHR9XG5cdH1cblx0bWVudUxpbmtzW2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xpc3QtbGluay0tYWN0aXZlJyk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdHNldEFjdGl2ZVBhZ2UoKTtcbn0pO1xuXG5cbiIsIlxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVByb2plY3RzQnRuID0gKCkgPT4ge1xuXG5cdGxldCBjdXJyZW50ID0gMDtcblxuXHRjb25zdCBhbGxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RDaGFuZ2VyX19idG4nKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFsbEJ0bnMubGVuZ3RoOyBpKyspIHtcblx0XHQgY29uc29sZS5sb2coYWxsQnRuc1tpXS5ocmVmKTtcblx0XHRpZiAoYWxsQnRuc1tpXS5ocmVmID09PSBkb2N1bWVudC5VUkwpIHtcblx0XHRcdGN1cnJlbnQgPSBpO1xuXHRcdH1cblx0fVxuXHRhbGxCdG5zW2N1cnJlbnRdPy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2hhbmdlcl9fYnRuLS1hY3RpdmUnKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0c2V0QWN0aXZlUHJvamVjdHNCdG4oKTtcbn0pO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==