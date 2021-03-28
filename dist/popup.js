/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/observeTitle.ts":
/*!****************************************!*\
  !*** ./src/components/observeTitle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observeTitle\": () => /* binding */ observeTitle\n/* harmony export */ });\nvar observeTitle = function () {\n    // select the target node\n    var target = document.querySelector('title');\n    // create an observer instance\n    var titleObserver = new MutationObserver(function (mutations) {\n        var titleText = mutations[0].target\n            .innerText;\n        if (titleText.includes('(')) {\n            console.log('page title hidden');\n            target.innerText = titleText.slice(4);\n        }\n    });\n    // configuration of the observer:\n    var config = { subtree: true, characterData: true, childList: true };\n    // pass in the target node, as well as the observer options\n    titleObserver.observe(target, config);\n};\n\n\n//# sourceURL=webpack://linkedin-filter/./src/components/observeTitle.ts?");

/***/ }),

/***/ "./src/components/removeStaticAds.ts":
/*!*******************************************!*\
  !*** ./src/components/removeStaticAds.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeStaticAds\": () => /* binding */ removeStaticAds\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n\nvar removeStaticAds = function () {\n    var selectors = ['iframe.ad-banner'];\n    var _loop_1 = function (selector) {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.waitForSelector)(selector, function () {\n            var element = document.querySelector(selector);\n            element.style.visibility = 'hidden';\n        });\n    };\n    for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {\n        var selector = selectors_1[_i];\n        _loop_1(selector);\n    }\n};\n\n\n//# sourceURL=webpack://linkedin-filter/./src/components/removeStaticAds.ts?");

/***/ }),

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterIconHtml\": () => /* binding */ filterIconHtml,\n/* harmony export */   \"classesToHide\": () => /* binding */ classesToHide\n/* harmony export */ });\nvar filterIconHtml = function (FILTER_CLASS, filterIconIdentifier, filterSvgClass) { return \"<div class=\\\"\" + FILTER_CLASS + \"\\\">\\n                    <svg \" + filterIconIdentifier + \" class=\\\"\" + filterSvgClass + \"\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" version=\\\"1.1\\\" id=\\\"Capa_1\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 512 512\\\" \\n                        style=\\\"enable-background:new 0 0 512 512;\\\" xml:space=\\\"preserve\\\"\\n                        >\\n                            <g>\\n                                <path d=\\\"M276,246c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C286,250.48,281.52,246,276,246z\\\"/>\\n                            </g>\\n                            <g>\\n                                <path d=\\\"M472,26H40C17.944,26,0,43.944,0,66c0,22.097,17.898,40,40,40h11.194L206,299.508V476c0,3.466,1.795,6.685,4.743,8.506    c2.948,1.823,6.63,1.987,9.729,0.438l80-40C303.86,443.25,306,439.788,306,436V299.508L460.806,106H472c22.056,0,40-17.944,40-40    C512,43.903,494.102,26,472,26z M286,429.82l-60,30V306h60V429.82z M291.193,286h-70.387l-144-180h358.388L291.193,286z M472,86    H40c-11.045,0-20-8.954-20-20c0-11.028,8.972-20,20-20h432c11.045,0,20,8.954,20,20C492,77.028,483.028,86,472,86z\\\"/>\\n                            </g>\\n                            <g>\\n                                <path d=\\\"M379.027,128.191c-4.312-3.451-10.606-2.75-14.056,1.562l-71.33,89.16c-3.45,4.313-2.75,10.606,1.562,14.056    c4.304,3.443,10.598,2.76,14.056-1.562l71.33-89.16C384.039,137.934,383.34,131.642,379.027,128.191z\\\"/>\\n                            </g>\\n                        </svg>\\n                    </div>\"; };\nvar classesToHide = [\n    '.feed-shared-update-v2__update-content-wrapper',\n    '.feed-shared-update-v2__description-wrapper',\n    '.feed-shared-update-v2__content',\n    '.social-details-social-activity',\n    '.Elevation-0dp',\n    '.ad-banner-container',\n];\n\n\n//# sourceURL=webpack://linkedin-filter/./src/const.ts?");

/***/ }),

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ID_SEPARATOR\": () => /* binding */ ID_SEPARATOR,\n/* harmony export */   \"ID_SEPARATOR_INDEX\": () => /* binding */ ID_SEPARATOR_INDEX,\n/* harmony export */   \"ID_SEPARATOR_INDEX_AGGREGATE\": () => /* binding */ ID_SEPARATOR_INDEX_AGGREGATE,\n/* harmony export */   \"filterMainClass\": () => /* binding */ filterMainClass,\n/* harmony export */   \"filterIconIdentifier\": () => /* binding */ filterIconIdentifier,\n/* harmony export */   \"filterSvgClass\": () => /* binding */ filterSvgClass,\n/* harmony export */   \"LISTENER_ADDED_CLASS\": () => /* binding */ LISTENER_ADDED_CLASS,\n/* harmony export */   \"MAIN_FEED_SELECTOR\": () => /* binding */ MAIN_FEED_SELECTOR,\n/* harmony export */   \"DEBUG_MODE\": () => /* binding */ DEBUG_MODE\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/const.ts\");\n/* harmony import */ var _components_observeTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/observeTitle */ \"./src/components/observeTitle.ts\");\n/* harmony import */ var _components_removeStaticAds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/removeStaticAds */ \"./src/components/removeStaticAds.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\n\n\n\n\n/// for id extraction\nvar ID_SEPARATOR = ':';\nvar ID_SEPARATOR_INDEX = 3;\nvar ID_SEPARATOR_INDEX_AGGREGATE = 5;\nvar filterMainClass = 'filter-ad';\nvar filterIconIdentifier = \"filter-icon-zzz\";\nvar filterSvgClass = 'filterSvg';\nvar LISTENER_ADDED_CLASS = 'listenerAdded';\nvar MAIN_FEED_SELECTOR = 'main#main';\nvar DEBUG_MODE = false;\nwindow.onload = function () {\n    (0,_components_observeTitle__WEBPACK_IMPORTED_MODULE_1__.observeTitle)();\n    if (window.location.href.includes('linkedin.com/feed')) {\n        addCss();\n        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.waitForSelector)(MAIN_FEED_SELECTOR, observeMainFeed);\n        (0,_components_removeStaticAds__WEBPACK_IMPORTED_MODULE_2__.removeStaticAds)();\n    }\n};\nvar observeMainFeed = function () {\n    var target = document.querySelector(MAIN_FEED_SELECTOR);\n    var mainFeedObserver = new MutationObserver(function () {\n        DEBUG_MODE && console.log('change observed');\n        debounceProcessNewPosts();\n    });\n    var config = { subtree: true, characterData: true, childList: true };\n    mainFeedObserver.observe(target, config);\n};\nvar processNewPosts = function () {\n    DEBUG_MODE && console.log('entered function: processNewPosts');\n    hideOnLoadOrScroll();\n    hidePromotedPosts();\n    insertFilter();\n};\nvar debounceProcessNewPosts = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.debounce)(processNewPosts, 400);\nvar addCss = function () {\n    document.head.insertAdjacentHTML('beforeend', (\"<style>\\n            .\" + filterMainClass + \"{\\n                border-radius: 50px;\\n                position: absolute;\\n                right: 46px;\\n                top: 4px;\\n                z-index: 1;\\n                cursor: pointer;\\n                display: flex;\\n                align-items: center;\\n                justify-content: center;\\n                height: 3.2rem;\\n                width: 3.2rem;\\n            }\\n        \\n            .\" + filterMainClass + \":hover{\\n                background-color: rgb(235,235,235);\\n            }\\n            .\" + filterMainClass + \":active{\\n                background-color: #D9D9D9;\\n            }\\n\\n            .\" + filterSvgClass + \"{\\n                z-index: 0;\\n                height: 20px;\\n                fill: #797979;\\n            }\\n            </style>\").trim());\n};\nvar hidePromotedPosts = function () {\n    //choosing page elements to hide\n    var arr = __spreadArrays(Array.from(document.querySelectorAll('span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light'))); // get all the divs in an array\n    arr = arr.filter(function (item) { return item.innerText == 'Promoted'; });\n    arr.forEach(function (promoted) {\n        promoted.innerText = 'Hidden by LinkedIn Plus';\n        promoted.parentNode.parentNode.parentNode\n            .parentNode.style.display = 'none';\n    });\n    arr.length && console.log(arr.length + \" promoted posts hidden\");\n};\nvar insertFilter = function () {\n    // insert filter icon\n    var optionIcons = __spreadArrays(Array.from(document.querySelectorAll('li-icon[type=\"ellipsis-horizontal-icon\"][aria-label=\"Open control menu\"]:not(.filterAdded)')));\n    optionIcons.forEach(function (optionIcon) {\n        optionIcon.classList.add('filterAdded'); //add a class so it won't be re-added to the array\n        //inserted high, in order not to disappear when hiding children\n        optionIcon.parentNode.parentNode.parentNode\n            .parentNode.insertAdjacentHTML('beforebegin', (0,_const__WEBPACK_IMPORTED_MODULE_0__.filterIconHtml)(filterMainClass, filterIconIdentifier, filterSvgClass));\n    });\n    //insert listener on filter icon\n    var filterIcons = __spreadArrays(Array.from(document.querySelectorAll(\".\" + filterMainClass + \":not(.\" + LISTENER_ADDED_CLASS + \")\")));\n    filterIcons.forEach(function (filterIcon) {\n        filterIcon.classList.add(LISTENER_ADDED_CLASS);\n        filterIcon.addEventListener('click', function (e) {\n            e.stopPropagation();\n            handleFilterClick(e.target);\n        });\n    });\n};\nvar handleFilterClick = function (eventTarget) {\n    // to avoid propagation from other elements\n    if (eventTarget.hasAttribute(filterIconIdentifier) ||\n        eventTarget.parentElement.parentElement.hasAttribute(filterIconIdentifier) || //in case icon inside path was clicked\n        eventTarget.classList.contains(filterMainClass)) {\n        var parent_1 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getParentEl)(eventTarget);\n        DEBUG_MODE &&\n            console.log(\"Got parent element:\\n      \" + parent_1);\n        var id = getId(parent_1);\n        var idIndexOnMemory = isOnMemory(id);\n        if (idIndexOnMemory === -1) {\n            DEBUG_MODE && console.log(\"Ad ID on memory: NO\");\n            hideByParentElement(parent_1);\n        }\n        else {\n            DEBUG_MODE && console.log(\"Ad ID on memory: YES\");\n            unhidePost(id);\n        }\n        saveOrRemoveIdFromMemory(id, idIndexOnMemory);\n    }\n    else {\n        // console.log(`target doesn't have att '${filterIconIdentifier}'`);\n        // console.log(e.target);\n    }\n};\nvar hideByParentElement = function (el) {\n    //el = data-id=\"urn:li:activity...\n    if (el.hasAttribute('data-id')) {\n        var success = hideAllChildren(el);\n        if (success) {\n            el.classList.add('hiddenPost');\n        }\n    }\n    else {\n        console.log(\"ERROR. trying to hide parent with wrong el.\");\n    }\n};\nvar hideAllChildren = function (el) {\n    DEBUG_MODE && console.log('Trying to hide ads CHILD ELEMENTS');\n    var dataUrnEl = getDataUrnEl(el);\n    if (dataUrnEl) {\n        var childrenToHide = el.querySelectorAll(_const__WEBPACK_IMPORTED_MODULE_0__.classesToHide.toString());\n        childrenToHide.forEach(function (child) {\n            child.style.display = 'none';\n        });\n        return true;\n    }\n    else {\n        return false;\n    }\n};\nvar getDataUrnEl = function (el) {\n    if (DEBUG_MODE) {\n        console.log('Trying to get data-urn element, from the following:');\n        console.log(el);\n    }\n    var dataUrnEl = el.querySelector('[data-urn]');\n    if (DEBUG_MODE) {\n        console.log('Found the following data-urn element:');\n        console.log(dataUrnEl);\n    }\n    return dataUrnEl;\n};\nvar unhidePost = function (id) {\n    // get main parent element\n    var el = document.querySelector(\"[data-id*=\\\"urn:li:activity:\" + id + \"\\\"]\");\n    if (el) {\n        el.classList.remove('hiddenPost');\n        // unhide children\n        var dataUrnEl = getDataUrnEl(el);\n        var childrenToUnhide = el.querySelectorAll(_const__WEBPACK_IMPORTED_MODULE_0__.classesToHide.toString());\n        childrenToUnhide.forEach(function (child) {\n            child.removeAttribute('style');\n        });\n    }\n};\nvar readFromLocalStorage = function () {\n    // Retrieve your data from locaStorage (get from localStorage or create new Obj)\n    var memoryData = localStorage.getItem('filtered')\n        ? JSON.parse(localStorage.getItem('filtered'))\n        : [];\n    return __spreadArrays(memoryData);\n};\nvar isOnMemory = function (id) {\n    var memory = readFromLocalStorage();\n    var index = -1;\n    memory.forEach(function (ad, i) {\n        if (ad.id === id)\n            index = i;\n    });\n    return index;\n};\nvar saveOrRemoveIdFromMemory = function (id, idIndexOnMemory) {\n    var memory = { filtered: readFromLocalStorage() };\n    if (id != null) {\n        if (idIndexOnMemory === -1) {\n            memory.filtered.push({ id: id, date: Date.now() });\n            console.log(\"'\" + id + \"' ADDED\");\n        }\n        else {\n            memory.filtered.splice(idIndexOnMemory, 1);\n            console.log(\"'\" + id + \"' REMOVED\");\n        }\n    }\n    localStorage.setItem('filtered', JSON.stringify(memory.filtered));\n};\n// Hide on first load id's from localStorage\nvar hideOnLoadOrScroll = function () {\n    //read again from memory\n    var memory = { filtered: readFromLocalStorage() };\n    DEBUG_MODE &&\n        console.log(\"filtering saved posts by id: \" + memory.filtered.length + \" posts\");\n    memory.filtered.forEach(function (_a) {\n        var id = _a.id;\n        var el = document.querySelector(\n        // :not(.hiddenPost) - in order not to double hide posts\n        \"[data-id=\\\"urn:li:activity:\" + id + \"\\\"]:not(.hiddenPost)\");\n        if (el) {\n            console.log(\"ID found. hiding ID:\" + id);\n            hideByParentElement(el);\n        }\n    });\n};\nvar getId = function (el) {\n    //el = data-id=\"urn:li:activity...\n    var idText = el.getAttribute('data-id');\n    DEBUG_MODE && (console.log('Trying to get id from:'), console.log(idText));\n    var id;\n    //check if id aggregated\n    if (idText.includes('aggregate')) {\n        DEBUG_MODE && console.log('id is aggregated');\n        var countOfColon = (idText.match(/:/g) || []).length;\n        var position = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPosition)(idText, ID_SEPARATOR, countOfColon);\n        id = __spreadArrays(Array.from(idText)).slice(position + 1, idText.length - 2) //without starting colon, and without ending )\n            .join('');\n    }\n    else {\n        //not aggregated\n        var position = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPosition)(idText, ID_SEPARATOR, ID_SEPARATOR_INDEX);\n        id = __spreadArrays(Array.from(idText)).slice(position + 1).join('');\n    }\n    DEBUG_MODE && console.log(\"ID returned from getId: \" + id);\n    return id;\n};\n\n\n//# sourceURL=webpack://linkedin-filter/./src/popup.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => /* binding */ debounce,\n/* harmony export */   \"getPosition\": () => /* binding */ getPosition,\n/* harmony export */   \"getParentEl\": () => /* binding */ getParentEl,\n/* harmony export */   \"waitForSelector\": () => /* binding */ waitForSelector\n/* harmony export */ });\nvar debounce = function (callback, waitFor) {\n    var timeout;\n    return function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        var result;\n        timeout && clearTimeout(timeout);\n        timeout = setTimeout(function () {\n            result = callback.apply(void 0, args);\n        }, waitFor);\n        return result;\n    };\n};\nvar getPosition = function (str, subString, index) {\n    return str.split(subString, index).join(subString).length;\n};\nvar getParentEl = function (el) {\n    var MAX_ELEMENTS = 10;\n    // let counter = 0;\n    while (!el.hasAttribute('data-id')) {\n        el = el.parentElement;\n    }\n    return el;\n};\nvar waitForSelector = function (selector, callback, limit, delay) {\n    if (limit === void 0) { limit = 30; }\n    if (delay === void 0) { delay = 300; }\n    if (limit === 0)\n        return;\n    if (document.querySelector(selector)) {\n        callback();\n    }\n    else {\n        setTimeout(function () {\n            waitForSelector(selector, callback, limit--);\n        }, delay);\n    }\n};\n\n\n//# sourceURL=webpack://linkedin-filter/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/popup.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;