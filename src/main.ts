import { observeTitle } from './components/observeTitle';
import { removeStaticAds } from './components/removeStaticAds';
import { debounce, getParentEl, getPosition, waitForSelector } from './utils';
import { readFromLocalStorage, toggleFromStorage } from './components/local-storage';
import { addCss } from './components/add-css';
import { log } from './components/logger';
import { insertFilterIcon } from './components/insert-filter-icon';
import { hideByParentElement } from './posts/hide-by-parent-el';
import { HIDDEN_POST_FLAG } from './const';
import { hidePromotedPosts } from './posts/hide-promoted-posts';

const MAIN_FEED_SELECTOR = 'main#main';

window.onload = () => {
    observeTitle();

    if (window.location.href.includes('linkedin.com/feed')) {
        log('First entry to feed');
        init();
    }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'enteredFeed') {
        log('Enter feed from another section in linkedIn');
        init();
    }
});

const init = () => {
    addCss();
    waitForSelector(MAIN_FEED_SELECTOR, observeMainFeed);
    removeStaticAds();
    processNewPosts();
};

const observeMainFeed = () => {
    const target = document.querySelector(MAIN_FEED_SELECTOR) as HTMLDivElement;
    const mainFeedObserver = new MutationObserver((data) => {
        log('Mutation observed');
        debounceProcessNewPosts();
    });
    const config = { subtree: true, characterData: true, childList: true };
    mainFeedObserver.observe(target, config);
};

const processNewPosts = () => {
    log('processNewPosts');
    hideSavedPosts();
    hidePromotedPosts();
    insertFilterIcon();
};

const debounceProcessNewPosts = debounce(processNewPosts, 400);

const hideSavedPosts = () => {
    const storage = readFromLocalStorage();

    log(`Filtering saved posts by id: ${storage.size} posts`);

    for (const id of Array.from(storage)) {
        const el = document.querySelector(
            // :not(.hiddenPost) - in order not to double hide posts
            `[data-id="urn:li:activity:${id}"]:not(.${HIDDEN_POST_FLAG})`
        );
        if (el) {
            log(`ID found. hiding ID:${id}`);
            hideByParentElement(el);
        }
    }
};
