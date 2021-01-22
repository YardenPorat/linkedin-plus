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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observeTitle\": () => /* binding */ observeTitle\n/* harmony export */ });\nvar observeTitle = function () {\r\n    // select the target node\r\n    var target = document.querySelector('title');\r\n    // create an observer instance\r\n    var titleObserver = new MutationObserver(function (mutations) {\r\n        var titleText = mutations[0].target.innerText;\r\n        if (titleText.includes('(')) {\r\n            console.log('page title hidden');\r\n            target.innerText = titleText.slice(4);\r\n        }\r\n    });\r\n    // configuration of the observer:\r\n    var config = { subtree: true, characterData: true, childList: true };\r\n    // pass in the target node, as well as the observer options\r\n    titleObserver.observe(target, config);\r\n};\r\n\n\n//# sourceURL=webpack://linkedin-filter/./src/components/observeTitle.ts?");

/***/ }),

/***/ "./src/components/removeStaticAds.ts":
/*!*******************************************!*\
  !*** ./src/components/removeStaticAds.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeStaticAds\": () => /* binding */ removeStaticAds\n/* harmony export */ });\nvar removeStaticAds = function () {\r\n    var topBannerAd = document.querySelector('iframe.ad-banner');\r\n    topBannerAd.style.visibility = 'hidden';\r\n};\r\n\n\n//# sourceURL=webpack://linkedin-filter/./src/components/removeStaticAds.ts?");

/***/ }),

/***/ "./src/const/classesToHide.ts":
/*!************************************!*\
  !*** ./src/const/classesToHide.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"classesToHide\": () => /* binding */ classesToHide\n/* harmony export */ });\nvar classesToHide = [\r\n    '.feed-shared-update-v2__update-content-wrapper',\r\n    '.feed-shared-update-v2__description-wrapper',\r\n    '.feed-shared-update-v2__content',\r\n    '.social-details-social-activity',\r\n    '.Elevation-0dp',\r\n];\r\n\n\n//# sourceURL=webpack://linkedin-filter/./src/const/classesToHide.ts?");

/***/ }),

/***/ "./src/const/filterIconHtml.ts":
/*!*************************************!*\
  !*** ./src/const/filterIconHtml.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FILTER_ICON_HTML\": () => /* binding */ FILTER_ICON_HTML\n/* harmony export */ });\nvar FILTER_ICON_HTML = function (FILTER_CLASS, filterIconIdentifier, filterSvgClass) { return \"<div class=\\\"\" + FILTER_CLASS + \"\\\">\\n                    <svg \" + filterIconIdentifier + \" class=\\\"\" + filterSvgClass + \"\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" version=\\\"1.1\\\" id=\\\"Capa_1\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 512 512\\\" \\n                        style=\\\"enable-background:new 0 0 512 512;\\\" xml:space=\\\"preserve\\\"\\n                        >\\n                            <g>\\n                                <path d=\\\"M276,246c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C286,250.48,281.52,246,276,246z\\\"/>\\n                            </g>\\n                            <g>\\n                                <path d=\\\"M472,26H40C17.944,26,0,43.944,0,66c0,22.097,17.898,40,40,40h11.194L206,299.508V476c0,3.466,1.795,6.685,4.743,8.506    c2.948,1.823,6.63,1.987,9.729,0.438l80-40C303.86,443.25,306,439.788,306,436V299.508L460.806,106H472c22.056,0,40-17.944,40-40    C512,43.903,494.102,26,472,26z M286,429.82l-60,30V306h60V429.82z M291.193,286h-70.387l-144-180h358.388L291.193,286z M472,86    H40c-11.045,0-20-8.954-20-20c0-11.028,8.972-20,20-20h432c11.045,0,20,8.954,20,20C492,77.028,483.028,86,472,86z\\\"/>\\n                            </g>\\n                            <g>\\n                                <path d=\\\"M379.027,128.191c-4.312-3.451-10.606-2.75-14.056,1.562l-71.33,89.16c-3.45,4.313-2.75,10.606,1.562,14.056    c4.304,3.443,10.598,2.76,14.056-1.562l71.33-89.16C384.039,137.934,383.34,131.642,379.027,128.191z\\\"/>\\n                            </g>\\n                        </svg>\\n                    </div>\"; };\r\n\n\n//# sourceURL=webpack://linkedin-filter/./src/const/filterIconHtml.ts?");

/***/ }),

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FILTER_CLASS\": () => /* binding */ FILTER_CLASS,\n/* harmony export */   \"filterIconIdentifier\": () => /* binding */ filterIconIdentifier,\n/* harmony export */   \"filterSvgClass\": () => /* binding */ filterSvgClass,\n/* harmony export */   \"DEBUG_MODE\": () => /* binding */ DEBUG_MODE\n/* harmony export */ });\n/* harmony import */ var _utils_getPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getPosition */ \"./src/utils/getPosition.ts\");\n/* harmony import */ var _utils_getParentEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getParentEl */ \"./src/utils/getParentEl.ts\");\n/* harmony import */ var _const_classesToHide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const/classesToHide */ \"./src/const/classesToHide.ts\");\n/* harmony import */ var _const_filterIconHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const/filterIconHtml */ \"./src/const/filterIconHtml.ts\");\n/* harmony import */ var _components_observeTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/observeTitle */ \"./src/components/observeTitle.ts\");\n/* harmony import */ var _components_removeStaticAds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/removeStaticAds */ \"./src/components/removeStaticAds.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n/// for id extraction\r\nvar ID_SEPARATOR = ':';\r\nvar ID_SEPARATOR_INDEX = 3;\r\nvar ID_SEPARATOR_INDEX_AGGREGATE = 5;\r\nvar RERUN_ON_HIDES = 3;\r\nvar hideClickCounter = 0;\r\nvar FILTER_CLASS = 'filter-ad';\r\nvar filterIconIdentifier = \"filtericonzzz\";\r\nvar filterSvgClass = 'filterSvg';\r\nvar LISTENER_ADDED_CLASS = 'listenerAdded';\r\nvar DEBUG_MODE = false;\r\n//for filter icon\r\nwindow.onload = function () {\r\n    //onload + 2 seconds to construct page\r\n    setTimeout(function () { return init(); }, 2000);\r\n    addCss();\r\n    (0,_components_observeTitle__WEBPACK_IMPORTED_MODULE_4__.observeTitle)();\r\n};\r\nvar init = function () {\r\n    console.log('Page is fully loaded');\r\n    var body = document.querySelector('body');\r\n    var pageHeight = body.scrollHeight;\r\n    hidePromotedPosts();\r\n    insertFilter();\r\n    setTimeout(function () { return hideOnLoadOrScroll(); }, 1000);\r\n    setTimeout(function () { return insertFilter(); }, 2000);\r\n    (0,_components_removeStaticAds__WEBPACK_IMPORTED_MODULE_5__.removeStaticAds)();\r\n    window.addEventListener('scroll', function () {\r\n        if (body.scrollHeight > pageHeight) {\r\n            pageHeight = body.scrollHeight;\r\n            hidePromotedPosts();\r\n            insertFilter();\r\n            hideOnLoadOrScroll();\r\n        }\r\n    });\r\n};\r\nvar addCss = function () {\r\n    document.head.insertAdjacentHTML('beforeend', \"<style>\\n            .\" + FILTER_CLASS + \"{\\n                border-radius: 50px;\\n                position: absolute;\\n                right: 46px;\\n                top: 4px;\\n                z-index: 1;\\n                cursor: pointer;\\n                display: flex;\\n                align-items: center;\\n                justify-content: center;\\n                height: 3.2rem;\\n                width: 3.2rem;\\n            }\\n        \\n            .\" + FILTER_CLASS + \":hover{\\n                background-color: rgb(235,235,235);\\n            }\\n            .\" + FILTER_CLASS + \":active{\\n                background-color: #D9D9D9;\\n            }\\n\\n\\n            .\" + filterSvgClass + \"{\\n                z-index: 0;\\n                height: 20px;\\n                fill: #797979;\\n            }\\n            \\n            </style>\");\r\n};\r\nvar hidePromotedPosts = function () {\r\n    //choosing page elements to hide\r\n    var arr = __spreadArrays(Array.from(document.querySelectorAll('span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light'))); // get all the divs in an array\r\n    arr = arr.filter(function (item) { return item.innerText == 'Promoted'; });\r\n    arr.forEach(function (promoted) {\r\n        promoted.innerText = 'Hidden by LinkedIn Plus';\r\n        promoted.parentNode.parentNode.parentNode\r\n            .parentNode.style.display = 'none';\r\n    });\r\n    arr.length && console.log(arr.length + \" promoted posts hidden\");\r\n};\r\nvar insertFilter = function () {\r\n    // insert filter icon\r\n    var optionIcons = __spreadArrays(Array.from(document.querySelectorAll('li-icon[type=\"ellipsis-horizontal-icon\"][aria-label=\"Open control menu\"]:not(.filterAdded)')));\r\n    optionIcons.forEach(function (optionIcon) {\r\n        optionIcon.classList.add('filterAdded'); //add a class so it won't be re-added to the array\r\n        //inserted high, in order not to disappear when hiding children\r\n        optionIcon.parentNode.parentNode.parentNode\r\n            .parentNode.insertAdjacentHTML('beforebegin', (0,_const_filterIconHtml__WEBPACK_IMPORTED_MODULE_3__.FILTER_ICON_HTML)(FILTER_CLASS, filterIconIdentifier, filterSvgClass));\r\n    });\r\n    //insert listener on filter icon\r\n    var filterIcons = __spreadArrays(Array.from(document.querySelectorAll(\".\" + FILTER_CLASS + \":not(.\" + LISTENER_ADDED_CLASS + \")\")));\r\n    filterIcons.forEach(function (filterIcon) {\r\n        filterIcon.classList.add(LISTENER_ADDED_CLASS);\r\n        filterIcon.addEventListener('click', function (e) {\r\n            e.stopPropagation();\r\n            handleFilterClick(e.target);\r\n        });\r\n    });\r\n};\r\nvar handleFilterClick = function (eventTarget) {\r\n    // to avoid propagation from other elements\r\n    if (eventTarget.hasAttribute(filterIconIdentifier) ||\r\n        eventTarget.parentElement.parentElement.hasAttribute(filterIconIdentifier) || //in case icon inside path was clicked\r\n        eventTarget.classList.contains(FILTER_CLASS)) {\r\n        var parent_1 = (0,_utils_getParentEl__WEBPACK_IMPORTED_MODULE_1__.getParentEl)(eventTarget);\r\n        DEBUG_MODE &&\r\n            console.log(\"Got parent element:\\n      \" + parent_1);\r\n        var id = getId(parent_1);\r\n        var idIndexOnMemory = isOnMemory(id);\r\n        if (idIndexOnMemory === -1) {\r\n            DEBUG_MODE && console.log(\"Ad ID on memory: NO\");\r\n            hideByParentElement(parent_1);\r\n            hideClickCounter++;\r\n        }\r\n        else {\r\n            DEBUG_MODE && console.log(\"Ad ID on memory: YES\");\r\n            unhidePost(id);\r\n            hideClickCounter--;\r\n        }\r\n        saveOrRemoveIdFromMemory(id, idIndexOnMemory);\r\n        if (hideClickCounter == RERUN_ON_HIDES) {\r\n            insertFilter();\r\n            hidePromotedPosts();\r\n            hideClickCounter = 0;\r\n        }\r\n    }\r\n    else {\r\n        // console.log(`target doesn't have att '${filterIconIdentifier}'`);\r\n        // console.log(e.target);\r\n    }\r\n};\r\nvar hideByParentElement = function (el) {\r\n    //el = data-id=\"urn:li:activity...\r\n    if (el.hasAttribute('data-id')) {\r\n        var success = hideAllChildren(el);\r\n        if (success) {\r\n            el.classList.add('hiddenPost');\r\n        }\r\n    }\r\n    else {\r\n        console.log(\"ERROR. trying to hide parent with wront el.\");\r\n    }\r\n};\r\nvar hideAllChildren = function (el) {\r\n    DEBUG_MODE && console.log('Trying to hide ads CHILD ELEMENTS');\r\n    var dataUrnEl = getDataUrnEl(el);\r\n    if (dataUrnEl) {\r\n        var childrenToHide = el.querySelectorAll(_const_classesToHide__WEBPACK_IMPORTED_MODULE_2__.classesToHide.toString());\r\n        childrenToHide.forEach(function (child) {\r\n            child.style.display = 'none';\r\n        });\r\n        return true;\r\n    }\r\n    else {\r\n        return false;\r\n    }\r\n};\r\nvar getDataUrnEl = function (el) {\r\n    if (DEBUG_MODE) {\r\n        console.log('Trying to get data-urn element, from the following:');\r\n        console.log(el);\r\n    }\r\n    var dataUrnEl = el.querySelector('[data-urn]');\r\n    if (DEBUG_MODE) {\r\n        console.log('Found the following data-urn element:');\r\n        console.log(dataUrnEl);\r\n    }\r\n    return dataUrnEl;\r\n};\r\nvar unhidePost = function (id) {\r\n    // get main parent element\r\n    var el = document.querySelector(\"[data-id*=\\\"urn:li:activity:\" + id + \"\\\"]\");\r\n    if (el) {\r\n        el.classList.remove('hiddenPost');\r\n        // unhide children\r\n        var dataUrnEl = getDataUrnEl(el);\r\n        var childrenToUnhide = el.querySelectorAll(_const_classesToHide__WEBPACK_IMPORTED_MODULE_2__.classesToHide.toString());\r\n        childrenToUnhide.forEach(function (child) {\r\n            child.removeAttribute('style');\r\n        });\r\n    }\r\n};\r\nvar readFromLocalStorage = function () {\r\n    // Retrieve your data from locaStorage (get from localStorage or create new Obj)\r\n    var memoryData = localStorage.getItem('filtered')\r\n        ? JSON.parse(localStorage.getItem('filtered'))\r\n        : [];\r\n    return __spreadArrays(memoryData);\r\n};\r\nvar isOnMemory = function (id) {\r\n    var memory = readFromLocalStorage();\r\n    var index = -1;\r\n    memory.forEach(function (ad, i) {\r\n        if (ad.id === id)\r\n            index = i;\r\n    });\r\n    return index;\r\n};\r\nvar saveOrRemoveIdFromMemory = function (id, idIndexOnMemory) {\r\n    var memory = { filtered: readFromLocalStorage() };\r\n    if (id != null) {\r\n        if (idIndexOnMemory === -1) {\r\n            memory.filtered.push({ id: id, date: Date.now() });\r\n            console.log(\"'\" + id + \"' ADDED\");\r\n        }\r\n        else {\r\n            memory.filtered.splice(idIndexOnMemory, 1);\r\n            console.log(\"'\" + id + \"' REMOVED\");\r\n        }\r\n    }\r\n    localStorage.setItem('filtered', JSON.stringify(memory.filtered));\r\n};\r\n// Hide on first load id's from localStorage\r\nvar hideOnLoadOrScroll = function () {\r\n    //read again from memory\r\n    var memory = { filtered: readFromLocalStorage() };\r\n    DEBUG_MODE &&\r\n        console.log(\"filtering saved posts by id: \" + memory.filtered.length + \" posts\");\r\n    memory.filtered.forEach(function (_a) {\r\n        var id = _a.id;\r\n        var el = document.querySelector(\r\n        // :not(.hiddenPost) - in order not to double hide posts\r\n        \"[data-id=\\\"urn:li:activity:\" + id + \"\\\"]:not(.hiddenPost)\");\r\n        if (el) {\r\n            console.log(\"ID found. hiding ID:\" + id);\r\n            hideByParentElement(el);\r\n        }\r\n    });\r\n};\r\nvar getId = function (el) {\r\n    //el = data-id=\"urn:li:activity...\r\n    var idText = el.getAttribute('data-id');\r\n    DEBUG_MODE && (console.log('Trying to get id from:'), console.log(idText));\r\n    var id;\r\n    //check if id aggregated\r\n    if (idText.includes('aggregate')) {\r\n        DEBUG_MODE && console.log('id is aggregated');\r\n        var countOfColon = (idText.match(/:/g) || []).length;\r\n        var position = (0,_utils_getPosition__WEBPACK_IMPORTED_MODULE_0__.getPosition)(idText, ID_SEPARATOR, countOfColon);\r\n        id = __spreadArrays(Array.from(idText)).slice(position + 1, idText.length - 2) //without starting colon, and without ending )\r\n            .join('');\r\n    }\r\n    else {\r\n        //not aggregated\r\n        var position = (0,_utils_getPosition__WEBPACK_IMPORTED_MODULE_0__.getPosition)(idText, ID_SEPARATOR, ID_SEPARATOR_INDEX);\r\n        id = __spreadArrays(Array.from(idText)).slice(position + 1).join('');\r\n    }\r\n    DEBUG_MODE && console.log(\"ID returned from getId: \" + id);\r\n    return id;\r\n};\r\n\n\n//# sourceURL=webpack://linkedin-filter/./src/popup.ts?");

/***/ }),

/***/ "./src/utils/getParentEl.ts":
/*!**********************************!*\
  !*** ./src/utils/getParentEl.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getParentEl\": () => /* binding */ getParentEl\n/* harmony export */ });\nvar getParentEl = function (el) {\r\n    var MAX_ELEMENTS = 10;\r\n    // let counter = 0;\r\n    while (!el.hasAttribute('data-id')) {\r\n        el = el.parentElement;\r\n    }\r\n    return el;\r\n};\r\n\n\n//# sourceURL=webpack://linkedin-filter/./src/utils/getParentEl.ts?");

/***/ }),

/***/ "./src/utils/getPosition.ts":
/*!**********************************!*\
  !*** ./src/utils/getPosition.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosition\": () => /* binding */ getPosition\n/* harmony export */ });\nvar getPosition = function (str, subString, index) {\r\n    return str.split(subString, index).join(subString).length;\r\n};\r\n\n\n//# sourceURL=webpack://linkedin-filter/./src/utils/getPosition.ts?");

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