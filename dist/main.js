/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/observeTitle.ts":
/*!****************************************!*\
  !*** ./src/components/observeTitle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeTitle": () => (/* binding */ observeTitle)
/* harmony export */ });
var observeTitle = function () {
    // select the target node
    var target = document.querySelector('title');
    // create an observer instance
    var titleObserver = new MutationObserver(function (mutations) {
        var titleText = mutations[0].target
            .innerText;
        if (titleText.includes('(')) {
            console.log('page title hidden');
            target.innerText = titleText.slice(4);
        }
    });
    // configuration of the observer:
    var config = { subtree: true, characterData: true, childList: true };
    // pass in the target node, as well as the observer options
    titleObserver.observe(target, config);
};


/***/ }),

/***/ "./src/components/removeStaticAds.ts":
/*!*******************************************!*\
  !*** ./src/components/removeStaticAds.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeStaticAds": () => (/* binding */ removeStaticAds)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var removeStaticAds = function () {
    var selectors = [
        'section.ad-banner-container.is-header-zone',
        'section.ad-banner-container.artdeco-card',
        'div > div > aside > div.scaffold-layout__sticky.scaffold-layout__sticky--is-active.scaffold-layout__sticky--lg > div > section > iframe',
    ];
    var _loop_1 = function (selector) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.waitForSelector)(selector, function () {
            var element = document.querySelector(selector);
            element.style.display = 'none';
        }, 10, 1000);
    };
    for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
        var selector = selectors_1[_i];
        _loop_1(selector);
    }
};


/***/ }),

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterIconHtml": () => (/* binding */ filterIconHtml),
/* harmony export */   "classesToHide": () => (/* binding */ classesToHide)
/* harmony export */ });
var filterIconHtml = function (FILTER_CLASS, filterIconIdentifier, filterSvgClass) { return "<div class=\"" + FILTER_CLASS + "\">\n                    <svg " + filterIconIdentifier + " class=\"" + filterSvgClass + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" \n                        style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"\n                        >\n                            <g>\n                                <path d=\"M276,246c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C286,250.48,281.52,246,276,246z\"/>\n                            </g>\n                            <g>\n                                <path d=\"M472,26H40C17.944,26,0,43.944,0,66c0,22.097,17.898,40,40,40h11.194L206,299.508V476c0,3.466,1.795,6.685,4.743,8.506    c2.948,1.823,6.63,1.987,9.729,0.438l80-40C303.86,443.25,306,439.788,306,436V299.508L460.806,106H472c22.056,0,40-17.944,40-40    C512,43.903,494.102,26,472,26z M286,429.82l-60,30V306h60V429.82z M291.193,286h-70.387l-144-180h358.388L291.193,286z M472,86    H40c-11.045,0-20-8.954-20-20c0-11.028,8.972-20,20-20h432c11.045,0,20,8.954,20,20C492,77.028,483.028,86,472,86z\"/>\n                            </g>\n                            <g>\n                                <path d=\"M379.027,128.191c-4.312-3.451-10.606-2.75-14.056,1.562l-71.33,89.16c-3.45,4.313-2.75,10.606,1.562,14.056    c4.304,3.443,10.598,2.76,14.056-1.562l71.33-89.16C384.039,137.934,383.34,131.642,379.027,128.191z\"/>\n                            </g>\n                        </svg>\n                    </div>"; };
var classesToHide = [
    '.feed-shared-update-v2__update-content-wrapper',
    '.feed-shared-update-v2__description-wrapper',
    '.feed-shared-update-v2__content',
    '.social-details-social-activity',
    '.Elevation-0dp',
    '.ad-banner-container',
    '.feed-shared-document__container',
];


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "getPosition": () => (/* binding */ getPosition),
/* harmony export */   "getParentEl": () => (/* binding */ getParentEl),
/* harmony export */   "waitForSelector": () => (/* binding */ waitForSelector)
/* harmony export */ });
var debounce = function (callback, waitFor) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result;
        timeout && clearTimeout(timeout);
        timeout = setTimeout(function () {
            result = callback.apply(void 0, args);
        }, waitFor);
        return result;
    };
};
var getPosition = function (str, subString, index) {
    return str.split(subString, index).join(subString).length;
};
var getParentEl = function (el) {
    var MAX_ELEMENTS = 10;
    // let counter = 0;
    while (!el.hasAttribute('data-id')) {
        el = el.parentElement;
    }
    return el;
};
var waitForSelector = function (selector, callback, limit, delay) {
    if (limit === void 0) { limit = 30; }
    if (delay === void 0) { delay = 300; }
    if (limit === 0)
        return;
    if (document.querySelector(selector)) {
        callback();
    }
    else {
        setTimeout(function () {
            waitForSelector(selector, callback, limit--);
        }, delay);
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID_SEPARATOR": () => (/* binding */ ID_SEPARATOR),
/* harmony export */   "ID_SEPARATOR_INDEX": () => (/* binding */ ID_SEPARATOR_INDEX),
/* harmony export */   "ID_SEPARATOR_INDEX_AGGREGATE": () => (/* binding */ ID_SEPARATOR_INDEX_AGGREGATE),
/* harmony export */   "filterMainClass": () => (/* binding */ filterMainClass),
/* harmony export */   "filterIconIdentifier": () => (/* binding */ filterIconIdentifier),
/* harmony export */   "filterSvgClass": () => (/* binding */ filterSvgClass),
/* harmony export */   "LISTENER_ADDED_CLASS": () => (/* binding */ LISTENER_ADDED_CLASS),
/* harmony export */   "MAIN_FEED_SELECTOR": () => (/* binding */ MAIN_FEED_SELECTOR),
/* harmony export */   "DEBUG_MODE": () => (/* binding */ DEBUG_MODE)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/const.ts");
/* harmony import */ var _components_observeTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/observeTitle */ "./src/components/observeTitle.ts");
/* harmony import */ var _components_removeStaticAds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/removeStaticAds */ "./src/components/removeStaticAds.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};





/// for id extraction
var ID_SEPARATOR = ':';
var ID_SEPARATOR_INDEX = 3;
var ID_SEPARATOR_INDEX_AGGREGATE = 5;
var filterMainClass = 'filter-ad';
var filterIconIdentifier = "filter-icon-zzz";
var filterSvgClass = 'filterSvg';
var LISTENER_ADDED_CLASS = 'listenerAdded';
var MAIN_FEED_SELECTOR = 'main#main';
var DEBUG_MODE = false;
window.onload = function () {
    (0,_components_observeTitle__WEBPACK_IMPORTED_MODULE_1__.observeTitle)();
    if (window.location.href.includes('linkedin.com/feed')) {
        console.log('First entry to feed');
        init();
    }
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'enteredFeed') {
        console.log('Enter feed from another section in linkedIn');
        init();
    }
});
var init = function () {
    addCss();
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.waitForSelector)(MAIN_FEED_SELECTOR, observeMainFeed);
    (0,_components_removeStaticAds__WEBPACK_IMPORTED_MODULE_2__.removeStaticAds)();
};
var observeMainFeed = function () {
    var target = document.querySelector(MAIN_FEED_SELECTOR);
    var mainFeedObserver = new MutationObserver(function () {
        DEBUG_MODE && console.log('change observed');
        debounceProcessNewPosts();
    });
    var config = { subtree: true, characterData: true, childList: true };
    mainFeedObserver.observe(target, config);
};
var processNewPosts = function () {
    DEBUG_MODE && console.log('entered function: processNewPosts');
    hideOnLoadOrScroll();
    hidePromotedPosts();
    insertFilter();
};
var debounceProcessNewPosts = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.debounce)(processNewPosts, 400);
var addCss = function () {
    document.head.insertAdjacentHTML('beforeend', ("<style>\n            ." + filterMainClass + "{\n                border-radius: 50px;\n                position: absolute;\n                right: 46px;\n                top: 4px;\n                z-index: 1;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                height: 3.2rem;\n                width: 3.2rem;\n            }\n        \n            ." + filterMainClass + ":hover{\n                background-color: rgb(235,235,235);\n            }\n            ." + filterMainClass + ":active{\n                background-color: #D9D9D9;\n            }\n\n            ." + filterSvgClass + "{\n                z-index: 0;\n                height: 20px;\n                fill: #797979;\n            }\n            </style>").trim());
};
var hidePromotedPosts = function () {
    //choosing page elements to hide
    var arr = __spreadArray([], Array.from(document.querySelectorAll('span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light'))); // get all the divs in an array
    arr = arr.filter(function (item) { return item.innerText == 'Promoted'; });
    arr.forEach(function (promoted) {
        promoted.innerText = 'Hidden by LinkedIn Plus';
        promoted.parentNode.parentNode.parentNode
            .parentNode.style.display = 'none';
    });
    arr.length && console.log(arr.length + " promoted posts hidden");
};
var insertFilter = function () {
    // insert filter icon
    var optionIcons = __spreadArray([], Array.from(document.querySelectorAll('li-icon[type="ellipsis-horizontal-icon"][aria-label="Open control menu"]:not(.filterAdded)')));
    optionIcons.forEach(function (optionIcon) {
        optionIcon.classList.add('filterAdded'); //add a class so it won't be re-added to the array
        //inserted high, in order not to disappear when hiding children
        optionIcon.parentNode.parentNode.parentNode
            .parentNode.insertAdjacentHTML('beforebegin', (0,_const__WEBPACK_IMPORTED_MODULE_0__.filterIconHtml)(filterMainClass, filterIconIdentifier, filterSvgClass));
    });
    //insert listener on filter icon
    var filterIcons = __spreadArray([], Array.from(document.querySelectorAll("." + filterMainClass + ":not(." + LISTENER_ADDED_CLASS + ")")));
    filterIcons.forEach(function (filterIcon) {
        filterIcon.classList.add(LISTENER_ADDED_CLASS);
        filterIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            handleFilterClick(e.target);
        });
    });
};
var handleFilterClick = function (eventTarget) {
    // to avoid propagation from other elements
    if (eventTarget.hasAttribute(filterIconIdentifier) ||
        eventTarget.parentElement.parentElement.hasAttribute(filterIconIdentifier) || //in case icon inside path was clicked
        eventTarget.classList.contains(filterMainClass)) {
        var parent_1 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getParentEl)(eventTarget);
        DEBUG_MODE &&
            console.log("Got parent element:\n      " + parent_1);
        var id = getId(parent_1);
        var idIndexOnMemory = isOnMemory(id);
        if (idIndexOnMemory === -1) {
            DEBUG_MODE && console.log("Ad ID on memory: NO");
            hideByParentElement(parent_1);
        }
        else {
            DEBUG_MODE && console.log("Ad ID on memory: YES");
            unhidePost(id);
        }
        saveOrRemoveIdFromMemory(id, idIndexOnMemory);
    }
    else {
        // console.log(`target doesn't have att '${filterIconIdentifier}'`);
        // console.log(e.target);
    }
};
var hideByParentElement = function (el) {
    //el = data-id="urn:li:activity...
    if (el.hasAttribute('data-id')) {
        var success = hideAllChildren(el);
        if (success) {
            el.classList.add('hiddenPost');
        }
    }
    else {
        console.log("ERROR. trying to hide parent with wrong el.");
    }
};
var hideAllChildren = function (el) {
    DEBUG_MODE && console.log('Trying to hide ads CHILD ELEMENTS');
    var dataUrnEl = getDataUrnEl(el);
    if (dataUrnEl) {
        var childrenToHide = el.querySelectorAll(_const__WEBPACK_IMPORTED_MODULE_0__.classesToHide.toString());
        childrenToHide.forEach(function (child) {
            child.style.display = 'none';
        });
        return true;
    }
    else {
        return false;
    }
};
var getDataUrnEl = function (el) {
    if (DEBUG_MODE) {
        console.log('Trying to get data-urn element, from the following:');
        console.log(el);
    }
    var dataUrnEl = el.querySelector('[data-urn]');
    if (DEBUG_MODE) {
        console.log('Found the following data-urn element:');
        console.log(dataUrnEl);
    }
    return dataUrnEl;
};
var unhidePost = function (id) {
    // get main parent element
    var el = document.querySelector("[data-id*=\"urn:li:activity:" + id + "\"]");
    if (el) {
        el.classList.remove('hiddenPost');
        // unhide children
        var dataUrnEl = getDataUrnEl(el);
        var childrenToUnhide = el.querySelectorAll(_const__WEBPACK_IMPORTED_MODULE_0__.classesToHide.toString());
        childrenToUnhide.forEach(function (child) {
            child.removeAttribute('style');
        });
    }
};
var readFromLocalStorage = function () {
    // Retrieve your data from locaStorage (get from localStorage or create new Obj)
    var memoryData = localStorage.getItem('filtered')
        ? JSON.parse(localStorage.getItem('filtered'))
        : [];
    return __spreadArray([], memoryData);
};
var isOnMemory = function (id) {
    var memory = readFromLocalStorage();
    var index = -1;
    memory.forEach(function (ad, i) {
        if (ad.id === id)
            index = i;
    });
    return index;
};
var saveOrRemoveIdFromMemory = function (id, idIndexOnMemory) {
    var memory = { filtered: readFromLocalStorage() };
    if (id != null) {
        if (idIndexOnMemory === -1) {
            memory.filtered.push({ id: id, date: Date.now() });
            console.log("'" + id + "' ADDED");
        }
        else {
            memory.filtered.splice(idIndexOnMemory, 1);
            console.log("'" + id + "' REMOVED");
        }
    }
    localStorage.setItem('filtered', JSON.stringify(memory.filtered));
};
// Hide on first load id's from localStorage
var hideOnLoadOrScroll = function () {
    //read again from memory
    var memory = { filtered: readFromLocalStorage() };
    DEBUG_MODE &&
        console.log("filtering saved posts by id: " + memory.filtered.length + " posts");
    memory.filtered.forEach(function (_a) {
        var id = _a.id;
        var el = document.querySelector(
        // :not(.hiddenPost) - in order not to double hide posts
        "[data-id=\"urn:li:activity:" + id + "\"]:not(.hiddenPost)");
        if (el) {
            console.log("ID found. hiding ID:" + id);
            hideByParentElement(el);
        }
    });
};
var getId = function (el) {
    //el = data-id="urn:li:activity...
    var idText = el.getAttribute('data-id');
    DEBUG_MODE && (console.log('Trying to get id from:'), console.log(idText));
    var id;
    //check if id aggregated
    if (idText.includes('aggregate')) {
        DEBUG_MODE && console.log('id is aggregated');
        var countOfColon = (idText.match(/:/g) || []).length;
        var position = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPosition)(idText, ID_SEPARATOR, countOfColon);
        id = __spreadArray([], Array.from(idText)).slice(position + 1, idText.length - 2) //without starting colon, and without ending )
            .join('');
    }
    else {
        //not aggregated
        var position = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPosition)(idText, ID_SEPARATOR, ID_SEPARATOR_INDEX);
        id = __spreadArray([], Array.from(idText)).slice(position + 1).join('');
    }
    DEBUG_MODE && console.log("ID returned from getId: " + id);
    return id;
};

})();

/******/ })()
;
//# sourceMappingURL=main.js.map