import { observeTitle } from './components/observeTitle';
import { removeStaticAds } from './components/removeStaticAds';
import { addCss } from './components/add-css';
import { waitForSelector } from './utils/wait-for-selector';
import { filterType, PageFilter } from './pages';
import { PAGES } from './presets';
import { getLogger } from './components/logger';

const log = getLogger(['main.ts']);

let pageDriver: PageFilter | undefined;

window.onload = () => {
    observeTitle();

    pageDriver = PageFilter.findPageType();
    if (pageDriver) {
        init();
    }
};

chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === 'enteredFeed') {
        log('Enter feed from another section in linkedIn');
        init();
    }
});

const init = () => {
    addCss();
    waitForSelector(PAGES[filterType].firstLoadSelector, observePage);
    removeStaticAds();
    pageDriver?.processPage();
};

const observePage = () => {
    const target = document.querySelector(PAGES[filterType].firstLoadSelector);
    if (!target) {
        log('Observable target not found');
        return;
    }

    const mainFeedObserver = new MutationObserver(() => {
        log('Mutation observed');
        pageDriver?.processPage();
    });
    const config = { subtree: true, characterData: true, childList: true };
    mainFeedObserver.observe(target, config);
};
