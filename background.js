/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url && changeInfo.url.includes('linkedin.com/feed')) {
        chrome.tabs.sendMessage(tabId, {
            message: 'enteredFeed',
            url: changeInfo.url,
        });
    }
});

/******/ })()
;
//# sourceMappingURL=background.js.map